import { Component, ElementRef, OnDestroy, afterNextRender, viewChild } from '@angular/core';

interface Particle {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
  rot: number;
  vr: number;
  color: string;
  shape: 'rect' | 'circle' | 'heart';
}

@Component({
  selector: 'app-confetti',
  template: `<canvas #canvas class="confetti"></canvas>`,
  styles: [`
    .confetti {
      position: fixed;
      inset: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: 5;
    }
  `]
})
export class ConfettiComponent implements OnDestroy {
  private readonly canvasRef = viewChild<ElementRef<HTMLCanvasElement>>('canvas');
  private ctx?: CanvasRenderingContext2D | null;
  private particles: Particle[] = [];
  private frame = 0;
  private resizeObserver?: () => void;
  private readonly colors = ['#ff8fb3', '#f6d36b', '#fff6ec', '#7ee0c6', '#e85a8c', '#ffffff'];

  constructor() {
    afterNextRender(() => this.start());
  }

  burst(count = 140): void {
    const canvas = this.canvasRef()?.nativeElement;
    if (!canvas) {
      return;
    }
    const { width, height } = canvas;
    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: width * (0.15 + Math.random() * 0.7),
        y: -20 - Math.random() * 80,
        r: 4 + Math.random() * 7,
        vx: -2.4 + Math.random() * 4.8,
        vy: 1.4 + Math.random() * 3.2,
        rot: Math.random() * Math.PI,
        vr: -0.12 + Math.random() * 0.24,
        color: this.colors[Math.floor(Math.random() * this.colors.length)],
        shape: Math.random() > 0.7 ? 'heart' : Math.random() > 0.5 ? 'circle' : 'rect'
      });
    }
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.frame);
    window.removeEventListener('resize', this.resizeObserver ?? (() => undefined));
  }

  private start(): void {
    const canvas = this.canvasRef()?.nativeElement;
    if (!canvas) {
      return;
    }
    this.ctx = canvas.getContext('2d');
    this.fit();
    this.resizeObserver = () => this.fit();
    window.addEventListener('resize', this.resizeObserver);
    this.burst(180);
    this.tick();
  }

  private fit(): void {
    const canvas = this.canvasRef()?.nativeElement;
    if (!canvas) {
      return;
    }
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  private tick = (): void => {
    const canvas = this.canvasRef()?.nativeElement;
    const ctx = this.ctx;
    if (!canvas || !ctx) {
      return;
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    this.particles = this.particles.filter((p) => p.y < canvas.height + 40);
    for (const p of this.particles) {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.012;
      p.rot += p.vr;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      if (p.shape === 'circle') {
        ctx.beginPath();
        ctx.arc(0, 0, p.r * 0.6, 0, Math.PI * 2);
        ctx.fill();
      } else if (p.shape === 'heart') {
        this.heart(ctx, p.r);
      } else {
        ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
      }
      ctx.restore();
    }
    this.frame = requestAnimationFrame(this.tick);
  };

  private heart(ctx: CanvasRenderingContext2D, size: number): void {
    const s = size * 0.18;
    ctx.beginPath();
    ctx.moveTo(0, s * 3);
    ctx.bezierCurveTo(-s * 5, -s, -s * 2, -s * 4, 0, -s * 1.6);
    ctx.bezierCurveTo(s * 2, -s * 4, s * 5, -s, 0, s * 3);
    ctx.fill();
  }
}
