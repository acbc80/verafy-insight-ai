import type { ESGRating, OverallAction, ValuationDirection } from "@/data/companies";

/**
 * The reserved palette. Colour never carries a rating alone — every consumer
 * pairs these with the written label below.
 */
export type EvidenceLevel = "verified" | "partial" | "contradicted";

export const evidenceOf = (score: number): EvidenceLevel =>
  score >= 60 ? "verified" : score >= 40 ? "partial" : "contradicted";

export const actionOf = (score: number): OverallAction =>
  score >= 70 ? "Monitor" : score >= 40 ? "Engage" : "Escalate";

export const ratingEvidence: Record<ESGRating, EvidenceLevel> = {
  Leader: "verified",
  Strong: "verified",
  Average: "partial",
  Laggard: "contradicted",
};

export const actionEvidence: Record<OverallAction, EvidenceLevel> = {
  Monitor: "verified",
  Engage: "partial",
  Escalate: "contradicted",
};

export const evidenceLabel: Record<EvidenceLevel, string> = {
  verified: "Evidenced",
  partial: "Partial",
  contradicted: "Contradicted",
};

export const ratingLabel: Record<ESGRating, string> = {
  Leader: "Verified",
  Strong: "Evidenced",
  Average: "Partial",
  Laggard: "Contradicted",
};

export const actionLabel: Record<OverallAction, string> = {
  Monitor: "Monitor",
  Engage: "Engage",
  Escalate: "Escalate",
};

export const evidenceText: Record<EvidenceLevel, string> = {
  verified: "text-verified",
  partial: "text-partial-text",
  contradicted: "text-contradicted",
};

export const evidenceFill: Record<EvidenceLevel, string> = {
  verified: "bg-verified",
  partial: "bg-partial",
  contradicted: "bg-contradicted",
};

export const evidenceStroke: Record<EvidenceLevel, string> = {
  verified: "stroke-verified",
  partial: "stroke-partial",
  contradicted: "stroke-contradicted",
};

export const evidenceRule: Record<EvidenceLevel, string> = {
  verified: "border-l-verified",
  partial: "border-l-partial",
  contradicted: "border-l-contradicted",
};

export const evidenceTag: Record<EvidenceLevel, string> = {
  verified: "border-verified/30 text-verified",
  partial: "border-partial/40 text-partial-text",
  contradicted: "border-contradicted/30 text-contradicted",
};


/**
 * Five-point qualitative scale used by the principles-based assessment.
 * Derived from the underlying score; the number itself is never displayed.
 */
export type AssessmentLevel = "very-high" | "high" | "medium" | "low" | "very-low";

export const levelOf = (score: number): AssessmentLevel =>
  score >= 80 ? "very-high" : score >= 60 ? "high" : score >= 45 ? "medium" : score >= 30 ? "low" : "very-low";

export const assessmentLevelLabel: Record<AssessmentLevel, string> = {
  "very-high": "Very High",
  high: "High",
  medium: "Medium",
  low: "Low",
  "very-low": "Very low",
};

/** Levels reuse the reserved palette — never a new colour. */
export const assessmentLevelEvidence: Record<AssessmentLevel, EvidenceLevel> = {
  "very-high": "verified",
  high: "verified",
  medium: "partial",
  low: "contradicted",
  "very-low": "contradicted",
};
