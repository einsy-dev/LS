import { Component } from '@angular/core';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [],
  template: `
    <div class="">
      <video controls preload="metadata">
        <source
          src="assets/video.mp4#t=5"
          type="video/mp4"
        />

      </video>
    </div>
  `,
})
export class MovieComponent {
  ngOnInit() {}
}

// https://cdn.pixabay.com/video/2019/11/24/29390-375947054_large.mp4
// https://cdn.pixabay.com/video/2022/10/06/133829-758327963_large.mp4
