import { Injectable, computed, effect, signal, resource, runInInjectionContext, inject, Injector } from '@angular/core';
import { EMPTY_RESOURCE } from '@app/constants';
import { DEFAULT_DRAGON_LIMIT } from '@app/constants/launches';
import { environment } from 'environments/environment';
import { IRessource } from 'interfaces';
import { ISearchService } from 'interfaces';
import { ILaunchPad } from 'interfaces/launch-pads';

@Injectable({ providedIn: 'root' })
export class LaunchPadsService implements ISearchService<ILaunchPad> {
  private injector = inject(Injector);

  constructor() {
    effect(() => {
      const queryText = this.searchQuery();
      const page = this.page();

      if (queryText.trim() !== '' || page !== 1) {
        this.searchLaunchPadsResource.reload();
      }
    });
  }

  private launchPadsUrl = `${environment.apiUrl}/launchpads`;
  private searchQuery = signal('');
  private page = signal(1);

  allLaunchPadsResource = resource({
    loader: async (): Promise<ILaunchPad[]> =>
      (await fetch(`${this.launchPadsUrl}/`)).json(),
  });

  private requestParams = computed(() => ({
    queryText: this.searchQuery().trim(),
    page: this.page()
  }));

  searchLaunchPadsResource = resource({
    loader: async (): Promise<IRessource<ILaunchPad>> => {
      const { queryText, page } = this.requestParams();

      if (!queryText) {
        return EMPTY_RESOURCE;
      }

      const res = await fetch(`${this.launchPadsUrl}/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: {
            $or: [
              { name: { $regex: queryText, $options: 'i' } },
              { details: { $regex: queryText, $options: 'i' } }
            ]
          },
          options: {
            limit: DEFAULT_DRAGON_LIMIT,
            page
          }
        })
      });

      if (!res.ok) throw new Error('Erreur API launch pads');
      return await res.json();
    }
  });

  setSearchQuery(query: string): void {
    const trimmed = query.trim();
    if (trimmed === '') {
      this.searchQuery.set('');
      this.page.set(1);
      this.searchLaunchPadsResource.set(EMPTY_RESOURCE);
      return;
    }

    if (this.searchQuery() !== trimmed) {
      this.searchQuery.set(trimmed);
      this.page.set(1);
    }

    this.searchLaunchPadsResource.reload();
  }

  private launchPadsDetailsCache = new Map<string, ReturnType<typeof resource>>();

  getLaunchPadDetailsResource(id: string) {
    if (this.launchPadsDetailsCache.has(id)) {
      return this.launchPadsDetailsCache.get(id)!;
    }

    const launchPadsRessource = runInInjectionContext(this.injector, () => {
      return resource({
        loader: async (): Promise<ILaunchPad> => {
          const res = await fetch(`${this.launchPadsUrl}/${id}`);
          if (!res.ok) {
            throw new Error(`API Error : launch pad ${id} not found`);
          }
          return await res.json();
        }
      });
    });

    this.launchPadsDetailsCache.set(id, launchPadsRessource);
    return launchPadsRessource;
  }

  nextPage() {
    this.page.set(this.page() + 1);
  }

  prevPage() {
    if (this.page() > 1) {
      this.page.set(this.page() - 1);
    }
  }

  currentSearchQuery(): string {
    return this.searchQuery();
  }

  get totalPages(): number {
    const result = this.searchLaunchPadsResource.value();
    return result ? result.totalPages : 1;
  }

  get currentPage(): number {
    return this.page();
  }

  get resource() {
    return {
      value: () => this.searchLaunchPadsResource.value() ?? null,
      isLoading: () => this.searchLaunchPadsResource.isLoading(),
      error: () => this.searchLaunchPadsResource.error(),
      set: (data: IRessource<ILaunchPad>) => this.searchLaunchPadsResource.set(data),
      reload: () => this.searchLaunchPadsResource.reload()
    };
  }
}
