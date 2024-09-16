import { Component, ElementRef, Input } from '@angular/core';
import { PlayIconComponent } from '../assets/play.icon.component';
import { PauseIconComponent } from '../assets/pause.icon.component';
import { BaseButtonComponent } from '../base.button/base.button.component';

@Component({
  selector: 'app-play',
  standalone: true,
  template: ` <div
    class="cursor-pointer h-[50px] w-[50px] rounded-full bg-{{
      bgColor
    }} cursor-pointer"
    (click)="play()"
  >
    @if (audio.nativeElement.paused) {
    <app-play-icon class="fill-{{ fill }} hover:fill-{{ hoverFill }}" />
    } @else {
    <app-pause-icon />
    }
  </div>`,
  styles: ``,
  imports: [PlayIconComponent, PauseIconComponent],
})
export class PlayComponent extends BaseButtonComponent {
  @Input({ required: true }) audio!: ElementRef<HTMLAudioElement>;
  play() {
    if (this.audio.nativeElement.paused) {
      this.audio.nativeElement.play();
    } else {
      this.audio.nativeElement.pause();
    }
  }
}
