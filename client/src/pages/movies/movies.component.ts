import { Component, Input } from '@angular/core';
import { MovieCardComponent } from './card/movie.card.component';

@Component({
  standalone: true,
  imports: [MovieCardComponent],
  template: `
    <section>
      @for (item of items; track $index) {
      <app-movie-card
        to="/movie/{{ item.id }}"
        img="{{ item.img }}"
        name="{{ item.name }}"
        year="{{ item.year }}"
        country="{{ item.country }}"
        genre="{{ item.genre }}"
        description="{{ item.description }}"
        rating="{{ item.rating }}"
      />
      }
    </section>
  `,
})
export class MoviesComponent {
  @Input() items: any[] = [
    {
      id: 1,
      img: null,
      name: 'Unstoppable',
      year: 2012,
      country: 'USA',
      genre: 'Action',
      description: null,
      rating: '3/5',
    },
  ];
}
