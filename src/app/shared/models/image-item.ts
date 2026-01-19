/**
 * Represents an image item used in components.
 *
 * - `image`: URL or path to the image
 * - `alt`: Alternative text for accessibility
 * - `source`: Optional source or credit for the image
 * - `linkURL`: Optional url to link to this image
 */
export interface ImageItem {
  image: string;
  alt: string;
  source?: string;
  href?: string;
}

/** Collection of icons, keyed by icon name */
export type IconName = 'github' | 'linkedin' | 'googleScholar' | 'orcid' | 'email' | 'cemetech';
export type Icons = Record<IconName, ImageItem>;
