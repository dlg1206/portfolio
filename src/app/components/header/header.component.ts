import { Component } from '@angular/core';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-header',
  imports: [
    MenubarModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  items: any[];

  constructor() {
    this.items = [
      { label: 'About', icon: 'pi pi-home', routerLink: '/about' },
      { label: 'Education', icon: 'pi pi-chart-line', routerLink: '/education' },
      { label: 'Experience', icon: 'pi pi-sign-in', routerLink: '/experience' },
      { label: 'Publications', icon: 'pi pi-sign-in', routerLink: '/projects' }
    ];
  }

}
