import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppStore } from '../../app/providers/store/interface';
import { selectSidebar } from '../../app/providers/store/selectors';
import { toggleSidebar } from '../../app/providers/store';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, ButtonComponent],
  template: `
    <header class="px-5">
      <div
        class="container mx-auto flex gap-10 min-h-10 items-center justify-between"
      >
        <div class="logo_container max-h-8 -translate-y-5"></div>
        <app-button text="Меню" (click)="handleClick()" />
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
  }
    `,
})
export class HeaderComponent {
  constructor(private store: Store<AppStore>) {
    this.store = store;
  }
  handleClick() {
    this.store.dispatch(toggleSidebar());
  }
}
