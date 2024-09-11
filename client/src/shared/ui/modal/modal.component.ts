import { Component, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  template: `
    <div
      class="modal fixed inset-0 z-10 grid place-content-center"
      (click)="handleClose($event)"
    >
      <ng-content #content />
    </div>
  `,
  styles: `
    .modal {
      background-color: rgba(0, 0, 0, 0.5);
    }`,
})
export class ModalComponent {
  @Output() close = new EventEmitter();
  @ViewChild('content') content!: any;

  handleClose(e: Event) {
    if (e.target !== e.currentTarget) {
      return;
    }
    this.close.emit();
  }
}
