import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchLaunchPadsComponent } from './search-launch-pads.component';

describe('SearchLaunchPadsComponent', () => {
  let component: SearchLaunchPadsComponent;
  let fixture: ComponentFixture<SearchLaunchPadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchLaunchPadsComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SearchLaunchPadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
