import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonCardDetailsComponent } from './dragon-card-details.component';

describe('DragonCardDetailsComponent', () => {
  let component: DragonCardDetailsComponent;
  let fixture: ComponentFixture<DragonCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonCardDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
