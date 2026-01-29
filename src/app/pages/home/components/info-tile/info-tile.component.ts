import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {ImageItem} from '../../../../shared/models/image-item';
import {SimpleButtonComponent} from '../../../../shared/components/simple-button/simple-button.component';

@Component({
  selector: 'app-info-tile',
  imports: [
    NgOptimizedImage,
    SimpleButtonComponent
  ],
  templateUrl: './info-tile.component.html',
  styleUrl: './info-tile.component.css',
  standalone: true
})
export class InfoTileComponent implements AfterViewInit {
  @Input() title!: string
  @Input() icon!: ImageItem
  @Input() content!: string
  @Input() routerLink!: string
  @Input() height: number = 60
  @Input() width: number = 60

  // Grab a reference to the info-card DOM element
  @ViewChild('card', {static: true}) card!: ElementRef;

  ngAfterViewInit() {
    // Create an IntersectionObserver to watch when the card enters the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        // if onscreen, apply the fade in transition
        if (entry.isIntersecting) {
          this.card.nativeElement.classList.add('fade-in');
          observer.unobserve(this.card.nativeElement); // animate once
        }
      },
      {
        threshold: 0.3, // triggers when 30% visible
      }
    );

    // Start observing the card
    observer.observe(this.card.nativeElement);
  }
}
