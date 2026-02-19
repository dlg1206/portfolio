import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PubPaginationListComponent } from './pub-pagination-list.component';

describe('PubPaginationListComponent', () => {
  let component: PubPaginationListComponent;
  let fixture: ComponentFixture<PubPaginationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubPaginationListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PubPaginationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
