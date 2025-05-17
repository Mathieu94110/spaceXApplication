import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapsuleCardDetailsComponent } from './capsule-card-details.component';

describe('CapsuleCardDetailsComponent', () => {
  let component: CapsuleCardDetailsComponent;
  let fixture: ComponentFixture<CapsuleCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CapsuleCardDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapsuleCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
