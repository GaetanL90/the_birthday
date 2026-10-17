import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfettiComponent } from './components/confetti.component';
import { InstallBannerComponent } from './components/install-banner.component';
import { MusicPlayerComponent } from './components/music-player.component';
import { SiteCreditComponent } from './components/site-credit.component';
import { BirthdayService } from './services/birthday.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfettiComponent, MusicPlayerComponent, InstallBannerComponent, SiteCreditComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly balloons = Array.from({ length: 10 }, (_, i) => i);
  readonly birthday = inject(BirthdayService);
}
