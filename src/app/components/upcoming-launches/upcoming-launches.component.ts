import { Component, inject, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesService } from 'services/launches.service';
import { ILaunch } from 'interfaces/launches';

@Component({
  selector: 'app-upcoming-launches',
  imports: [],
  templateUrl: './upcoming-launches.component.html',
  styleUrls: ['./upcoming-launches.component.scss', '../../views/launches/launches.component.scss']
})
export class UpcomingLaunchesComponent {
  protected readonly launchesService = inject(LaunchesService);

  // 🧠 Signals déclaratifs
  launches = signal<ILaunch[]>([]);
  loading = signal(true);

  constructor() {
    effect(() => {
      this.launchesService.getUpcomingLaunche().subscribe({
        next: (data) => {
          this.launches.set(data);
          this.loading.set(false);
        },
        error: (err) => {
          console.error('Erreur de chargement des lancements :', err);
          this.loading.set(false);
        },
      });
    });
  }
}









