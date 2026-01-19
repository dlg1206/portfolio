import {Component} from '@angular/core';
import {NgOptimizedImage, NgStyle} from '@angular/common';
import {ImageItem} from '../../shared/models/image-item';
import {WelcomeBannerComponent} from './components/welcome-banner/welcome-banner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    NgStyle,
    WelcomeBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  images: Images

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



