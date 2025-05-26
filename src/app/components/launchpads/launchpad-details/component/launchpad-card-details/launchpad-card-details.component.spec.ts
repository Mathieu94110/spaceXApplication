import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchPadCardDetailsComponent } from './launchpad-card-details.component';
import { mockLaunchPad } from 'mocks/launchpad';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LaunchPadCardDetailsComponent', () => {
  let component: LaunchPadCardDetailsComponent;
  let fixture: ComponentFixture<LaunchPadCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchPadCardDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: {
              paramMap: {
                get: () => null
              }
            }
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LaunchPadCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('launchPadInfo', mockLaunchPad);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
