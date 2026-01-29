import {Component} from '@angular/core';
import {ICONS} from '../../shared/globals';
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
   * Create footer with routes to external pages
   */
  constructor() {
    this.items = [
      ICONS.github,
      ICONS.linkedin,
      ICONS.googleScholar,
      ICONS.email,
      ICONS.orcid
    ]
  }
}
