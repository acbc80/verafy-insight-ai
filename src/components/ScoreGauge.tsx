import { cn } from "@/lib/utils";
import type { ESGRating } from "@/data/companies";

type ScoreGaugeProps = {
  score: number;
  rating: ESGRating;
  size?: "sm" | "md" | "lg";
  label?: string;
};

const ratingColor: Record<ESGRating, string> = {
  Leader: "text-lime-dark",
  Strong: "text-lime-dark",
  Average: "text-warning",
  Laggard: "text-destructive",
};

const ratingBg: Record<ESGRating, string> = {
  Leader: "stroke-lime-dark",
  Strong: "stroke-lime-dark",
  Average: "stroke-warning",
  Laggard: "stroke-destructive",
};

const sizeMap = {
  sm: { dim: 64, stroke: 5, text: "text-lg", label: "text-micro" },
  md: { dim: 96, stroke: 6, text: "text-2xl", label: "text-caption" },
  lg: { dim: 140, stroke: 8, text: "text-4xl", label: "text-sm" },
};

export const ScoreGauge = ({ score, rating, size = "md", label }: ScoreGaugeProps) => {
  const s = sizeMap[size];
  const radius = (s.dim - s.stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;

  return (
    <div className="flex flex-col items-center gap-1">
      <div className="relative" style={{ width: s.dim, height: s.dim }}>
        <svg width={s.dim} height={s.dim} className="-rotate-90">
          <circle
            cx={s.dim / 2}
            cy={s.dim / 2}
            r={radius}
            fill="none"
            className="stroke-border"
            strokeWidth={s.stroke}
          />
          <circle
            cx={s.dim / 2}
            cy={s.dim / 2}
            r={radius}
            fill="none"
            className={ratingBg[rating]}
            strokeWidth={s.stroke}
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - progress}
            style={{ transition: "stroke-dashoffset 1s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className={cn("font-serif font-bold", s.text, ratingColor[rating])}>{score}</span>
        </div>
      </div>
      {label && <span className={cn("text-muted-foreground font-mono", s.label)}>{label}</span>}
    </div>
  );
};
