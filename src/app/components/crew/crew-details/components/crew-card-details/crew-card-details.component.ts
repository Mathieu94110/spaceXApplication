import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { getStatusClass } from '@app/utils/cards.utils';
import { CrewComponent } from '@app/views/crew/crew.component';
import { ICrew } from 'interfaces/crew';

@Component({
  selector: 'app-crew-card-details',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './crew-card-details.component.html',
  styleUrl: './crew-card-details.component.scss'
})
export class CrewCardDetailsComponent extends CrewComponent {
  readonly crewInfo = input.required<ICrew>()
  getCrewStatusClass = getStatusClass;

  goToLaunchDetails(id: string) {
    this.router.navigate(['/launches', id])
  }
}

