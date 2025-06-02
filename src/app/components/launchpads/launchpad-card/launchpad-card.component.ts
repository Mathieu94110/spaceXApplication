import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ILaunchPad } from 'interfaces/launch-pads';
import { LAUNCH_PAD_INFO_TOKEN } from '@app/constants/launchPads';
import { MatCardModule } from '@angular/material/card';
import { LaunchPadsComponent } from '@app/views/launchpads/launchpads.component';

@Component({
  selector: 'app-launch-pad-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './launchpad-card.component.html',
  styleUrl: './launchpad-card.component.scss'
})
export class LaunchPadCardComponent extends LaunchPadsComponent {
  constructor(@Inject(LAUNCH_PAD_INFO_TOKEN) public launchPad: ILaunchPad) {
    super();
  }

  goToLaunchPadDetails(id: string) {
    this.router.navigate(['/launchpads', id]);
  }
}