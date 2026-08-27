import { cn } from "@/lib/utils";
import type { ESGRating, OverallAction } from "@/data/companies";
import { ratingEvidence, ratingLabel, actionEvidence, actionLabel, evidenceText, evidenceStroke } from "@/lib/rating";

type ScoreGaugeProps = {
  score: number;
  rating: ESGRating | OverallAction;
  size?: "sm" | "md" | "lg";
  label?: string;
};

const sizeMap = {
  sm: { dim: 60, stroke: 3, text: "text-micro", label: "text-micro" },
  md: { dim: 92, stroke: 4, text: "text-caption", label: "text-caption" },
  lg: { dim: 132, stroke: 5, text: "text-row", label: "text-sm" },
};

export const ScoreGauge = ({ score, rating, size = "md", label }: ScoreGaugeProps) => {
  const s = sizeMap[size];
  const isAction = ["Monitor", "Engage", "Escalate"].includes(rating);
  const level = isAction ? actionEvidence[rating as OverallAction] : ratingEvidence[rating as ESGRating];
  const levelLabel = isAction ? actionLabel[rating as OverallAction] : ratingLabel[rating as ESGRating];
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
        <div className="absolute inset-0 flex flex-col items-center justify-center px-3">
          <span className={cn("eyebrow text-center", s.text, evidenceText[level])}>{levelLabel}</span>
        </div>
      </div>
      {label && (
        <span className={cn("eyebrow text-slate", s.label)}>
          {label}
        </span>
      )}
    </div>
  );
};
