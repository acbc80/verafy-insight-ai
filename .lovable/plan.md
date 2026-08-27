# Add a Venn diagram to the landing-page hero

Place a static three-circle Venn diagram in the currently empty upper-right area of the landing hero. The diagram mirrors the VeraFi logo: red for **Data**, blue for **Frameworks**, green for **Experts**, with the existing VeraFi mark sitting in the central overlap.

## What will change

- New `src/components/VennDiagram.tsx` — an SVG illustration with:
  - Three overlapping circles arranged in a triangular Venn layout.
  - Circle fills sampled from the existing logo mark: red `#E03C3B`, blue `#207ECE`, green `#00A969`.
  - Labels for each circle: Data, Frameworks, Experts.
  - The existing `src/assets/verafi-mark.png` centred in the triple overlap.
  - No hover states or tooltips — a static graphic.
- Add CSS variables for the three Venn colours to `src/index.css` so they stay out of inline Tailwind utilities and remain themable.
- Update `src/pages/Landing.tsx` hero section to a two-column layout on `md` and up:
  - Left column keeps the current headline, description, CTAs and standards line.
  - Right column renders `<VennDiagram />` and is hidden on mobile as requested.
- Add appropriate ARIA labelling / alt text and keep the hero as a single semantic `section`.

## Technical notes

- The new colour tokens will be defined in HSL in `:root` (e.g. `--venn-red`, `--venn-blue`, `--venn-green`) and consumed as `hsl(var(...))` in the SVG.
- The diagram will scale within its column and sit aligned to the top/right of the hero area.
- Mobile: diagram is hidden (`hidden md:block`); the hero text remains full-width.
- No new dependencies or backend changes.

## Verification

- Run the TypeScript check / build.
- Open `/` and confirm the diagram renders in the upper-right hero area, the logo mark is centred, and the layout does not overlap text.
- Confirm the diagram is absent on narrow viewports.
