import {Component} from '@angular/core';
import {DEFAULT_ICONS} from '../../shared/globals';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {ImageItem} from '../../shared/models/image-item';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgStyle
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  bannerImage: string
  images: Images
  protected readonly DEFAULT_ICONS = DEFAULT_ICONS;

  constructor() {
    this.bannerImage = "img/landscape.png"

    this.images = {
      welcome: {image: 'garcia/welcome.png', alt: 'portrait picture of Derek Garcia'},
      cyberSymposium: {
        image: 'img/manoa-csec-symposium-2025.jpg',
        alt: 'Derek with RIT alumni standing and smiling at the camera',
        source: 'https://www.hawaii.edu/news/2025/03/03/uh-cybersecurity-symposium'
      }
    }
  }
}


interface Images {
  welcome: ImageItem
  cyberSymposium: ImageItem
}



