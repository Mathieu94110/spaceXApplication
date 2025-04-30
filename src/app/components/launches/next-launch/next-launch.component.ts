import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { LaunchesComponent } from '@app/views/launches/launches.component';

@Component({
  selector: 'app-next-launch',
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent],
  templateUrl: './next-launch.component.html',
  styleUrls: ['./next-launch.component.scss', '../../../views/launches/launches.component.scss']
})
export class NextLaunchComponent extends LaunchesComponent {
  launch = computed(() => this.launchesService.nextLauncheResource.value());
  launchIsLoading = computed(() => this.launchesService.nextLauncheResource.isLoading());
  launchError = computed(() => this.launchesService.nextLauncheResource.error());
}