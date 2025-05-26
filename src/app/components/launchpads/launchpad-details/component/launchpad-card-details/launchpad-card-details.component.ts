import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ILaunchPad } from 'interfaces/launch-pads';

@Component({
  selector: 'app-launchpad-card-details',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './launchpad-card-details.component.html',
  styleUrl: './launchpad-card-details.component.scss'
})
export class LaunchPadCardDetailsComponent {
  readonly launchPadInfo = input.required<ILaunchPad>()
}
