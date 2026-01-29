import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {ImageItem} from '../../../../shared/models/image-item';
import {ICONS} from '../../../../shared/globals';

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
export class HeroComponent implements AfterViewInit {
  // Grab references to DOM elements
  @ViewChild('heroTitle', {static: true}) heroTitle!: ElementRef;
  @ViewChild('heroSubtitle', {static: true}) heroSubtitle!: ElementRef;


  images: Images
  socialIcons: IconItem[]
  socialIconsVisible: boolean = false

  constructor() {
    this.images = {
      banner: {image: 'img/landscape.png', alt: 'Overlook of mountain range and town in Hawai\'i'},
      welcome: {image: 'garcia/welcome.png', alt: 'Portrait picture of Derek Garcia'},
    }

    this.socialIcons = [
      {href: ICONS.linkedin.href, alt: ICONS.linkedin.alt, image: ICONS.linkedin.image},
      {href: ICONS.github.href, alt: ICONS.github.alt, image: ICONS.github.image},
      {href: ICONS.orcid.href, alt: ICONS.orcid.alt, image: ICONS.orcid.image},
      {href: ICONS.googleScholar.href, alt: ICONS.googleScholar.alt, image: ICONS.googleScholar.image},
      {href: ICONS.email.href, alt: ICONS.email.alt, image: ICONS.email.image, height: 45, width: 56},
      {href: ICONS.cemetech.href, alt: ICONS.cemetech.alt, image: ICONS.cemetech.image, height: 45, width: 36},
    ]
  }


  ngAfterViewInit() {
    // Create an IntersectionObserver to watch when the card enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if onscreen, apply the fade in transition
        if (entry.isIntersecting) {
          this.heroTitle.nativeElement.classList.add('visible');
          this.heroSubtitle.nativeElement.classList.add('visible');
          // animate once
          observer.unobserve(this.heroTitle.nativeElement);
          observer.unobserve(this.heroSubtitle.nativeElement);
          // start staggered load of social icons
          this.socialIconsVisible = true;
        }
      }
    );

    // Start observing the items
    observer.observe(this.heroTitle.nativeElement);
    observer.observe(this.heroSubtitle.nativeElement);
  }
}


interface Images {
  banner: ImageItem
  welcome: ImageItem
}

interface IconItem {
  href: string | undefined;
  alt: string;
  image: string;
  height?: number;
  width?: number;
}



