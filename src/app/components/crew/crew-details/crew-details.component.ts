import { Component, signal, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CrewService } from 'services/crew.service';
import { ICrew } from 'interfaces/crew';
import { CrewCardDetailsComponent } from './components/crew-card-details/crew-card-details.component';

@Component({
  selector: 'app-crew-details',
  imports: [CommonModule,
    MatProgressSpinnerModule,
    RouterModule,
    CrewCardDetailsComponent
  ],
  templateUrl: './crew-details.component.html',
  styleUrl: './crew-details.component.scss'
})
export class CrewDetailsComponent {

  private crewService = inject(CrewService);
  private route = inject(ActivatedRoute);

  crewId = signal(this.route.snapshot.paramMap.get('id') ?? '');

  crewResource = this.crewService.getCrewDetailsResource(this.crewId());

  isLoading = computed(() => this.crewResource.isLoading());
  errorMessage = computed(() => {
    const error = this.crewResource.error();
    return error ? (error as Error).message : null;
  });
  crewDetails = computed(() => this.crewResource.value() as ICrew | null);
}





