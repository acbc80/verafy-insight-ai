import { cn } from "@/lib/utils";
import type { ESGRating } from "@/data/companies";

const styles: Record<ESGRating, string> = {
  Leader: "bg-lime-light/40 text-lime-dark border-lime-dark/20",
  Strong: "bg-lime-light/40 text-lime-dark border-lime-dark/20",
  Average: "bg-warning/10 text-warning border-warning/20",
  Laggard: "bg-destructive/10 text-destructive border-destructive/20",
};

const labels: Record<ESGRating, string> = {
  Leader: "Strong",
  Strong: "Strong",
  Average: "Developing",
  Laggard: "Gaps Found",
};

export const RatingBadge = ({ rating, className }: { rating: ESGRating; className?: string }) => (
  <span className={cn("inline-flex items-center px-2.5 py-0.5 rounded-tag text-label font-medium border tracking-wide", styles[rating], className)}>
    {labels[rating]}
  </span>
);
