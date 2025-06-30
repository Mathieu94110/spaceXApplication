import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/shared/button/button.component';
import { LaunchesComponent } from '@app/views/launches/launches.component';
import { ILaunch } from 'interfaces/launches';

@Component({
  selector: 'app-launch-card-details',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatCardModule, RouterModule, ButtonComponent],
  templateUrl: './launch-card-details.component.html',
  styleUrl: './launch-card-details.component.scss'
})
export class LaunchCardDetailsComponent extends LaunchesComponent {
  readonly launchInfo = input.required<ILaunch>()
}
