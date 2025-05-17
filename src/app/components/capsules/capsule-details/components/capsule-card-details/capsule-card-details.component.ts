import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ICapsule } from 'interfaces/capsules';

@Component({
  selector: 'app-capsule-card-details',
  imports: [CommonModule, MatIconModule, MatButtonModule, MatCardModule, RouterModule],
  templateUrl: './capsule-card-details.component.html',
  styleUrl: './capsule-card-details.component.scss'
})
export class CapsuleCardDetailsComponent {
  readonly capsuleInfo = input.required<ICapsule>()
}
