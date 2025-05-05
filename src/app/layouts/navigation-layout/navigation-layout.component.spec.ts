import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NavigationLayoutComponent } from './navigation-layout.component';

@Component({
  standalone: true,
  imports: [NavigationLayoutComponent],
  template: `<app-navigation-layout [navLinks]="navLinks" />`
})
class TestHostComponent {
  navLinks = [
    { label: 'Home', path: '/' },
    { label: 'Capsules', path: '/capsules' }
  ];
}

describe('NavigationLayoutComponent', () => {
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
    const componentEl = fixture.nativeElement.querySelector('app-navigation-layout');
    expect(componentEl).toBeTruthy();
  });
});
