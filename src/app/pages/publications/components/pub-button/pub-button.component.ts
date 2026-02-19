import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pub-button',
  imports: [],
  templateUrl: './pub-button.component.html',
  styleUrl: './pub-button.component.css',
})
export class PubButtonComponent {
  @Input() content!: string
  @Input() copyContent?: string; // for copy
  @Input() href?: string;    // for link

  /**
   * Copied text to clipboard or open link
   *
   * @protected
   */
  protected handleClick() {
    /*copy to clipboard*/
    /*todo - notification that link has been copied*/
    if (this.copyContent) {
      navigator.clipboard.writeText(this.copyContent)
        .catch(err => console.error('Failed to copy:', err));
      /*open link*/
    } else if (this.href) {
      window.open(this.href, '_blank', 'noopener,noreferrer');
    }
  }

}
