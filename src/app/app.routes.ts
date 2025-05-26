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
      {
        path: 'search',
        loadComponent: () => import('./components/launches/search-launches/search-launches.component')
          .then(m => m.SearchLaunchesComponent)
      }, {
        path: ':id',
        loadComponent: () => import('./components/launches/launch-details/launch-details.component')
          .then(m => m.LaunchDetailsComponent)
      }
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
      },
      {
        path: ':id',
        loadComponent: () => import('./components/capsules/capsule-details/capsule-details.component')
          .then(m => m.CapsuleDetailsComponent)
      }
    ]
  },
  {
    path: 'dragons',
    loadComponent: () => import('./views/dragons/dragons.component')
      .then(m => m.DragonsComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/dragons/all-dragons/all-dragons.component')
          .then(m => m.AllDragonsComponent)
      },
      {
        path: 'search',
        loadComponent: () => import('./components/dragons/search-dragon/search-dragon.component')
          .then(m => m.SearchDragonComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./components/dragons/dragon-details/dragon-details.component')
          .then(m => m.DragonDetailsComponent)
      }
    ]
  },
  {
    path: 'launchpads',
    loadComponent: () => import('./views/dragons/dragons.component')
      .then(m => m.DragonsComponent),
    children: [
      {
        path: '',
        loadComponent: () => import('./components/launchpads/all-launchpads/all-launchpads.component')
          .then(m => m.AllLaunchPadsComponent)
      },
      {
        path: 'search',
        loadComponent: () => import('./components/launchpads/search-launchpads/search-launch-pads.component')
          .then(m => m.SearchLaunchPadsComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./components/launchpads/launchpad-details/launchpad-details.component')
          .then(m => m.LaunchPadDetailsComponent)
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
