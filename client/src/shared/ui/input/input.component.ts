import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="">
      <label *ngIf="label" for="{{ label }}">{{ label }}</label>
      <input
        id="{{ label }}"
        class=""
        type="{{ type }}"
        placeholder="{{ placeholder }}"
        [formControl]="formControl"
        (input)="handleInput()"
      />
    </div>
  `,
  styles: `
  label {
    @apply cursor-pointer;
  }
  input {
    @apply w-full outline-none;
    @apply bg-white border border-gray-300 rounded-md p-2.5 ;
  }`,
})
export class InputComponent {
  @Input() placeholder: string = '';
  @Input() label: string | null = null;
  @Input() type: string = 'text';
  @Output() setValue = new EventEmitter();
  formControl = new FormControl();

  handleInput() {
    this.setValue.emit(this.formControl.value);
  }
}
