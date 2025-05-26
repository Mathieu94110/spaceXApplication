import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLaunchPadsComponent } from './all-launchpads.component';

describe('AllLaunchPadsComponent', () => {
  let component: AllLaunchPadsComponent;
  let fixture: ComponentFixture<AllLaunchPadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllLaunchPadsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AllLaunchPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
