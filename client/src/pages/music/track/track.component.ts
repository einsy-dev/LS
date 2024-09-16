import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from '@store';

import { MenuComponent } from '@widgets/header/assets/menu.component';
import {
  selectAudio,
  setAudio,
  toggleAudio,
} from '@store/player';

@Component({
  selector: 'app-track',
  standalone: true,
  imports: [MenuComponent],
  template: ` <div
    class=" flex border rounded-md overflow-hidden shadow-md cursor-pointer max-h-[70px]"
    (click)="handleClick(data.src)"
  >
    <div class="">
      <img srcset="{{ data.img }}, assets/err.png" alt="" class="h-[70px]" />
    </div>
    <div class=" w-full flex justify-between items-center px-4 py-2">
      <div class="w-[20%] flex flex-col gap-2">
        <div class="">{{ data.title }}</div>
        <div class="">{{ data.author }}</div>
      </div>
      <div class="">{{ data.date_added }}</div>
      <div class="">{{ data.duration }}</div>
      <div class="rounded-full px-2 h-[20px]"><app-menu /></div>
    </div>
  </div>`,
  styles: ``,
})
export class TrackComponent {
  @Input() data: ITrack = {
    id: 1,
    src: 'assets/song.mp3',
    img: '',
    title: 'Coton Candy',
    author: 'Vivzi Pop',
    date_added: '12/02/2021',
    duration: '5:32',
  };

  audio: boolean = false;
  constructor(private store: Store<AppStore>) {
    this.store.select(selectAudio).subscribe((audio) => {
      this.audio = audio;
    });
  }

  handleClick(src?: string) {
    if (!src) return;
    this.store.dispatch(setAudio({ audioSrc: src }));
    if (this.audio) return;

    this.store.dispatch(toggleAudio());
  }
}

interface ITrack {
  id: number;
  src: string;
  img: string;
  title: string;
  author: string;
  date_added: string;
  duration: string;
}
