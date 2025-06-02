import { Component } from '@angular/core';
import { LAUNCH_PAD_INFO_TOKEN } from '@app/constants/launchPads';
import { SearchLayoutComponent } from '@app/layouts/search-layout/search-layout.component';
import { LaunchPadCardComponent } from '../launchpad-card/launchpad-card.component';
import { LaunchPadsService } from 'services/launch-pads.service';

@Component({
  selector: 'app-search-launchpads',
  imports: [SearchLayoutComponent],
  templateUrl: './search-launchpads.component.html',
  styleUrl: './search-launchpads.component.scss'
})
export class SearchLaunchPadsComponent {
  cardComponent = LaunchPadCardComponent;
  constructor(public launchPadService: LaunchPadsService) { }
  token = LAUNCH_PAD_INFO_TOKEN;
}
