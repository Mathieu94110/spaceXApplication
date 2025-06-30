import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { CapsulesComponent } from '@app/views/capsules/capsules.component';
import { MatIconModule } from '@angular/material/icon';
import { getStatusClass } from '@app/utils/cards.utils';
import { ButtonComponent } from '@app/shared/button/button.component';

@Component({
  selector: 'app-all-capsules',
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent, MatIconModule, ButtonComponent],
  templateUrl: './all-capsules.component.html',
  styleUrls: ['./all-capsules.component.scss', '../../../views/capsules/capsules.component.scss']
})
export class AllCapsulesComponent extends CapsulesComponent {
  capsules = computed(() => this.capsulesService.allCapsulesResource.value() || []);
  capsulesIsLoading = computed(() => this.capsulesService.allCapsulesResource.isLoading());
  capsulesError = computed(() => this.capsulesService.allCapsulesResource.error());
  getCapsuleStatusClass = getStatusClass;

  effect() {
    this.updateGridCols();
    window.addEventListener('resize', () => this.updateGridCols());
  }
}
