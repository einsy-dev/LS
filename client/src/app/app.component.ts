import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<main class="mx-auto max-w-7xl p-3">
    <router-outlet />
  </main>`,
})
export class AppComponent {}
