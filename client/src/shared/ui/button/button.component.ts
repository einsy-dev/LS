import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button class="px-4 py-2 rounded-md w-max" (click)="handleClick()">
      {{ text }}
    </button>
  `,
  styles: `
  button {
  background-color: var(--bg-p);
  color: #fff;
  @apply hover:scale-105 transition duration-200;
  }
  `,
})
export class ButtonComponent {
  @Input({ required: true }) text!: string;
  @Output() clickBtn = new EventEmitter();

  handleClick() {
    this.clickBtn.emit();
  }
}
