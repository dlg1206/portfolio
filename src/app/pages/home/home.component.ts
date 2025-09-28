import {Component} from '@angular/core';
import {SocialLinks} from '../../shared/globals';

@Component({
  selector: 'app-home',
  imports: [],
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
  email: IconItem;
  cemetech: IconItem;
}

