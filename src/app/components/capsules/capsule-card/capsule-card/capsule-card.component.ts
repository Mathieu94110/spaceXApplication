import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CAPSULE_INFO_TOKEN } from '@app/constants/capsules';
import { ICapsule } from 'interfaces/capsules';
@Component({
  selector: 'app-capsule-card',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './capsule-card.component.html',
  styleUrl: './capsule-card.component.scss'
})
export class CapsuleCardComponent {
  constructor(@Inject(CAPSULE_INFO_TOKEN) public capsuleInfo: ICapsule) { }
}

