import {ComponentFixture, TestBed} from '@angular/core/testing';

import {KeywordChipComponent} from './keyword-chip.component';

describe('KeywordChipComponent', () => {
  let component: KeywordChipComponent;
  let fixture: ComponentFixture<KeywordChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeywordChipComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(KeywordChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
