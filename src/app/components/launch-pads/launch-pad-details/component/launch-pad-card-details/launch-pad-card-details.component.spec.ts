import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchPadCardDetailsComponent } from './launch-pad-card-details.component';

describe('LaunchPadCardDetailsComponent', () => {
  let component: LaunchPadCardDetailsComponent;
  let fixture: ComponentFixture<LaunchPadCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchPadCardDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchPadCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
