import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CREW_INFO_TOKEN } from '@app/constants/crews';
import { SearchLayoutComponent } from '@app/layouts/search-layout/search-layout.component';
import { CrewService } from 'services/crew.service';
import { SearchCrewCardComponent } from '../search-crew-card/search-crew-card.component';

@Component({
  selector: 'app-search-crews',
  standalone: true,
  imports: [
    CommonModule,
    SearchLayoutComponent,
  ],
  templateUrl: './search-crew.component.html',
  styleUrl: './search-crew.component.scss'
})
export class SearchCrewsComponent {
  cardComponent = SearchCrewCardComponent;
  constructor(public crewService: CrewService) { }
  token = CREW_INFO_TOKEN;
}