import {Component, computed, input} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import {EmploymentSummary} from '../../../../shared/models/employment';

@Component({
  selector: 'app-employment-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './employment-card.component.html',
  styleUrl: './employment-card.component.css',
})
export class EmploymentCardComponent {
  data = input.required<EmploymentSummary>();

  // format the employment period at the company
  protected period = computed(() => {
    const {start, end} = this.data().headline;
    return `${start.year} - ${end?.year ?? 'Present'}`;
  });
}


