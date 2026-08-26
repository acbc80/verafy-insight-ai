# Add tagline under VeraFi wordmark

## What
Add the tagline "Sustainability intelligence on demand" directly beneath the "VeraFi" wordmark in the top-left header.

## Where
`src/components/SiteHeader.tsx` — the logo/link area in the sticky header.

## Current state
The header link currently wraps the mark image and a single "VeraFi" wordmark in a horizontal flex row:

```tsx
<Link to="/" className="flex items-center gap-2.5">
  <img src={logoMark} alt="VeraFi" className="w-6 h-6 object-contain" />
  <span className="text-xl font-semibold text-paper tracking-[-0.02em]">VeraFi</span>
</Link>
```

## How
1. Restructure the link content so the wordmark and tagline sit in a vertical stack while the mark remains beside them.
2. Render the tagline in a small, subdued type style (mono/eyebrow) consistent with the brand's data/label treatment.
3. Keep the header height and alignment intact so the sticky nav doesn't grow or shift.

## Out of scope
- No other header items, pages, or routing changes.
- No backend or data changes.
