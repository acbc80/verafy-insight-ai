# Remove E/S/G findings sections from company profiles

Company profiles currently end with three metric sections — Environmental findings, Social findings, Governance findings — rendered from the company's ESG metrics. These will be removed.

## What changes

- Company profile keeps: header, Top sustainability issues, Principles-based sustainability assessment, Financial materiality, and the footer note.
- The three findings sections (and their metric cards) no longer appear.

## Technical notes

- In `src/pages/CompanyProfile.tsx`: remove the `eMetrics`/`sMetrics`/`gMetrics` filters, the `sections` array, the block that maps them into sections, and the now-unused `MetricCard` import.
- Leave `src/components/MetricCard.tsx`, the `esg_metrics` table, and the data fetching in `src/data/companies.ts` untouched, so the data stays available if the sections are reinstated later.
