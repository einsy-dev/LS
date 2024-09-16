import { Component, Input } from '@angular/core';

@Component({
  template: ``,
})
export class BaseButtonComponent {
  @Input() fill = 'black';
  @Input() hoverFill = 'white';
  @Input() bgColor = '';
}
