import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HOME_SECTION_ITEMS } from '@app/constants/home';
import { HOME_NAV_LINKS } from '@app/constants/navigation';
import { NavigationLayoutComponent } from '@app/layouts/navigation-layout/navigation-layout.component';
@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterModule, NavigationLayoutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected readonly homeNavLinks = HOME_NAV_LINKS;
  protected readonly homeSectionItems = HOME_SECTION_ITEMS;
}
