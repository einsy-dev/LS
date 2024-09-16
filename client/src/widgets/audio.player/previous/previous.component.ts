import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PreviousIconComponent } from '../assets/previous.icon.component';
import { BaseButtonComponent } from '../base.button/base.button.component';

@Component({
  selector: 'app-previous',
  standalone: true,
  imports: [PreviousIconComponent],
  template: ` <div
    class="h-[50px] w-[50px] rounded-full bg-{{ bgColor }} cursor-pointer"
    (click)="handlePreviousClick()"
  >
    <app-previous-icon class="fill-{{ fill }} hover:fill-{{ hoverFill }}" />
  </div>`,
  styles: ``,
})
export class PreviousComponent extends BaseButtonComponent {
  @Output() previous = new EventEmitter<void>();
  handlePreviousClick() {
    this.previous.emit();
  }
}
