import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { CrewComponent } from '@app/views/crew/crew.component';
import { getStatusClass } from '@app/utils/cards.utils';
import { ButtonComponent } from '@app/shared/button/button.component';

@Component({
  selector: 'app-all-crews',
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent, MatIconModule, ButtonComponent],
  templateUrl: './all-crews.component.html',
  styleUrls: ['./all-crews.component.scss', '../../../views/crew/crew.component.scss']
})
export class AllCrewsComponent extends CrewComponent {
  crews = computed(() => this.crewsService.allCrewResource.value() || []);
  crewsAreLoading = computed(() => this.crewsService.allCrewResource.isLoading());
  crewsError = computed(() => this.crewsService.allCrewResource.error());
  getCrewStatusClass = getStatusClass;

  effect() {
    this.updateGridCols();
    window.addEventListener('resize', () => this.updateGridCols());
  }
}
