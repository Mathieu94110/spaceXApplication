import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchCardDetailsComponent } from './launch-card-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { mockLaunch } from 'mocks/launches';

describe('LaunchCardDetailsComponent (with Signal input)', () => {
  let fixture: ComponentFixture<LaunchCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchCardDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'falcon-9' }),
            snapshot: {
              paramMap: {
                get: () => 'falcon-9',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchCardDetailsComponent);
    fixture.componentRef.setInput('launchInfo', mockLaunch);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
