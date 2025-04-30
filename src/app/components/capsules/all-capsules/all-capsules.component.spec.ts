import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllCapsulesComponent } from './all-capsules.component';

describe('AllCapsulesComponent', () => {
  let component: AllCapsulesComponent;
  let fixture: ComponentFixture<AllCapsulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllCapsulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllCapsulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
