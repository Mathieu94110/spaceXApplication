import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LatestLaunchesComponent } from "./components/latest-launches/latest-launches.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'launches',
    loadComponent: () => import('./views/launches/launches.component')
      .then(m => m.LaunchesComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/all-launches/all-launches.component')
          .then(m => m.AllLaunchesComponent)
      },
      {
        path: 'latest',
        component: LatestLaunchesComponent,
        /*         loadComponent: () => import('./components/latest-launches/latest-launches.component')
                  .then(m => m.LatestLaunchesComponent) */
      },
      {
        path: 'next',
        loadComponent: () => import('./components/next-launches/next-launches.component')
          .then(m => m.NextLaunchesComponent)
      },
      {
        path: 'past',
        loadComponent: () => import('./components/past-launches/past-launches.component')
          .then(m => m.PastLaunchesComponent)
      },
      {
        path: 'upcoming',
        loadComponent: () => import('./components/upcoming-launches/upcoming-launches.component')
          .then(m => m.UpcomingLaunchesComponent)
      },
    ]
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
