import { Component } from '@angular/core';
import { PlayerComponent } from '@widgets';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [PlayerComponent],
  template: `
    <div class="">
      <app-player
        class=" w-screen"
        [options]="{
          controls: true,
          muted: false,
          loop: true,
          autoplay: false,
          sources: [{ src: 'http://localhost:3000/movie/test', type: 'video/mp4' }]
        }"
      ></app-player>
    </div>
  `,
})
export class MovieComponent {
  ngOnInit() {

  }
}
