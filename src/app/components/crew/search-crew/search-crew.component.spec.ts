import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCrewsComponent } from './search-crew.component';

describe('SearchCrewsComponent', () => {
  let component: SearchCrewsComponent;
  let fixture: ComponentFixture<SearchCrewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCrewsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchCrewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
