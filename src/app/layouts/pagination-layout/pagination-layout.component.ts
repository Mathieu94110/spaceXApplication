import { Component, input, output } from '@angular/core';
import { ButtonComponent } from '@app/shared/button/button.component';

@Component({
  selector: 'app-pagination-layout',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './pagination-layout.component.html',
  styleUrl: './pagination-layout.component.scss'
})
export class PaginationLayoutComponent {
  readonly hasData = input.required<boolean>();
  readonly isPrevButtonVisible = input.required<boolean>();
  readonly isNextButtonVisible = input.required<boolean>();
  previousClicked = output<void>();
  nextClicked = output<void>();

  prevPage() {
    this.previousClicked.emit();
  }
  nextPage() {
    this.nextClicked.emit();
  }
}
