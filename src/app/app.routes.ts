import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { LatestLaunchesComponent } from "./components/latest-launche/latest-launche.component";

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
      },
      {
        path: 'next',
        loadComponent: () => import('./components/next-launche/next-launche.component')
          .then(m => m.NextLaunchesComponent)
      },
      {
        path: 'past',
        loadComponent: () => import('./components/past-launche/past-launche.component')
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
