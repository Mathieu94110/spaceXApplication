import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { ButtonComponent } from '@app/shared/button/button.component';
import { ICapsule } from 'interfaces/capsules';

@Component({
  selector: 'app-capsule-card-details',
  imports: [CommonModule, MatIconModule, MatCardModule, RouterModule, ButtonComponent, RouterModule],
  templateUrl: './capsule-card-details.component.html',
  styleUrl: './capsule-card-details.component.scss'
})

export class CapsuleCardDetailsComponent {
  router = inject(Router)
  readonly capsuleInfo = input.required<ICapsule>()

  goBack() {
    this.router.navigate(['/capsules']);
  }
}
