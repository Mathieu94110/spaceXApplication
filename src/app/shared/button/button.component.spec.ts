import { Component, signal } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from './button.component';

@Component({
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <app-button
      [color]="'primary'"
      [size]="'medium'"
      [variant]="'outline'"
      [iconPosition]="'start'"
      [icon]="'home'"
      [disabled]="disabledSignal()"
      [ariaLabel]="'Test Button'"
      (click)="clicked = true"
    >
      Click Me
    </app-button>
  `
})
class TestHostComponent {
  clicked = false;
  disabledSignal = signal(false);
}

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>;
  let hostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestHostComponent);
    hostComponent = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should render the button with correct classes', () => {
    const buttonEl: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(buttonEl.classList).toContain('btn-medium');
    expect(buttonEl.classList).toContain('btn-outline');
    expect(buttonEl.classList).toContain('btn-primary');
  });

  it('should display icon at start when iconPosition is "start"', () => {
    const icon = fixture.nativeElement.querySelector('mat-icon');
    expect(icon).toBeTruthy();
    expect(icon.textContent.trim()).toBe('home');
  });

  it('should emit click event when clicked', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();
    expect(hostComponent.clicked).toBeTrue();
  });

  it('should not emit click event when disabled', () => {
    hostComponent.clicked = false;
    hostComponent.disabledSignal.set(true);
    fixture.detectChanges();

    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    button.click();
    fixture.detectChanges();

    expect(hostComponent.clicked).toBeFalse();
  });

  it('should have proper aria-label', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    expect(button.getAttribute('aria-label')).toBe('Test Button');
  });
});
