import { Injectable, computed, effect, signal, resource, runInInjectionContext, inject, Injector } from '@angular/core';
import { EMPTY_RESOURCE } from '@app/constants';
import { DEFAULT_DRAGON_LIMIT } from '@app/constants/launches';
import { environment } from 'environments/environment';
import { IRessource } from 'interfaces';
import { ISearchService } from 'interfaces';
import { ILaunch } from 'interfaces/launches';

@Injectable({ providedIn: 'root' })
export class LaunchesService implements ISearchService<ILaunch> {
  private injector = inject(Injector);

  constructor() {
    effect(() => {
      const queryText = this.searchQuery();
      const page = this.page();

      if (queryText.trim() !== '' || page !== 1) {
        this.searchLaunchResource.reload();
      }
    });
  }

  private launchesUrl = `${environment.apiUrl}/launches`;
  private searchQuery = signal('');
  private page = signal(1);

  allLaunchesResource = resource({
    loader: async (): Promise<ILaunch[]> =>
      (await fetch(`${this.launchesUrl}/`)).json(),
  });

  latestLauncheResource = resource({
    loader: async (): Promise<ILaunch> =>
      (await fetch(`${this.launchesUrl}/latest`)).json(),
  });


  nextLauncheResource = resource({
    loader: async (): Promise<ILaunch> =>
      (await fetch(`${this.launchesUrl}/next`)).json(),
  });

  pastLauncheResource = resource({
    loader: async (): Promise<ILaunch> =>
      (await fetch(`${this.launchesUrl}/past`)).json(),
  });

  upcomingLauncheRessouce = resource({
    loader: async (): Promise<ILaunch[]> =>
      (await fetch(`${this.launchesUrl}/upcoming`)).json(),
  });

  private requestParams = computed(() => ({
    queryText: this.searchQuery().trim(),
    page: this.page()
  }));

  searchLaunchResource = resource({
    loader: async (): Promise<IRessource<ILaunch>> => {
      const { queryText, page } = this.requestParams();

      if (!queryText) {
        return EMPTY_RESOURCE;
      }

      const res = await fetch(`${this.launchesUrl}/query`, {
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

      if (!res.ok) throw new Error('Erreur API launches');
      return await res.json();
    }
  });

  setSearchQuery(query: string): void {
    const trimmed = query.trim();
    if (trimmed === '') {
      this.searchQuery.set('');
      this.page.set(1);
      this.searchLaunchResource.set(EMPTY_RESOURCE);
      return;
    }

    if (this.searchQuery() !== trimmed) {
      this.searchQuery.set(trimmed);
      this.page.set(1);
    }

    this.searchLaunchResource.reload();
  }

  private launchDetailsCache = new Map<string, ReturnType<typeof resource>>();

  getLaunchDetailsResource(id: string) {
    if (this.launchDetailsCache.has(id)) {
      return this.launchDetailsCache.get(id)!;
    }

    const launchRessource = runInInjectionContext(this.injector, () => {
      return resource({
        loader: async (): Promise<ILaunch> => {
          const res = await fetch(`${this.launchesUrl}/${id}`);
          if (!res.ok) {
            throw new Error(`API Error : launch ${id} not found`);
          }
          return await res.json();
        }
      });
    });

    this.launchDetailsCache.set(id, launchRessource);
    return launchRessource;
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
    const result = this.searchLaunchResource.value();
    return result ? result.totalPages : 1;
  }

  get currentPage(): number {
    return this.page();
  }

  get resource() {
    return {
      value: () => this.searchLaunchResource.value() ?? null,
      isLoading: () => this.searchLaunchResource.isLoading(),
      error: () => this.searchLaunchResource.error(),
      set: (data: IRessource<ILaunch>) => this.searchLaunchResource.set(data),
      reload: () => this.searchLaunchResource.reload()
    };
  }
}
