import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchCardComponent } from './launch-card.component';
import { LAUNCH_INFO_TOKEN } from '@app/constants/launches';
import { mockLaunch } from 'mocks/launches';

describe('LaunchCardComponent', () => {
  let component: LaunchCardComponent;
  let fixture: ComponentFixture<LaunchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchCardComponent],
      providers: [
        { provide: LAUNCH_INFO_TOKEN, useValue: mockLaunch }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
})
