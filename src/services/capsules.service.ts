import { Injectable, computed, effect, signal, resource } from '@angular/core';
import { environment } from 'environments/environment';
import { ICapsule } from 'interfaces/capsules';

@Injectable({ providedIn: 'root' })
export class CapsulesService {
  constructor() {
    effect(() => {
      const queryText = this.searchQuery();
      const page = this.page();
      this.searchCapsuleResource.reload();
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
    page: this.page()
  }));

  readonly searchCapsuleResource = resource({

    loader: async () => {
      const { queryText, page } = this.requestParams();
      const res = await fetch(`${this.capsulesUrl}/query`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: queryText
            ? {
              $or: [
                { serial: { $regex: queryText, $options: 'i' } },
                { type: { $regex: queryText, $options: 'i' } }
              ]
            }
            : {},
          options: {
            limit: 8,
            page: page
          }
        })
      });

      if (!res.ok) throw new Error('Erreur API capsules');
      return await res.json();
    }
  });

  setCapsuleResearch(query: string) {
    this.searchQuery.set(query);
    this.page.set(1);
  }

  nextPage() {
    this.page.set(this.page() + 1);
  }

  prevPage() {
    if (this.page() > 1) this.page.set(this.page() - 1);
  }
  reloadPageResults() {
    this.searchQuery.set('');
    this.page.set(0);
    this.searchCapsuleResource.reload();
  }
  get totalPages() {
    const result = this.searchCapsuleResource.value();
    return result ? result.totalPages : 1;
  }

  get currentPage() {
    return this.page();
  }
}
