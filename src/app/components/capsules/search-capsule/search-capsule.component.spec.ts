import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCapsuleComponent } from './search-capsule.component';

describe('SearchCapsuleComponent', () => {
  let component: SearchCapsuleComponent;
  let fixture: ComponentFixture<SearchCapsuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCapsuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCapsuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
