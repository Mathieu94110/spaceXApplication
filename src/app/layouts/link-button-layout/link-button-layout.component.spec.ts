import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { LinkButtonLayoutComponent } from './link-button-layout.component';


@Component({
  standalone: true,
  imports: [LinkButtonLayoutComponent],
  template: `<app-link-button-layout [link]="link" [title]="title" />`
})
class TestHostComponent {
  link = '/test-url';
  title = 'Test Button';
}

describe('LinkButtonLayoutComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
      providers: [
        provideAnimations(),
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
    const componentEl = fixture.nativeElement.querySelector('app-link-button-layout');
    expect(componentEl).toBeTruthy();
  });
});
