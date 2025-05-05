import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { ICapsule } from 'interfaces/capsules';
import { SearchCardLayoutComponent } from './search-card-layout.component';

const mockCapsule: ICapsule = {
  serial: 'C101',
  id: '1',
  type: 'Dragon 1.0',
  status: 'active',
  dragon: 'c102',
  reuse_count: 2,
  water_landings: 1,
  land_landings: 1,
  last_update: 'Test capsule',
  launches: 'Dragon 1 second launch'
};

@Component({
  standalone: true,
  imports: [SearchCardLayoutComponent],
  template: `<app-search-card-layout [capsuleInfo]="capsuleInfo" />`
})
class TestHostComponent {
  capsuleInfo = mockCapsule;
}

describe('SearchCardLayoutComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({}),
            queryParams: of({}),
            snapshot: { paramMap: new Map() }
          }
        }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    fixture.detectChanges();
  });

  it('should create', () => {
    const componentEl = fixture.nativeElement.querySelector('app-search-card-layout');
    expect(componentEl).toBeTruthy();
  });
});
