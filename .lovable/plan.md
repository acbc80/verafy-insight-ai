# VeraFi Landing Page

A stylish editorial landing page at `/` that speaks to three audiences — investors, asset owners, and corporates — with the live company search moved to `/search`.

## Structure of the landing page

1. **Header** — VeraFi mark + wordmark on forest green, with nav links (Investors, Asset Owners, Corporates) and a lime "Search a company" button.
2. **Hero** — serif display headline, the tagline "Sustainability intelligence on demand", short supporting line, primary CTA to `/search`, plus a small standards line (IFRS S1/S2 · GRI).
3. **Who it's for** — three cards (Investors, Asset Owners, Corporates), each with an icon, a one-line promise, three bullet value props, and a "Learn more" link to its own page.
4. **How it works** — three numbered steps: search a listed company, AI reads its sustainability reports, receive a scored assessment across the five criteria.
5. **Closing CTA band** — forest green band with a single call to action into the search.
6. **Footer** — wordmark, audience links, standards note.

## Audience pages

Three pages at `/investors`, `/asset-owners`, `/corporates`, sharing one layout component driven by content data:

- Page hero with audience name and promise
- "What you get" list (4-5 items tailored to the audience)
- "How VeraFi fits your workflow" 3-step section
- CTA into `/search`
- Cross-links to the other two audiences

Audience content:
- **Investors** — screen holdings for greenwashing risk, compare peers, evidence-linked scores for IC memos.
- **Asset owners** — portfolio-level stewardship, manager oversight, mandate and disclosure alignment.
- **Corporates** — benchmark your own disclosures, find gaps before assurance, track progress against peers.

## Design

Stays fully inside the existing VeraFi system: forest green `#0D3B2E`, lime `#AAED63`, `#F0F5F1` background, Cormorant Garamond headings, DM Sans body, DM Mono for labels and step numbers. Sharp corners, status-style left borders on cards, subtle forest-tinted shadows, staggered fade-in on card groups. No new colors or fonts.

## Technical notes

- New `src/pages/Landing.tsx`, `src/pages/Search.tsx` (moves the current Index content incl. `CompanySearch`), `src/pages/Audience.tsx`.
- New `src/components/SiteHeader.tsx` and `src/components/SiteFooter.tsx` extracted from the existing header markup so landing, search, and audience pages share one shell.
- New `src/data/audiences.ts` holding the three audience content objects (frontend content only, no database changes).
- Routes in `src/App.tsx`: `/` → Landing, `/search` → Search, `/investors` `/asset-owners` `/corporates` → Audience, existing `/company/:id` unchanged, `*` → NotFound.
- Update `index.html` title and meta description to landing-page copy; single H1 per page, semantic sections, alt text on the logo.
- No backend, auth, or data-layer changes.
