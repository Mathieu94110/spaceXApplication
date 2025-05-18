import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterLink } from '@angular/router';
import { CAPSULE_INFO_TOKEN } from '@app/constants/capsules';
import { ICapsule } from 'interfaces/capsules';

@Component({
  selector: 'app-search-capsule-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule, RouterLink],
  styleUrls: ['./search-capsule-card.component.scss', '../../../views/capsules/capsules.component.scss'],
  templateUrl: './search-capsule-card.component.html'
})
export class SearchCapsuleCardComponent {
  constructor(@Inject(CAPSULE_INFO_TOKEN) public capsuleInfo: ICapsule) { }
}

