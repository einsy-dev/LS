import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStore } from '@store';
import { toggleSidebar } from '@store/app';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { MenuComponent } from './assets/menu.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ButtonComponent, MenuComponent, CommonModule],
  template: `
    <header class="px-5">
      <div
        class="container mx-auto flex gap-10 min-h-10 items-center justify-between "
      >
        <app-menu
          *ngIf="menu"
          (click)="handleClick()"
          class="menu  w-[30px] h-[30px]"
        />
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
  styles: `
  header {
    --bg-color: #231651;
    --default: white;

    background-color: var(--bg-color);
    color: var(--default);
    .menu {
      @apply hover:cursor-pointer fill-white;
    }
  }
    `,
})
export class HeaderComponent {
  menu = false;
  constructor(private store: Store<AppStore>) {
    this.store = store;
    this.checkMenu();
  }
  handleClick() {
    this.store.dispatch(toggleSidebar());
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMenu();
  }

  checkMenu() {
    if (window.innerWidth > 1024) {
      this.menu = false;
    } else {
      this.menu = true;
    }
  }
}
