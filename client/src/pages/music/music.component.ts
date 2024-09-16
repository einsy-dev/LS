import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackComponent } from './track/track.component';
import { AudioPlayerComponent } from '../../widgets/audio.player/audio.player.component';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [FormsModule, TrackComponent, AudioPlayerComponent],
  template: `
    <main>
      <app-track />
    </main>
  `,
})
export class MusicComponent {}
