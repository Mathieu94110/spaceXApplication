import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { ButtonComponent } from '@app/shared/button/button.component';
import { getStatusClass } from '@app/utils/cards.utils';
import { LaunchPadsComponent } from '@app/views/launchpads/launchpads.component';

@Component({
  selector: 'app-all-launchpads',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent, MatIconModule, ButtonComponent],
  templateUrl: './all-launchpads.component.html',
  styleUrls: ['./all-launchpads.component.scss', '../../../views/launchpads/launchpads.component.scss']
})
export class AllLaunchPadsComponent extends LaunchPadsComponent {

  launchPads = computed(() => this.launchPadsService.allLaunchPadsResource.value() || []);
  launchPadsIsLoading = computed(() => this.launchPadsService.allLaunchPadsResource.isLoading());
  launchPadsError = computed(() => this.launchPadsService.allLaunchPadsResource.error());
  getLaunchPadStatusClass = getStatusClass;

  effect() {
    this.updateGridCols();
    window.addEventListener('resize', () => this.updateGridCols());
  }
}
