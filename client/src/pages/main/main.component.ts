import { Component } from '@angular/core';
import { CardComponent } from './card/card.component';

@Component({
  standalone: true,
  imports: [CardComponent],
  template: ` <div>main works</div> `,
  styles: `
    
  `,
})
export class MainComponent {}
