import { Injectable, computed, effect, signal, resource } from '@angular/core';
import { EMPTY_RESOURCE } from '@app/constants';
import { DEFAULT_DRAGON_LIMIT } from '@app/constants/dragons';
import { environment } from 'environments/environment';
import { IRessource } from 'interfaces';
import { IDragon } from 'interfaces/dragons';

@Injectable({ providedIn: 'root' })
export class DragonsService {
  constructor() {
    effect(() => {
      const queryText = this.searchQuery();
      const page = this.page();
      this.searchDragonResource.reload();
    });
  }

  private capsulesUrl = `${environment.apiUrl}/dragons`;
  private searchQuery = signal('');
  private page = signal(1);


  allDragonsResource = resource({
    loader: async (): Promise<IDragon[]> =>
      (await fetch(`${this.capsulesUrl}`)).json(),
  });

  private requestParams = computed(() => ({
    queryText: this.searchQuery().trim(),
    page: this.page()
  }));

  searchDragonResource = resource({
    loader: async (): Promise<IRessource<IDragon>> => {
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
            limit: DEFAULT_DRAGON_LIMIT,
            page: page
          }
        })
      });

      if (!res.ok) throw new Error('Erreur API dragons');
      return await res.json();
    }
  });

  setDragonResearch(query: string) {
    if (this.searchQuery() !== query) {
      this.searchQuery.set(query);
      this.page.set(1);
    }
    this.searchDragonResource.reload();
  }

  resetSearchCapsuleResource() {
    this.searchDragonResource.set(EMPTY_RESOURCE);
    this.searchDragonResource.reload();
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
    this.searchDragonResource.reload();
  }

  currentSearchQuery() {
    return this.searchQuery();
  }

  get totalPages() {
    const result = this.searchDragonResource.value();
    return result ? result.totalPages : 1;
  }

  get currentPage() {
    return this.page();
  }
}
