import {Component, computed, input} from '@angular/core';
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
  /** Internal navigation. Ignored if `href` is set. */
  readonly routerLink = input<string | any[]>('');
  /** External URL. Takes precedence over `routerLink`. */
  readonly href = input<string>();
  readonly content = input.required<string>();
  readonly padding = input<'sm' | 'md' | 'lg'>('md');
  readonly newTab = input(false);

  protected readonly target = computed(() => (this.newTab() ? '_blank' : null));
  protected readonly rel = computed(() => (this.newTab() ? 'noopener noreferrer' : null));
}
