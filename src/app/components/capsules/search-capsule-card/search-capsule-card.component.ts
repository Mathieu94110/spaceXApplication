import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CAPSULE_INFO_TOKEN } from '@app/constants/capsules';
import { CapsulesComponent } from '@app/views/capsules/capsules.component';
import { ICapsule } from 'interfaces/capsules';

@Component({
  selector: 'app-search-capsule-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  styleUrls: ['./search-capsule-card.component.scss', '../../../views/capsules/capsules.component.scss'],
  templateUrl: './search-capsule-card.component.html'
})
export class SearchCapsuleCardComponent extends CapsulesComponent {
  constructor(
    @Inject(CAPSULE_INFO_TOKEN) public capsuleInfo: ICapsule
  ) {
    super();
  }

  goToCapsuleDetails(id: string) {
    this.router.navigate(['/capsules', id]);
  }
}

