import {ImageItem} from './models/image-item';

export const SocialLinks = {
  github: 'https://github.com/dlg1206',
  linkedin: 'https://www.linkedin.com/in/derek-garcia',
  google_scholar: 'https://scholar.google.com/citations?user=_drXjQ4AAAAJ',
  email: 'mailto:dgarcia2@hawaii.edu',
  orcid: 'https://orcid.org/0009-0005-2310-8879',
  cemetech: 'https://www.cemetech.net/users/TI_84_Coder'
};


/** Collection of icons, keyed by icon name */
export type IconName =
  'github'
  | 'linkedin'
  | 'googleScholar'
  | 'orcid'
  | 'email'
  | 'cemetech'
  | 'scholar'
  | 'code'
  | 'documents';
export type Icons = Record<IconName, ImageItem>;
export const ICONS: Icons = {
  github: {
    alt: 'GitHub',
    image: 'icons/github.svg',
    href: SocialLinks.github
  },
  linkedin: {
    alt: 'LinkedIn',
    image: 'icons/linkedin.svg',
    href: SocialLinks.linkedin
  },
  googleScholar: {
    alt: 'Google Scholar',
    image: 'icons/google_scholar.svg',
    href: SocialLinks.google_scholar
  },
  orcid: {
    alt: 'ORCID',
    image: 'icons/orcid.svg',
    href: SocialLinks.orcid
  },
  email: {
    alt: 'Email',
    image: 'icons/email.svg',
    href: SocialLinks.email
  },
  cemetech: {
    alt: 'Calculator',
    image: 'icons/calculator.svg',
    href: SocialLinks.cemetech
  },
  scholar: {
    alt: 'scholar',
    image: 'icons/scholar.svg'
  },
  code: {
    alt: 'code',
    image: 'icons/code.svg'
  },
  documents: {
    alt: 'documents',
    image: 'icons/documents.svg'
  },
};
