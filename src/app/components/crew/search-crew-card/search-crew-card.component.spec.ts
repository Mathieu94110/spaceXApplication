import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCrewCardComponent } from './search-crew-card.component';

describe('SearchCrewCardComponent', () => {
  let component: SearchCrewCardComponent;
  let fixture: ComponentFixture<SearchCrewCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCrewCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCrewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
