import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article
      class="border-solid border-2 border-sky-500 rounded flex relative overflow-hidden"
      [routerLink]="to"
    >
      <div class="aspect-2/3 flex items-center bg-[#E1EAF1]">
        <img srcset="{{ img }}, assets/err.png" alt="" />
      </div>
      <div
        class="description w-full absolute bottom-0 border border-solid text-center translate-y-full transition duration-200 py-4"
      >
        <h3 class="">{{ name }}</h3>
        <p class="">{{ year }} ( {{ country }} )</p>
      </div>
    </article>
  `,
  styles: `
    article {
      &:hover {
        .description {
          @apply translate-y-0;
        }
      }
    }
  `,
})
export class CardComponent {
  @Input() to?: string;
  @Input() img?: string;
  @Input() name?: string;
  @Input() year?: string;
  @Input() country?: string;
}
