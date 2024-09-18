import { Component, Input } from '@angular/core';
import { LogoutComponent } from './assets/logout.component';
import { RouterLink } from '@angular/router';
import { LoginModalComponent } from '@features/login.modal/login.modal.component';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppStore } from '@app/providers/store';
import { selectProfile } from '@app/providers/store/profile';
import { Role } from '../../entities';
import { ProfileI } from '../../entities/profile/interface';

@Component({
  selector: 'app-accaunt',
  standalone: true,
  imports: [LogoutComponent, RouterLink, LoginModalComponent, CommonModule],
  template: `
    <div [class]="class + 'accaunt_container flex w-full gap-5'">
      <div class="avatar_container">
        <img
          src="assets/avatar.jpg"
          alt="avatar"
          class="avatar w-full aspect-square rounded-full cursor-pointer hover:scale-110 transition duration-200"
          [routerLink]="profile?.role === Role.GUEST ? null : '/profile'"
        />
      </div>
      <div class=" flex flex-col align-center justify-center">
        <div class="username">
          {{ profile?.role === Role.GUEST ? '' : profile?.name }}
        </div>
        <div
          class="logout_container flex cursor-pointer text-center gap-2 transition duration-200 hover:scale-105"
          (click)="handleClick()"
        >
          <div class="logout_text">
            {{ profile?.role === Role.GUEST ? 'Войти' : 'Выйти' }}
          </div>
          <app-logout />
        </div>
      </div>
    </div>
    <app-login-modal *ngIf="modal" (close)="modal = false" />
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
  profile: ProfileI | null = null;
  modal = false;
  Role = Role;
  constructor(private store: Store<AppStore>) {
    this.store.select(selectProfile).subscribe((state) => {
      this.profile = state;
    });
    if (!this.profile?.name) return;
    this.profile.name = this.profile.name.split(' ').slice(0, 2).join(' ');
  }
  handleClick() {
    this.modal = true;
  }
}
