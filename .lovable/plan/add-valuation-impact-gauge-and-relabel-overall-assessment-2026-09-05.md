# Add Valuation Impact gauge and relabel overall assessment

## What will change

1. **Relabel the header gauge**
   - Change the company profile header gauge label from "Overall assessment" to **"Engagement Opportunity"**.
   - The gauge continues to show the existing 3-point action label (Monitor / Engage / Escalate) inside the ring, with no number.

2. **Add a "Valuation Impact" summary gauge underneath**
   - Render a second ring gauge directly below the Engagement Opportunity gauge in the company header.
   - Label it **"Valuation Impact"**.
   - The score is the average of the four Financial Materiality component scores.
   - Component scores are derived from their existing direction labels:
     - Tailwind → 100
     - Neutral → 50
     - Headwind → 0
   - The gauge's qualitative label uses the same directional language:
     - ≥ 60 → Tailwind (green)
     - ≥ 40 → Neutral (amber)
     - < 40 → Headwind (red)
   - No numeric score is shown inside the ring; only the written label appears, matching the existing no-numbers requirement.

3. **Keep everything else unchanged**
   - Top sustainability issues, principles-based assessment, and Financial Materiality sections remain as they are.
   - Search index is not affected.

## Technical plan

1. **Rating utilities (`src/lib/rating.ts`)**
   - Add `directionScore` mapping: `Tailwind: 100`, `Neutral: 50`, `Headwind: 0`.
   - Add `directionFromScore(score)` using thresholds `>= 60` / `>= 40`.
   - Add `directionEvidence` and `directionLabel` maps so the gauge can colour and label directional ratings.

2. **Score gauge component (`src/components/ScoreGauge.tsx`)**
   - Extend the `rating` prop to also accept `ValuationDirection`.
   - Choose the correct evidence and label maps based on whether the rating is an `ESGRating`, `OverallAction`, or `ValuationDirection`.

3. **Data layer (`src/data/companies.ts`)**
   - Add `valuationImpactScore: number` and `valuationImpactDirection: ValuationDirection` to the `Company` type.
   - In `fetchCompany`, after mapping `financialMateriality`, compute the average component score and derive the direction label.

4. **Company profile page (`src/pages/CompanyProfile.tsx`)**
   - Change the existing `ScoreGauge` label to "Engagement Opportunity".
   - Stack a second `ScoreGauge` underneath it, passing `valuationImpactScore` and `valuationImpactDirection`, sized `md`, labelled "Valuation Impact".

5. **Verification**
   - Run TypeScript typecheck and Vite build.
   - Use Playwright to check `/company/aapl` and `/company/whc`:
     - Header shows "Engagement Opportunity" and "Valuation Impact" gauges.
     - Neither ring displays a number.
     - Directional label and colour match the Financial Materiality directions.
