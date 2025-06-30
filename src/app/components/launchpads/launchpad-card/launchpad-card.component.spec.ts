import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchPadCardComponent } from './launchpad-card.component';
import { LAUNCH_PAD_INFO_TOKEN } from '@app/constants/launchPads';

describe('LaunchPadsCardComponent', () => {
  let component: LaunchPadCardComponent;
  let fixture: ComponentFixture<LaunchPadCardComponent>;
  let launchPadInfo = LAUNCH_PAD_INFO_TOKEN;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchPadCardComponent],
      providers: [
        {
          provide: launchPadInfo,
          useValue: {
            id: 'LP-001',
            name: 'Cape Canaveral',
            location: 'Florida, USA',
            status: 'active'
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchPadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
