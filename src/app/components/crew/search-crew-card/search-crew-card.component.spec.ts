import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchCrewCardComponent } from './search-crew-card.component';
import { CREW_INFO_TOKEN } from '@app/constants/crews';

describe('SearchCrewCardComponent', () => {
  let component: SearchCrewCardComponent;
  let fixture: ComponentFixture<SearchCrewCardComponent>;
  let crewInfo = CREW_INFO_TOKEN;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCrewCardComponent],
      providers: [
        {
          provide: crewInfo,
          useValue: {
            id: 'c01',
            name: 'Mock Crew Member',
            role: 'Technician',
            status: 'active'
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchCrewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});