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

@Component({
  selector: 'app-search-capsule',
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
    PaginationLayoutComponent
  ],
  templateUrl: './search-capsule.component.html',
  styleUrls: ['./search-capsule.component.scss', '../../../views/capsules/capsules.component.scss']
})
export class SearchCapsuleComponent {
  searchTerm = signal('');
  searchCapsulesList = computed(() => this.capsulesService.searchCapsuleResource.value().docs || []);
  searchCapsulesIsLoading = computed(() => this.capsulesService.searchCapsuleResource.isLoading());
  searchCapsulesError = computed(() => this.capsulesService.searchCapsuleResource.error());
  showNoResultsMessage = computed(() => {
    return (
      !this.searchCapsulesIsLoading() &&
      this.searchCapsulesList().length === 0 &&
      this.searchTerm().trim().length >= 2
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
    // Lance la recherche avec debounce à chaque changement de searchTerm
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

        // 🔁 Si même texte mais résultats vidés, relance
        if (term === current && !hasResults) {
          this.capsulesService.setCapsuleResearch(term);
          return;
        }

        if (term !== current) {
          this.capsulesService.setCapsuleResearch(term);
        }
      }, this.DEBOUNCE_DELAY);
    });

    this.resetSearchCapsules();
  }

  resetSearchCapsules() {
    this.capsulesService.searchCapsuleResource.set({ docs: [], totalDocs: 0, totalPages: 0 });
  }

  get currentPage() {
    return this.capsulesService.currentPage;
  }

  get totalPages() {
    return this.capsulesService.totalPages;
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
    this.capsulesService.setCapsuleResearch(this.searchTerm());
  }

  clearSearch() {
    this.searchTerm.set('');
    this.capsulesService.setCapsuleResearch('');
  }

  prevPage() {
    this.capsulesService.prevPage()
  }

  nextPage() {
    this.capsulesService.nextPage()
  }
}
