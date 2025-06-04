import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { CrewComponent } from '@app/views/crew/crew.component';
import { MatButton } from '@angular/material/button';
import { getStatusClass } from '@app/utils/cards.utils';

@Component({
  selector: 'app-all-crews',
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent, MatIconModule, MatButton],
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
  goToCrewDetails(id: string) {
    this.router.navigate(['/crew', id])
  }
  openWikipedia(url: string): void {
    if (!url) return;
    window.open(url, '_blank');
  }
}
