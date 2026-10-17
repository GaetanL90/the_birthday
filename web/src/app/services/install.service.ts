import { Injectable, signal } from '@angular/core';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

@Injectable({ providedIn: 'root' })
export class InstallService {
  readonly canInstall = signal(false);
  readonly isIos = signal(false);
  readonly isStandalone = signal(false);
  readonly showBanner = signal(false);

  private deferred?: BeforeInstallPromptEvent;
  private readonly dismissedKey = 'birthday-install-dismissed';

  constructor() {
    const standalone =
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as Navigator & { standalone?: boolean }).standalone === true;

    const ios = /iphone|ipad|ipod/i.test(window.navigator.userAgent);

    this.isStandalone.set(standalone);
    this.isIos.set(ios && !standalone);

    window.addEventListener('beforeinstallprompt', (event) => {
      event.preventDefault();
      this.deferred = event as BeforeInstallPromptEvent;
      this.canInstall.set(true);
      this.reveal();
    });

    window.addEventListener('appinstalled', () => {
      this.deferred = undefined;
      this.canInstall.set(false);
      this.showBanner.set(false);
    });

    if (!standalone && ios) {
      this.reveal();
    }
  }

  async install(): Promise<void> {
    if (!this.deferred) {
      return;
    }
    await this.deferred.prompt();
    const choice = await this.deferred.userChoice;
    this.deferred = undefined;
    this.canInstall.set(false);
    if (choice.outcome === 'accepted') {
      this.showBanner.set(false);
    }
  }

  dismiss(): void {
    this.showBanner.set(false);
    try {
      sessionStorage.setItem(this.dismissedKey, '1');
    } catch {
      /* ignore private mode */
    }
  }

  private reveal(): void {
    try {
      if (sessionStorage.getItem(this.dismissedKey)) {
        return;
      }
    } catch {
      /* continue */
    }
    this.showBanner.set(true);
  }
}
