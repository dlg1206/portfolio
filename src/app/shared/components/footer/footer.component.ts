import {Component} from '@angular/core';
import {SOCIAL_ICONS} from '../../globals';
import {IconItem} from '../../models/icon-item';

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
