import { Component, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CapsulesService } from 'services/capsules.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ICapsule } from 'interfaces/capsules';

@Component({
  selector: 'app-capsule-details',
  templateUrl: './capsule-details.component.html',
  styleUrls: ['./capsule-details.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    RouterModule,
  ],
})

export class CapsuleDetailsComponent {
  private capsuleService = inject(CapsulesService);
  private route = inject(ActivatedRoute);

  capsuleId = signal(this.route.snapshot.paramMap.get('id') ?? '');

  capsuleResource = this.capsuleService.getCapsuleDetailsResource(this.capsuleId());

  isLoading = computed(() => this.capsuleResource.isLoading());
  errorMessage = computed(() => {
    const error = this.capsuleResource.error();
    return error ? (error as Error).message : null;
  });
  capsuleDetails = computed(() => this.capsuleResource.value() as ICapsule | null);
}
