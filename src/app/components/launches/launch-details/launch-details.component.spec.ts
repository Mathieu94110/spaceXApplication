import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchDetailsComponent } from './launch-details.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LaunchDetailsComponent', () => {
  let component: LaunchDetailsComponent;
  let fixture: ComponentFixture<LaunchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchDetailsComponent],
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

    fixture = TestBed.createComponent(LaunchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
