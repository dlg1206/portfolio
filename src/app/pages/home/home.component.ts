import {Component} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ImageItem} from '../../shared/models/image-item';
import {WelcomeBannerComponent} from './components/welcome-banner/welcome-banner.component';
import {ICONS} from '../../shared/globals';
import {InfoTileComponent} from './components/info-tile/info-tile.component';
import {HOME_CONTENT} from './content';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    WelcomeBannerComponent,
    InfoTileComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images: Images

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
  }
}


interface Images {
  cyberSymposium: ImageItem
}



