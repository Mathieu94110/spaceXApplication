import { HttpClient } from '@angular/common/http';
import { Injectable, resource } from '@angular/core';
import { environment } from 'environments/environment';
import { ILaunch } from 'interfaces/launches';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  private launchesUrl = `${environment.apiUrl}/launches`;
  constructor(private http: HttpClient) { }


  allLaunchesResource = resource({
    loader: async (): Promise<ILaunch[]> =>
      (await fetch(`${this.launchesUrl}/`)).json(),
  });

  latestLauncheResource = resource({
    loader: async (): Promise<ILaunch> =>
      (await fetch(`${this.launchesUrl}/latest`)).json(),
  });


  nextLauncheResource = resource({
    loader: async (): Promise<ILaunch> =>
      (await fetch(`${this.launchesUrl}/next`)).json(),
  });

  pastLauncheResource = resource({
    loader: async (): Promise<ILaunch> =>
      (await fetch(`${this.launchesUrl}/past`)).json(),
  });

  upcomingLauncheRessouce = resource({
    loader: async (): Promise<ILaunch[]> =>
      (await fetch(`${this.launchesUrl}/upcoming`)).json(),
  });
}