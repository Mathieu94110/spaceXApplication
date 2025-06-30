import { Component, inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { CREW_NAV_LINKS } from '@app/constants/navigation';
import { NavigationLayoutComponent } from "../../layouts/navigation-layout/navigation-layout.component";
import { CrewService } from 'services/crew.service';
import { ILaunch } from 'interfaces/launches';

@Component({
  selector: 'app-crew',
  imports: [RouterModule, NavigationLayoutComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss'
})
export class CrewComponent {
  protected readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  protected readonly crewsService = inject(CrewService);
  protected readonly crewLinks = CREW_NAV_LINKS;
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
  goToArticle(article: string | null) {
    if (article) window.open(article, '_blank')
  }
  openWikipedia(url: string): void {
    if (!url) return;
    window.open(url, '_blank');
  }
  goToCrewDetails(id: string) {
    this.router.navigate(['/crew', id]);
  }
  goToLaunchDetails(id: string) {
    this.router.navigate(['/launches', id])
  }
  goBack() {
    this.router.navigate(['/crew']);
  }
}
