import {Component} from '@angular/core';
import {DEFAULT_ICONS} from '../../shared/globals';
import {NgOptimizedImage} from '@angular/common';
import {ImageItem} from '../../shared/models/image-item';

@Component({
  selector: 'app-footer',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './footer.component.html',
  standalone: true,
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  items: ImageItem[];
  currentYear: number = new Date().getFullYear();


  /**
   * Create new nav bar with routes to external pages
   */
  constructor() {
    this.items = [
      DEFAULT_ICONS.github,
      DEFAULT_ICONS.linkedin,
      DEFAULT_ICONS.googleScholar,
      DEFAULT_ICONS.email,
      DEFAULT_ICONS.orcid
    ]
  }
}
