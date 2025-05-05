import { ComponentFixture, TestBed, fakeAsync, flush, tick } from '@angular/core/testing';
import { SearchCapsuleComponent } from './search-capsule.component';
import { CapsulesService } from 'services/capsules.service';
import { of, throwError } from 'rxjs';
import { mockCapsules } from 'mocks/capsules';
import { ICapsule } from 'interfaces/capsules';
import { Component, Input, signal } from '@angular/core';

describe('SearchCapsuleComponent', () => {
  let fixture: ComponentFixture<SearchCapsuleComponent>;
  let component: SearchCapsuleComponent;
  let capsulesService: CapsulesService;

  beforeEach(() => {

    TestBed.configureTestingModule({
      imports: [SearchCapsuleComponent],
      providers: [CapsulesService],
    });

    fixture = TestBed.createComponent(SearchCapsuleComponent);
    component = fixture.componentInstance;
    capsulesService = TestBed.inject(CapsulesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  /*   it('should show loading spinner when loading is true', () => {
      capsulesService.searchCapsuleResource.setLoading(true);
      fixture.detectChanges();
  
      const spinner = fixture.nativeElement.querySelector('mat-spinner');
      expect(spinner).toBeTruthy();
    }); */
  it('should debounce search input and only call service once', fakeAsync(() => {
    spyOn(capsulesService, 'setCapsuleResearch');
    // user typed on input
    component.searchTerm.set('C');
    tick(100);
    component.searchTerm.set('Ca');
    tick(100);
    component.searchTerm.set('Cap');
    tick(100);
    component.searchTerm.set('Capsule');

    // Wait for the full debounce delay
    tick(400);

    fixture.detectChanges();
    flush();

    expect(capsulesService.setCapsuleResearch).toHaveBeenCalledTimes(1);
    expect(capsulesService.setCapsuleResearch).toHaveBeenCalledWith('Capsule');
  }));
  it('should reset all search-related states after call to resetSearchCapsules()', () => {
    component.searchTerm.set('Test');
    component.hasSearched.set(true);
    component.pendingSearchTerm.set('Test');
    component.hasLoadedOnce.set(true);
    capsulesService.searchCapsuleResource.set({
      docs: mockCapsules,
      totalDocs: 3,
      totalPages: 1,
    });

    component.resetSearchCapsules();

    expect(component.hasSearched()).toBeFalse();
    expect(component.pendingSearchTerm()).toBe('');
    expect(component.searchCapsulesList()).toEqual([]);
  });
  it('should show no result message when appropriate', fakeAsync(() => {
    component.searchTerm.set('invalid search');
    component.lastCompletedSearchTerm.set('invalid search');
    component.hasSearched.set(true);
    component.hasLoadedOnce.set(true);
    // searchCapsuleResource has no data on docs meaning that the API call did not retrieve any data
    capsulesService.searchCapsuleResource.set({ docs: [], totalDocs: 0, totalPages: 0 });

    tick(500);
    fixture.detectChanges();

    expect(component.showNoResultsMessage()).toBeTrue();
  }));
});


/*
 
    it('should display capsule cards when search results are available', fakeAsync(() => {
  // Simule la valeur retournée par l'API avec un observable
  /*     capsulesServiceSpy.searchCapsuleResource = {
        ...capsulesServiceSpy.searchCapsuleResource,
        value: of({
          docs: mockCapsules,
          totalDocs: 3,
          totalPages: 1
        }),
      };
 
      component.searchTerm.set('C1');
      tick(500); 
      fixture.detectChanges();
 
      const cards = fixture.nativeElement.querySelectorAll('.mock-search-card');
      expect(cards.length).toBe(4);
    }));
it('should display no result message when search returns empty', fakeAsync(() => {
    capsulesServiceSpy.searchCapsuleResource.value = () => ({
      docs: [],
      totalDocs: 0,
      totalPages: 0
    });
 
    component.searchTerm.set('XXXX');
    component.lastCompletedSearchTerm.set('XXXX');
    component.hasSearched.set(true);
    component.hasLoadedOnce.set(true);
 
    tick(500);
    fixture.detectChanges();
 
    const noResult = fixture.nativeElement.querySelector('.no-results-message');
    expect(noResult).toBeTruthy();
    expect(noResult.textContent).toContain('Aucun résultat trouvé');
  }));
 
  it('should display an error message when service fails', fakeAsync(() => {
    capsulesServiceSpy.searchCapsuleResource.error = () => ({ message: 'Erreur serveur' });
 
    component.searchTerm.set('C1');
    component.hasSearched.set(true);
    component.hasLoadedOnce.set(true);
 
    tick(500);
    fixture.detectChanges();
 
    const errorEl = fixture.nativeElement.querySelector('.error');
    expect(errorEl).toBeTruthy();
    expect(errorEl.textContent).toContain('Erreur serveur');
  })); */
