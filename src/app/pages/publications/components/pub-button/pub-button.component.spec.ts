import {ComponentFixture, TestBed} from '@angular/core/testing';

import {PubButtonComponent} from './pub-button.component';

describe('PubButtonComponent', () => {
  let component: PubButtonComponent;
  let fixture: ComponentFixture<PubButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PubButtonComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PubButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
