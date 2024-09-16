import { Component, HostListener } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../widgets/sidebar/sidebar.component';
import { AccauntComponent } from '../widgets/accaunt/accaunt.component';
import { HeaderComponent } from '../widgets/header/header.component';
import { FooterComponent } from '../widgets/footer/footer.component';
import { ModalComponent } from '../shared/ui/modal/modal.component';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { selectAudio, selectSidebar } from './providers/store/selectors';
import { toggleSidebar } from './providers/store';
import { AppStore } from './providers/store/interface';
import { AudioPlayerComponent } from '../widgets/audio.player/audio.player.component';
import { toggleAudio } from './providers/store/actions';

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
    <app-audio-player
      #audioRef
      *ngIf="audio"
      src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
    />
    <main class="container mx-auto flex gap-5 my-5">
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
      @apply container mx-auto;
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
