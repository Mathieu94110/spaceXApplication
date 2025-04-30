import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CAPSULES_NAV_LINKS } from '@app/constants/navigation';
import { NavigationLayoutComponent } from '@app/layouts/navigation-layout/navigation-layout.component';
import { CapsulesService } from 'services/capsules.service';

@Component({
  selector: 'app-capsules',
  imports: [RouterModule, NavigationLayoutComponent],
  templateUrl: './capsules.component.html',
  styleUrl: './capsules.component.scss'
})
export class CapsulesComponent {
  protected readonly capsulesService = inject(CapsulesService);
  protected readonly capsulesLinks = CAPSULES_NAV_LINKS;
  protected readonly errorMsg = "Il semble qu'il y ait eu un problème lors du chargement de la liste";
}
