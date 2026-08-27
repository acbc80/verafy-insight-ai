# Remove numerical scores — qualitative judgment only

All 0–100 numbers disappear from the interface. Judgment is carried by words (Verified / Evidenced / Partial / Contradicted, and Monitor / Engage / Escalate) plus the reserved colour. Scores remain in the database and still drive which label and colour is shown — they are simply never displayed.

## Company assessment page

- **Header gauge**: keep the coloured ring as a visual, remove the digits inside it. The written judgment (Monitor / Engage / Escalate) stays beneath. The ring fill still reflects the underlying score.
- **Top sustainability issues**: drop the number at the left of each row. Keep the issue rank ("Issue #1"), the judgment tag, name, summary, coloured left rule, and the expandable detail with standard / reference / method.
- **Assessment criteria**: remove the numeric figure next to each criterion and remove the progress bar (a bar is a number in visual form). Each criterion keeps its icon, name, written judgment label, coloured left rule and summary.
- **Metric findings**: drop the number at the left of each metric row; keep the category eyebrow, judgment tag, name, summary and expandable workings.

## Search index

- Remove the "Score" column from both the header row and each result row. Rows keep company, ticker, exchange, sector and the written judgment.
- Result ordering stays as it is (best-judged first), driven by the underlying score.

## Technical notes

- Files: `src/components/ScoreGauge.tsx`, `src/components/IssueCard.tsx`, `src/components/AssessmentCriteria.tsx`, `src/components/MetricCard.tsx`, `src/components/CompanySearch.tsx`.
- `ScoreGauge` keeps `score` as an input for the ring geometry but no longer renders it; the written level becomes the default rather than opt-in. Its `size` presets lose the now-unused number text sizes.
- No changes to `src/lib/rating.ts`, `src/data/companies.ts`, or the database — `evidenceOf(score)` continues to map scores to levels and colours.
- Verify the profile and search pages render with no digits via a Playwright screenshot pass.
