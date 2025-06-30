import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LAUNCHES_NAV_LINKS } from '@app/constants/navigation';
import { NavigationLayoutComponent } from "../../layouts/navigation-layout/navigation-layout.component";
import { LaunchesService } from 'services/launches.service';
import { ILaunch } from 'interfaces/launches';

@Component({
  selector: 'app-launches',
  imports: [RouterModule, NavigationLayoutComponent],
  templateUrl: './launches.component.html',
  styleUrl: './launches.component.scss'
})
export class LaunchesComponent {
  protected readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly launchesService = inject(LaunchesService);
  protected readonly launchesLinks = LAUNCHES_NAV_LINKS;
  protected readonly errorMsg = "Il semble qu'il y ait eu un problème lors du chargement de la liste";

  gridCols = 4;

  constructor() {
    if (isPlatformBrowser(this.platformId)) {
      this.updateGridCols();
      window.addEventListener('resize', () => this.updateGridCols());
    }
  };

  updateGridCols() {
    const width = window.innerWidth;
    if (width > 1200) {
      this.gridCols = 4;
    } else if (width > 900) {
      this.gridCols = 3;
    } else if (width > 600) {
      this.gridCols = 2;
    } else {
      this.gridCols = 1;
    }
  }

  goToLaunchDetails(id: string) {
    this.router.navigate(['/launches', id]);
  }

  goToArticle(launch: ILaunch) {
    if (launch.links?.article) window.open(launch.links.article, '_blank')
  }
  goBack() {
    this.router.navigate(['launches'])
  }
}
