import { Injectable, resource } from '@angular/core';
import { environment } from 'environments/environment';
import { ICapsule } from 'interfaces/capsules';

@Injectable({
  providedIn: 'root',
})
export class CapsulesService {
  private capsulesUrl = `${environment.apiUrl}/capsules`;


  allCapsulesResource = resource({
    loader: async (): Promise<ICapsule[]> =>
      (await fetch(`${this.capsulesUrl}`)).json(),
  });

  /*   oneCapsuleResource = resource({
      loader: async (id: string): Promise<ICapsule> =>
        (await fetch(`${this.capsulesUrl}/${id}`)).json(),
    }); */

}