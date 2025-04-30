import { Component, computed } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { LaunchesComponent } from '@app/views/launches/launches.component';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';

@Component({
  selector: 'app-all-launches',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent],
  templateUrl: './all-launches.component.html',
  styleUrls: ['./all-launches.component.scss', '../../../views/launches/launches.component.scss']
})
export class AllLaunchesComponent extends LaunchesComponent {

  launches = computed(() => this.launchesService.allLaunchesResource.value() || []);
  launchesIsLoading = computed(() => this.launchesService.allLaunchesResource.isLoading());
  launchesError = computed(() => this.launchesService.allLaunchesResource.error());

  effect() {
    this.updateGridCols();
    window.addEventListener('resize', () => this.updateGridCols());
  }
}
