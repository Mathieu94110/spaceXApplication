import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';
import { INaviItem } from 'interfaces/navigation';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
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
          stagger('100ms', [
            animate('300ms ease-out', style({ opacity: 1, transform: 'translateY(0)' })),
          ]),
        ], { optional: true })
      ])
    ])
  ]
})
export class NavigationLayoutComponent {
  isMenuOpen = false;
  readonly navLinks = input.required<INaviItem[]>();
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
