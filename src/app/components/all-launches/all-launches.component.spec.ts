import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLaunchesComponent } from './all-launches.component';

describe('AllLaunchesComponent', () => {
  let component: AllLaunchesComponent;
  let fixture: ComponentFixture<AllLaunchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllLaunchesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllLaunchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
