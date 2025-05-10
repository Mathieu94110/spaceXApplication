import { Component } from '@angular/core';
import { DragonsService } from 'services/dragons.service';
import { SearchLayoutComponent } from '@app/layouts/search-layout/search-layout.component';
import { CommonModule } from '@angular/common';
import { LaunchCardComponent } from '../launch-card/launch-card.component';
import { LAUNCH_INFO_TOKEN } from '@app/constants/launches';
import { LaunchesService } from 'services/launches.service';

@Component({
  selector: 'app-search-dragon',
  imports: [CommonModule, SearchLayoutComponent],
  templateUrl: './search-launches.component.html',
  styleUrl: './search-launches.component.scss'
})
export class SearchLaunchesComponent {
  cardComponent = LaunchCardComponent;
  constructor(public launchesService: LaunchesService) { }
  token = LAUNCH_INFO_TOKEN;
}
