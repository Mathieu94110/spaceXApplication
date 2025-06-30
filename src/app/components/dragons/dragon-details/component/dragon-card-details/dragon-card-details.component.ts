import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/shared/button/button.component';
import { getStatusClass } from '@app/utils/cards.utils';
import { DragonsComponent } from '@app/views/dragons/dragons.component';
import { IDragon } from 'interfaces/dragons';

@Component({
  selector: 'app-dragon-card-details',
  imports: [CommonModule, MatIconModule, MatCardModule, RouterModule, ButtonComponent],
  templateUrl: './dragon-card-details.component.html',
  styleUrl: './dragon-card-details.component.scss'
})
export class DragonCardDetailsComponent extends DragonsComponent {
  readonly dragonInfo = input.required<IDragon>()
  getDragonCardStatus = getStatusClass;
}
