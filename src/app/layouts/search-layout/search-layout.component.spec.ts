import { TestBed } from '@angular/core/testing';
import { SearchLayoutComponent } from './search-layout.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MockSearchService } from 'mocks/search';

describe('SearchLayoutComponent', () => {
  let mockSearchService: MockSearchService;

  beforeEach(() => {
    mockSearchService = new MockSearchService();

    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        SearchLayoutComponent,
      ],
      providers: [
        { provide: MockSearchService, useValue: mockSearchService }
      ]
    }).compileComponents();
  });

  it('should create the component', () => {
    const fixture = TestBed.createComponent(SearchLayoutComponent);
    const component = fixture.componentInstance;
    component.searchService = mockSearchService;
    expect(component).toBeTruthy();
  });

  it('should set search query when onSearch is called', () => {
    const fixture = TestBed.createComponent(SearchLayoutComponent);
    const component = fixture.componentInstance;
    component.searchService = mockSearchService;


    spyOn(mockSearchService, 'setSearchQuery');

    // Appeler onSearch
    component.searchTerm.set('test query');
    component.onSearch();


    expect(mockSearchService.setSearchQuery).toHaveBeenCalledWith('test query');
  });
});