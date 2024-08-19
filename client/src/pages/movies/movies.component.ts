import { Component, Input } from '@angular/core';
import { MovieCardComponent } from './card/movie.card.component';

@Component({
  standalone: true,
  imports: [MovieCardComponent],
  template: `
    <section class="container">
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
  styles: `
  .container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    background-color: #f2f2f2;
    gap: 20px;
    padding: 20px;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }
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
