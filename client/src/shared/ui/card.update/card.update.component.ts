import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card-update',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div
      class="card flex border rounded-md cursor-pointer hover:scale-105 transition duration-200 h-[100px]"
      [routerLink]="link"
    >
      <img srcset="{{ img }}, assets/err.png" alt="err" class="w-[100px]" />
      <div class="body relative w-full">
        <div class="title">{{ title }}</div>
        <div class="description">{{ description }}</div>
      </div>
    </div>
  `,
  styles: `
  .body {
    @apply m-1
  }
  .title {
    @apply text-lg 
  }
  .description {
    @apply text-xs
  }
 `,
})
export class CardUpdateComponent {
  @Input() img: string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() link: string = '';

  constructor() {
    this.description = this.description.substring(0, 80) + ' ...';
  }
}
