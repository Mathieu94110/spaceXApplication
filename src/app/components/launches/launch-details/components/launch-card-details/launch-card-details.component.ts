import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ILaunch } from 'interfaces/launches';

@Component({
  selector: 'app-launch-card-details',
  standalone: true,
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './launch-card-details.component.html',
  styleUrl: './launch-card-details.component.scss'
})
export class LaunchCardDetailsComponent {
  readonly launchInfo = input.required<ILaunch>()
}
