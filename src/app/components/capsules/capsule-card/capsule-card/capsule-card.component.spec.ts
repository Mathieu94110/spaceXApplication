import { TestBed } from '@angular/core/testing';
import { CapsuleCardComponent } from './capsule-card.component';
import { CAPSULE_INFO_TOKEN } from '@app/constants/capsules';
import { ComponentFixture } from '@angular/core/testing';
import { mockCapsule } from 'mocks/capsules';

describe('CapsuleCardComponent', () => {
  let fixture: ComponentFixture<CapsuleCardComponent>;
  let component: CapsuleCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapsuleCardComponent],
      providers: [
        { provide: CAPSULE_INFO_TOKEN, useValue: mockCapsule }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(CapsuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
