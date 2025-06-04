import { Injectable, computed, effect, signal, resource, runInInjectionContext, inject, Injector } from '@angular/core';
import { EMPTY_RESOURCE } from '@app/constants';
import { DEFAULT_DRAGON_LIMIT } from '@app/constants/dragons';
import { environment } from 'environments/environment';
import { IRessource, ISearchService } from 'interfaces';
import { ICrew } from 'interfaces/crew';

@Injectable({ providedIn: 'root' })
export class CrewService implements ISearchService<ICrew> {
  private injector = inject(Injector);

  constructor() {
    effect(() => {
      const queryText = this.searchQuery();
      const page = this.page();

      if (queryText.trim() !== '' || page !== 1) {
        this.searchCrewResource.reload();
      }
    });
  }

  private crewUrl = `${environment.apiUrl}/crew`;
  private searchQuery = signal('');
  private page = signal(1);

  allCrewResource = resource({
    loader: async (): Promise<ICrew[]> =>
      (await fetch(`${this.crewUrl}`)).json(),
  });

  private crewDetailsCache = new Map<string, ReturnType<typeof resource>>();

  getCrewDetailsResource(id: string) {
    if (this.crewDetailsCache.has(id)) {
      return this.crewDetailsCache.get(id)!;
    }

    const crewResource = runInInjectionContext(this.injector, () => {
      return resource({
        loader: async (): Promise<ICrew> => {
          const res = await fetch(`${this.crewUrl}/${id}`);
          if (!res.ok) {
            throw new Error(`API Error: crew ${id} not found`);
          }
          return await res.json();
        }
      });
    });

    this.crewDetailsCache.set(id, crewResource);
    return crewResource;
  }

  private requestParams = computed(() => ({
    queryText: this.searchQuery().trim(),
    page: this.page()
  }));

  searchCrewResource = resource({
    loader: async (): Promise<IRessource<ICrew>> => {
      const { queryText, page } = this.requestParams();

      const res = await fetch(`${this.crewUrl}/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: queryText
            ? {
              name: { $regex: queryText, $options: 'i' }
            }
            : {},
          options: {
            limit: DEFAULT_DRAGON_LIMIT,
            page
          }
        })
      });

      if (!res.ok) throw new Error('Erreur API crew');
      return await res.json();
    }
  });

  setSearchQuery(query: string): void {
    const trimmed = query.trim();

    if (trimmed === '') {
      this.searchQuery.set('');
      this.page.set(1);
      this.searchCrewResource.set(EMPTY_RESOURCE);
      return;
    }

    if (this.searchQuery() !== trimmed) {
      this.searchQuery.set(trimmed);
      this.page.set(1);
    }

    this.searchCrewResource.reload();
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
    const result = this.searchCrewResource.value();
    return result ? result.totalPages : 1;
  }

  get currentPage(): number {
    return this.page();
  }

  get resource() {
    return {
      value: () => this.searchCrewResource.value() ?? null,
      isLoading: () => this.searchCrewResource.isLoading(),
      error: () => this.searchCrewResource.error(),
      set: (data: IRessource<ICrew>) => this.searchCrewResource.set(data),
      reload: () => this.searchCrewResource.reload()
    };
  }
}
