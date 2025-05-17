import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LaunchCardDetailsComponent } from './launch-card-details.component';

describe('LaunchCardDetailsComponent', () => {
  let component: LaunchCardDetailsComponent;
  let fixture: ComponentFixture<LaunchCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchCardDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LaunchCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
