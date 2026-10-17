import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { chooser } from '../data/wishes';
import { BirthdayService } from '../services/birthday.service';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-landing',
  imports: [RouterLink],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {
  private readonly music = inject(MusicService);
  readonly birthday = inject(BirthdayService);
  readonly opened = signal(false);
  readonly cards = chooser;

  openGift(): void {
    this.opened.set(true);
    void this.music.unlockAndPlay();
  }
}
