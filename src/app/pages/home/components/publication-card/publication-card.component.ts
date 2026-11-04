import {
  afterNextRender,
  afterRenderEffect,
  Component,
  computed,
  DestroyRef,
  ElementRef,
  inject,
  input,
  signal,
  viewChild
} from '@angular/core';
import {SimpleButtonComponent} from "../../../../shared/components/simple-button/simple-button.component";
import {Publication, shortName} from '../../../../shared/models/publication';
import {KeywordChipComponent} from '../../../../shared/components/keyword-chip/keyword-chip.component';

@Component({
  selector: 'app-publication-card',
  imports: [
    SimpleButtonComponent,
    KeywordChipComponent
  ],
  templateUrl: './publication-card.component.html',
  styleUrl: './publication-card.component.css',
})
export class PublicationCardComponent {

  private row = viewChild.required<ElementRef<HTMLElement>>('row');
  private measure = viewChild.required<ElementRef<HTMLElement>>('measure');
  private destroyRef = inject(DestroyRef);

  private width = signal(0);

  protected readonly shortName = shortName;
  // sort keywords by length
  protected sortedKeywords = computed(() =>
    [...this.publication().keywords].sort((a, b) => a.length - b.length || a.localeCompare(b))
  );

  publication = input.required<Publication>();
  count = signal(Infinity);

  authors = computed(() => this.publication().authors);
  boldIndex = computed(() => this.publication().boldIndex);
  truncated = computed(() => this.count() < this.authors().length);

  constructor() {
    afterNextRender(() => {
      const ro = new ResizeObserver(([e]) => this.width.set(e.contentRect.width));
      ro.observe(this.row().nativeElement);
      this.destroyRef.onDestroy(() => ro.disconnect());
    });

    afterRenderEffect(() => {
      const max = this.width();
      this.authors(); // re-measure when the data changes
      const kids = Array.from(this.measure().nativeElement.children) as HTMLElement[];
      const etAl = kids.pop()!.offsetWidth;
      const widths = kids.map(k => k.offsetWidth);

      const total = widths.reduce((a, b) => a + b, 0);
      if (total <= max) {
        this.count.set(widths.length);
        return;
      }

      let used = 0, n = 0;
      while (n < widths.length - 1 && used + widths[n] + etAl <= max) used += widths[n++];
      this.count.set(Math.max(1, n));
    });
  }
}



