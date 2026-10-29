import {IconItem} from './models/icon-item';
import {ImageItem} from './models/image-item';

/**
 * List of social icons
 */
export const SOCIAL_ICONS = {
  linkedin: {icon: 'pi pi-linkedin', alt: 'LinkedIn', href: 'https://www.linkedin.com/in/derek-garcia'},
  github: {icon: 'pi pi-github', alt: 'GitHub', href: 'https://github.com/dlg1206'},
  orcid: {icon: 'fa-brands fa-orcid', alt: 'ORCID', href: 'https://orcid.org/0009-0005-2310-8879'},
  googleScholar: {
    icon: 'fa-brands fa-google-scholar',
    alt: 'Google Scholar',
    href: 'https://scholar.google.com/citations?user=_drXjQ4AAAAJ'
  },
  email: {icon: 'pi pi-envelope', href: 'mailto:dgarcia2@hawaii.edu', alt: 'Email'},
  calculator: {icon: 'pi pi-calculator', alt: 'Cemetech', href: 'https://www.cemetech.net/users/TI_84_Coder'}
} satisfies Record<string, IconItem>;

/**
 * List of company logos
 */
export const COMPANY_LOGOS = {
  chainguard: {
    src: 'icons/company/chainguard.png',
    alt: 'Chainguard, Inc. logo',
    origin: 'https://www.logo.dev/search/brands/chainguard.dev'
  },
  uhManoa: {
    src: 'icons/company/uh-manoa.png',
    alt: 'University of Hawai\'i at Mānoa seal',
    origin: 'https://manoa.hawaii.edu/ovpae/manoa-seal'
  },
  vanguard: {
    src: 'icons/company/vanguard.png',
    alt: 'Vanguard logo',
    origin: 'https://www.logo.dev/search/brands/vanguard.com'
  },
  ritGci: {
    src: 'icons/company/rit_gci.jpeg',
    alt: 'RIT ESL Global Cybersecurity Institute logo',
  }
} satisfies Record<string, ImageItem>;
