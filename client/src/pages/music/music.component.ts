import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TrackComponent } from './track/track.component';
import { AudioPlayerComponent } from '../../widgets/audio.player/audio.player.component';

@Component({
  selector: 'app-music',
  standalone: true,
  imports: [FormsModule, TrackComponent, AudioPlayerComponent],
  template: `
    <div class="flex flex-col gap-2">
      @for (item of arr; track $index) {
      <app-track />
      }
    </div>
  `,
})
export class MusicComponent {
  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
