# Two-column layout for the company profile

Restructure the company profile page so the header/overview block and the Top Sustainability Issues section sit side by side, and the Principles-Based Sustainability Assessment and Financial Material sections sit side by beneath them.

## What changes

- **Top row:** the company header card (name, summary, overall gauge) moves to the left column; the "Top sustainability issues" section moves to the right column, level with it. Both start at the same top edge.
- **Second row:** the "Principles-based sustainability assessment" section and the "Financial materiality" section are laid out side by side as two equal columns.
- On narrow screens (mobile/tablet) everything stacks vertically in the current order, exactly as today.

## Technical notes

- In `src/pages/CompanyProfile.tsx`:
  - Replace the single-column stack with a vertical flex/grid of two rows.
  - Row 1: a two-column grid (`lg:grid-cols-2` or similar, gap-8) containing the header card block and the existing issues section. Remove the section heading duplication if it reads awkwardly next to the gauge — keep the same `IssueCard` list otherwise.
  - Row 2: a two-column grid containing the existing Principles-Based Assessment section and the Financial Materiality section, unchanged in internal markup.
  - No changes to data fetching, `IssueCard`, `AssessmentCriteria`, or `FinancialMateriality` components themselves.
- Keep existing spacing rhythm: the two rows separated by the standard section margin.

## Verification

- `/company/agl` renders with the header and issues side by side, and the two assessment sections side by below.
- Narrow viewport (~390px) stacks the sections in the current order.
- No horizontal overflow or squished gauge/issue cards at common breakpoints.
