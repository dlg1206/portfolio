import {afterNextRender, Component, DestroyRef, ElementRef, inject, viewChild} from '@angular/core';
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
import {GitHubProject} from '../../shared/models/github-project';

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
  private readonly featuredProjectsRow = viewChild.required<ElementRef<HTMLElement>>('featuredProjectsRow');


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
  protected readonly projects: ProjectItem[] = [
    {
      project: {
        owner: 'dlg1206',
        repo: 'starlite',
        keywords: ['Web App', 'Course Scheduler', 'Angular', 'Spring Boot', 'Scheduler'],
        abstract: 'Starlite is an Angular web app to help University of Hawai’i students more easily search for courses and build class schedules across all ten UH campuses. Students can search for courses by subject or keywords and filter results with advanced filters. After selecting courses, every possible schedule can quickly be generated and compared side by side.'
      },
      article: '' // todo
    },
    {
      project: {
        owner: 'dlg1206',
        repo: 'llumpy',
        keywords: ['Package Development', 'API Client', 'OpenAI', 'Anthropic', 'Ollama'],
        abstract: 'Llumpy is a Python library that provides a unified interface for prompting LLMs from Anthropic, OpenAI, and Ollama, to switch providers without rewriting your code. It supports one-shot and few-shot prompting, streaming responses, loading prompts from files, async variants, automatic retry handlers, and custom provider clients.'
      },
      article: '' // todo
    },
    {
      project: {
        owner: 'dlg1206',
        repo: 'snowsearch',
        keywords: ['Strategic Literature Review', 'Automation', 'OpenAlex', 'Grobid'],
        // abstract: 'I did a thing :)'
        abstract: 'SnowSearch is a self-contained, command-line toolchain that automates systematic literature reviews utilizing a snowball technique. Starting with a natural-language query, related papers are pulled from OpenAlex and parsed with Grobid in successive “snowball” rounds and ranked by the relevance of the abstract to the original query.'
      },
      article: '' // todo
    }
  ]

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
      observer.observe(this.featuredProjectsRow().nativeElement);

      // clean up if the component is destroyed before both elements appear
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }
}

// util dto to link to related article
interface ProjectItem {
  project: GitHubProject;
  article: string;
}
