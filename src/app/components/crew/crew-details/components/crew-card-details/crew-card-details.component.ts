import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/shared/button/button.component';
import { getStatusClass } from '@app/utils/cards.utils';
import { CrewComponent } from '@app/views/crew/crew.component';
import { ICrew } from 'interfaces/crew';

@Component({
  selector: 'app-crew-card-details',
  imports: [CommonModule, MatIconModule, MatCardModule, RouterModule, ButtonComponent],
  templateUrl: './crew-card-details.component.html',
  styleUrl: './crew-card-details.component.scss'
})
export class CrewCardDetailsComponent extends CrewComponent {
  readonly crewInfo = input.required<ICrew>()
  getCrewStatusClass = getStatusClass;
}

