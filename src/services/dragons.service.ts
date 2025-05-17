import { Injectable, computed, effect, signal, resource, runInInjectionContext, inject, Injector } from '@angular/core';
import { EMPTY_RESOURCE } from '@app/constants';
import { DEFAULT_DRAGON_LIMIT } from '@app/constants/dragons';
import { environment } from 'environments/environment';
import { IRessource, ISearchService } from 'interfaces';
import { IDragon } from 'interfaces/dragons';

@Injectable({ providedIn: 'root' })
export class DragonsService implements ISearchService<IDragon> {
  private injector = inject(Injector);
  constructor() {
    effect(() => {
      const queryText = this.searchQuery();
      const page = this.page();

      if (queryText.trim() !== '' || page !== 1) {
        this.searchDragonResource.reload();
      }
    });
  }

  private dragonsUrl = `${environment.apiUrl}/dragons`;
  private searchQuery = signal('');
  private page = signal(1);

  allDragonsResource = resource({
    loader: async (): Promise<IDragon[]> =>
      (await fetch(`${this.dragonsUrl}`)).json(),
  });

  private capsuleDetailsCache = new Map<string, ReturnType<typeof resource>>();

  getDragonDetailsResource(id: string) {
    if (this.capsuleDetailsCache.has(id)) {
      return this.capsuleDetailsCache.get(id)!;
    }

    const dragonResource = runInInjectionContext(this.injector, () => {
      return resource({
        loader: async (): Promise<IDragon> => {
          const res = await fetch(`${this.dragonsUrl}/${id}`);
          if (!res.ok) {
            throw new Error(`API Error : dragon ${id} not found`);
          }
          return await res.json();
        }
      });
    });

    this.capsuleDetailsCache.set(id, dragonResource);
    return dragonResource;
  }

  private requestParams = computed(() => ({
    queryText: this.searchQuery().trim(),
    page: this.page()
  }));

  searchDragonResource = resource({
    loader: async (): Promise<IRessource<IDragon>> => {
      const { queryText, page } = this.requestParams();

      if (!queryText) {
        return EMPTY_RESOURCE;
      }

      const res = await fetch(`${this.dragonsUrl}/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: {
            $or: [
              { name: { $regex: queryText, $options: 'i' } },
              { type: { $regex: queryText, $options: 'i' } },
              { description: { $regex: queryText, $options: 'i' } }
            ]
          },
          options: {
            limit: DEFAULT_DRAGON_LIMIT,
            page
          }
        })
      });

      if (!res.ok) throw new Error('Erreur API dragons');
      return await res.json();
    }
  });

  setSearchQuery(query: string): void {
    const trimmed = query.trim();

    if (trimmed === '') {
      this.searchQuery.set('');
      this.page.set(1);
      this.searchDragonResource.set(EMPTY_RESOURCE);
      return;
    }

    if (this.searchQuery() !== trimmed) {
      this.searchQuery.set(trimmed);
      this.page.set(1);
    }

    this.searchDragonResource.reload();
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
    const result = this.searchDragonResource.value();
    return result ? result.totalPages : 1;
  }

  get currentPage(): number {
    return this.page();
  }

  get resource() {
    return {
      value: () => this.searchDragonResource.value() ?? null,
      isLoading: () => this.searchDragonResource.isLoading(),
      error: () => this.searchDragonResource.error(),
      set: (data: IRessource<IDragon>) => this.searchDragonResource.set(data),
      reload: () => this.searchDragonResource.reload()
    };
  }
}
