import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { LaunchesComponent } from '@app/views/launches/launches.component';

@Component({
  selector: 'app-next-launche',
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent],
  templateUrl: './next-launche.component.html',
  styleUrls: ['./next-launche.component.scss', '../../views/launches/launches.component.scss']
})
export class NextLaunchesComponent extends LaunchesComponent {
  launche = computed(() => this.launchesService.nextLauncheResource.value());
  launcheIsLoading = computed(() => this.launchesService.nextLauncheResource.isLoading());
  launcheError = computed(() => this.launchesService.nextLauncheResource.error());
}