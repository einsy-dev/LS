import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../../shared/ui/modal/modal.component';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [ModalComponent],
  template: `
    <app-modal (close)="handleClose()">
      <div
        class="container text-center bg-white rounded-md mx-auto w-1/2 h-1/2 self-center  min-w-[375px]"
      >
        login modal works!
      </div>
    </app-modal>
  `,
  styles: ``,
})
export class LoginModalComponent {
  @Output() close = new EventEmitter();

  handleClose() {
    this.close.emit();
  }
}
