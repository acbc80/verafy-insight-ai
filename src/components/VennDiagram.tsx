import logoMark from "@/assets/verafi-mark.png";

export const VennDiagram = () => {
  return (
    <svg
      viewBox="0 0 320 320"
      className="w-full h-auto"
      role="img"
      aria-labelledby="venn-title venn-desc"
    >
      <title id="venn-title">VeraFi combines data, frameworks and expert assessment</title>
      <desc id="venn-desc">
        A three-circle Venn diagram: a red Data circle, a blue Frameworks circle,
        and a green Experts circle, with the VeraFi logo at the centre.
      </desc>

      <defs>
        <filter id="venn-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="2" stdDeviation="4" floodColor="hsl(var(--deep-water))" floodOpacity="0.12" />
        </filter>
      </defs>

      {/* Frameworks — blue */}
      <circle
        cx="90.7"
        cy="200"
        r="105"
        fill="hsl(var(--venn-blue))"
        fillOpacity="0.7"
        filter="url(#venn-glow)"
      />
      {/* Experts — green */}
      <circle
        cx="229.3"
        cy="200"
        r="105"
        fill="hsl(var(--venn-green))"
        fillOpacity="0.7"
        filter="url(#venn-glow)"
      />
      {/* Data — red */}
      <circle
        cx="160"
        cy="80"
        r="105"
        fill="hsl(var(--venn-red))"
        fillOpacity="0.7"
        filter="url(#venn-glow)"
      />

      <text
        x="160"
        y="80"
        textAnchor="middle"
        dominantBaseline="middle"
        className="eyebrow"
        fill="hsl(var(--paper))"
        fontSize="15px"
      >
        Data
      </text>
      <text
        x="90.7"
        y="200"
        textAnchor="middle"
        dominantBaseline="middle"
        className="eyebrow"
        fill="hsl(var(--paper))"
        fontSize="15px"
      >
        Frameworks
      </text>
      <text
        x="229.3"
        y="200"
        textAnchor="middle"
        dominantBaseline="middle"
        className="eyebrow"
        fill="hsl(var(--paper))"
        fontSize="15px"
      >
        Experts
      </text>

      <image
        href={logoMark}
        x="132"
        y="132"
        width="56"
        height="56"
        preserveAspectRatio="xMidYMid meet"
      />
    </svg>
  );
};
