import { cn } from "@/lib/utils";
import type { AssessmentCriterion } from "@/data/companies";
import { RatingBadge } from "@/components/RatingBadge";
import { Target, ShieldCheck, Eye, Scale, Sparkles } from "lucide-react";

const criteriaIcons: Record<string, React.ElementType> = {
  Ambition: Target,
  Credibility: ShieldCheck,
  Transparency: Eye,
  Accountability: Scale,
  Additionality: Sparkles,
};

const scoreBarColor = (score: number) => {
  if (score >= 80) return "bg-success";
  if (score >= 60) return "bg-info";
  if (score >= 40) return "bg-warning";
  return "bg-destructive";
};

export const AssessmentCriteria = ({ criteria }: { criteria: AssessmentCriterion[] }) => {
  return (
    <div className="space-y-3">
      {criteria.map((c) => {
        const Icon = criteriaIcons[c.name] || Target;
        return (
          <div key={c.name} className="surface-elevated rounded-lg p-4">
            <div className="flex items-center gap-3 mb-2">
              <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="font-medium text-foreground text-sm">{c.name}</span>
              <RatingBadge rating={c.rating} />
              <span className="ml-auto font-mono text-sm text-muted-foreground">{c.score}</span>
            </div>
            <div className="h-1.5 rounded-full bg-muted overflow-hidden mb-2">
              <div
                className={cn("h-full rounded-full transition-all duration-700", scoreBarColor(c.score))}
                style={{ width: `${c.score}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed">{c.summary}</p>
          </div>
        );
      })}
    </div>
  );
};
