import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';

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
  constructor(public router: Router) {
    this.items = [
      {label: 'About', routerLink: '/about'},
      {label: 'Education', routerLink: '/education'},
      {label: 'Experience', routerLink: '/experience'},
      {label: 'Publications', routerLink: '/publications'},
      {label: 'Projects', routerLink: '/projects'}
    ];
  }


  /**
   * Check if this the homepage
   */
  get isHomePage(): boolean {
    return this.router.url === '/';
  }
}
