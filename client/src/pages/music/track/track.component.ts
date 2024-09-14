import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [],
  template: `
    <audio controls>
      <source src="{{ src }}" type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  `,
  styles: `
    audio {
      width: 100%;
      background-color: rgba(255, 255, 255, 0.1);
      border-radius: 10px;
      
    }`,
})
export class TrackComponent {
  @Input() src: string =
    'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3';
}
