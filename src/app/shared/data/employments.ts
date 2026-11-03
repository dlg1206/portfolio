import {EmploymentDetail} from '../models/employment';
import {COMPANY_LOGOS} from './logos';

// todo - complete With full details
export const POSITIONS = {
  chainguard: {
    company: {
      name: 'Chainguard',
      logo: COMPANY_LOGOS.chainguard
    },
    positions: [
      {
        title: 'Researcher',
        start: {year: 2024},
        description: '',
      }
    ]
  },
  uhManoa: {
    company: {
      name: 'University of Hawai\'i',
      logo: COMPANY_LOGOS.uhManoa
    },
    positions: [
      {
        title: 'Graduate Research Assistant',
        start: {year: 2024},
        description: '',
      }
    ]
  },
  vanguard: {
    company: {
      name: 'Vanguard',
      logo: COMPANY_LOGOS.vanguard
    },
    positions: [
      {
        title: 'Technical Operations Intern',
        start: {year: 2023},
        end: {year: 2023},
        description: '',
      }
    ]
  },
  ritGci: {
    company: {
      name: 'Global Cybersecurity Inst.',
      logo: COMPANY_LOGOS.ritGci
    },
    positions: [
      {
        title: 'Software Security Engineer',
        start: {year: 2022},
        end: {year: 2024},
        description: '',
      }
    ]
  }

} satisfies Record<string, EmploymentDetail>;
