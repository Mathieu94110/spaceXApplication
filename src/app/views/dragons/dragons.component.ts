import { isPlatformBrowser } from '@angular/common';
import { Component, inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DRAGONS_NAV_LINKS } from '@app/constants/navigation';
import { NavigationLayoutComponent } from '@app/layouts/navigation-layout/navigation-layout.component';
import { IDragon } from 'interfaces/dragons';
import { DragonsService } from 'services/dragons.service';

@Component({
  selector: 'app-dragons',
  imports: [RouterModule, NavigationLayoutComponent],
  templateUrl: './dragons.component.html',
  styleUrl: './dragons.component.scss'
})
export class DragonsComponent {
  protected readonly dragonsService = inject(DragonsService);
  protected readonly dragonsLinks = DRAGONS_NAV_LINKS;
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

  goToArticle(dragon: IDragon) {
    if (dragon.wikipedia) window.open(dragon.wikipedia, '_blank')
  }
}
