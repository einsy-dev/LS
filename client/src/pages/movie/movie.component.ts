import { Component } from '@angular/core';
import videojs from 'video.js';
import { PlayerComponent } from './player/player.component';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [PlayerComponent],
  template: `
    <div class="">
      <app-player
        class=" w-screen"
        [options]="{
          loop: true,
          autoplay: false,
          sources: [{ src: '/test.mp4', type: 'video/mp4' }]
        }"
      ></app-player>
    </div>
  `,
})
export class MovieComponent {}
