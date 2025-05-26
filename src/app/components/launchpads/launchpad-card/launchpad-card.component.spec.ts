import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaunchPadCardComponent } from './launchpad-card.component';

describe('LaunchPadsCardComponent', () => {
  let component: LaunchPadCardComponent;
  let fixture: ComponentFixture<LaunchPadCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LaunchPadCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LaunchPadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
