import { useState } from "react";
import { cn } from "@/lib/utils";
import type { AssessmentCriterion } from "@/data/companies";
import {
  evidenceText,
  evidenceRule,
  levelOf,
  assessmentLevelLabel,
  assessmentLevelEvidence,
} from "@/lib/rating";
import { Target, ShieldCheck, Eye, Scale, Sparkles, ChevronDown } from "lucide-react";

const criteriaIcons: Record<string, React.ElementType> = {
  Ambition: Target,
  Credibility: ShieldCheck,
  Transparency: Eye,
  Accountability: Scale,
  Additionality: Sparkles,
};

const CriterionRow = ({ criterion }: { criterion: AssessmentCriterion }) => {
  const [open, setOpen] = useState(false);
  const Icon = criteriaIcons[criterion.name] || Target;
  const level = levelOf(criterion.score);
  const evidence = assessmentLevelEvidence[level];
  const hasDetail = Boolean(criterion.methodology || criterion.sourceReference);

  return (
    <div className={cn("border-l-2", evidenceRule[evidence])}>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        disabled={!hasDetail}
        className="w-full flex items-start gap-3 p-5 text-left hover:bg-muted/60 transition-colors disabled:hover:bg-transparent"
      >
        <Icon className="h-4 w-4 text-slate shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className="text-row text-foreground">{criterion.name}</span>
            <span className={cn("ml-auto eyebrow text-micro shrink-0", evidenceText[evidence])}>
              {assessmentLevelLabel[level]}
            </span>
          </div>
          <p className="font-serif text-body text-slate mt-2">{criterion.summary}</p>
        </div>
        {hasDetail && (
          <ChevronDown
            className={cn("h-4 w-4 text-slate shrink-0 mt-0.5 transition-transform", open && "rotate-180")}
          />
        )}
      </button>

      {open && hasDetail && (
        <div className="px-5 pb-5 pl-12 animate-fade-in">
          {criterion.methodology && (
            <>
              <span className="eyebrow text-micro text-slate">How this was assessed</span>
              <p className="font-serif text-body text-foreground/90 mt-1.5">{criterion.methodology}</p>
            </>
          )}
          {criterion.sourceReference && (
            <div className="mt-4 border-t border-border pt-3">
              <span className="eyebrow text-micro text-slate">Reference</span>
              <p className="font-mono text-caption text-foreground mt-1.5">{criterion.sourceReference}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export const AssessmentCriteria = ({ criteria = [] }: { criteria?: AssessmentCriterion[] }) => {
  return (
    <div className="divide-y divide-border border border-border bg-card">
      {criteria.map((c) => (
        <CriterionRow key={c.name} criterion={c} />
      ))}
    </div>
  );
};
