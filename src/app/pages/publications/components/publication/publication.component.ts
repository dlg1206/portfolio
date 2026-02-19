import {Component, Input} from '@angular/core';
import {Publication} from '../../publications.component';
import {PubButtonComponent} from '../pub-button/pub-button.component';


@Component({
  selector: 'app-publication',
  imports: [
    PubButtonComponent
  ],
  templateUrl: './publication.component.html',
  styleUrl: './publication.component.css',
})
export class PublicationComponent {
  // params for component
  @Input() publication!: Publication;
}
