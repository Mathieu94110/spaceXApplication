import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DragonsComponent } from './dragons.component';
import { ActivatedRoute } from '@angular/router';
import { DRAGON_INFO_TOKEN } from '@app/constants/dragons';
import { provideAnimations } from '@angular/platform-browser/animations';

describe('DragonsComponent', () => {
  let component: DragonsComponent;
  let fixture: ComponentFixture<DragonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonsComponent],
      providers: [
        { provide: ActivatedRoute, useValue: {} },
        { provide: DRAGON_INFO_TOKEN, useValue: { name: 'Mock Dragon' } },
        provideAnimations(),
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DragonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
