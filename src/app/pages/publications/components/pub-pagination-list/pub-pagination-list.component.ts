import {Component, Input, OnInit} from '@angular/core';
import {Publication} from '../../publications.component';
import {Paginator, PaginatorState} from 'primeng/paginator';
import {PublicationComponent} from '../publication/publication.component';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-pub-pagination-list',
  imports: [
    Paginator,
    PublicationComponent,
    NgClass
  ],
  templateUrl: './pub-pagination-list.component.html',
  styleUrl: './pub-pagination-list.component.css',
})
export class PubPaginationListComponent implements OnInit {
  @Input() publications!: Publication[]

  startIndex: number = 0; // starting index
  pageSize: number = 5; // number of elements on page
  paginatedPublications!: any[]

  ngOnInit(){
    // sort publications by newest first
    this.publications
      .sort((a, b) =>
        new Date(b.datePublished).getTime() -
        new Date(a.datePublished).getTime()
      );

    // load in first page
    // this.setPaginatedPageVisibility(false);
    // setTimeout(() => this.setPaginatedPageVisibility(true));
    // create slice for current page
    // this.paginatedPublications = this.publications
    //   .slice(this.startIndex, this.startIndex + this.pageSize)
    //   .map(p => ({ ...p, isVisible: false }));
    // // update the current page
    // setTimeout(() => this.paginatedPublications.map(p => ({ ...p, isVisible: true })), 10);

    this.paginatedPublications = this.publications
      .slice(this.startIndex, this.startIndex + this.pageSize)
      .map(p => ({ ...p,
        uid: this.generateUid() }));  }

  onPageChange(event: PaginatorState) {
    // foo ?? bar =? bar if foo is null
    // update pagination index
    this.startIndex = event.first ?? 0;
    this.pageSize = event.rows ?? 5;
    // render new page hidden
    // this.setPaginatedPageVisibility(false);
    // this.paginatedPublications = this.publications
    //   .slice(this.startIndex, this.startIndex + this.pageSize)
    //   .map(p => ({ ...p, isVisible: false }));
    //
    // // enable visibility for new page
    // setTimeout(() => this.paginatedPublications.map(p => ({ p, isVisible: true })), 10);
    this.paginatedPublications = this.publications
      .slice(this.startIndex, this.startIndex + this.pageSize)
      .map(p => ({ ...p ,
        uid: this.generateUid()}));  }

  private setPaginatedPageVisibility(isVisible: boolean){
    this.paginatedPublications = this.publications
      .slice(this.startIndex, (this.startIndex + this.pageSize))
      .map(p => ({
        ...p,
        isVisible
      }));
  }

  private generateUid() {
    return Math.random().toString(36).substring(2, 10) + Date.now().toString(36);
  }

  trackByUid(index: number, item: any) {
    return item.uid; // ensures Angular treats each slice as new
  }
}
