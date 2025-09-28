import {Component} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: any[];

  /**
   * Create new nav bar with routes to over pages
   */
  constructor() {
    this.items = [
      {label: 'About', routerLink: '/about'},
      {label: 'Education', routerLink: '/education'},
      {label: 'Experience', routerLink: '/experience'},
      {label: 'Publications', routerLink: '/publications'},
      {label: 'Projects', routerLink: '/projects'}
    ];
  }
}
