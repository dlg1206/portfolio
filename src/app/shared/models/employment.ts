import {ImageItem} from './image-item';

// map month number to short name
const monthName = (m: number) =>
  new Intl.DateTimeFormat('en', {month: 'short'}).format(new Date(2000, m - 1));

// covert dto to number
const ym = (d: YearMonth) => d.year * 12 + ((d.month ?? 1) - 1);

/**
 * Year month dto
 *
 * - `year`: Year
 * - `month`: Optional month
 */
export interface YearMonth {
  year: number;
  month?: number; // 1-12, optional for year-only precision
}

/**
 * Company details
 *
 * - `name`: Name of company
 * - `logo`: Company logo
 */
export interface Company {
  name: string;
  logo: ImageItem;
}

/**
 * Position summary
 *
 * - `title`: Title of position
 * - `startYear`: Start year of position
 * - `endYear`: Optional end year of position
 */
export interface PositionSummary {
  title: string;
  start: YearMonth;
  end?: YearMonth;  // undefined = current
}

/**
 * Additional position details
 *
 * - `description`: Position description
 * - `startMonth`: Start month of position
 * - `endMonth`: Optional end month of position
 */
export interface PositionDetail extends PositionSummary {
  description: string;
}

/**
 * Container summarizing employment history at a company
 *
 * - `company`: Company
 * - `headline`: General position at company
 */
export interface EmploymentSummary {
  company: Company;
  headline: PositionSummary; // most senior title, overall tenure
}

/**
 * Container of detailed employment history at a company
 *
 * - `positions`: Details of every position held at the company
 */
export interface EmploymentDetail {
  company: Company;
  positions: PositionDetail[]; // newest first
}

// convert detail to super summary
export const toSummary = (d: EmploymentDetail): EmploymentSummary => {
  const {positions} = d;
  const earliest = positions.reduce((a, p) => (ym(p.start) < ym(a.start) ? p : a));
  const isCurrent = positions.some((p) => !p.end);
  const latestEnd = positions.reduce<YearMonth | undefined>(
    (a, p) => (p.end && (!a || ym(p.end) > ym(a)) ? p.end : a),
    undefined,
  );

  return {
    company: d.company,
    headline: {
      title: positions[0].title, // newest first
      start: earliest.start,
      end: isCurrent ? undefined : latestEnd,
    },
  };
};
