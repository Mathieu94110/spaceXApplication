import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapsuleCardDetailsComponent } from './capsule-card-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { mockCapsule } from 'mocks/capsules';

describe('CapsuleCardDetailsComponent (with Signal input)', () => {
  let fixture: ComponentFixture<CapsuleCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapsuleCardDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({ id: 'C-101' }),
            snapshot: {
              paramMap: {
                get: () => 'C-101',
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(CapsuleCardDetailsComponent);
    fixture.componentRef.setInput('capsuleInfo', mockCapsule);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
