# Replace mock company data with researched, cited sustainability data

## Goal

Every company profile currently shows plausible-looking but invented figures. Replace all of it with
real disclosures taken from each company's own published sustainability and financial reports, with a
specific report, section and page behind every statement.

## Companies in scope (all 8)

Apple, Microsoft, BHP, Nestlé, Shell, AGL Energy, Mirvac, Whitehaven Coal.

## What gets rewritten per company

For each company, four blocks of content are re-researched and replaced:

1. **Header** — sector, country, exchange, report year set to the actual latest filed reporting year,
   and a summary written from that report's own headline positions.
2. **Top sustainability issues** (3) — the issues that are genuinely material for that company and
   sector, each with the real disclosure position and where the evidence sits.
3. **Principles-based assessment** (5 criteria: Ambition, Credibility, Transparency, Accountability,
   Additionality) — assessed against the company's actual targets, verified progress, assurance
   status, remuneration linkage and abatement claims. Methodology text explains how the level was
   reached; reference points to the specific standard paragraph plus the report section.
4. **Financial materiality** (Revenue, Expenses, Assets & Liabilities, Cost of capital) — tied to
   real reported financials: revenue, gross margin or unit costs, PP&E, provisions, rehabilitation
   liabilities, debt and green/transition financing, cited to the annual report or 10-K.

Also retained: the hidden underlying scores that drive the qualitative levels and ordering. These are
re-set so the displayed levels (Very low → Very High) and overall action (Monitor / Engage /
Escalate) follow the researched evidence rather than the mock numbers.

## Sourcing standard

Every row cites the document, section and page or paragraph, for example:

```text
FY2025 Sustainability Report, p.34 — Scope 1 and 2 emissions table
FY2025 Annual Report, Note 21, p.142 — rehabilitation provisions
IFRS S2 paras 33-37 — climate-related targets
```

Where a company does not disclose something (for example no assured Scope 3, no ESG-linked pay
metric), the profile records the absence explicitly rather than scoring it favourably — consistent
with the existing verify-first stance.

## Research method

Each company's latest sustainability report, annual report / 10-K, and where relevant climate
transition plan and assurance statement are read directly. Figures are taken from the reports, not
from third-party summaries or ratings vendors. Anything that cannot be tied to a filed document is
left out.

## Technical notes

- Data-only change. No schema changes needed — `methodology`, `source_reference`,
  `source_report_page` and `financial_reference` columns already exist on the relevant tables.
- Delivered as data migrations per company: delete existing `esg_metrics`, `company_issues`,
  `assessment_criteria`, `financial_materiality` rows for that company, insert researched rows,
  then update the `companies` row (scores, action, summary, report year).
- Companies are done in batches so each batch can be reviewed on its profile page before the next.
- No component or styling changes; the existing sections render the new content as-is.
- Verification after each batch: query the tables back, and load each profile route to confirm all
  four sections populate with no empty references.

## Out of scope

No live crawling/AI pipeline in this pass — this is researched, seeded data. A Firecrawl + AI
pipeline for adding new companies on demand can follow as a separate piece of work.
