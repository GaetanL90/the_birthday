import { Component, ElementRef, OnDestroy, inject, input, signal, viewChild } from '@angular/core';
import { MusicService } from '../services/music.service';

const blobCache = new Map<string, string>();
const blobLoads = new Map<string, Promise<string>>();

@Component({
  selector: 'app-hover-reel',
  template: `
    <figure
      class="reel"
      (pointerenter)="onEnter($event)"
      (pointerleave)="onLeave($event)"
      (click)="onTap($event)"
    >
      <div class="stage">
        <video
          #clip
          muted
          loop
          playsinline
          preload="none"
          disablepictureinpicture
          controlslist="nodownload nofullscreen noremoteplayback"
        ></video>
        @if (!playing()) {
          <span class="hint">{{ touchy() ? 'Tap to play' : 'Hover to play' }}</span>
        }
      </div>
      <figcaption>{{ caption() }}</figcaption>
    </figure>
  `,
  styles: [`
    .reel {
      margin: 0;
      padding: 10px;
      border-radius: 18px;
      background: rgba(255, 246, 236, 0.08);
      border: 1px solid rgba(255, 246, 236, 0.12);
    }
    .stage {
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      background: #12070e;
      cursor: pointer;
    }
    video {
      width: 100%;
      max-height: 420px;
      display: block;
      object-fit: cover;
      pointer-events: none;
      background: #000;
    }
    .hint {
      position: absolute;
      inset: auto 12px 12px;
      padding: 6px 12px;
      border-radius: 999px;
      background: rgba(18, 7, 14, 0.72);
      color: #fff6ec;
      font-size: 12px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }
    figcaption {
      font-family: "Great Vibes", cursive;
      font-size: 28px;
      text-align: center;
      margin-top: 10px;
      line-height: 1.1;
      color: #fff6ec;
    }
  `]
})
export class HoverReelComponent implements OnDestroy {
  private readonly music = inject(MusicService);
  private readonly clip = viewChild<ElementRef<HTMLVideoElement>>('clip');

  readonly src = input.required<string>();
  readonly caption = input('');
  readonly playing = signal(false);
  readonly touchy = signal(window.matchMedia('(hover: none)').matches);

  async onEnter(event: PointerEvent): Promise<void> {
    if (event.pointerType === 'touch') {
      return;
    }
    await this.play();
  }

  onLeave(event: PointerEvent): void {
    if (event.pointerType === 'touch') {
      return;
    }
    this.pause(true);
  }

  async onTap(event: Event): Promise<void> {
    if (!this.touchy()) {
      return;
    }
    event.preventDefault();
    if (this.playing()) {
      this.pause(false);
      return;
    }
    await this.play();
  }

  ngOnDestroy(): void {
    this.pause(true);
  }

  private async play(): Promise<void> {
    const video = this.clip()?.nativeElement;
    if (!video) {
      return;
    }
    try {
      video.src = await loadAsBlob(this.src());
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      video.disablePictureInPicture = true;
      video.controls = false;
      video.preload = 'auto';
      await video.play();
      this.playing.set(true);
      this.music.keepGoing();
    } catch {
      this.playing.set(false);
    }
  }

  private pause(reset: boolean): void {
    const video = this.clip()?.nativeElement;
    if (!video) {
      return;
    }
    video.pause();
    if (reset) {
      video.currentTime = 0;
    }
    this.playing.set(false);
    this.music.keepGoing();
  }
}

function loadAsBlob(path: string): Promise<string> {
  const cached = blobCache.get(path);
  if (cached) {
    return Promise.resolve(cached);
  }
  const pending = blobLoads.get(path);
  if (pending) {
    return pending;
  }
  const request = fetch(path, {
    credentials: 'same-origin',
    headers: { Accept: 'application/octet-stream' }
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('clip missing');
      }
      return response.blob();
    })
    .then((blob) => {
      const url = URL.createObjectURL(blob);
      blobCache.set(path, url);
      blobLoads.delete(path);
      return url;
    })
    .catch((error) => {
      blobLoads.delete(path);
      throw error;
    });
  blobLoads.set(path, request);
  return request;
}
