import {afterNextRender, Component, DestroyRef, ElementRef, inject, signal, viewChild} from '@angular/core';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {ImageItem} from '../../../../shared/models/image-item';
import {SOCIAL_ICONS} from '../../../../shared/data';
import {IconItem} from '../../../../shared/models/icon-item';

@Component({
  selector: 'app-hero',
  imports: [
    NgOptimizedImage,
    NgStyle
  ],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  standalone: true
})
export class HeroComponent {
  // Grab references to DOM elements
  private readonly heroTitle = viewChild.required<ElementRef<HTMLElement>>('heroTitle');
  private readonly heroSubtitle = viewChild.required<ElementRef<HTMLElement>>('heroSubtitle');

  private readonly destroyRef = inject(DestroyRef);

  protected readonly images = {
    banner: {src: "img/landscape.png", alt: "Overlook of Kāneʻohe, Hawai'i from mountain range"},
    hero: {src: "garcia/hero.png", alt: "Portrait picture of Derek Garcia"}
  } satisfies Record<string, ImageItem>;
  protected readonly socialIcons: IconItem[] = Object.values(SOCIAL_ICONS);

  protected readonly heroVisible = signal(false);
  protected readonly socialIconsVisible = signal(false);

  // animate hero fade in
  constructor() {
    // browser only, so it's SSR-safe
    afterNextRender(() => {
      const observer = new IntersectionObserver((entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          this.heroVisible.set(true);
          this.socialIconsVisible.set(true);
          observer.disconnect(); // animate once, stop watching everything
        }
      });

      observer.observe(this.heroTitle().nativeElement);
      observer.observe(this.heroSubtitle().nativeElement);

      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
