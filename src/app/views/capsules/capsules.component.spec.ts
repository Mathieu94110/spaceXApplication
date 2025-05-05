import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapsulesComponent } from './capsules.component';
import { CapsulesService } from 'services/capsules.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('CapsulesComponent', () => {
  let component: CapsulesComponent;
  let fixture: ComponentFixture<CapsulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapsulesComponent],
      providers: [
        {
          provide: CapsulesService,
          useValue: {
            getCapsules: () => of([]),
          }
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            snapshot: { paramMap: new Map() }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CapsulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
