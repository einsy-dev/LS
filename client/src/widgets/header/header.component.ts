import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  template: `
    <header class="border px-5">
      <div
        class="container mx-auto flex gap-10 min-h-10 items-center justify-between"
      >
        <div class="logo_container max-h-8 -translate-y-5"></div>
        <nav class="">
          <ul class="flex gap-10">
            <li>О нас</li>
            <li>Контакты</li>
          </ul>
        </nav>
      </div>
    </header>
  `,
  styles: ``,
})
export class HeaderComponent {}
