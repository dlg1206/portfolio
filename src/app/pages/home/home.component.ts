import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ImageItem} from '../../shared/models/image-item';
import {HeroComponent} from './components/hero/hero.component';
import {ICONS} from '../../shared/globals';
import {InfoTileComponent} from './components/info-tile/info-tile.component';
import {HOME_CONTENT} from './content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    HeroComponent,
    InfoTileComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements AfterViewInit {
  images: Images
  infoTiles: InfoTile[]

  // Grab a reference to the DOM elements
  @ViewChild('aboutRow', {static: true}) aboutRow!: ElementRef;
  @ViewChild('infoRow', {static: true}) infoRow!: ElementRef;
  @ViewChild('learnMoreRow', {static: true}) learnMoreRow!: ElementRef;

  protected readonly ICONS = ICONS;
  protected readonly HOME_CONTENT = HOME_CONTENT;

  constructor() {
    this.images = {
      cyberSymposium: {
        image: 'img/manoa-csec-symposium-2025.jpg',
        alt: 'Derek with RIT alumni standing and smiling at the camera',
        source: 'https://www.hawaii.edu/news/2025/03/03/uh-cybersecurity-symposium'
      }
    }

    this.infoTiles = [
      {title: 'Education', icon: ICONS.scholar, content: HOME_CONTENT.education, routerLink: '/education'},
      {title: 'Experience', icon: ICONS.code, content: HOME_CONTENT.experience, routerLink: '/experience'},
      {title: 'Research', icon: ICONS.documents, content: HOME_CONTENT.research, routerLink: '/publications', width: 45}
    ]
  }


  ngAfterViewInit() {

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            // animate once
            observer.unobserve(entry.target);
          }
        });
      },
      // wait until 30% loaded
      {threshold: 0.4}
    );

    // observe elements
    observer.observe(this.aboutRow.nativeElement);
    observer.observe(this.infoRow.nativeElement);
    observer.observe(this.learnMoreRow.nativeElement);
  }
}


interface Images {
  cyberSymposium: ImageItem
}

interface InfoTile {
  title: string
  icon: ImageItem
  content: string
  routerLink: string
  width?: number
}



