import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ImageItem} from '../../shared/models/image-item';
import {HeroComponent} from './components/hero/hero.component';
import {ICONS} from '../../shared/globals';
import {HOME_CONTENT} from './content';
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
export class HomeComponent implements AfterViewInit {
  // Grab a reference to the DOM elements
  @ViewChild('infoRow', {static: true}) infoRow!: ElementRef;
  @ViewChild('learnMoreRow', {static: true}) learnMoreRow!: ElementRef;

  images: Images
  infoTiles: InfoTile[]

  // globals to be used directly in the html
  protected readonly ICONS = ICONS;
  protected readonly HOME_CONTENT = HOME_CONTENT;

  /**
   * Create homepage
   */
  constructor() {
    // images used on homepage
    this.images = {
      aboutMeGarcia: {
        image: "garcia/about_me.jpg",
        alt: "Derek Garcia smiling at past the camera while buttoning up his suit jacket",
      }
    }

    // details for info tiles
    this.infoTiles = [
      {title: 'Education', icon: ICONS.scholar, content: HOME_CONTENT.education, routerLink: '/education'},
      {title: 'Experience', icon: ICONS.code, content: HOME_CONTENT.experience, routerLink: '/experience'},
      {title: 'Research', icon: ICONS.documents, content: HOME_CONTENT.research, routerLink: '/publications', width: 45}
    ]
  }

  /**
   * Set animation behavior after reload
   */
  ngAfterViewInit() {
    // create new observer
    const observer = new IntersectionObserver(
      (entries) => {
        // If entry visible, run animation
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            // animate once
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      // wait until 40% loaded
      {threshold: 0.4}
    );

    // observe elements
    observer.observe(this.infoRow.nativeElement);
    observer.observe(this.learnMoreRow.nativeElement);
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
