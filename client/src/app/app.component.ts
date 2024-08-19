import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `<main class="max-w-2xl m-auto min-h-screen">
    <router-outlet />
  </main>`,
})
export class AppComponent {}
