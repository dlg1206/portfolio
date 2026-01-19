import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-simple-button',
  imports: [
    NgClass
  ],
  templateUrl: './simple-button.component.html',
  styleUrl: './simple-button.component.css',
  standalone: true
})
export class SimpleButtonComponent {

  @Input() routerLink!: string
  @Input() content!: string
  @Input() padding: 'sm' | 'md' | 'lg' = 'md';

  constructor(private router: Router) {
  }

  handleClick() {
    this.router.navigateByUrl(this.routerLink)
      .catch(err => console.error(err));
  }

}
