import { CommonModule } from '@angular/common';
import { Component, computed } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CardLayoutComponent } from '@app/layouts/card-layout/card-layout.component';
import { LaunchPadsComponent } from '@app/views/launch-pads/launch-pads.component';

@Component({
  selector: 'app-all-launch-pads',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule, MatGridListModule, CardLayoutComponent, MatIconModule, MatButton],
  templateUrl: './all-launch-pads.component.html',
  styleUrls: ['./all-launch-pads.component.scss', '../../../views/launch-pads/launch-pads.component.scss']
})
export class AllLaunchPadsComponent extends LaunchPadsComponent {

  launchPads = computed(() => this.launchPadsService.allLaunchPadsResource.value() || []);
  launchPadsIsLoading = computed(() => this.launchPadsService.allLaunchPadsResource.isLoading());
  launchPadsError = computed(() => this.launchPadsService.allLaunchPadsResource.error());

  effect() {
    this.updateGridCols();
    window.addEventListener('resize', () => this.updateGridCols());
  }
  goToLaunchPadDetails(id: string) {
    this.router.navigate(['/launch-pads', id]);
  }
}
