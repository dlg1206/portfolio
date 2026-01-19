import {Component} from '@angular/core';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {ImageItem} from '../../../../shared/models/image-item';
import {DEFAULT_ICONS} from '../../../../shared/globals';

@Component({
  selector: 'app-welcome-banner',
  imports: [
    NgOptimizedImage,
    NgStyle
  ],
  templateUrl: './welcome-banner.component.html',
  styleUrl: './welcome-banner.component.css',
  standalone: true
})
export class WelcomeBannerComponent {

  images: Images
  protected readonly DEFAULT_ICONS = DEFAULT_ICONS;

  constructor() {
    this.images = {
      banner: {image: 'img/landscape.png', alt: 'landscape of Hudson River from the top of Mt. Beacon, New York'},
      welcome: {image: 'garcia/welcome.png', alt: 'portrait picture of Derek Garcia'},
    }
  }
}


interface Images {
  banner: ImageItem
  welcome: ImageItem
}
