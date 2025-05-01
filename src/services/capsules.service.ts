import { Injectable, resource, signal } from '@angular/core';
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

  searchTerm = signal<string | null>(null);

  searchCapsuleResource = resource({
    request: this.searchTerm,
    loader: async (value) => {
      if (!value) return null;

      const requestBody = {
        query: { serial: value },
        options: {
          populate: [
            "payloads"
          ], page: 1
        },
      };
      try {
        const response = await fetch(`${this.capsulesUrl}/query`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(requestBody),
        });
        if (!response.ok) {
          throw new Error('Erreur lors du chargement des données.');
        }
        return response.json();
      } catch (error) {
        console.error('Error fetching capsule data:', error);
        throw new Error('Erreur lors du chargement des données.');
      }
    },
  });

  setCapsuleResearch(value: string) {
    this.searchTerm.set(value);
  }
}