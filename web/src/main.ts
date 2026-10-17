import { isDevMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then(() => {
    if (isDevMode() || !('serviceWorker' in navigator)) {
      return;
    }
    void navigator.serviceWorker.register('/sw.js');
  })
  .catch((err) => console.error(err));
