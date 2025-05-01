import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CapsulesService } from 'services/capsules.service';

@Component({
  selector: 'app-search-capsule',
  imports: [CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule, MatIcon,
    MatInputModule,
    ReactiveFormsModule
  ],
  templateUrl: './search-capsule.component.html',
  styleUrls: ['./search-capsule.component.scss', '../../../views/capsules/capsules.component.scss']
})
export class SearchCapsuleComponent {
  constructor(private capsulesService: CapsulesService) { }
  searchTerm = signal('');
  capsulesList = computed(() => this.capsulesService.searchCapsuleResource.value() || []);

  onSearch() {
    this.capsulesService.setCapsuleResearch(this.searchTerm())
  }

  clearSearch() {
    this.searchTerm.set('');
  }
}