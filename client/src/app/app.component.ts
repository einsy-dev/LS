import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  SidebarComponent,
  AccauntComponent,
  HeaderComponent,
  FooterComponent,
  AudioPlayerComponent,
} from '@widgets';

import { ModalComponent } from '@shared/ui';
import { AppStore } from '@store';
import { selectSidebar, toggleSidebar } from '@store/app';
import { selectAudio } from '@store/player';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    AccauntComponent,
    HeaderComponent,
    FooterComponent,
    ModalComponent,
    CommonModule,
    AudioPlayerComponent,
  ],
  template: `<app-header class="select-none" />
    <app-audio-player #audioRef *ngIf="audio" />
    <main class="container mx-auto flex gap-10 my-5">
      @if (mobile && modal) {
      <app-modal (close)="handleClick()">
        <app-sidebar class="bg-white w-3/4 p-5" [modal]="true" />
      </app-modal>
      } @else if (!mobile) {
      <app-sidebar class="sidebar_container min-w-40 select-none" />
      }
      <div class="content_container">
        <router-outlet />
      </div>
    </main>
    <app-footer class="mt-auto select-none" />`,
  styles: `
    .sidebar_container {
      width: 20%;
    }
    .content_container {
      @apply container mx-auto ;
    }`,
})
export class AppComponent {
  modal = true;
  mobile = false;
  audio = false;
  constructor(private store: Store<AppStore>) {
    this.store.select(selectSidebar).subscribe((state) => {
      this.modal = state;
    });
    this.store.select(selectAudio).subscribe((state) => {
      this.audio = state;
    });
    this.checkModal();
  }

  @HostListener('window:resize')
  onResize() {
    this.checkModal();
  }

  handleClick() {
    this.store.dispatch(toggleSidebar());
  }

  checkModal() {
    if (window.innerWidth <= 1024) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }
  }
}
