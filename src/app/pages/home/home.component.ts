import {afterNextRender, Component, DestroyRef, ElementRef, inject, viewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ImageItem} from '../../shared/models/image-item';
import {HeroComponent} from './components/hero/hero.component';
import {SimpleButtonComponent} from '../../shared/components/simple-button/simple-button.component';
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';
import {SoftwareCarouselComponent} from './components/software-carousel/software-carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HeroComponent,
    SimpleButtonComponent,
    SectionTitleComponent,
    SoftwareCarouselComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // capture rows for fade in animation
  private readonly aboutMeRow = viewChild.required<ElementRef<HTMLElement>>('aboutMeRow');
  private readonly skillAndTechRow = viewChild.required<ElementRef<HTMLElement>>('skillAndTechRow');

  private readonly destroyRef = inject(DestroyRef);

  readonly images: Images = {
    aboutMeGarcia: {
      image: "garcia/about_me.jpg",
      alt: "Derek Garcia smiling past the camera while buttoning up his suit jacket",
    }
  }

  // animate row loads in
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
        {threshold: 0.5},
      );

      observer.observe(this.aboutMeRow().nativeElement);
      observer.observe(this.skillAndTechRow().nativeElement);

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

interface SoftwareIcons {
  angular: ImageItem
  ansible: ImageItem
  bash: ImageItem
  cSharp: ImageItem
  docker: ImageItem
  git: ImageItem
  java: ImageItem
  javascript: ImageItem
  mysql: ImageItem
  python: ImageItem
  redis: ImageItem
  sqlite: ImageItem
  typescript: ImageItem
}
