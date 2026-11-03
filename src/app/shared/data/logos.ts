import {ImageItem} from '../models/image-item';


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
