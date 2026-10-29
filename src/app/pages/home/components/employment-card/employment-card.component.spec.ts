import {ComponentFixture, TestBed} from '@angular/core/testing';

import {EmploymentCardComponent} from './employment-card.component';

describe('EmploymentCardComponent', () => {
  let component: EmploymentCardComponent;
  let fixture: ComponentFixture<EmploymentCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmploymentCardComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(EmploymentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
