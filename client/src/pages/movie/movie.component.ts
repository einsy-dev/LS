import { Component } from '@angular/core';
import { PlayerComponent } from '@widgets';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [PlayerComponent],
  template: `
    <div class="">
      <video controls>
        <source
          src="https://cdn.pixabay.com/video/2022/10/06/133829-758327963_large.mp4"
          type="video/mp4"
        />
      </video>
      <!-- <app-player
        class="w-full"
        [options]="{
          controls: true,
          muted: false,
          loop: false,
          autoplay: true,
          sources: [
            {
              src: ' https://cdn.pixabay.com/video/2019/11/24/29390-375947054_large.mp4',
              type: 'video/mp4'
            }
          ]
        }"
      ></app-player> -->
    </div>
  `,
})
export class MovieComponent {
  ngOnInit() {}
}

// https://cdn.pixabay.com/video/2019/11/24/29390-375947054_large.mp4
// https://cdn.pixabay.com/video/2022/10/06/133829-758327963_large.mp4
