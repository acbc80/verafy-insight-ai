import { cn } from "@/lib/utils";
import type { ESGRating } from "@/data/companies";
import { ratingEvidence, ratingLabel, evidenceTag } from "@/lib/rating";

/**
 * Rating is always stated in words as well as colour.
 */
export const RatingBadge = ({ rating, className }: { rating: ESGRating; className?: string }) => {
  const level = ratingEvidence[rating];
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-tag border bg-transparent eyebrow text-micro",
        evidenceTag[level],
        className,
      )}
    >
      {ratingLabel[rating]}
    </span>
  );
};
