import { useState } from "react";
import { ChevronDown, ExternalLink, BadgeCheck } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ESGMetric } from "@/data/companies";
import { RatingBadge } from "@/components/RatingBadge";
import { evidenceOf, evidenceRule, evidenceText } from "@/lib/rating";

const categoryLabel: Record<string, string> = { E: "Environmental", S: "Social", G: "Governance" };

export const MetricCard = ({ metric }: { metric: ESGMetric }) => {
  const [open, setOpen] = useState(false);
  const level = evidenceOf(metric.score);

  return (
    <div className={cn("bg-card border border-border border-l-2 transition-shadow hover:shadow-subtle", evidenceRule[level])}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 p-5 text-left hover:bg-muted/60 transition-colors"
      >
        <div className="w-12 shrink-0 text-center">
          <span className={cn("font-mono text-h3 tabular font-medium", evidenceText[level])}>{metric.score}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="eyebrow text-micro text-slate">{categoryLabel[metric.category]}</span>
            <RatingBadge rating={metric.rating} />
          </div>
          <h3 className="text-row text-foreground">{metric.name}</h3>
          <p className="font-serif text-sm text-slate mt-1 line-clamp-1">{metric.summary}</p>
        </div>
        <ChevronDown className={cn("h-4 w-4 text-slate shrink-0 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="px-5 pb-5 border-t border-border animate-fade-in">
          <div className="pt-5 space-y-5">
            <div>
              <h4 className="eyebrow text-micro text-slate mb-2">The workings</h4>
              <p className="font-serif text-body text-foreground/90">{metric.detail}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border border border-border">
              <div className="bg-card p-4">
                <span className="eyebrow text-micro text-slate">Standard</span>
                <p className="font-mono text-sm text-foreground mt-1.5">{metric.source.standard}</p>
              </div>
              <div className="bg-card p-4">
                <span className="eyebrow text-micro text-slate">Reference</span>
                <p className="font-mono text-sm text-foreground mt-1.5">{metric.source.reference}</p>
              </div>
            </div>
            <div>
              <span className="eyebrow text-micro text-slate">Method</span>
              <p className="font-serif text-body text-foreground/90 mt-1.5">{metric.source.methodology}</p>
            </div>
            {metric.source.reportPage && (
              <div className="flex items-center gap-2 pt-1">
                <BadgeCheck className="h-4 w-4 verification-mark shrink-0" />
                <span className="font-mono text-caption text-slate">On the record — {metric.source.reportPage}</span>
                <ExternalLink className="h-3 w-3 text-slate/60" />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
