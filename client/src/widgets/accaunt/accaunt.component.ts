import { Component, Input } from '@angular/core';
import { LogoutComponent } from './assets/logout.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-accaunt',
  standalone: true,
  imports: [LogoutComponent, RouterLink],
  template: `
    <div [class]="class + 'accaunt_container flex w-full gap-5'">
      <div class="avatar_container">
        <img
          src="assets/avatar.jpg"
          alt="avatar"
          class="avatar w-full aspect-square rounded-full cursor-pointer hover:scale-110 transition duration-200"
          routerLink="profile"
        />
      </div>
      <div class=" flex flex-col">
        <div class="username">{{ username }}</div>
        <div
          class="logout_container flex cursor-pointer text-center gap-2 transition duration-200 hover:scale-105"
        >
          <div class="logout_text">Выйти</div>
          <app-logout />
        </div>
      </div>
    </div>
  `,
  styles: `
    .avatar_container {
      width: 50px;
    }
    .logout_container {
      width: fit-content;
  
    }
  `,
})
export class AccauntComponent {
  @Input() class = '';
  username = 'Алексей Алексеевич Толиков';
  constructor() {
    this.username =
      this.username.split(' ')[0] + ' ' + this.username.split(' ')[1];
  }
}
