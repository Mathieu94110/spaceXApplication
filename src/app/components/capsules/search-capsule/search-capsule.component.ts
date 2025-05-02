import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CapsulesService } from 'services/capsules.service';
import { PaginationLayoutComponent } from '@app/layouts/pagination-layout/pagination-layout.component';

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
    ReactiveFormsModule,
    PaginationLayoutComponent
  ],
  templateUrl: './search-capsule.component.html',
  styleUrls: ['./search-capsule.component.scss', '../../../views/capsules/capsules.component.scss']
})
export class SearchCapsuleComponent {
  constructor(private capsulesService: CapsulesService) {
    this.resetSearchCapsules();
  }
  searchTerm = signal('');
  searchCapsulesList = computed(() => this.capsulesService.searchCapsuleResource.value().docs || []);
  searchCapsulesIsLoading = computed(() => this.capsulesService.searchCapsuleResource.isLoading());
  searchCapsulesError = computed(() => this.capsulesService.searchCapsuleResource.error());

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
