import { Component, Input } from '@angular/core';
import { MovieCardComponent } from './card/movie.card.component';
import { FilterComponent } from './filter/filter.component';
import { PaginationComponent } from '../../widgets/pagination/pagination.component';

@Component({
  standalone: true,
  imports: [MovieCardComponent, FilterComponent, PaginationComponent],
  template: `
    <app-filter />
    <section class="grid gap-5 p-4">
      @for (item of items; track $index) {
      <app-movie-card
        to="/movie/{{ item.id }}"
        img="{{ item.img }}"
        name="{{ item.name }}"
        year="{{ item.year }}"
        country="{{ item.country }}"
        class=" cursor-pointer hover:scale-105 transition duration-200"
      />
      }
    </section>
    <app-pagination />
  `,
  styles: `
  section {
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: 1280px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
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
