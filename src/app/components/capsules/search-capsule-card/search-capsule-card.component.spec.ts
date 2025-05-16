import { TestBed } from '@angular/core/testing';
import { SearchCapsuleCardComponent } from './search-capsule-card.component';
import { CAPSULE_INFO_TOKEN } from '@app/constants/capsules';
import { ComponentFixture } from '@angular/core/testing';
import { mockCapsule } from 'mocks/capsules';

describe('SearchCapsuleCardComponent', () => {
  let fixture: ComponentFixture<SearchCapsuleCardComponent>;
  let component: SearchCapsuleCardComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCapsuleCardComponent],
      providers: [
        { provide: CAPSULE_INFO_TOKEN, useValue: mockCapsule }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCapsuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
