import { cn } from "@/lib/utils";
import type { AssessmentCriterion } from "@/data/companies";
import { evidenceOf, evidenceLabel, evidenceText, evidenceRule } from "@/lib/rating";
import { Target, ShieldCheck, Eye, Scale, Sparkles } from "lucide-react";

const criteriaIcons: Record<string, React.ElementType> = {
  Ambition: Target,
  Credibility: ShieldCheck,
  Transparency: Eye,
  Accountability: Scale,
  Additionality: Sparkles,
};

export const AssessmentCriteria = ({ criteria }: { criteria: AssessmentCriterion[] }) => {
  return (
    <div className="divide-y divide-border border border-border bg-card">
      {criteria.map((c) => {
        const Icon = criteriaIcons[c.name] || Target;
        const level = evidenceOf(c.score);
        return (
          <div key={c.name} className={cn("border-l-2 p-5", evidenceRule[level])}>
            <div className="flex items-center gap-3 mb-3">
              <Icon className="h-4 w-4 text-slate shrink-0" />
              <span className="text-row text-foreground">{c.name}</span>
              <span className={cn("ml-auto eyebrow text-micro", evidenceText[level])}>{evidenceLabel[level]}</span>
            </div>
            <p className="font-serif text-body text-slate">{c.summary}</p>
          </div>
        );
      })}
    </div>
  );
};
