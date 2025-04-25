import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { LAUNCHES_NAV_LINKS } from '@app/constants/navigation';
import { NavigationLayoutComponent } from "../../layouts/navigation-layout/navigation-layout.component";

@Component({
  selector: 'app-launches',
  imports: [RouterModule, NavigationLayoutComponent],
  templateUrl: './launches.component.html',
  styleUrl: './launches.component.scss'
})
export class LaunchesComponent {
  protected readonly launchesLinks = LAUNCHES_NAV_LINKS
}
