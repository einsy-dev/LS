import { Component } from '@angular/core';
import { PostComponent } from '../../shared/ui/post/post.component';

@Component({
  standalone: true,
  imports: [PostComponent],
  template: ` <app-post /> `,
  styles: `
    
  `,
})
export class MainComponent {}
