# Restructure company assessment templates

Move the company profile from the current ESG rating framework to an action-oriented overall judgment and a focused "top 3 sustainability issues" view.

## What will change

1. **Overall company judgment**
   - Remove the `RatingBadge` from the company name header.
   - Replace the overall `Leader / Strong / Average / Laggard` label with a 3-point action scale: **Monitor, Engage, Escalate**.
   - Proposed thresholds:
     - 70–100 → Monitor
     - 40–69 → Engage
     - 0–39 → Escalate
   - Map these actions to the existing reserved palette:
     - Monitor → Verified (green)
     - Engage → Partial (amber)
     - Escalate → Contradicted (red)

2. **Remove the Environmental / Social / Governance score grid**
   - Drop the three `ScoreGauge` blocks for E, S, G from the company profile.
   - Keep the underlying `e_score`, `s_score`, `g_score` columns in the database so no existing data is lost.

3. **Add a "Top 3 sustainability issues" section**
   - Create a new database table `company_issues` with fields for `company_id`, `rank`, `name`, `summary`, `detail`, `score`, `rating`, `source_standard`, `source_reference`, `source_methodology`, `source_report_page`.
   - Render the top 3 issues in ranked order between the overall header and the assessment criteria.
   - Re-use the existing `MetricCard` component styling/behaviour (expandable, source boxes, verification line) so the UI stays consistent.

4. **Keep unchanged**
   - The five assessment criteria cards (`Ambition`, `Credibility`, `Transparency`, `Accountability`, `Additionality`) and their scoring bars.
   - The E/S/G metric cards under each criteria (metric-level `RatingBadge`, expandable detail, source/methodology boxes).
   - The overall `ScoreGauge` visual — only its label and colour mapping change.

## Technical plan

1. **Database migration**
   - Add a new enum `overall_action` with values `'Monitor','Engage','Escalate'`.
   - Alter `public.companies.overall_rating` to use `overall_action` instead of `esg_rating`.
   - Create `public.company_issues` table and enable RLS with public read access.
   - Migrate existing company rows: map current `Leader/Strong → Monitor`, `Average → Engage`, `Laggard → Escalate`.

2. **Data layer (`src/data/companies.ts`)**
   - Add `OverallAction` type (`'Monitor' | 'Engage' | 'Escalate'`).
   - Change `CompanySummary.overallRating` to `OverallAction`.
   - Add `CompanyIssue` type and include `issues: CompanyIssue[]` in `Company`.
   - Update `fetchCompany` to select from `company_issues` ordered by `rank`.

3. **Rating utilities (`src/lib/rating.ts`)**
   - Add `actionOf(score)` and `actionLabel`/`actionEvidence` maps.
   - Keep the existing metric/criteria `ESGRating` evidence maps unchanged.

4. **Components**
   - `ScoreGauge`: accept the new `OverallAction` type (or an evidence level) so the overall gauge renders the correct colour/label.
   - `CompanyProfile.tsx`:
     - Remove `RatingBadge` from the header.
     - Update the overall `ScoreGauge` to show the action label (`Monitor / Engage / Escalate`) instead of the old ESG rating.
     - Remove the E/S/G gauge grid.
     - Insert a new "Top issues" section using the issue data.
   - `MetricCard`/`AssessmentCriteria`: no functional changes; they continue to use the metric-level `ESGRating`.

5. **Seeding**
   - Generate 3 ranked sustainability issues for each existing seeded company (Microsoft, Apple, BHP, Nestlé, Shell) based on their current metric profiles.
   - Insert the issues into `public.company_issues`.

## Out of scope

- No changes to metric-level ratings (Leader/Strong/Average/Laggard remain for individual metrics).
- No changes to the landing page, audience pages, search page, or site header/footer styling.
- No new user-facing filters or sorting on the issues list.

## Verification

- Build passes and TypeScript typechecks.
- Playwright check on `/company/msft` confirms:
  - No badge next to the company name.
  - Overall gauge shows "Monitor", "Engage", or "Escalate" (not Leader/Strong/etc.).
  - E/S/G score grid is absent.
  - "Top 3 sustainability issues" section appears with three ranked, expandable cards.
  - Assessment criteria and metric cards still render and expand correctly.
