import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { LAUNCH_INFO_TOKEN } from '@app/constants/launches';
import { LaunchesComponent } from '@app/views/launches/launches.component';
import { ILaunch } from 'interfaces/launches';

@Component({
  selector: 'app-launch-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './launch-card.component.html'
})
export class LaunchCardComponent extends LaunchesComponent {
  constructor(
    @Inject(LAUNCH_INFO_TOKEN) public launchInfo: ILaunch
  ) {
    super();
  }
}
