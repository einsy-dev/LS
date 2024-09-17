import { Component, EventEmitter, Output } from '@angular/core';
import { ModalComponent } from '../../shared/ui/modal/modal.component';
import { InputComponent } from '../../shared/ui/input/input.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../../shared/ui/button/button.component';

@Component({
  selector: 'app-login-modal',
  standalone: true,
  imports: [
    ModalComponent,
    InputComponent,
    ReactiveFormsModule,
    CommonModule,
    ButtonComponent,
  ],
  template: `
    <app-modal (close)="handleClose()">
      <form [formGroup]="loginForm" class="mx-auto self-center min-h-max">
        <div class="text-center border-b-2 ">
          {{ login ? 'Вход'.toUpperCase() : 'Регистрация'.toUpperCase() }}
        </div>
        <app-input
          *ngIf="login"
          placeholder="Иванов Иван Иванович"
          label="ФИО"
          (setValue)="loginForm.get('name')?.setValue($event)"
        />
        <app-input
          label="Email"
          placeholder="example@example.com"
          (setValue)="loginForm.get('email')?.setValue($event)"
        />
        <app-input
          label="Пароль"
          (setValue)="loginForm.get('password')?.setValue($event)"
        />
        <span class="self-center cursor-pointer text-sm text-[#2F80ED]" (click)="login = !login">{{
          login
            ? 'Ещё нет аккаунта? Зарегистрироваться'
            : 'Уже есть аккаунт? Войти'
        }}</span>
        <app-button
          text="{{ !login ? 'Войти' : 'Зарегистрироваться' }}"
          class="self-center mt-auto"
          (clickBtn)="submitForm()"
        />
      </form>
    </app-modal>
  `,
  styles: `
  form {
    @apply bg-white rounded-md;
    @apply p-4 min-w-[375px] ; 
    @apply flex flex-col gap-4;
  }`,
})
export class LoginModalComponent {
  @Output() close = new EventEmitter();
  login = true;
  loginForm!: FormGroup;
  handleClose() {
    this.close.emit();
  }
  constructor() {
    this.loginForm = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
    });
  }

  submitForm() {
    console.log(this.loginForm.value, this.loginForm);
  }
}
