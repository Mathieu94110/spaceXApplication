import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CapsulesComponent } from './capsules.component';
import { ActivatedRoute } from '@angular/router';
import { CAPSULE_INFO_TOKEN } from '@app/constants/capsules';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('DragonsComponent', () => {
  let component: CapsulesComponent;
  let fixture: ComponentFixture<CapsulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapsulesComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
        { provide: CAPSULE_INFO_TOKEN, useValue: { name: 'Mock Capsule' } },
        provideAnimations(),
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
