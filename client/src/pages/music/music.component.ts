import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackComponent } from './track/track.component';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [FormsModule, TrackComponent],
  template: `
    <main>
      <app-track />
    </main>
  `,
})
export class MusicComponent {}
