/**
 * Single icon
 */
export interface IconItem {
  icon: string;
  href: string;
  alt: string;
}

/**
 * Single image
 */
export interface IconItem {
  icon: string;
  href: string;
  alt: string;
}

/**
 * List of social icons
 */
export const SOCIAL_ICONS = {
  linkedin: {icon: "pi pi-linkedin", href: "https://www.linkedin.com/in/derek-garcia", alt: "LinkedIn"},
  github: {icon: "pi pi-github", href: "https://github.com/dlg1206", alt: "GitHub"},
  orcid: {icon: "fa-brands fa-orcid", href: "https://orcid.org/0009-0005-2310-8879", alt: "ORCID"},
  googleScholar: {
    icon: "fa-brands fa-google-scholar",
    href: "https://scholar.google.com/citations?user=_drXjQ4AAAAJ",
    alt: "Google Scholar"
  },
  email: {icon: "pi pi-envelope", href: "mailto:dgarcia2@hawaii.edu", alt: "Email"},
  calculator: {icon: "pi pi-calculator", href: "https://www.cemetech.net/users/TI_84_Coder", alt: "Cemetech"}
} satisfies Record<string, IconItem>;
