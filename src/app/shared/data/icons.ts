import {IconItem} from '../models/icon-item';

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
    href: 'https://scholar.google.com/citations?user=L58Z1BUAAAAJ'
  },
  email: {icon: 'pi pi-envelope', href: 'mailto:dgarcia2@hawaii.edu', alt: 'Email'},
  calculator: {icon: 'pi pi-calculator', alt: 'Cemetech', href: 'https://www.cemetech.net/users/TI_84_Coder'}
} satisfies Record<string, IconItem>;
