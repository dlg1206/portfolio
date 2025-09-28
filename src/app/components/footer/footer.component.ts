import {Component} from '@angular/core';
import {SocialLinks} from '../../shared/globals';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  items: any[];
  currentYear: number = new Date().getFullYear();


  /**
   * Create new nav bar with routes to external pages
   */
  constructor() {
    this.items = [
      {label: 'GitHub', url: SocialLinks.github, icon: 'icons/github.svg'},
      {label: 'LinkedIn', url: SocialLinks.linkedin, icon: 'icons/linkedin.svg'},
      {label: 'Google Scholar', url: SocialLinks.google_scholar, icon: 'icons/google_scholar.svg'},
      {label: 'Email', url: SocialLinks.email, icon: 'icons/email.svg'},
      {label: 'ORCID', url: SocialLinks.orcid, icon: 'icons/orcid.svg'}
    ];
  }
}
