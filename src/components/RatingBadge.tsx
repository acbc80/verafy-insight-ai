import { cn } from "@/lib/utils";
import type { ESGRating } from "@/data/companies";

const styles: Record<ESGRating, string> = {
  Leader: "bg-success/15 text-success-foreground border-success/30",
  Strong: "bg-info/15 text-info-foreground border-info/30",
  Average: "bg-warning/15 text-warning-foreground border-warning/30",
  Laggard: "bg-destructive/15 text-destructive border-destructive/30",
};

export const RatingBadge = ({ rating, className }: { rating: ESGRating; className?: string }) => (
  <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border", styles[rating], className)}>
    {rating}
  </span>
);
