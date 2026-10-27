import {afterNextRender, Component, DestroyRef, ElementRef, inject, viewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ImageItem} from '../../shared/models/image-item';
import {HeroComponent} from './components/hero/hero.component';
import {ICONS} from '../../shared/globals';
import {SimpleButtonComponent} from '../../shared/components/simple-button/simple-button.component';
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HeroComponent,
    SimpleButtonComponent,
    SectionTitleComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  private readonly aboutMeRow = viewChild.required<ElementRef<HTMLElement>>('aboutMeRow');

  private readonly destroyRef = inject(DestroyRef);

  readonly images: Images = {
    aboutMeGarcia: {
      image: 'garcia/about_me.jpg',
      alt: 'Derek Garcia smiling past the camera while buttoning up his suit jacket',
    },
  };

  protected readonly ICONS = ICONS;

  constructor() {
    // runs only in the browser, so it's SSR-safe
    afterNextRender(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('fade-in');
              observer.unobserve(entry.target);
            }
          });
        },
        {threshold: 0.4},
      );

      observer.observe(this.aboutMeRow().nativeElement);

      // clean up if the component is destroyed before both elements appear
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}

/**
 * Image collection
 */
interface Images {
  aboutMeGarcia: ImageItem
}

/**
 * DTO for info tiles
 */
interface InfoTile {
  title: string
  icon: ImageItem
  content: string
  routerLink: string
  width?: number
}
