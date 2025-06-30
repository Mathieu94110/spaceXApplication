import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-layout',
  imports: [CommonModule, MatCardModule],
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent {
}
