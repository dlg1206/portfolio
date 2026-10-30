import {Component, input} from '@angular/core';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-simple-button',
  imports: [
    RouterLink
  ],
  templateUrl: './simple-button.component.html',
  styleUrl: './simple-button.component.css',
  standalone: true
})
export class SimpleButtonComponent {
  readonly routerLink = input.required<string>();
  readonly content = input.required<string>();
  readonly padding = input<'sm' | 'md' | 'lg'>('md');
}
