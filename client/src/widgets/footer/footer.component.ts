import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `<footer class="px-5">footer works!</footer> `,
  styles: `
  footer {
    --bg-color: #231651;
    --default: white;

    background-color: var(--bg-color);
    color: var(--default);
  }`,
})
export class FooterComponent {}
