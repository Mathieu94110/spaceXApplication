import { Injectable, computed, effect, signal, resource, runInInjectionContext, inject, Injector } from '@angular/core';
import { EMPTY_RESOURCE } from '@app/constants';
import { DEFAULT_RESSOURCE_LIMIT } from '@app/constants';
import { environment } from 'environments/environment';
import { ICapsule } from 'interfaces/capsules';
import { IRessource, ISearchService } from 'interfaces';


@Injectable({ providedIn: 'root' })
export class CapsulesService implements ISearchService<ICapsule> {
  private injector = inject(Injector);
  private capsulesUrl = `${environment.apiUrl}/capsules`;
  private searchQuery = signal('');
  private page = signal(1);

  constructor() {
    effect(() => {
      const queryText = this.searchQuery();
      const page = this.page();
      if (queryText.trim() !== '' || page !== 1) {
        this.searchCapsuleResource.reload();
      }
      // Prevents loading all resources when the page first loads
      else {
        this.searchCapsuleResource.set(EMPTY_RESOURCE);
      }
    });
  }

  allCapsulesResource = runInInjectionContext(this.injector, () =>
    resource({
      loader: async (): Promise<ICapsule[]> => {
        const res = await fetch(`${this.capsulesUrl}`);
        return res.json();
      }
    })
  );

  private capsuleDetailsCache = new Map<string, ReturnType<typeof resource>>();

  getCapsuleDetailsResource(id: string) {
    if (this.capsuleDetailsCache.has(id)) {
      return this.capsuleDetailsCache.get(id)!;
    }

    const capsuleResource = runInInjectionContext(this.injector, () => {
      return resource({
        loader: async (): Promise<ICapsule> => {
          const res = await fetch(`${this.capsulesUrl}/${id}`);
          if (!res.ok) {
            throw new Error(`API Error : capsule ${id} not found`);
          }
          return await res.json();
        }
      });
    });

    this.capsuleDetailsCache.set(id, capsuleResource);
    return capsuleResource;
  }

  private requestParams = computed(() => ({
    queryText: this.searchQuery().trim(),
    page: this.page(),
  }));

  searchCapsuleResource = runInInjectionContext(this.injector, () =>
    resource({
      loader: async (): Promise<IRessource<ICapsule>> => {
        const { queryText, page } = this.requestParams();
        const res = await fetch(`${this.capsulesUrl}/query`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            query: {
              $or: [
                { serial: { $regex: queryText, $options: 'i' } },
                { type: { $regex: queryText, $options: 'i' } },
              ]
            },
            options: {
              limit: DEFAULT_RESSOURCE_LIMIT,
              page,
            }
          })
        });

        if (!res.ok) {
          throw new Error('Erreur API capsules');
        }

        return await res.json();
      }
    })
  );  // Explicitly cast to Resource<IRessource<ICapsule>>

  setSearchQuery(query: string): void {
    const trimmed = query.trim();

    if (trimmed === '') {
      this.searchQuery.set('');
      this.page.set(1);
      this.searchCapsuleResource.set(EMPTY_RESOURCE);  // set can be called on resource itself
      return;
    }

    if (this.searchQuery() !== trimmed) {
      this.searchQuery.set(trimmed);
      this.page.set(1);
    }

    this.searchCapsuleResource.reload();
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
    const result = this.searchCapsuleResource.value();
    return result ? result.totalPages : 1;
  }

  get currentPage(): number {
    return this.page();
  }

  get resource() {
    return {
      value: () => this.searchCapsuleResource.value() ?? null,
      isLoading: () => this.searchCapsuleResource.isLoading(),
      error: () => this.searchCapsuleResource.error(),
      set: (data: IRessource<ICapsule>) => this.searchCapsuleResource.set(data),  // Adding set method
      reload: () => this.searchCapsuleResource.reload(),
    };
  }
}
