/**
 * Publication author
 *
 * - `first`: First name
 * - `middleInitial`: Optional middle initial
 * - `last`: Last name
 */
export interface Author {
  first: string;
  middleInitial?: string;
  last: string;
}

/**
 * Tag for publication
 *
 * - `type`: Type of tag
 * - `key`: key
 * - `value`: value
 */
export interface Tag {
  type: 'link' | 'copy'
  key: string;
  value: string;
}

/**
 * Publication
 *
 * - `title`: Title of publication
 * - `abstract`: Abstract
 * - `authors`: List of authors
 * - `boldIndex`: Index of author to bold
 * - `href`: Link to publication
 * - `keywords`: List of paper keywords
 * - `tags`: List of copy paste tag values
 */
export interface Publication {
  title: string;
  abstract: string;
  datePublished: Date;
  authors: Author[];
  boldIndex: number;
  href: string;
  keywords: string[];
  tags?: Tag[];
}

/**
 * Format the full author name
 */
export function fullName(a: Author): string {
  return [a.first, a.middleInitial, a.last].filter(Boolean).join(' ');
}

/**
 * Format the short author name
 */
export function shortName(a: Author): string {
  const initial = a.first.charAt(0);
  return initial ? `${initial}. ${a.last}` : a.last;
}
