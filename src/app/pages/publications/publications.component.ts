import {Component, Input} from '@angular/core';
import {PublicationComponent} from './components/publication/publication.component';
import {PubPaginationListComponent} from './components/pub-pagination-list/pub-pagination-list.component';

@Component({
  selector: 'app-publications',
  imports: [
    PublicationComponent,
    PubPaginationListComponent
  ],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css',
})
export class PublicationsComponent {
  publications: Publication[];

  constructor() {
    const p =       {
      title: 'foo',
      abstract: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus, quam at scelerisque semper, lectus purus pretium sapien, ac elementum diam tortor sed mauris. Donec ac commodo mi. In quis magna felis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In tempus, quam at scelerisque semper, lectus purus pretium sapien, ac elementum diam tortor sed mauris. Donec ac commodo mi. In quis magna felis.',
      authors: ['R. Garcia', 'D. Garcia'],
      boldIndex: 1,
      href: 'https://colornamer.robertcooper.me/',
      doi: 'bar',
      citation: 'foo',
      datePublished: new Date().toDateString()
    }
    this.publications = []
    for (let i = 0; i < 9; i++) {
      const cp = { ...p };
      cp.title = "foo-" + i
      this.publications.push(cp)
    }
    // this.publications = [p, p, p, p, p, p, p, p, p]
  }

}

/**
 * DTO for publication
 */
export interface Publication {
  title: string
  abstract: string
  authors: string[]
  boldIndex: number
  citation: string
  datePublished: string
  doi?: string
  href?: string
}
