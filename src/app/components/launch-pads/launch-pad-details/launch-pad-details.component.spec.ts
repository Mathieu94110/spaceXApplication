import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchPadDetailsComponent } from './launch-pad-details.component';

describe('LaunchPadDetailsComponent', () => {
  let component: LaunchPadDetailsComponent;
  let fixture: ComponentFixture<LaunchPadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchPadDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchPadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
