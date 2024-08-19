import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article
      class="border-solid border-2 border-sky-500 rounded flex relative"
      [routerLink]="to"
    >
      <div class="aspect-2/3 flex items-center bg-[#E1EAF1]">
        <img srcset="{{ img }}, assets/err.png" alt="" class="bg-red-500" />
      </div>
      <div class="w-full absolute bottom-0 border border-solid text-center">
        <h3 class="">{{ name }}</h3>
        <p class="">{{ year }}</p>
        <p class="">{{ country }}</p>
        <p class="">{{ genre }}</p>
        <p class="">{{ description }}</p>
        <p class="">{{ rating }}</p>
      </div>
    </article>
  `,
})
export class MovieCardComponent {
  @Input() to?: string;
  @Input() img?: string;
  @Input() name?: string;
  @Input() year?: string;
  @Input() country?: string;
  @Input() genre?: string;
  @Input() description?: string;
  @Input() rating?: string;
}
