import { Injectable, OnDestroy, signal } from '@angular/core';

export interface Remaining {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

/** 18 October 2026, midnight in Kigali (CAT, UTC+2). */
export const BIRTHDAY_AT = Date.parse('2026-10-18T00:00:00+02:00');

@Injectable({ providedIn: 'root' })
export class BirthdayService implements OnDestroy {
  readonly unlocked = signal(false);
  readonly remaining = signal<Remaining>({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  private readonly timer = window.setInterval(() => this.tick(), 1000);

  constructor() {
    this.tick();
  }

  ngOnDestroy(): void {
    window.clearInterval(this.timer);
  }

  private tick(): void {
    const left = BIRTHDAY_AT - Date.now();
    if (left <= 0) {
      this.unlocked.set(true);
      this.remaining.set({ days: '00', hours: '00', minutes: '00', seconds: '00' });
      window.clearInterval(this.timer);
      return;
    }
    this.unlocked.set(false);
    const total = Math.floor(left / 1000);
    const days = Math.floor(total / 86400);
    const hours = Math.floor((total % 86400) / 3600);
    const minutes = Math.floor((total % 3600) / 60);
    const seconds = total % 60;
    this.remaining.set({
      days: pad(days),
      hours: pad(hours),
      minutes: pad(minutes),
      seconds: pad(seconds)
    });
  }
}

function pad(value: number): string {
  return value.toString().padStart(2, '0');
}
