import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { LaunchPadCardDetailsComponent } from './component/launchpad-card-details/launchpad-card-details.component';
import { ILaunchPad } from 'interfaces/launch-pads';
import { LaunchPadsService } from 'services/launch-pads.service';

@Component({
  selector: 'app-launchpad-details',
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule,
    LaunchPadCardDetailsComponent
  ],
  templateUrl: './launchpad-details.component.html',
  styleUrl: './launchpad-details.component.scss'
})
export class LaunchPadDetailsComponent {
  private launchPadService = inject(LaunchPadsService);
  private route = inject(ActivatedRoute);

  launchPadId = signal(this.route.snapshot.paramMap.get('id') ?? '');

  launchPadResource = this.launchPadService.getLaunchPadDetailsResource(this.launchPadId());

  isLoading = computed(() => this.launchPadResource.isLoading());
  errorMessage = computed(() => {
    const error = this.launchPadResource.error();
    return error ? (error as Error).message : null;
  });
  launchPadDetails = computed(() => this.launchPadResource.value() as ILaunchPad | null);
}
