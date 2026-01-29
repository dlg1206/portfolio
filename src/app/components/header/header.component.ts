import {Component} from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {SimpleButtonComponent} from '../../shared/components/simple-button/simple-button.component';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    SimpleButtonComponent
  ],
  templateUrl: './header.component.html',
  standalone: true,
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: NavItem[];

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


interface NavItem {
  label: string
  routerLink: string
}
