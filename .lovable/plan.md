# Five-point scale + methodology dropdowns for the principles-based assessment

## What changes

In the **Principles-based sustainability assessment** section on a company page:

1. Each criterion (Ambition, Credibility, Transparency, Accountability, Additionality) shows a
   five-point qualitative level instead of the current Evidenced / Partial / Contradicted label:
   **Very low, Low, Medium, High, Very High**. The level is derived from the criterion's underlying
   stored score (still never shown as a number).
2. Each criterion row becomes expandable (same chevron interaction as Financial Materiality and the
   metric rows). Opening it reveals how the assessment was made: the method applied for that
   criterion and the standard / report reference it draws on.

Colour treatment stays within the reserved palette: Very High / High read as evidenced,
Medium as partial, Low / Very low as contradicted, always paired with the written label.

## Scale bands

```text
Very High   score >= 80
High        60-79
Medium      45-59
Low         30-44
Very low    < 30
```

## Data

`assessment_criteria` has no methodology text today, so the table gains two fields:

- `methodology` — how this criterion was assessed for this company
- `source_reference` — the standard / disclosure the assessment rests on (IFRS S1, S2, GRI, or the
  company's own report section)

Both are populated for all five criteria across the five seeded companies (Microsoft, Apple, BHP,
Nestlé, Shell), written to match each company's existing summary and score.

## Technical notes

- Migration: add the two nullable text columns to `public.assessment_criteria`; existing public-read
  policy and grants already cover them. Seed via updates keyed on company + criterion name.
- `src/lib/rating.ts`: add an `AssessmentLevel` type, a `levelOf(score)` mapper for the five bands,
  a label map, and a mapping from level to the existing evidence colour tokens so no new colours are
  introduced.
- `src/data/companies.ts`: extend `AssessmentCriterion` with `methodology` and `sourceReference`, and
  map the new columns in the criteria query.
- `src/components/AssessmentCriteria.tsx`: convert each row into a collapsible button + panel
  mirroring `FinancialMateriality.tsx` (local `open` state per row, `ChevronDown` rotation,
  `animate-fade-in` body, reference block under a divider), and swap the label to the new level.
- No other section's wording or logic is touched.
