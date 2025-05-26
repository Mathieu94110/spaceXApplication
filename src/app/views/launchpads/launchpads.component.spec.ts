import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchPadsComponent } from './launchpads.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('LaunchPadsComponent', () => {
  let component: LaunchPadsComponent;
  let fixture: ComponentFixture<LaunchPadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchPadsComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParams: of({}),
            snapshot: {
              paramMap: {
                get: () => null
              }
            }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(LaunchPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});