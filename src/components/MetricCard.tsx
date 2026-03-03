import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ESGMetric } from "@/data/companies";
import { RatingBadge } from "@/components/RatingBadge";
import { ScoreGauge } from "@/components/ScoreGauge";

const categoryLabel: Record<string, string> = { E: "Environmental", S: "Social", G: "Governance" };
const categoryColor: Record<string, string> = {
  E: "bg-success/10 text-success-foreground",
  S: "bg-info/10 text-info-foreground",
  G: "bg-[hsl(280,60%,55%)]/10 text-[hsl(280,60%,75%)]",
};

export const MetricCard = ({ metric }: { metric: ESGMetric }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="surface-elevated rounded-lg overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 p-4 text-left hover:bg-secondary/50 transition-colors"
      >
        <ScoreGauge score={metric.score} rating={metric.rating} size="sm" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <span className={cn("text-[10px] font-medium px-1.5 py-0.5 rounded", categoryColor[metric.category])}>
              {categoryLabel[metric.category]}
            </span>
            <RatingBadge rating={metric.rating} />
          </div>
          <h3 className="font-medium text-foreground">{metric.name}</h3>
          <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">{metric.summary}</p>
        </div>
        <ChevronDown className={cn("h-4 w-4 text-muted-foreground shrink-0 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="px-4 pb-4 border-t border-border animate-fade-in">
          <div className="pt-4 space-y-4">
            <div>
              <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-2">Assessment Detail</h4>
              <p className="text-sm text-secondary-foreground leading-relaxed">{metric.detail}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="rounded-md bg-muted/50 p-3">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Standard</span>
                <p className="text-sm text-foreground mt-1">{metric.source.standard}</p>
              </div>
              <div className="rounded-md bg-muted/50 p-3">
                <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Reference</span>
                <p className="text-sm font-mono text-foreground mt-1">{metric.source.reference}</p>
              </div>
            </div>
            <div className="rounded-md bg-muted/50 p-3">
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-wider">Methodology</span>
              <p className="text-sm text-secondary-foreground mt-1">{metric.source.methodology}</p>
            </div>
            {metric.source.reportPage && (
              <div className="flex items-center gap-1.5 text-xs text-primary">
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
