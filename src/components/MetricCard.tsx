import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ESGMetric } from "@/data/companies";
import { RatingBadge } from "@/components/RatingBadge";
import { ScoreGauge } from "@/components/ScoreGauge";

const categoryLabel: Record<string, string> = { E: "Environmental", S: "Social", G: "Governance" };

export const MetricCard = ({ metric }: { metric: ESGMetric }) => {
  const [open, setOpen] = useState(false);

  const borderColor = metric.score >= 60 ? "border-l-lime-dark" : metric.score >= 40 ? "border-l-warning" : "border-l-destructive";

  return (
    <div className={cn("bg-card border border-border border-l-[3px] overflow-hidden transition-shadow hover:shadow-subtle", borderColor)}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-4 text-left hover:bg-muted/50 transition-colors"
      >
        <ScoreGauge score={metric.score} rating={metric.rating} size="sm" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-mono text-micro text-muted-foreground tracking-[0.07em]">
              {categoryLabel[metric.category]}
            </span>
            <RatingBadge rating={metric.rating} />
          </div>
          <h3 className="font-serif text-h3 text-foreground">{metric.name}</h3>
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{metric.summary}</p>
        </div>
        <ChevronDown className={cn("h-4 w-4 text-muted-foreground shrink-0 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-border animate-fade-in">
          <div className="pt-4 space-y-4">
            <div>
              <h4 className="font-mono text-micro text-muted-foreground tracking-[0.14em] uppercase mb-2">Assessment Detail</h4>
              <p className="text-sm text-secondary-foreground leading-relaxed">{metric.detail}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-muted/50 p-3">
                <span className="font-mono text-micro text-muted-foreground tracking-[0.14em] uppercase">Standard</span>
                <p className="text-sm text-foreground mt-1">{metric.source.standard}</p>
              </div>
              <div className="bg-muted/50 p-3">
                <span className="font-mono text-micro text-muted-foreground tracking-[0.14em] uppercase">Reference</span>
                <p className="text-sm font-mono text-foreground mt-1">{metric.source.reference}</p>
              </div>
            </div>
            <div className="bg-muted/50 p-3">
              <span className="font-mono text-micro text-muted-foreground tracking-[0.14em] uppercase">Methodology</span>
              <p className="text-sm text-secondary-foreground mt-1">{metric.source.methodology}</p>
            </div>
            {metric.source.reportPage && (
              <div className="flex items-center gap-1.5 text-caption text-primary font-mono">
                <ExternalLink className="h-3 w-3" />
                <span>Source: {metric.source.reportPage}</span>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
