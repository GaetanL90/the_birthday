import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { map } from 'rxjs';
import { GalleryComponent } from '../components/gallery.component';
import { WishKey, experiences } from '../data/wishes';
import { MusicService } from '../services/music.service';

@Component({
  selector: 'app-wishes',
  imports: [RouterLink, GalleryComponent],
  templateUrl: './wishes.component.html',
  styleUrl: './wishes.component.scss'
})
export class WishesComponent {
  private readonly route = inject(ActivatedRoute);
  private readonly music = inject(MusicService);

  private readonly key = toSignal(
    this.route.paramMap.pipe(map((params) => (params.get('who') as WishKey) ?? 'both')),
    { initialValue: 'both' as WishKey }
  );

  readonly wish = computed(() => experiences[this.key()] ?? experiences.both);

  constructor() {
    void this.music.unlockAndPlay();
  }
}
