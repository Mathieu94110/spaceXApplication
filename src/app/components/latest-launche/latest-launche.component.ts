import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { LaunchesComponent } from '@app/views/launches/launches.component';

@Component({
  selector: 'app-latest-launche',
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent],
  templateUrl: './latest-launche.component.html',
  styleUrls: ['./latest-launche.component.scss', '../../views/launches/launches.component.scss']
})
export class LatestLaunchesComponent extends LaunchesComponent {

  launche = computed(() => this.launchesService.latestLauncheResource.value());
  launcheIsLoading = computed(() => this.launchesService.latestLauncheResource.isLoading());
  launcheError = computed(() => this.launchesService.latestLauncheResource.error());

  effect() {
    this.updateGridCols();
    window.addEventListener('resize', () => this.updateGridCols());
  }
}