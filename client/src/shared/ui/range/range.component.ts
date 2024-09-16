import {
  Component,
  ElementRef,
  EventEmitter,
  input,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-range',
  standalone: true,
  template: `
    <input
      #range
      id="range"
      type="range"
      min="0"
      max="{{ max }}"
      step="0.01"
      value="{{ value }}"
      (input)="handleInput()"
    />
  `,
  styleUrls: ['./range.component.css'],
})
export class RangeComponent {
  @ViewChild('range') range!: ElementRef<HTMLInputElement>;
  @Input() max: number = 1;
  @Input() value: number = 0;
  @Output() outValue = new EventEmitter<number>();

  handleInput() {
    this.outValue.emit(+this.range.nativeElement.value);
  }
}
