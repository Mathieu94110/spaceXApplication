import { Component, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LaunchesService } from 'services/launches.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ILaunch } from 'interfaces/launches';
import { LaunchCardDetailsComponent } from './components/launch-card-details/launch-card-details.component';

@Component({
  selector: 'app-launch-details',
  templateUrl: './launch-details.component.html',
  styleUrls: ['./launch-details.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule,
    LaunchCardDetailsComponent
  ],
})

export class LaunchDetailsComponent {
  private launchService = inject(LaunchesService);
  private route = inject(ActivatedRoute);

  launchId = signal(this.route.snapshot.paramMap.get('id') ?? '');

  launchResource = this.launchService.getLaunchDetailsResource(this.launchId())

  isLoading = computed(() => this.launchResource.isLoading());
  errorMessage = computed(() => {
    const error = this.launchResource.error();
    return error ? (error as Error).message : null;
  });
  launchDetails = computed(() => this.launchResource.value() as ILaunch | null);
}
