import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchPadDetailsComponent } from './launchpad-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LaunchPadDetailsComponent', () => {
  let component: LaunchPadDetailsComponent;
  let fixture: ComponentFixture<LaunchPadDetailsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchPadDetailsComponent],
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

    fixture = TestBed.createComponent(LaunchPadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
