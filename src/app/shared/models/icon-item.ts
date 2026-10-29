/**
 * Represents an image item used in components.
 *
 * - `icon`: Full icon identifier
 * - `alt`: Alternative text for accessibility
 * - `href`: Optional link to open to
 */
export interface IconItem {
  icon: string;
  alt: string;
  href?: string | undefined;
}

