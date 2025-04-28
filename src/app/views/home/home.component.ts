import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HOME_SECTION_ITEMS } from '@app/constants/home';
import { HOME_NAV_LINKS } from '@app/constants/navigation';
import { LinkButtonLayoutComponent } from '@app/layouts/link-button-layout/link-button-layout.component';
import { NavigationLayoutComponent } from '@app/layouts/navigation-layout/navigation-layout.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, NavigationLayoutComponent, LinkButtonLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  animations: [
    trigger('scrollAnimation', [
      state('hidden', style({
        opacity: 0,
        transform: 'translateY(80px)'
      })),
      state('visible', style({
        opacity: 1,
        transform: 'translateY(0)'
      })),
      transition('hidden => visible', [
        animate('800ms cubic-bezier(0.22, 1, 0.36, 1)')
      ]),
    ])
  ]
})
export class HomeComponent {

  readonly visibleSections = signal<boolean[]>([]);
  protected readonly homeNavLinks = HOME_NAV_LINKS;
  protected readonly homeSectionItems = HOME_SECTION_ITEMS;

  constructor() {
    this.visibleSections.set(new Array(this.homeSectionItems.length).fill(false));
    if (typeof window !== 'undefined' && typeof requestAnimationFrame !== 'undefined') {
      requestAnimationFrame(() => {
        this.onScroll(); // trigger first inner-content section animation
      });
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    const sections = document.querySelectorAll('.home-section-inner-content-left-bottom') as NodeListOf<HTMLElement>;
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight - 80) {
        const current = this.visibleSections();
        // if section is not inside visibleSections we added it what triggers the animation on the element
        if (!current[index]) {
          const updated = [...current];
          updated[index] = true;
          this.visibleSections.set(updated);
        }
      }
    });
  }
}

