import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDragonsComponent } from './all-dragons.component';

describe('AllDragonsComponent', () => {
  let component: AllDragonsComponent;
  let fixture: ComponentFixture<AllDragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllDragonsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllDragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
