import { Injectable, computed, effect, signal, resource } from '@angular/core';
import { EMPTY_RESOURCE } from '@app/constants';
import { DEFAULT_CAPSULE_LIMIT } from '@app/constants/capsules';
import { environment } from 'environments/environment';
import { ICapsule } from 'interfaces/capsules';
import { IRessource } from 'interfaces';
import { ISearchService } from 'interfaces';

@Injectable({ providedIn: 'root' })
export class CapsulesService implements ISearchService<ICapsule> {
  constructor() {
    effect(() => {
      const queryText = this.searchQuery();
      const page = this.page();
      if (queryText.trim() !== '' || page !== 1) {
        this.searchCapsuleResource.reload();
      }
    });
  }

  private capsulesUrl = `${environment.apiUrl}/capsules`;
  private searchQuery = signal('');
  private page = signal(1);

  allCapsulesResource = resource({
    loader: async (): Promise<ICapsule[]> =>
      (await fetch(`${this.capsulesUrl}`)).json(),
  });

  private requestParams = computed(() => ({
    queryText: this.searchQuery().trim(),
    page: this.page(),
  }));

  searchCapsuleResource = resource({
    loader: async (): Promise<IRessource<ICapsule>> => {
      const { queryText, page } = this.requestParams();

      if (!queryText) {
        return EMPTY_RESOURCE;
      }

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
            limit: DEFAULT_CAPSULE_LIMIT,
            page,
          }
        })
      });

      if (!res.ok) {
        throw new Error('Erreur API capsules');
      }

      return await res.json();
    }
  });

  setSearchQuery(query: string): void {
    const trimmed = query.trim();

    if (trimmed === '') {
      this.searchQuery.set('');
      this.page.set(1);
      this.searchCapsuleResource.set(EMPTY_RESOURCE);
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
      set: (data: IRessource<ICapsule>) => this.searchCapsuleResource.set(data),
      reload: () => this.searchCapsuleResource.reload()
    };
  }
}
