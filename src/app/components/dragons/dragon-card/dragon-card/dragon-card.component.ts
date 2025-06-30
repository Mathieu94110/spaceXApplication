import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { DRAGON_INFO_TOKEN } from '@app/constants/dragons';
import { DragonsComponent } from '@app/views/dragons/dragons.component';
import { IDragon } from 'interfaces/dragons';

@Component({
  selector: 'app-dragon-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './dragon-card.component.html'
})

export class DragonCardComponent extends DragonsComponent {
  constructor(@Inject(DRAGON_INFO_TOKEN) public dragonInfo: IDragon) { super() }
}