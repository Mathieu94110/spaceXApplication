import { CommonModule } from '@angular/common';
import { Component, computed, effect, signal, untracked } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CapsulesService } from 'services/capsules.service';
import { PaginationLayoutComponent } from '@app/layouts/pagination-layout/pagination-layout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchCardLayoutComponent } from '@app/layouts/search-card-layout/search-card-layout.component';

@Component({
  selector: 'app-search-capsule',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    SearchCardLayoutComponent,
    PaginationLayoutComponent
  ],
  templateUrl: './search-capsule.component.html',
  styleUrls: ['./search-capsule.component.scss', '../../../views/capsules/capsules.component.scss']
})
export class SearchCapsuleComponent {
  searchTerm = signal('');
  hasSearched = signal(false);
  lastCompletedSearchTerm = signal('');
  pendingSearchTerm = signal(''); // <-- Tracks the search term currently being typed
  hasLoadedOnce = signal(false); // <-- New signal to track if a search has already completed at least once
  searchCapsulesList = computed(() => this.capsulesService.searchCapsuleResource.value().docs || []);
  searchCapsulesIsLoading = computed(() => this.capsulesService.searchCapsuleResource.isLoading());
  searchCapsulesError = computed(() => this.capsulesService.searchCapsuleResource.error());

  showNoResultsMessage = computed(() => {
    return (
      this.hasSearched() &&
      this.hasLoadedOnce() && // <- After first loading end
      !this.searchCapsulesIsLoading() &&
      this.searchCapsulesList().length === 0 &&
      this.searchTerm().trim().length >= 1 &&
      this.searchTerm().trim() === this.lastCompletedSearchTerm()
    );
  });

  searchCapsulesErrorMessage = computed(() => {
    const err = this.searchCapsulesError();
    if (err && typeof err === 'object' && 'message' in err) {
      return (err as Error).message;
    }
    return 'Erreur inconnue';
  });

  private debounceTimeout: ReturnType<typeof setTimeout> | null = null;
  private readonly DEBOUNCE_DELAY = 400;

  constructor(private capsulesService: CapsulesService) {
    effect(() => {
      const term = this.searchTerm().trim();

      if (this.debounceTimeout) {
        clearTimeout(this.debounceTimeout);
      }

      this.debounceTimeout = setTimeout(() => {
        const current = untracked(() => this.capsulesService.currentSearchQuery());
        const hasResults = untracked(() => this.searchCapsulesList().length > 0);

        if (term === '') {
          this.resetSearchCapsules();
          return;
        }

        this.hasSearched.set(true);
        this.pendingSearchTerm.set(term);
        this.hasLoadedOnce.set(false);

        if (term === current && !hasResults) {
          this.capsulesService.setCapsuleResearch(term);
          return;
        }

        if (term !== current) {
          this.capsulesService.setCapsuleResearch(term);
        }
      }, this.DEBOUNCE_DELAY);
    });

    // When the search is complete, store the finalized search term
    effect(() => {
      const isLoading = this.searchCapsulesIsLoading();
      const pendingTerm = this.pendingSearchTerm().trim();

      if (!isLoading && pendingTerm.length > 0) {
        this.lastCompletedSearchTerm.set(pendingTerm);
        this.pendingSearchTerm.set('');
        this.hasLoadedOnce.set(true); // <- Now set to true only after a real post-search load
      }
    });

    this.resetSearchCapsules();
  }

  resetSearchCapsules() {
    this.hasSearched.set(false);
    this.pendingSearchTerm.set('');
    this.capsulesService.searchCapsuleResource.set({ docs: [], totalDocs: 0, totalPages: 0 });
  }

  hasNextPage() {
    return this.currentPage < this.totalPages;
  }

  hasPreviousPage() {
    return this.currentPage > 1;
  }

  shouldShowPrevButton() {
    return this.hasPreviousPage();
  }

  shouldShowNextButton() {
    return this.hasNextPage();
  }

  onSearch() {
    this.hasSearched.set(true);
    this.pendingSearchTerm.set(this.searchTerm().trim());
    this.capsulesService.setCapsuleResearch(this.searchTerm());
  }

  prevPage() {
    this.capsulesService.prevPage();
  }

  nextPage() {
    this.capsulesService.nextPage();
  }

  get currentPage() {
    return this.capsulesService.currentPage;
  }

  get totalPages() {
    return this.capsulesService.totalPages;
  }
}
