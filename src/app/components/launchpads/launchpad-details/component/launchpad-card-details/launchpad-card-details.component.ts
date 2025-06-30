import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/shared/button/button.component';
import { LaunchPadsComponent } from '@app/views/launchpads/launchpads.component';
import { ILaunchPad } from 'interfaces/launch-pads';

@Component({
  selector: 'app-launchpad-card-details',
  imports: [CommonModule, MatIconModule, MatCardModule, RouterModule, ButtonComponent],
  templateUrl: './launchpad-card-details.component.html',
  styleUrl: './launchpad-card-details.component.scss'
})
export class LaunchPadCardDetailsComponent extends LaunchPadsComponent {
  readonly launchPadInfo = input.required<ILaunchPad>()
}
