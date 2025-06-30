import { Component, input, output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { buttonColor, buttonSize, buttonVariant, cardStatus, iconPosition } from 'interfaces';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})

export class ButtonComponent {
  readonly active = input<cardStatus | undefined>();
  readonly color = input.required<buttonColor>();
  readonly size = input.required<buttonSize>();
  readonly variant = input.required<buttonVariant>();
  readonly iconPosition = input.required<iconPosition>();
  readonly disabled = input<boolean | undefined>();
  readonly icon = input.required<string>();
  readonly ariaLabel = input.required<string>();
  readonly click = output<MouseEvent>();

  get sizeClass(): string {
    return `btn-${this.size()}`;
  }

  get variantClass(): string {
    return this.variant() === 'default' ? '' : `btn-${this.variant()}`;
  }

  get colorClass(): string {
    return this.color() === 'default' ? '' : `btn-${this.color()}`;
  }

  handleClick(event: MouseEvent) {
    if (!this.disabled()) {
      this.click.emit(event);
    }
  }
}
