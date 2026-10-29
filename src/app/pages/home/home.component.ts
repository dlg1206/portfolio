import {afterNextRender, Component, DestroyRef, ElementRef, inject, signal, viewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ImageItem} from '../../shared/models/image-item';
import {HeroComponent} from './components/hero/hero.component';
import {SimpleButtonComponent} from '../../shared/components/simple-button/simple-button.component';
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';
import {SoftwareCarouselComponent} from './components/software-carousel/software-carousel.component';
import {EmploymentCardComponent} from './components/employment-card/employment-card.component';
import {COMPANY_LOGOS} from '../../shared/data';
import {EmploymentSummary} from '../../shared/models/employment';
import {ProjectCardComponent} from './components/project-card/project-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HeroComponent,
    SimpleButtonComponent,
    SectionTitleComponent,
    SoftwareCarouselComponent,
    EmploymentCardComponent,
    ProjectCardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  // capture rows for fade in animation
  private readonly aboutMeRow = viewChild.required<ElementRef<HTMLElement>>('aboutMeRow');
  private readonly skillAndTechRow = viewChild.required<ElementRef<HTMLElement>>('skillAndTechRow');
  private readonly experienceRow = viewChild.required<ElementRef<HTMLElement>>('experienceRow');

  protected readonly experienceRowVisible = signal(false);


  private readonly destroyRef = inject(DestroyRef);

  protected readonly images = {
    aboutMeGarcia: {
      src: "garcia/about_me.jpg",
      alt: "Derek Garcia smiling past the camera while buttoning up his suit jacket",
    }
  } satisfies Record<string, ImageItem>;
  // logos in card order
  // todo - move to shared data folder?
  protected readonly experiences: EmploymentSummary[] = [
    {
      company: {
        name: 'Chainguard',
        logo: COMPANY_LOGOS.chainguard
      },
      headline: {
        title: 'Researcher',
        start: {year: 2024}
      }
    },
    {
      company: {
        name: 'University of Hawai\'i',
        logo: COMPANY_LOGOS.uhManoa
      },
      headline: {
        title: 'Graduate Research Assistant',
        start: {year: 2024}
      }
    },
    {
      company: {
        name: 'Vanguard',
        logo: COMPANY_LOGOS.vanguard
      },
      headline: {
        title: 'Technical Operations Intern',
        start: {year: 2023},
        end: {year: 2023}
      }
    },
    {
      company: {
        name: 'Global Cybersecurity Inst.',
        logo: COMPANY_LOGOS.ritGci
      },
      headline: {
        title: 'Software Security Engineer',
        start: {year: 2022},
        end: {year: 2024}
      }
    }
  ]
  // projects in order
  protected readonly projects: Project[] = []

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
      observer.observe(this.experienceRow().nativeElement);

      // clean up if the component is destroyed before both elements appear
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}
