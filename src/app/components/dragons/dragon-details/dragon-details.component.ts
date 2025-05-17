import { Component, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { DragonCardDetailsComponent } from './component/dragon-card-details/dragon-card-details.component';
import { DragonsService } from 'services/dragons.service';
import { IDragon } from 'interfaces/dragons';

@Component({
  selector: 'app-dragon-details',
  templateUrl: './dragon-details.component.html',
  styleUrls: ['./dragon-details.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatProgressSpinnerModule,
    RouterModule,
    DragonCardDetailsComponent
  ],
})

export class DragonDetailsComponent {
  private dragonService = inject(DragonsService);
  private route = inject(ActivatedRoute);

  dragonId = signal(this.route.snapshot.paramMap.get('id') ?? '');

  dragonResource = this.dragonService.getDragonDetailsResource(this.dragonId());

  isLoading = computed(() => this.dragonResource.isLoading());
  errorMessage = computed(() => {
    const error = this.dragonResource.error();
    return error ? (error as Error).message : null;
  });
  dragonDetails = computed(() => this.dragonResource.value() as IDragon | null);
}
