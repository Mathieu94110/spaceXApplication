import { Component, Inject } from '@angular/core';
import { MatCard, MatCardContent, MatCardTitle } from '@angular/material/card';
import { CREW_INFO_TOKEN } from '@app/constants/crews';
import { CrewComponent } from '@app/views/crew/crew.component';
import { ICrew } from 'interfaces/crew';

@Component({
  selector: 'app-search-crew-card',
  imports: [MatCard, MatCardTitle, MatCardContent],
  templateUrl: './search-crew-card.component.html',
  styleUrl: './search-crew-card.component.scss'
})
export class SearchCrewCardComponent extends CrewComponent {
  constructor(
    @Inject(CREW_INFO_TOKEN) public crewInfo: ICrew
  ) {
    super();
  }

  goToCrewDetails(id: string) {
    this.router.navigate(['/crew', id]);
  }
}