import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [],
  template: `
    <div class="flex gap-2 w-full overflow-scroll">
      @for (item of images; track $index) {
      <img class="w-[200px] h-[150px]" src="{{ item }}" />
      }
    </div>
  `,
  styles: ``,
})
export class CarouselComponent {
  @Input() images: string[] = [
    'assets/err.png',
    'assets/err.png',

    'assets/err.png',
    'assets/err.png',
    'assets/err.png',
    'assets/err.png',

    'assets/err.png',
    'assets/err.png',
  ];
}
