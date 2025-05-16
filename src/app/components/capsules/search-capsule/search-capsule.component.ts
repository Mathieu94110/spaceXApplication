import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CapsulesService } from 'services/capsules.service';
import { SearchLayoutComponent } from '@app/layouts/search-layout/search-layout.component';
import { SearchCapsuleCardComponent } from '../search-capsule-card/search-capsule-card.component';
import { CAPSULE_INFO_TOKEN } from '@app/constants/capsules';

@Component({
  selector: 'app-search-capsule',
  standalone: true,
  imports: [
    CommonModule,
    SearchLayoutComponent,
  ],
  templateUrl: './search-capsule.component.html'
})
export class SearchCapsuleComponent {
  cardComponent = SearchCapsuleCardComponent;
  constructor(public capsulesService: CapsulesService) { }
  token = CAPSULE_INFO_TOKEN;
}
