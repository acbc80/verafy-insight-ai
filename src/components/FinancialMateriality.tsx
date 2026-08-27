import { useState } from "react";
import { ChevronDown, TrendingUp, Receipt, Landmark, Percent } from "lucide-react";
import { cn } from "@/lib/utils";
import type { MaterialityItem, ValuationDirection } from "@/data/companies";
import type { EvidenceLevel } from "@/lib/rating";
import { evidenceRule, evidenceText } from "@/lib/rating";

const componentIcons: Record<string, React.ElementType> = {
  Revenue: TrendingUp,
  Expenses: Receipt,
  "Assets & Liabilities": Landmark,
  "Cost of capital": Percent,
};

const componentLens: Record<string, string> = {
  Revenue: "Volumes · demand · pricing",
  Expenses: "COGS · supply chain · overheads · carbon cost",
  "Assets & Liabilities": "Physical risk · remediation · stranded assets · capex",
  "Cost of capital": "Hurdle rates · green premium / discount",
};

const directionLevel: Record<ValuationDirection, EvidenceLevel> = {
  Tailwind: "verified",
  Neutral: "partial",
  Headwind: "contradicted",
};

const MaterialityRow = ({ item }: { item: MaterialityItem }) => {
  const [open, setOpen] = useState(false);
  const Icon = componentIcons[item.component] || TrendingUp;
  const level = directionLevel[item.direction];

  return (
    <div className={cn("border-l-2", evidenceRule[level])}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start gap-3 p-5 text-left hover:bg-muted/60 transition-colors"
      >
        <Icon className="h-4 w-4 text-slate shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3">
            <span className="text-row text-foreground">{item.component}</span>
            <span className={cn("ml-auto eyebrow text-micro shrink-0", evidenceText[level])}>{item.direction}</span>
          </div>
          <p className="font-mono text-micro text-slate mt-1 uppercase tracking-[0.08em]">
            {componentLens[item.component]}
          </p>
          <p className="font-serif text-body text-slate mt-2">{item.summary}</p>
        </div>
        <ChevronDown className={cn("h-4 w-4 text-slate shrink-0 mt-0.5 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="px-5 pb-5 pl-12 animate-fade-in">
          <p className="font-serif text-body text-foreground/90">{item.detail}</p>
          <div className="mt-4 border-t border-border pt-3">
            <span className="eyebrow text-micro text-slate">Financial reference</span>
            <p className="font-mono text-caption text-foreground mt-1.5">{item.financialReference}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export const FinancialMateriality = ({ items = [] }: { items?: MaterialityItem[] }) => {
  if (items.length === 0) return null;

  return (
    <div className="border border-border bg-card">
      <div className="divide-y divide-border">
        {items.map((item) => (
          <MaterialityRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
