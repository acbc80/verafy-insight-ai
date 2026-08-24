export interface Audience {
  slug: string;
  nav: string;
  title: string;
  kicker: string;
  promise: string;
  cardPoints: string[];
  benefits: { title: string; body: string }[];
  workflow: { step: string; title: string; body: string }[];
}

export const audiences: Audience[] = [
  {
    slug: "investors",
    nav: "Investors",
    title: "Investors",
    kicker: "For analysts and portfolio managers",
    promise:
      "Cut through disclosure noise. Get evidence-linked sustainability assessments you can defend in an investment memo.",
    cardPoints: [
      "Screen holdings for greenwashing risk",
      "Compare peers on a consistent scale",
      "Every score traced to a source page",
    ],
    benefits: [
      {
        title: "Greenwashing screen",
        body: "Ambition, credibility and additionality scored separately, so bold targets without a plan don't pass as progress.",
      },
      {
        title: "Peer comparability",
        body: "The same five criteria applied to every company, mapped to IFRS S1 and S2, so cross-sector reads hold up.",
      },
      {
        title: "Audit trail by default",
        body: "Each metric expands to the underlying report reference, extract and methodology behind the assessment.",
      },
      {
        title: "Faster first pass",
        body: "Replace hours of PDF reading with a structured profile you can review in minutes and then dig into selectively.",
      },
    ],
    workflow: [
      { step: "01", title: "Screen", body: "Search a listed company or ticker before a first-pass review." },
      { step: "02", title: "Interrogate", body: "Expand each criterion to see the evidence and where the gaps sit." },
      { step: "03", title: "Write it up", body: "Carry the scores and source references straight into your memo." },
    ],
  },
  {
    slug: "asset-owners",
    nav: "Asset Owners",
    title: "Asset Owners",
    kicker: "FOR SUPERANNUATION FUNDS, ENDOWMENTS AND INSURERS",
    promise:
      "See how sustainability claims across your portfolio hold up, and hold external managers to the same standard.",
    cardPoints: [
      "Portfolio-level stewardship evidence",
      "Consistent oversight of external managers",
      "Mandate and disclosure alignment",
    ],
    benefits: [
      {
        title: "Stewardship evidence",
        body: "Concrete, sourced findings to take into engagement meetings and proxy decisions.",
      },
      {
        title: "Manager oversight",
        body: "One assessment framework to sense-check the ESG narratives your managers report back to you.",
      },
      {
        title: "Mandate alignment",
        body: "Check whether holdings actually meet the sustainability criteria written into your mandates.",
      },
      {
        title: "Reporting inputs",
        body: "Assessment outputs structured against IFRS and GRI, ready to feed your own disclosures.",
      },
    ],
    workflow: [
      { step: "01", title: "Review", body: "Assess the holdings that carry the most reputational and transition risk." },
      { step: "02", title: "Engage", body: "Take specific, sourced gaps into your engagement agenda." },
      { step: "03", title: "Report", body: "Use consistent scoring to evidence stewardship to your beneficiaries." },
    ],
  },
  {
    slug: "corporates",
    nav: "Corporates",
    title: "Corporates",
    kicker: "For sustainability and IR teams",
    promise:
      "See your own disclosures the way analysts see them, and close the gaps before assurance season does it for you.",
    cardPoints: [
      "Benchmark your report against peers",
      "Find gaps before external assurance",
      "Track progress year on year",
    ],
    benefits: [
      {
        title: "Outside-in view",
        body: "An analyst-style read of your published report, scored on the criteria investors actually weigh.",
      },
      {
        title: "Gap analysis",
        body: "Identify where accountability and transparency language is unsupported before assurance flags it.",
      },
      {
        title: "Peer benchmarking",
        body: "Compare your assessment against sector peers on identical criteria.",
      },
      {
        title: "IFRS readiness",
        body: "Map current disclosures to IFRS S1 and S2 requirements and see what is still missing.",
      },
    ],
    workflow: [
      { step: "01", title: "Assess", body: "Run your own latest sustainability report through the assessment." },
      { step: "02", title: "Prioritise", body: "Focus next year's reporting effort on the weakest criteria." },
      { step: "03", title: "Re-test", body: "Re-assess after publication to confirm the gaps actually closed." },
    ],
  },
];

export const getAudience = (slug?: string) => audiences.find((a) => a.slug === slug);
