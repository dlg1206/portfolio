import {Component} from '@angular/core';
import {IconItem, SOCIAL_ICONS} from '../../shared/globals';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

  protected readonly socialIcons: IconItem[] = [
    SOCIAL_ICONS.github,
    SOCIAL_ICONS.linkedin,
    SOCIAL_ICONS.googleScholar,
    SOCIAL_ICONS.email,
    SOCIAL_ICONS.orcid
  ];
  protected readonly currentYear: number = new Date().getFullYear();

}
