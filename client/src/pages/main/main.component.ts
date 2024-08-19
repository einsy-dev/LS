import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  standalone: true,
  imports: [CardComponent],
  template: `
    <div class="container">
      <app-card class="movies aspect-video" [to]="'/movies'">Movies</app-card>
      <app-card class="books aspect-square" [to]="'/books'">Books</app-card>
      <app-card class="music aspect-square" [to]="'/music'">Music</app-card>
      <app-card class="gallery aspect-square" [to]="'/photos'"
        >Gallery</app-card
      >
      <app-card class="games aspect-square" [to]="'/games'">Games</app-card>
      <app-card class="messenger aspect-video" [to]="'/messenger'"
        >Messenger</app-card
      >
    </div>
  `,
  styles: `
    .container {
      display: grid;
      gap: 0.5rem;
      grid-template-areas:
        "movies movies"
        "books music"
        "gallery games"
        "messenger messenger";
    }
    .movies { grid-area: movies; }
    .books { grid-area: books; }
    .music { grid-area: music; }
    .gallery { grid-area: gallery; }
    .games { grid-area: games; }
    .messenger { grid-area: messenger; }
  `,
})
export class MainComponent {}
