import { Component } from '@angular/core';

@Component({
  selector: 'app-site-credit',
  template: `<p class="credit">Byakozwe na Gaetan &amp; Nicolas, Isabukuru nziza 🎂</p>`,
  styles: [`
    .credit {
      position: fixed;
      left: 50%;
      bottom: 18px;
      z-index: 45;
      transform: translateX(-50%);
      margin: 0;
      width: min(640px, calc(100vw - 200px));
      text-align: center;
      font-size: 13px;
      letter-spacing: 0.02em;
      color: rgba(255, 246, 236, 0.82);
      text-shadow: 0 6px 18px rgba(0, 0, 0, 0.55);
      pointer-events: none;
    }
    @media (max-width: 720px) {
      .credit {
        bottom: auto;
        top: 12px;
        width: calc(100vw - 24px);
        font-size: 12px;
      }
    }
  `]
})
export class SiteCreditComponent {}
