import { FONT_SCALES, useFontScale } from "@/hooks/use-font-scale";

/** Reader-controlled text sizing. Sits in the header, persists across visits. */
export const FontSizeControl = () => {
  const { scaleId, setScaleId } = useFontScale();

  return (
    <div
      role="group"
      aria-label="Text size"
      className="hidden sm:flex items-center border border-paper/25"
    >
      {FONT_SCALES.map((s) => {
        const active = s.id === scaleId;
        return (
          <button
            key={s.id}
            type="button"
            onClick={() => setScaleId(s.id)}
            aria-pressed={active}
            title={`${s.name} text`}
            className={`font-mono text-[11px] leading-none px-2 py-1.5 transition-colors ${
              active
                ? "bg-anchor-lift text-deep-water"
                : "text-paper/60 hover:text-anchor-lift"
            }`}
          >
            {s.label}
          </button>
        );
      })}
    </div>
  );
};
