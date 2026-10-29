import {Component, computed, input} from '@angular/core';
import {ImageItem} from '../../../../shared/models/image-item';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-employment-card',
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './employment-card.component.html',
  styleUrl: './employment-card.component.css',
})
export class EmploymentCardComponent {
  position = input.required<string>();
  company = input.required<string>();
  startYear = input.required<string>();
  endYear = input<string | undefined>('Present');
  companyLogo = input.required<ImageItem>();

  protected displayEndYear = computed(() => this.endYear() ?? 'Present');
}


