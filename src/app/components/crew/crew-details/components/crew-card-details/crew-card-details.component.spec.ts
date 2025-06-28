import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewCardDetailsComponent } from './crew-card-details.component';

describe('CrewCardDetailsComponent', () => {
  let component: CrewCardDetailsComponent;
  let fixture: ComponentFixture<CrewCardDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrewCardDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrewCardDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
