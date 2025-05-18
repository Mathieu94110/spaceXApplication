import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapsuleDetailsComponent } from './capsule-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CapsuleDetailsComponent', () => {
  let component: CapsuleDetailsComponent;
  let fixture: ComponentFixture<CapsuleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapsuleDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'C-102',
              }
            },
            params: of({ id: 'C-102' }),
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CapsuleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
