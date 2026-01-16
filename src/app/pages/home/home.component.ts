import {Component} from '@angular/core';
import {SocialLinks} from '../../shared/globals';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  icons: Icons

  /**
   * Create new nav bar with routes to external pages
   */
  constructor() {
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

