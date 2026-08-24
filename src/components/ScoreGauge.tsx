import { cn } from "@/lib/utils";
import type { ESGRating } from "@/data/companies";
import { ratingEvidence, ratingLabel, evidenceText, evidenceStroke } from "@/lib/rating";

type ScoreGaugeProps = {
  score: number;
  rating: ESGRating;
  size?: "sm" | "md" | "lg";
  label?: string;
  /** Show the written rating under the figure — required when the gauge stands alone. */
  showLevel?: boolean;
};

const sizeMap = {
  sm: { dim: 60, stroke: 3, text: "text-lg", label: "text-micro" },
  md: { dim: 92, stroke: 4, text: "text-2xl", label: "text-caption" },
  lg: { dim: 132, stroke: 5, text: "text-4xl", label: "text-sm" },
};

export const ScoreGauge = ({ score, rating, size = "md", label, showLevel }: ScoreGaugeProps) => {
  const s = sizeMap[size];
  const level = ratingEvidence[rating];
  const radius = (s.dim - s.stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative" style={{ width: s.dim, height: s.dim }}>
        <svg width={s.dim} height={s.dim} className="-rotate-90">
          <circle
            cx={s.dim / 2}
            cy={s.dim / 2}
            r={radius}
            fill="none"
            className="stroke-rules"
            strokeWidth={s.stroke}
          />
          <circle
            cx={s.dim / 2}
            cy={s.dim / 2}
            r={radius}
            fill="none"
            className={evidenceStroke[level]}
            strokeWidth={s.stroke}
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            style={{ transition: "stroke-dashoffset 1s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-mono font-medium tabular", s.text, evidenceText[level])}>{score}</span>
        </div>
      </div>
      {label && (
        <span className={cn("eyebrow text-slate", s.label)}>
          {label}
        </span>
      )}
      {showLevel && (
        <span className={cn("eyebrow text-micro", evidenceText[level])}>{ratingLabel[rating]}</span>
      )}
    </div>
  );
};
