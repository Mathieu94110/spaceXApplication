import { CommonModule } from '@angular/common';
import { Component, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { INaviItem } from 'interfaces/navigation';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

@Component({
  selector: 'app-navigation-layout',
  imports: [CommonModule, RouterModule],
  templateUrl: './navigation-layout.component.html',
  styleUrl: './navigation-layout.component.scss',
  animations: [
    trigger('listStagger', [
      transition('* => *', [
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger('200ms', [
            animate('300ms 200ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true })
      ])
    ]),
    trigger('underlineSlide', [
      transition(':enter', [
        style({ transform: 'scaleX(0)', transformOrigin: 'left' }),
        animate('250ms ease-out', style({ transform: 'scaleX(1)', transformOrigin: 'left' }))
      ]),
      transition(':leave', [
        style({ transformOrigin: 'right' }),
        animate('250ms ease-in', style({ transform: 'scaleX(0)', transformOrigin: 'right' }))
      ])
    ])
  ]
})
export class NavigationLayoutComponent {
  isMenuOpen = false;
  hoveredIndex = signal<number | null>(null);
  readonly navLinks = input.required<INaviItem[]>();
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  setHovered(index: number | null) {
    this.hoveredIndex.set(index);
  }
}
