import { Component } from '@angular/core';
import { PostComponent } from '../../shared/ui/post/post.component';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  standalone: true,
  imports: [PostComponent, ButtonComponent],
  template: `<div class="mb-4 px-[100px]">
      <app-button />
    </div>
    <main class="flex flex-col gap-4  px-[100px]">
      <app-post />
      <app-post img="assets/err.png" />
    </main>`,
  styles: `
    
  `,
})
export class MainComponent {}
