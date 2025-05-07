
import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { MatIconModule } from '@angular/material/icon';
import { DragonsComponent } from '@app/views/dragons/dragons.component';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-all-dragons',
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent, MatIconModule, MatButton],
  templateUrl: './all-dragons.component.html',
  styleUrls: ['./all-dragons.component.scss', '../../../views/dragons/dragons.component.scss']
})
export class AllDragonsComponent extends DragonsComponent {
  dragons = computed(() => this.dragonsService.allDragonsResource.value() || []);
  dragonsIsLoading = computed(() => this.dragonsService.allDragonsResource.isLoading());
  dragonsError = computed(() => this.dragonsService.allDragonsResource.error());

  effect() {
    this.updateGridCols();
    window.addEventListener('resize', () => this.updateGridCols());
  }
}
