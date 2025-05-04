import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ICapsule } from 'interfaces/capsules';

@Component({
  selector: 'app-search-card-layout',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './search-card-layout.component.html',
  styleUrl: './search-card-layout.component.scss'
})
export class SearchCardLayoutComponent {
  capsuleInfo = input.required<ICapsule>();
}
