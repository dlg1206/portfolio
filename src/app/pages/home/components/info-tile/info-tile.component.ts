import {Component, Input} from '@angular/core';
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
export class InfoTileComponent {
  @Input() title!: string
  @Input() icon!: ImageItem
  @Input() content!: string
  @Input() routerLink!: string
  @Input() height: number = 60
  @Input() width: number = 60
}
