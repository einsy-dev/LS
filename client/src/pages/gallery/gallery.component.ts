import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  template: `
    <div class="container">
      @for (item of imgs; track $index) { @defer ( on viewport ) {
      <img src="{{ item }}" alt="" class="w-full mb-2 rounded-md " />
      } @placeholder {
      <div class="">Loading</div>
      } }
    </div>
  `,
  styles: `
    .container {
    column-count: 3;

    gap: 10px;
    }`,
})
export class GalleryComponent {
  imgs = [
    'https://picsum.photos/id/237/400/600',
    'https://picsum.photos/id/241/500/500',
    'https://picsum.photos/id/239/800/600',
    'https://picsum.photos/id/238/600/600',
    'https://picsum.photos/id/238/600/600',
    'https://picsum.photos/id/240/400/500',
    'https://picsum.photos/id/242/700/400',
    'https://picsum.photos/id/241/500/500',
    'https://picsum.photos/id/237/400/600',
    'https://picsum.photos/id/239/800/600',
    'https://picsum.photos/id/237/400/600',
    'https://picsum.photos/id/240/400/500',
    'https://picsum.photos/id/239/800/600',
    'https://picsum.photos/id/242/700/400',
    'https://picsum.photos/id/241/500/500',
    'https://picsum.photos/id/238/600/600',
    'https://picsum.photos/id/242/700/400',
    'https://picsum.photos/id/240/400/500',
  ];
}
