import {Component, input} from '@angular/core';

@Component({
  selector: 'app-keyword-chip',
  imports: [],
  templateUrl: './keyword-chip.component.html',
  styleUrl: './keyword-chip.component.css',
})
export class KeywordChipComponent {
  readonly content = input.required<string>();
}
