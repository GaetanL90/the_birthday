import { Injectable, signal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MusicService {
  readonly playing = signal(false);
  readonly hasTrack = signal(false);
  readonly ready = signal(false);
  readonly label = signal('Theme song');

  private readonly audio = new Audio('/audio/theme.mp3');
  private userPaused = false;

  constructor() {
    this.audio.loop = true;
    this.audio.preload = 'auto';
    this.audio.volume = 0.72;
    this.audio.addEventListener('canplaythrough', () => {
      this.hasTrack.set(true);
      this.ready.set(true);
    });
    this.audio.addEventListener('error', () => {
      this.hasTrack.set(false);
      this.ready.set(true);
    });
    this.audio.addEventListener('playing', () => this.playing.set(true));
    this.audio.addEventListener('pause', () => this.playing.set(false));
    this.audio.addEventListener('ended', () => {
      this.audio.currentTime = 0;
      if (!this.userPaused) {
        void this.audio.play();
      }
    });
  }

  async unlockAndPlay(): Promise<void> {
    this.userPaused = false;
    await this.play();
  }

  async toggle(): Promise<void> {
    if (!this.audio.paused) {
      this.userPaused = true;
      this.audio.pause();
      return;
    }
    this.userPaused = false;
    await this.play();
  }

  keepGoing(): void {
    if (!this.userPaused && this.audio.paused) {
      void this.play();
    }
  }

  private async play(): Promise<void> {
    try {
      this.audio.loop = true;
      await this.audio.play();
      this.hasTrack.set(true);
      this.playing.set(true);
    } catch {
      this.playing.set(false);
    }
  }
}
