import {
  Component,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import videojs from 'video.js';

@Component({
  selector: 'app-player',
  standalone: true,
  template: `
    <video #target class="video-js w-full aspect-video h-full" controls preload="auto"></video>
  `,
  styleUrls: ['/node_modules/video.js/dist/video-js.min.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PlayerComponent implements OnInit, OnDestroy {
  @ViewChild('target', { static: true }) target: ElementRef | undefined;
  @Input() options:
    | {
        loop: boolean;
        autoplay: boolean;
        sources: {
          src: string;
          type: string;
        }[];
      }
    | undefined;

  player: any | undefined;

  constructor() {}
  ngOnInit() {
    this.player = videojs(this.target!.nativeElement, this.options, () => {
      console.log('isReady', this);
    });
  }
  ngOnDestroy() {
    if (this.player) {
      this.player.dispose();
    }
  }
}
