import { Component } from '@angular/core';
import { PostComponent } from '../../shared/ui/post/post.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';
import { Router } from '@angular/router';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { PostModalComponent } from './post-modal/post-modal.component';

@Component({
  standalone: true,
  imports: [PostComponent, ButtonComponent, ModalComponent, PostModalComponent],
  template: ` @if (modal) {
    <app-modal (close)="handleClick()"
      ><app-post-modal class="self-center mx-auto"
    /></app-modal>
    }
    <div class="mb-4 lg:px-[100px] flex justify-end">
      <app-button text="Новый пост" (click)="handleClick()" />
    </div>
    <main class="flex flex-col gap-4 lg:px-[100px]">
      <app-post />
      <app-post img="assets/err.png" />
      <app-post />
    </main>`,
  styles: `
    
  `,
})
export class MainComponent {
  modal = false;
  constructor(private router: Router) {
    this.router = router;
  }
  handleClick() {
    this.modal = !this.modal;
  }
}
