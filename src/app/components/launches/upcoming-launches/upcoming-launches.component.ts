import { Component, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { LaunchesComponent } from '@app/views/launches/launches.component';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';

@Component({
  selector: 'app-upcoming-launches',
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent],
  templateUrl: './upcoming-launches.component.html',
  styleUrls: ['./upcoming-launches.component.scss', '../../../views/launches/launches.component.scss']
})
export class UpcomingLaunchesComponent extends LaunchesComponent {

  launches = computed(() => this.launchesService.upcomingLauncheRessouce.value() || []);
  launchesIsLoading = computed(() => this.launchesService.upcomingLauncheRessouce.isLoading());
  launchesError = computed(() => this.launchesService.upcomingLauncheRessouce.error());

  effect() {
    this.updateGridCols();
    window.addEventListener('resize', () => this.updateGridCols());
  }
}








