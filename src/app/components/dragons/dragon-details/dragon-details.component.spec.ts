import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragonDetailsComponent } from './dragon-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('DragonDetailsComponent', () => {
  let component: DragonDetailsComponent;
  let fixture: ComponentFixture<DragonDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonDetailsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => 'dragon-123',
              }
            },
            params: of({ id: 'dragon-123' }),
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DragonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
