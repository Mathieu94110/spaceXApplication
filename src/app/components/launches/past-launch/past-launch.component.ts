import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { LaunchesComponent } from '@app/views/launches/launches.component';

@Component({
  selector: 'app-past-launch',
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent],
  templateUrl: './past-launch.component.html',
  styleUrls: ['./past-launch.component.scss', '../../../views/launches/launches.component.scss']
})
export class PastLaunchComponent extends LaunchesComponent {
  launch = computed(() => this.launchesService.pastLauncheResource.value());
  launchIsLoading = computed(() => this.launchesService.pastLauncheResource.isLoading());
  launchError = computed(() => this.launchesService.pastLauncheResource.error());
}