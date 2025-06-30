import { Component, computed, effect, Injector, Input, signal, Type, untracked } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationLayoutComponent } from '../pagination-layout/pagination-layout.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ISearchService } from 'interfaces';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-search-layout',
  standalone: true,
  templateUrl: './search-layout.component.html',
  styleUrls: ['./search-layout.component.scss', '../../components/capsules/search-capsule/search-capsule.component.scss'],
  imports: [
    CommonModule,
    NgComponentOutlet,
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    PaginationLayoutComponent,
    MatButtonModule
  ],
})
export class SearchLayoutComponent<T> {
  @Input() placeholder = 'Entrez un mot-clé';
  @Input() searchService!: ISearchService<T>;
  @Input() cardComponent!: Type<any>;
  @Input() fieldsToSearch: string[] = [];
  @Input() dataToken!: any;

  searchTerm = signal('');  // Signal to track the search term
  hasSearched = signal(false);  // Signal to track if a search was performed
  pendingSearchTerm = signal('');  // Signal to track the pending search term
  lastCompletedSearchTerm = signal('');  // Signal to track the last successful search term
  hasLoadedOnce = signal(false);  // Signal to track if data has been loaded at least once

  list = computed(() => this.searchService.resource.value()?.docs || []);  // List of results from search
  isLoading = computed(() => this.searchService.resource.isLoading());  // Computed property to track loading state
  error = computed(() => this.searchService.resource.error());  // Computed property to handle errors

  showNoResultsMessage = computed(() => {
    return (
      this.hasSearched() &&
      this.hasLoadedOnce() &&
      !this.isLoading() &&
      this.list().length === 0 &&
      this.searchTerm().trim().length >= 1 &&
      this.searchTerm().trim() === this.lastCompletedSearchTerm()
    );
  });

  constructor(private injector: Injector) {
    effect(() => {
      const term = this.searchTerm().trim();
      this.hasSearched.set(true);
      this.pendingSearchTerm.set(term);
      this.hasLoadedOnce.set(false);

      const current = untracked(() => this.searchService.currentSearchQuery());
      if (term !== current) {
        this.searchService.setSearchQuery(term);
      }
    });

    effect(() => {
      if (!this.isLoading() && this.pendingSearchTerm().length > 0) {
        this.lastCompletedSearchTerm.set(this.pendingSearchTerm());
        this.pendingSearchTerm.set('');
        this.hasLoadedOnce.set(true);
      }
    });
  }

  onSearch() {
    this.hasSearched.set(true);
    this.pendingSearchTerm.set(this.searchTerm().trim());
    this.searchService.setSearchQuery(this.searchTerm());
  }

  prevPage() {
    this.searchService.prevPage();
  }

  nextPage() {
    this.searchService.nextPage();
  }

  createInjector(item: T): Injector {
    return Injector.create({
      providers: [
        {
          provide: this.dataToken,
          useValue: item
        }
      ],
      parent: this.injector
    });
  }

  get currentPage() {
    return this.searchService.currentPage;
  }

  get totalPages() {
    return this.searchService.totalPages;
  }
}
