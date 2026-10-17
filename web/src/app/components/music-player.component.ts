import { Component, inject } from '@angular/core';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-music-player',
  template: `
    <button class="player" type="button" (click)="music.toggle()" [attr.aria-label]="music.playing() ? 'Pause theme song' : 'Play theme song'">
      <span class="disc" [class.spin]="music.playing()">♪</span>
      <span class="copy">
        <strong>{{ music.playing() ? 'Now playing' : 'Theme song' }}</strong>
        <small>{{ music.playing() ? 'The birthday anthem' : 'Starts when you open the gift' }}</small>
      </span>
      <span class="bars" [class.on]="music.playing()">
        <i></i><i></i><i></i><i></i>
      </span>
    </button>
  `,
  styles: [`
    .player {
      position: fixed;
      left: 18px;
      bottom: 18px;
      z-index: 50;
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 10px 16px 10px 10px;
      border: 1px solid rgba(255, 246, 236, 0.18);
      border-radius: 999px;
      background: rgba(18, 7, 14, 0.72);
      color: #fff6ec;
      backdrop-filter: blur(16px);
      box-shadow: 0 16px 40px rgba(0, 0, 0, 0.28);
    }
    .disc {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: conic-gradient(from 90deg, #f6d36b, #e85a8c, #7ee0c6, #f6d36b);
      color: #12070e;
      font-weight: 700;
    }
    .spin { animation: spin 4s linear infinite; }
    .copy { display: flex; flex-direction: column; text-align: left; }
    .copy strong { font-size: 12px; letter-spacing: 0.08em; text-transform: uppercase; }
    .copy small { opacity: 0.75; font-size: 11px; }
    .bars { display: flex; gap: 3px; height: 16px; align-items: flex-end; }
    .bars i {
      width: 3px;
      height: 4px;
      background: #f6d36b;
      border-radius: 2px;
    }
    .bars.on i { animation: eq 0.9s ease-in-out infinite; }
    .bars.on i:nth-child(2) { animation-delay: 0.15s; }
    .bars.on i:nth-child(3) { animation-delay: 0.3s; }
    .bars.on i:nth-child(4) { animation-delay: 0.08s; }
    @keyframes spin { to { transform: rotate(360deg); } }
    @keyframes eq {
      0%, 100% { height: 4px; }
      50% { height: 16px; }
    }
    @media (max-width: 640px) {
      .copy small { display: none; }
      .player { left: 12px; bottom: 12px; }
    }
  `]
})
export class MusicPlayerComponent {
  readonly music = inject(MusicService);
}
