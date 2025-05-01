import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'launches',
    loadComponent: () => import('./views/launches/launches.component')
      .then(m => m.LaunchesComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/launches/all-launches/all-launches.component')
          .then(m => m.AllLaunchesComponent)
      },
      {
        path: 'latest',
        loadComponent: () => import('./components/launches/latest-launch/latest-launch.component')
          .then(m => m.LatestLaunchComponent)
      },
      {
        path: 'next',
        loadComponent: () => import('./components/launches/next-launch/next-launch.component')
          .then(m => m.NextLaunchComponent)
      },
      {
        path: 'past',
        loadComponent: () => import('./components/launches/past-launch/past-launch.component')
          .then(m => m.PastLaunchComponent)
      },
      {
        path: 'upcoming',
        loadComponent: () => import('./components/launches/upcoming-launches/upcoming-launches.component')
          .then(m => m.UpcomingLaunchesComponent)
      },
    ]
  },
  {
    path: 'capsules',
    loadComponent: () => import('./views/capsules/capsules.component')
      .then(m => m.CapsulesComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/capsules/all-capsules/all-capsules.component')
          .then(m => m.AllCapsulesComponent)
      },
      {
        path: 'search',
        loadComponent: () => import('./components/capsules/search-capsule/search-capsule.component')
          .then(m => m.SearchCapsuleComponent)
      }
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
