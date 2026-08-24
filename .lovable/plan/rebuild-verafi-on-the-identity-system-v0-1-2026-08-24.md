# Rebuild VeraFi on the Identity System v0.1

Replace the current forest-green/lime editorial theme with the Deep Water / Anchor Blue system, and rework every page's typography, layout and copy to match. The reserved rating palette becomes the only place colour carries meaning.

## The system being applied

**Brand colours** — Deep Water `#0A1A2A` (ground, headlines, body), Anchor Blue `#005DB4` (the single accent; `#57ABEE` on dark), Signal Gold `#B8961E` (verification marks only, text-safe `#7E650F`), Slate `#5C6B7A` (secondary text, captions, table headers), Paper `#F5F7F9` (page ground), Rules `#DCE3EA`.

Surface proportion held roughly at 60 Paper / 25 Deep Water / 10 Slate / 4 Anchor Blue / 1 Signal Gold. Red and green never decorate — they live only in the logo and in ratings.

**Reserved rating scale** — credible/verified `#00734A`, partial/unevidenced `#B26B00` (text `#8F5300`), contradicted/absent `#C10B0F`, neutral series `#005DB4`, each with its dark-ground pair. Every rating gets a written label plus the colour, never colour alone: "41 · Partial", not an amber bar.

**Typography** — Schibsted Grotesk for display, titles, buttons, nav and table content (−0.02em at display sizes); Source Serif 4 for long-form analysis prose; IBM Plex Mono for scores, tickers, standard references and eyebrows (tabular-nums, +0.1em on uppercase labels). Fallbacks Arial / Georgia / Consolas.

**Logo** — clear space 0.5x the mark height; mark-only below 140px, so the header keeps the mark plus separately-set "VeraFi" type rather than a shrunk lockup. Tagline set as editable type, not baked artwork.

**Voice** — lead with the finding, then the method. Use verify, evidence, judgment, defensible, the workings, contradicted, on the record. Strip holistic, solutions, unlock, seamless, journey, best-in-class, "ESG scores", comprehensive coverage from all existing copy.

## What changes, page by page

**Design tokens** — rewrite `src/index.css` and `tailwind.config.ts`: new HSL tokens for the brand five plus the reserved rating pairs (light and dark), new font stacks, new type scale, blue-biased rules and shadows. Remove the forest/lime tokens entirely so nothing can fall back to the old palette.

**Header / footer** — Deep Water ground, mark + set wordmark, Anchor Blue accent on the active nav item, mono eyebrows. Tagline as type in the footer.

**Landing** — Paper hero on a Deep Water headline, one Anchor Blue CTA, a Signal Gold verification mark next to the evidence claim. Copy rewritten to lead with the verification promise; audience cards keep the three-up structure with rules-based dividers instead of coloured left borders.

**Audience pages** (investors / asset owners / corporates) — same shell, prose set in Source Serif 4, mono standard references, sector-specific lines that fail the "reads the same for a utility and a bank" test replaced.

**Search** — mono ticker field, Slate table headers, result rows in Schibsted Grotesk with tabular mono figures.

**Company profile** — the reserved palette does its real work here: `ScoreGauge`, `RatingBadge`, `AssessmentCriteria` and `MetricCard` move onto verified / partial / contradicted with mandatory text labels, tabular-nums scores, serif analysis text, and Signal Gold reserved for the confirmed-evidence mark.

**Metadata** — `index.html` title and description rewritten in brand voice.

## Notes and open items

The four decisions the document leaves open are resolved for the build as follows, and can be changed later: deep-end flat fills for the mark, Signal Gold used as the confirmed-evidence mark (its signature role), tagline as editable type. The four product names are out of scope here — no naming system is introduced.

Missing logo assets (SVG, flat one-colour mark, mark-only glyph, stacked lockup) are not in the pack; the build uses the existing PNG mark and the mark-only favicon already in the project. Web fonts load from Google Fonts. No database, backend or data-layer changes — presentation only.
