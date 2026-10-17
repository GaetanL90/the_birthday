import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ConfettiComponent } from './components/confetti.component';
import { InstallBannerComponent } from './components/install-banner.component';
import { MusicPlayerComponent } from './components/music-player.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ConfettiComponent, MusicPlayerComponent, InstallBannerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  readonly balloons = Array.from({ length: 10 }, (_, i) => i);
}
