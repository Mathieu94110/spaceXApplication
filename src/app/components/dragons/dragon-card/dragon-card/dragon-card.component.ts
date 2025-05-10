import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { DRAGON_INFO_TOKEN } from '@app/constants/dragons';
import { IDragon } from 'interfaces/dragons';

@Component({
  selector: 'app-dragon-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './dragon-card.component.html',
  styleUrl: './dragon-card.component.scss'
})
export class DragonCardComponent {
  constructor(@Inject(DRAGON_INFO_TOKEN) public dragonInfo: IDragon) { }
}


