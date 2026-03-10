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
  if (score >= 60) return "bg-lime-dark";
  if (score >= 40) return "bg-warning";
  return "bg-destructive";
};

export const AssessmentCriteria = ({ criteria }: { criteria: AssessmentCriterion[] }) => {
  return (
    <div className="space-y-2">
      {criteria.map((c) => {
        const Icon = criteriaIcons[c.name] || Target;
        const borderColor = c.score >= 60 ? "border-l-lime-dark" : c.score >= 40 ? "border-l-warning" : "border-l-destructive";
        return (
          <div key={c.name} className={cn("bg-card border border-border border-l-[3px] p-4", borderColor)}>
            <div className="flex items-center gap-3 mb-2">
              <Icon className="h-4 w-4 text-muted-foreground shrink-0" />
              <span className="font-serif text-row text-foreground">{c.name}</span>
              <RatingBadge rating={c.rating} />
              <span className="ml-auto font-serif text-h3 font-bold text-foreground">{c.score}</span>
            </div>
            <div className="h-[3px] bg-muted overflow-hidden mb-2">
              <div
                className={cn("h-full transition-all duration-700", scoreBarColor(c.score))}
                style={{ width: `${c.score}%` }}
              />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.summary}</p>
          </div>
        );
      })}
    </div>
  );
};
