import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { ILaunch } from 'interfaces/launches';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LaunchesService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  /*   async getAllLaunches(cocktailId: string) {
      await fetch(`${apiUrl}/launches`, {
        method: 'DELETE',
      });
      this.cocktailsResource.reload();
    }
  
    async getLatestLaunche(cocktailForm: CocktailForm) {
      const response = await fetch(`${BASE_URL}?delay=3`, {
        method: 'POST',
        body: JSON.stringify(cocktailForm),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const body = await response.json();
      if (response.ok) {
        this.cocktailsResource.reload();
      } else {
        throw new Error(body);
      }
    }
  
    async getNextLaunche(cocktail: Cocktail) {
      const { _id, ...restCocktail } = cocktail;
      const response = await fetch(`${BASE_URL}/${_id}`, {
        method: 'PATCH',
        body: JSON.stringify(restCocktail),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const body = await response.json();
      if (response.ok) {
        this.cocktailsResource.reload();
      } else {
        throw new Error(body);
      }
    }
  
    async getOneLaunche(cocktail: Cocktail) {
      const { _id, ...restCocktail } = cocktail;
      const response = await fetch(`${BASE_URL}/${_id}`, {
        method: 'PATCH',
        body: JSON.stringify(restCocktail),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const body = await response.json();
      if (response.ok) {
        this.cocktailsResource.reload();
      } else {
        throw new Error(body);
      }
    }
  
    async getPastLaunche(cocktail: Cocktail) {
      const { _id, ...restCocktail } = cocktail;
      const response = await fetch(`${BASE_URL}/${_id}`, {
        method: 'PATCH',
        body: JSON.stringify(restCocktail),
        headers: {
          'Content-type': 'application/json',
        },
      });
      const body = await response.json();
      if (response.ok) {
        this.cocktailsResource.reload();
      } else {
        throw new Error(body);
      }
    } */

  getUpcomingLaunche(): Observable<ILaunch[]> {
    return this.http.get<ILaunch[]>(`${this.apiUrl}/launches/upcoming`);
    /*     const response = await fetch(`${this.apiUrl}/launches/upcoming`, {
          headers: {
            'Content-type': 'application/json',
          },
        });
        const body = await response.json();
        if (response.ok) {
          console.log({ response })
        } else {
          throw new Error(body);
        } */
  }
}