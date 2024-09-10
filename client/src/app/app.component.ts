import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../widgets/sidebar/sidebar.component';
import { AccauntComponent } from '../widgets/accaunt/accaunt.component';
import { HeaderComponent } from '../widgets/header/header.component';
import { FooterComponent } from '../widgets/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    AccauntComponent,
    HeaderComponent,
    FooterComponent,
  ],
  template: `<app-header class="select-none" />
    <main class="container mx-auto flex gap-5 mt-5">
      <app-sidebar
        class="sidebar_container flex flex-col gap-6 min-w-40 select-none"
      />
      <div class="content_container">
        <router-outlet />
      </div>
    </main>
    <app-footer class="mt-auto select-none" />`,
  styles: `
    .sidebar_container {
      width: 20%;
    }

    .content_container {
      width: 80%;
    }`,
})
export class AppComponent {}
