import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_SECTION_ITEMS } from '@app/constants/home';
import { HOME_NAV_LINKS } from '@app/constants/navigation';
import { LinkButtonLayoutComponent } from '@app/layouts/link-button-layout/link-button-layout.component';
import { NavigationLayoutComponent } from '@app/layouts/navigation-layout/navigation-layout.component';

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, NavigationLayoutComponent, LinkButtonLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly homeNavLinks = HOME_NAV_LINKS;
  protected readonly homeSectionItems = HOME_SECTION_ITEMS;
}
