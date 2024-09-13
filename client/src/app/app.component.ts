import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../widgets/sidebar/sidebar.component';
import { AccauntComponent } from '../widgets/accaunt/accaunt.component';
import { HeaderComponent } from '../widgets/header/header.component';
import { FooterComponent } from '../widgets/footer/footer.component';
import { ModalComponent } from '../shared/ui/modal/modal.component';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectHeader } from './providers/store/selectors';

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
    CommonModule,
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

      {{ header }}
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
  header: string = '';
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

  constructor(private store: Store<{ app: any }>) {
    this.store.select(selectHeader).subscribe((header: string) => {
      this.header = header;
    });
  }
}
