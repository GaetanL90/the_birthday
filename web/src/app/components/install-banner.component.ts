import { Component, inject } from '@angular/core';
import { InstallService } from '../services/install.service';

@Component({
  selector: 'app-install-banner',
  template: `
    @if (install.showBanner()) {
      <aside class="install" role="dialog" aria-label="Install birthday app">
        <img src="/icons/icon-192.png" width="48" height="48" alt="" />
        <div class="copy">
          <strong>Install this gift</strong>
          @if (install.isIos()) {
            <small>Tap Share, then <em>Add to Home Screen</em>.</small>
          } @else {
            <small>Add it to your phone, like Irembo — opens full screen.</small>
          }
        </div>
        @if (install.canInstall()) {
          <button class="go" type="button" (click)="install.install()">Install</button>
        }
        <button class="x" type="button" (click)="install.dismiss()" aria-label="Dismiss">×</button>
      </aside>
    }
  `,
  styles: [`
    .install {
      position: fixed;
      right: 16px;
      bottom: 92px;
      z-index: 60;
      width: min(420px, calc(100vw - 24px));
      display: grid;
      grid-template-columns: 48px 1fr auto auto;
      gap: 12px;
      align-items: center;
      padding: 12px 12px 12px 12px;
      border-radius: 20px;
      background: rgba(18, 7, 14, 0.88);
      border: 1px solid rgba(255, 246, 236, 0.16);
      box-shadow: 0 18px 50px rgba(0, 0, 0, 0.4);
      backdrop-filter: blur(18px);
      color: #fff6ec;
    }
    img { border-radius: 12px; }
    .copy { display: flex; flex-direction: column; min-width: 0; }
    .copy strong { font-size: 14px; }
    .copy small { opacity: 0.78; font-size: 12px; line-height: 1.35; }
    .go {
      border: 0;
      border-radius: 999px;
      padding: 8px 14px;
      background: linear-gradient(135deg, #e85a8c, #f6d36b);
      color: #1a0b14;
      font-weight: 700;
    }
    .x {
      border: 0;
      background: transparent;
      color: #fff6ec;
      font-size: 22px;
      line-height: 1;
      padding: 4px 6px;
    }
    @media (max-width: 640px) {
      .install {
        left: 12px;
        right: 12px;
        width: auto;
        bottom: 84px;
      }
    }
  `]
})
export class InstallBannerComponent {
  readonly install = inject(InstallService);
}
