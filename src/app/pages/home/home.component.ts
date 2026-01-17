import {Component} from '@angular/core';
import {SocialLinks} from '../../shared/globals';
import {NgOptimizedImage, NgStyle} from '@angular/common';

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
  icons: Icons

  /**
   * Create new nav bar with routes to external pages
   */
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

    this.icons = {
      github: {label: 'GitHub', url: SocialLinks.github, icon: 'icons/github.svg'},
      linkedin: {label: 'LinkedIn', url: SocialLinks.linkedin, icon: 'icons/linkedin.svg'},
      googleScholar: {label: 'Google Scholar', url: SocialLinks.google_scholar, icon: 'icons/google_scholar.svg'},
      orcid: {label: 'ORCID', url: SocialLinks.orcid, icon: 'icons/orcid.svg'},
      email: {label: 'Email', url: SocialLinks.email, icon: 'icons/email.svg'},
      cemetech: {label: 'Calculator', url: SocialLinks.cemetech, icon: 'icons/calculator.svg'}
    }

  }

}

interface IconItem {
  label: string;
  url: string;
  icon: string;
}

interface Icons {
  github: IconItem;
  linkedin: IconItem;
  googleScholar: IconItem;
  orcid: IconItem;
  email: IconItem;
  cemetech: IconItem;
}

interface ImageItem {
  image: string;
  alt: string;
  source?: string;
}

interface Images {
  welcome: ImageItem
  cyberSymposium: ImageItem
}



