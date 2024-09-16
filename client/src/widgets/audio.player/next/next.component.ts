import { Component, EventEmitter, Output } from '@angular/core';
import { NextIconComponent } from '../assets/next.icon.component';
import { BaseButtonComponent } from '../base.button/base.button.component';

@Component({
  selector: 'app-next',
  standalone: true,
  imports: [NextIconComponent],
  template: `
    <div
      class="h-[50px] w-[50px] rounded-full bg-{{ bgColor }} cursor-pointer"
      (click)="handleNextClick()"
    >
      <app-next-icon class="fill-{{ fill }} hover:fill-{{ hoverFill }}" />
    </div>
  `,
  styles: ``,
})
export class NextComponent extends BaseButtonComponent {
  @Output() next = new EventEmitter<void>();
  handleNextClick() {
    this.next.emit();
  }
}
