import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../widgets/sidebar/sidebar.component';
import { AccauntComponent } from '../widgets/accaunt/accaunt.component';
import { HeaderComponent } from '../widgets/header/header.component';
import { FooterComponent } from '../widgets/footer/footer.component';
import { ModalComponent } from '../shared/ui/modal/modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    AccauntComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
  ],
  template: `<app-header class="select-none" />
    <main class="container mx-auto flex gap-5 my-5">
      @if (mobile && modal) {
      <app-modal (close)="handleClick()">
        <app-sidebar class="bg-white w-3/4 p-5" [modal]="true" />
      </app-modal>
      } @else if (!mobile) {
      <app-sidebar class="sidebar_container min-w-40 select-none" />
      }
      <div class="content_container w-full mx-auto">
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
export class AppComponent {
  modal = true;
  mobile = false;
  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.checkModal();
  }
  ngOnInit() {
    this.checkModal();
  }

  handleClick() {
    this.modal = !this.modal;
  }

  checkModal() {
    if (window.innerWidth <= 1024) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
}
