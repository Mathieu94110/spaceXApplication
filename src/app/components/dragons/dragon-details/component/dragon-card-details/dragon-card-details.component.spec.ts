import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragonCardDetailsComponent } from './dragon-card-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { mockDragon } from 'mocks/dragons';

describe('DragonCardDetailsComponent (with Signal input)', () => {
  let fixture: ComponentFixture<DragonCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonCardDetailsComponent],
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

    fixture = TestBed.createComponent(DragonCardDetailsComponent);
    fixture.componentRef.setInput('dragonInfo', mockDragon);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });
});
