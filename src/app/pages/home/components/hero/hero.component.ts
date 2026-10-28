import {afterNextRender, Component, DestroyRef, ElementRef, inject, signal, viewChild} from '@angular/core';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {ImageItem} from '../../../../shared/models/image-item';
import {SocialLinks} from '../../../../shared/globals';

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

  images: Images = {
    banner: {image: "img/landscape.png", alt: "Overlook of mountain range and town in Hawai'i"},
    hero: {image: "garcia/hero.png", alt: "Portrait picture of Derek Garcia"},
  }
  socialIcons: IconItem[] = [
    {icon: "pi pi-linkedin", href: SocialLinks.linkedin, alt: "LinkedIn"},
    {icon: "pi pi-github", href: SocialLinks.github, alt: "GitHub"},
    {icon: "fa-brands fa-orcid", href: SocialLinks.orcid, alt: "ORCID"},
    {icon: "fa-brands fa-google-scholar", href: SocialLinks.google_scholar, alt: "Google Scholar"},
    {icon: "pi pi-envelope", href: SocialLinks.email, alt: "Email"},
    {icon: "pi pi-calculator", href: SocialLinks.cemetech, alt: "Cemetech"},
  ];

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

/**
 * Image collection used by hero
 */
interface Images {
  banner: ImageItem
  hero: ImageItem
}

/**
 * Single icon
 */
interface IconItem {
  icon: string;
  href: string;
  alt: string;
}



