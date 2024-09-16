import { Component } from '@angular/core';

@Component({
  selector: 'app-video-player',
  standalone: true,
  template: `
    <video
      #target
      class="video-js w-full aspect-video h-full"
      preload="auto"
      controls="false"
    ></video>
  `,
})
export class VideoPlayerComponent {
  constructor() {}
}
