import {afterNextRender, Component, DestroyRef, ElementRef, inject, viewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ImageItem} from '../../shared/models/image-item';
import {HeroComponent} from './components/hero/hero.component';
import {SimpleButtonComponent} from '../../shared/components/simple-button/simple-button.component';
import {SectionTitleComponent} from '../../shared/components/section-title/section-title.component';
import {SoftwareCarouselComponent} from './components/software-carousel/software-carousel.component';
import {EmploymentCardComponent} from './components/employment-card/employment-card.component';
import {EmploymentSummary, toSummary} from '../../shared/models/employment';
import {ProjectCardComponent} from './components/project-card/project-card.component';
import {GitHubProject} from '../../shared/models/github-project';
import {PublicationCardComponent} from './components/publication-card/publication-card.component';
import {POSITIONS} from '../../shared/data/employments';
import {Publication} from '../../shared/models/publication';
import {PUBLICATIONS} from '../../shared/data/publications';

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
    ProjectCardComponent,
    PublicationCardComponent
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
  private readonly featuredPublicationsRow = viewChild.required<ElementRef<HTMLElement>>('featuredPublicationsRow');


  private readonly destroyRef = inject(DestroyRef);

  protected readonly images = {
    aboutMeGarcia: {
      src: "garcia/about_me.jpg",
      alt: "Derek Garcia smiling past the camera while buttoning up his suit jacket",
    }
  } satisfies Record<string, ImageItem>;

  // logos in card order
  protected readonly experiences: EmploymentSummary[] = [
    toSummary(POSITIONS.chainguard),
    toSummary(POSITIONS.uhManoa),
    toSummary(POSITIONS.vanguard),
    toSummary(POSITIONS.ritGci)
  ]
  // projects in order
  protected readonly projects: ProjectItem[] = [
    {
      project: {
        owner: 'dlg1206',
        repo: 'starlite',
        keywords: ['Course Scheduler', 'Angular', 'Web App'],
        abstract: 'Starlite is an Angular web app to help University of Hawai’i students more easily search for courses and build class schedules across all ten UH campuses. Students can search for courses by subject or keywords and filter results with advanced filters. After selecting courses, every possible schedule can quickly be generated and compared side by side.'
      },
      article: '' // todo
    },
    {
      project: {
        owner: 'dlg1206',
        repo: 'llumpy',
        keywords: ['Package Development', 'API Client'],
        abstract: 'Llumpy is a Python library that provides a unified interface for prompting LLMs from Anthropic, OpenAI, and Ollama, to switch providers without rewriting your code. It supports one-shot and few-shot prompting, streaming responses, loading prompts from files, async variants, automatic retry handlers, and custom provider clients.'
      },
      article: '' // todo
    },
    {
      project: {
        owner: 'dlg1206',
        repo: 'snowsearch',
        keywords: ['Literature Review', 'OpenAlex', 'Grobid'],
        abstract: 'SnowSearch is a self-contained, command-line toolchain that automates systematic literature reviews utilizing a snowball technique. Starting with a natural-language query, related papers are pulled from OpenAlex and parsed with Grobid in successive “snowball” rounds and ranked by the relevance of the abstract to the original query.'
      },
      article: '' // todo
    }
  ]
  // publications in order
  protected readonly publications: Publication[] = [
    PUBLICATIONS.signHere,
    PUBLICATIONS.sbom,
    PUBLICATIONS.ossSurvey
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
      observer.observe(this.featuredPublicationsRow().nativeElement);

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
