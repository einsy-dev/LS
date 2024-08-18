import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article
      class="w-full h-full border-solid border-2 border-sky-500 rounded"
      [routerLink]="to"
    >
      <ng-content />
    </article>
  `,
})
export class CardComponent {
  @Input() to?: string = '/';
}
