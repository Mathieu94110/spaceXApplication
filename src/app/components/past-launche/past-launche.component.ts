import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { LaunchesComponent } from '@app/views/launches/launches.component';

@Component({
  selector: 'app-past-launche',
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent],
  templateUrl: './past-launche.component.html',
  styleUrls: ['./past-launche.component.scss', '../../views/launches/launches.component.scss']
})
export class PastLaunchesComponent extends LaunchesComponent {
  launche = computed(() => this.launchesService.pastLauncheResource.value());
  launcheIsLoading = computed(() => this.launchesService.pastLauncheResource.isLoading());
  launcheError = computed(() => this.launchesService.pastLauncheResource.error());
}