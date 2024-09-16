import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { PlayIconComponent } from './assets/play.icon.component';
import { PauseIconComponent } from './assets/pause.icon.component';
import { MuteIconComponent } from './assets/mute.icon.component';
import { VolumeIconComponent } from './assets/volume.icon.component';
import { RangeComponent } from '../../shared/ui/range/range.component';
import { PlayComponent } from './play/play.component';
import { VolumeComponent } from './volume/volume.component';
import { NextComponent } from './next/next.component';
import { PreviousComponent } from './previous/previous.component';

@Component({
  selector: 'app-audio-player',
  standalone: true,
  imports: [
    PlayIconComponent,
    PauseIconComponent,
    MuteIconComponent,
    VolumeIconComponent,
    RangeComponent,
    PlayComponent,
    VolumeComponent,
    NextComponent,
    PreviousComponent,
  ],
  template: `
    <div class="fixed bottom-0 inset-x-0 min-h-[100px] bg-orange-300">
      <audio #audio preload>
        <source src="{{ src }}" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div class=" flex flex-col w-1/2 mx-auto p-4">
        <div class="flex ">
          <div class="w-[150px]"></div>
          <div class="flex  w-full items-center justify-center">
            <app-previous />
            <app-play [audio]="audioRef" />
            <app-next />
          </div>
          <app-volume [audio]="audioRef" class="w-[150px] flex items-center " />
        </div>
        <div class="w-full">
          <app-range
            (outValue)="audio.currentTime = $event"
            [value]="audio.currentTime"
            [max]="audio.duration"
          />
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class AudioPlayerComponent {
  @Input({ required: true }) src!: string;
  @ViewChild('audio', { static: true }) audioRef!: ElementRef<HTMLAudioElement>;
}
