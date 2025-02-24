import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  isInCompanyModules = false;
  isInRocketsModules = false;
  isInLaunchesModules = false;

  constructor(private readonly router: Router, private readonly cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.checkUrl();
    this.router.events.subscribe(() => {
      this.checkUrl()
    })
  }

  checkUrl(): void {
    this.isInCompanyModules = this.router.url.includes('company');
    this.isInRocketsModules = this.router.url.includes('rockets');
    this.isInLaunchesModules = this.router.url.includes('launches');
  }
}
