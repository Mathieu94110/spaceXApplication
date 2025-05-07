import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDragonComponent } from './search-dragon.component';

describe('SearchDragonComponent', () => {
  let component: SearchDragonComponent;
  let fixture: ComponentFixture<SearchDragonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchDragonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchDragonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
