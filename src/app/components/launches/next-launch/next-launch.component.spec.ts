import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NextLaunchComponent } from './next-launch.component';

describe('NextLaunchesComponent', () => {
  let component: NextLaunchComponent;
  let fixture: ComponentFixture<NextLaunchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NextLaunchComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NextLaunchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
