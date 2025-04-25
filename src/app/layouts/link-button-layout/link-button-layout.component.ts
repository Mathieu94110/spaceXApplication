import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-link-button-layout',
  imports: [RouterModule],
  templateUrl: './link-button-layout.component.html',
  styleUrl: './link-button-layout.component.scss',
  animations: [
    trigger('buttonBgReveal', [
      state('normal', style({ transform: 'scaleY(0)', transformOrigin: 'top' })), // <- change ici
      state('hover', style({ transform: 'scaleY(1)', transformOrigin: 'bottom' })), // <- comme avant
      transition('normal => hover', [
        style({ transformOrigin: 'bottom' }),
        animate('300ms ease-out')
      ]),
      transition('hover => normal', [
        style({ transformOrigin: 'top' }),
        animate('300ms ease-in')
      ])
    ]),
  ]
})
export class LinkButtonLayoutComponent {
  readonly title = input.required<string>();
  readonly link = input.required<string>();

  hoveredBtn = signal(false);
  setBtnHover(val: boolean) {
    this.hoveredBtn.set(val);
  }
}
