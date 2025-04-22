import { Component, OnInit } from "@angular/core";
import { Router, RouterModule } from "@angular/router";
import { CommonModule } from '@angular/common';
import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger
} from '@angular/animations';
import { NAV_ITEMS } from "@app/constants/navbar";

@Component({
  selector: "app-navbar",
  imports: [CommonModule, RouterModule],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
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
export class NavbarComponent implements OnInit {
  isInCompanyModules = false;
  isInRocketsModules = false;
  isInLaunchesModules = false;
  isMenuOpen = false;
  navItems = NAV_ITEMS;

  constructor(
    private readonly router: Router,
  ) { }

  ngOnInit(): void {
    this.checkUrl();
    this.router.events.subscribe(() => {
      this.checkUrl();
    });
  }

  checkUrl(): void {
    this.isInCompanyModules = this.router.url.includes("company");
    this.isInRocketsModules = this.router.url.includes("rockets");
    this.isInLaunchesModules = this.router.url.includes("launches");
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
