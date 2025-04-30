import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ILaunch } from 'interfaces/launches';

@Component({
  selector: 'app-card-layout',
  imports: [CommonModule, MatButtonModule, MatCardModule],
  templateUrl: './card-layout.component.html',
  styleUrl: './card-layout.component.scss'
})
export class CardLayoutComponent {
  /*   launch = input.required<ILaunch>(); */
}
