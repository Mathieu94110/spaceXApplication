import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { getStatusClass } from '@app/utils/cards.utils';
import { IDragon } from 'interfaces/dragons';

@Component({
  selector: 'app-dragon-card-details',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './dragon-card-details.component.html',
  styleUrl: './dragon-card-details.component.scss'
})
export class DragonCardDetailsComponent {
  readonly dragonInfo = input.required<IDragon>()
  getDragonCardStatus = getStatusClass;
}
