import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { STATUS_CLASS_MAP } from '@app/constants';
import { CAPSULES_NAV_LINKS } from '@app/constants/navigation';
import { NavigationLayoutComponent } from '@app/layouts/navigation-layout/navigation-layout.component';
import { CapsulesService } from 'services/capsules.service';

@Component({
  selector: 'app-capsules',
  standalone: true,
  imports: [RouterModule, NavigationLayoutComponent],
  templateUrl: './capsules.component.html',
  styleUrl: './capsules.component.scss'
})
export class CapsulesComponent {
  protected readonly router = inject(Router);
  protected readonly capsulesService = inject(CapsulesService);
  protected readonly capsulesLinks = CAPSULES_NAV_LINKS;
  protected readonly errorMsg = "Il semble qu'il y ait eu un problème lors du chargement de la liste";
  private readonly platformId = inject(PLATFORM_ID);

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

  goToCapsuleDetails(id: string) {
    this.router.navigate(['/capsules', id]);
  }
  goToLaunchDetails(id: string) {
    this.router.navigate(['/launches', id]);
  }
}
