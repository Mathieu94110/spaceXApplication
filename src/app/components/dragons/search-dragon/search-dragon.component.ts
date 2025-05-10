import { Component } from '@angular/core';
import { DragonsService } from 'services/dragons.service';
import { DragonCardComponent } from '../dragon-card/dragon-card/dragon-card.component';
import { SearchLayoutComponent } from '@app/layouts/search-layout/search-layout.component';
import { CommonModule } from '@angular/common';
import { DRAGON_INFO_TOKEN } from '@app/constants/dragons';
@Component({
  selector: 'app-search-dragon',
  imports: [CommonModule, SearchLayoutComponent],
  templateUrl: './search-dragon.component.html',
  styleUrl: './search-dragon.component.scss'
})
export class SearchDragonComponent {
  cardComponent = DragonCardComponent;
  constructor(public dragonsService: DragonsService) { }
  token = DRAGON_INFO_TOKEN;
}

