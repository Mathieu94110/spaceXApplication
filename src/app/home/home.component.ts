import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { HOME_SECTION_ITEMS } from '@app/constants/home';
@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  sectionItems = HOME_SECTION_ITEMS;

}
