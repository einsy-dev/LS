import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  template: `
    <div class="modal fixed inset-0 z-10 flex" (click)="handleClose($event)">
      <ng-content />
    </div>
  `,
  styles: `
    .modal {
      background-color: rgba(0, 0, 0, 0.5);
    }`,
})
export class ModalComponent {
  @Output() close = new EventEmitter();

  handleClose(e: Event) {
    if (e.target !== e.currentTarget) {
      return;
    }
    this.close.emit();
  }
}
