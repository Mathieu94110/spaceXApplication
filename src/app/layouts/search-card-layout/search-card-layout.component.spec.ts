import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCardLayoutComponent } from './search-card-layout.component';

describe('SearchCardLayoutComponent', () => {
  let component: SearchCardLayoutComponent;
  let fixture: ComponentFixture<SearchCardLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCardLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCardLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
