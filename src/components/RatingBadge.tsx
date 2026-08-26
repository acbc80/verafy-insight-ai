import { cn } from "@/lib/utils";
import type { ESGRating, OverallAction } from "@/data/companies";
import { ratingEvidence, ratingLabel, actionEvidence, actionLabel, evidenceTag } from "@/lib/rating";

/**
 * Rating is always stated in words as well as colour.
 */
export const RatingBadge = ({
  rating,
  className,
}: {
  rating: ESGRating | OverallAction;
  className?: string;
}) => {
  const level = typeof rating === "string" && ["Monitor", "Engage", "Escalate"].includes(rating)
    ? actionEvidence[rating as OverallAction]
    : ratingEvidence[rating as ESGRating];
  const label = ["Monitor", "Engage", "Escalate"].includes(rating)
    ? actionLabel[rating as OverallAction]
    : ratingLabel[rating as ESGRating];
  return (
    <span
      className={cn(
        "inline-flex items-center px-2 py-0.5 rounded-tag border bg-transparent eyebrow text-micro",
        evidenceTag[level],
        className,
      )}
    >
      {label}
    </span>
  );
};

