import {ComponentFixture, TestBed} from '@angular/core/testing';

import {SoftwareCarouselComponent} from './software-carousel.component';

describe('SoftwareCarouselComponent', () => {
  let component: SoftwareCarouselComponent;
  let fixture: ComponentFixture<SoftwareCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareCarouselComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(SoftwareCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
