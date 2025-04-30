import { CommonModule } from '@angular/common';
import { Component, computed, effect } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { CapsulesComponent } from '@app/views/capsules/capsules.component';

@Component({
  selector: 'app-all-capsules',
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule,],
  templateUrl: './all-capsules.component.html',
  styleUrl: './all-capsules.component.scss'
})
export class AllCapsulesComponent extends CapsulesComponent {
  constructor() {
    super();
    effect(() => {
      console.log(this.capsules());
    });
  }
  capsules = computed(() => this.capsulesService.allCapsulesResource.value() || []);
  capsulesIsLoading = computed(() => this.capsulesService.allCapsulesResource.isLoading());
  capsulesError = computed(() => this.capsulesService.allCapsulesResource.error());


}
