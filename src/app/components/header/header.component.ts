import {Component, inject} from '@angular/core';
import {NavigationEnd, Router, RouterLink} from '@angular/router';
import {SimpleButtonComponent} from '../../shared/components/simple-button/simple-button.component';
import {toSignal} from '@angular/core/rxjs-interop';
import {filter, map} from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    SimpleButtonComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  private readonly router = inject(Router);

  readonly items: NavItem[] = [
    {label: 'About', routerLink: '/about'},
    {label: 'Experience', routerLink: '/experience'},
    {label: 'Projects', routerLink: '/projects'},
    {label: 'Publications', routerLink: '/publications'},
  ];

  // Check if this the homepage
  readonly isHomePage = toSignal(
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd),
      map((e) => e.urlAfterRedirects === '/'),
    ),
    {initialValue: this.router.url === '/'},
  );
}

/**
 * Item for nav bar
 */
interface NavItem {
  label: string
  routerLink: string
}
