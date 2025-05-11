import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragonCardComponent } from './dragon-card.component';
import { DRAGON_INFO_TOKEN } from '@app/constants/dragons';
import { mockDragon } from 'mocks/dragons';

describe('DragonCardComponent', () => {
  let component: DragonCardComponent;
  let fixture: ComponentFixture<DragonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonCardComponent],
      providers: [
        { provide: DRAGON_INFO_TOKEN, useValue: mockDragon }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DragonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
