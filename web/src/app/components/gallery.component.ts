import { Component, input, signal } from '@angular/core';
import { PhotoCard, VideoCard } from '../data/wishes';
import { HoverReelComponent } from './hover-reel.component';

@Component({
  selector: 'app-gallery',
  imports: [HoverReelComponent],
  template: `
    <section class="gallery">
      @for (photo of photos(); track photo.src; let i = $index) {
        <figure class="polaroid" [style.--tilt]="tilt(i)" (click)="open(photo)">
          <img [src]="photo.src" [alt]="photo.alt" />
          <figcaption>{{ photo.caption }}</figcaption>
        </figure>
      }
    </section>

    @if (videos().length) {
      <section class="reels">
        @for (video of videos(); track video.src) {
          <app-hover-reel [src]="video.src" [caption]="video.caption" />
        }
      </section>
    }

    @if (active(); as photo) {
      <div class="lightbox" (click)="active.set(null)">
        <img [src]="photo.src" [alt]="photo.alt" />
        <p>{{ photo.caption }}</p>
      </div>
    }
  `,
  styles: [`
    .gallery {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 28px;
      padding: 12px 0 48px;
    }
    .polaroid {
      margin: 0;
      padding: 12px 12px 18px;
      background: #fff8f1;
      color: #3a2418;
      border-radius: 6px;
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.28);
      transform: rotate(var(--tilt));
      cursor: zoom-in;
      transition: transform 0.35s ease, box-shadow 0.35s ease;
    }
    .polaroid img {
      width: 100%;
      height: 260px;
      object-fit: cover;
      object-position: center 18%;
      border-radius: 2px;
      background: #edd7c3;
    }
    .polaroid figcaption {
      font-family: "Great Vibes", cursive;
      font-size: 28px;
      text-align: center;
      margin-top: 10px;
      line-height: 1.1;
    }
    .polaroid:hover {
      transform: rotate(0deg) translateY(-8px) scale(1.03);
      box-shadow: 0 28px 60px rgba(0, 0, 0, 0.38);
      z-index: 2;
    }
    .reels {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 24px;
      margin-bottom: 48px;
    }
    .lightbox {
      position: fixed;
      inset: 0;
      z-index: 80;
      background: rgba(8, 2, 6, 0.88);
      display: grid;
      place-items: center;
      padding: 24px;
    }
    .lightbox img {
      max-width: min(92vw, 920px);
      max-height: 78vh;
      object-fit: contain;
      border-radius: 12px;
      box-shadow: 0 30px 80px rgba(0, 0, 0, 0.5);
    }
    .lightbox p {
      position: absolute;
      bottom: 28px;
      font-family: "Great Vibes", cursive;
      font-size: 36px;
      margin: 0;
    }
  `]
})
export class GalleryComponent {
  readonly photos = input<PhotoCard[]>([]);
  readonly videos = input<VideoCard[]>([]);
  readonly active = signal<PhotoCard | null>(null);

  tilt(index: number): string {
    const angles = [-4, 3, -2, 5, -6, 2, 4, -3];
    return `${angles[index % angles.length]}deg`;
  }

  open(photo: PhotoCard): void {
    this.active.set(photo);
  }
}
