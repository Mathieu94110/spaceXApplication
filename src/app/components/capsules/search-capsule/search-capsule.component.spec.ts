import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchCapsuleComponent } from './search-capsule.component';
import { CapsulesService } from 'services/capsules.service';
import { CAPSULE_INFO_TOKEN } from '@app/constants/capsules';
import { CapsuleCardComponent } from '../capsule-card/capsule-card/capsule-card.component';
import { mockCapsule } from 'mocks/capsules';
import { MockSearchLayoutComponent } from 'mocks/search-layout';

describe('SearchCapsuleComponent', () => {
  let fixture: ComponentFixture<SearchCapsuleComponent>;
  let component: SearchCapsuleComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SearchCapsuleComponent, MockSearchLayoutComponent, CapsuleCardComponent],
      providers: [
        { provide: CAPSULE_INFO_TOKEN, useValue: mockCapsule },
        { provide: CapsulesService, useValue: {} }
      ]
    });

    fixture = TestBed.createComponent(SearchCapsuleComponent);
    component = fixture.componentInstance;
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should have CapsuleCardComponent as cardComponent', () => {
    component.cardComponent = CapsuleCardComponent;
    expect(component.cardComponent).toBe(CapsuleCardComponent);
  });

  it('should inject CAPSULE_INFO_TOKEN correctly', () => {
    const injected = TestBed.inject(CAPSULE_INFO_TOKEN);
    expect(injected).toEqual(mockCapsule);
  });
});
