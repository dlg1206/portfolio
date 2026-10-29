/**
 * Represents an image item used in components.
 *
 * - `src`: Path to the image
 * - `alt`: Alternative text for accessibility
 * - `href`: Optional url to link to this image
 * - `origin`: Optional url to link to where this image originated from
 */
export interface ImageItem {
  src: string;
  alt: string;
  href?: string;
  origin?: string;
}
