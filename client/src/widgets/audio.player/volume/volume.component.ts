import { Component, ElementRef, Input } from '@angular/core';
import { MuteIconComponent } from '../assets/mute.icon.component';
import { VolumeIconComponent } from '../assets/volume.icon.component';
import { RangeComponent } from '../../../shared/ui/range/range.component';
import { BaseButtonComponent } from '../base.button/base.button.component';

@Component({
  selector: 'app-volume',
  standalone: true,
  template: `
    <div
      class="h-[30px] rounded-full bg-{{ bgColor }} cursor-pointer me-2"
      (click)="mute()"
    >
      @if (audio.nativeElement.muted) {
      <app-mute-icon class="fill-{{ fill }} hover:fill-{{ hoverFill }}" />
      } @else {
      <app-volume-icon class="fill-{{ fill }} hover:fill-{{ hoverFill }}" />
      }
    </div>
    <app-range
      (outValue)="audio.nativeElement.volume = $event"
      [value]="audio.nativeElement.volume"
      class="flex items-center"
    />
  `,
  styles: ``,
  imports: [MuteIconComponent, VolumeIconComponent, RangeComponent],
})
export class VolumeComponent extends BaseButtonComponent {
  @Input({ required: true }) audio!: ElementRef<HTMLAudioElement>;
  mute() {
    this.audio.nativeElement.muted = !this.audio.nativeElement.muted;
  }
}
