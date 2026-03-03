export type ESGRating = "Leader" | "Strong" | "Average" | "Laggard";

export type MetricSource = {
  standard: string;
  reference: string;
  methodology: string;
  reportPage?: string;
};

export type ESGMetric = {
  id: string;
  name: string;
  category: "E" | "S" | "G";
  score: number; // 0-100
  rating: ESGRating;
  summary: string;
  detail: string;
  source: MetricSource;
};

export type Company = {
  id: string;
  name: string;
  ticker: string;
  exchange: string;
  sector: string;
  country: string;
  overallScore: number;
  overallRating: ESGRating;
  eScore: number;
  sScore: number;
  gScore: number;
  summary: string;
  reportYear: number;
  metrics: ESGMetric[];
};

const getRating = (score: number): ESGRating => {
  if (score >= 80) return "Leader";
  if (score >= 60) return "Strong";
  if (score >= 40) return "Average";
  return "Laggard";
};

export const companies: Company[] = [
  {
    id: "msft",
    name: "Microsoft Corporation",
    ticker: "MSFT",
    exchange: "NASDAQ",
    sector: "Technology",
    country: "United States",
    overallScore: 82,
    overallRating: "Leader",
    eScore: 85,
    sScore: 78,
    gScore: 83,
    summary: "Microsoft demonstrates industry-leading sustainability practices with ambitious carbon negative targets by 2030. Strong governance framework with comprehensive ESG reporting aligned to multiple standards.",
    reportYear: 2024,
    metrics: [
      {
        id: "msft-e1", name: "GHG Emissions Reduction", category: "E", score: 88, rating: "Leader",
        summary: "Committed to carbon negative by 2030; Scope 1 & 2 emissions reduced 17% YoY.",
        detail: "Microsoft reported Scope 1 emissions of 124,843 tCO2e and Scope 2 (market-based) of 280,473 tCO2e. The company has purchased 19.8 million MWh of renewable energy certificates. Scope 3 emissions remain a challenge at 12.4M tCO2e.",
        source: { standard: "IFRS S2 / TCFD", reference: "IFRS S2.29(a)", methodology: "Assessed against absolute emissions targets and trajectory toward carbon negative goal.", reportPage: "Environmental Data, p.42" }
      },
      {
        id: "msft-e2", name: "Water Stewardship", category: "E", score: 75, rating: "Strong",
        summary: "Water positive by 2030 target; replenished 35% of consumption in FY2024.",
        detail: "Total water consumption of 7.8 billion liters, with 2.7 billion liters replenished through watershed restoration projects. Data center water efficiency improving but absolute consumption rising with AI infrastructure growth.",
        source: { standard: "IFRS S2 / GRI 303", reference: "GRI 303-5", methodology: "Evaluated replenishment rate against consumption and contextual water stress factors.", reportPage: "Water Data, p.58" }
      },
      {
        id: "msft-s1", name: "Workforce Diversity & Inclusion", category: "S", score: 72, rating: "Strong",
        summary: "Improved representation across leadership; pay equity maintained globally.",
        detail: "Women represent 31.2% of global workforce (up from 29.7%). US racial/ethnic minorities at 53.2% of workforce. Pay equity maintained at $1.000 for women vs men globally. $150M invested in D&I programs.",
        source: { standard: "GRI 405 / IFRS S1", reference: "GRI 405-1, 405-2", methodology: "Assessed representation trends, pay equity data, and program investments against sector benchmarks.", reportPage: "Social Impact, p.78" }
      },
      {
        id: "msft-s2", name: "Data Privacy & Security", category: "S", score: 85, rating: "Leader",
        summary: "Comprehensive privacy framework; zero material breaches in reporting period.",
        detail: "ISO 27001 certified across all major operations. GDPR compliance framework extended globally. $1B+ annual cybersecurity investment. Zero material data breaches reported. AI ethics board established for responsible AI deployment.",
        source: { standard: "IFRS S1 / ISO 27001", reference: "IFRS S1.25", methodology: "Evaluated based on certifications, breach history, investment levels, and governance structures.", reportPage: "Trust Center Report, p.12" }
      },
      {
        id: "msft-g1", name: "Board Independence & Oversight", category: "G", score: 90, rating: "Leader",
        summary: "91% independent board; dedicated ESG committee with quarterly reporting.",
        detail: "11 of 12 board members are independent. Board ESG Committee meets quarterly with direct oversight of sustainability targets. Average board tenure of 6.2 years. 36% female board representation.",
        source: { standard: "IFRS S1 / Corporate Governance Code", reference: "IFRS S1.27(a)", methodology: "Assessed board composition, committee structure, and oversight mechanisms against best practice.", reportPage: "Governance, p.95" }
      },
      {
        id: "msft-g2", name: "Executive Compensation Alignment", category: "G", score: 78, rating: "Strong",
        summary: "ESG metrics linked to 20% of executive bonus; carbon targets included.",
        detail: "CEO compensation includes ESG modifiers worth up to 20% of annual bonus. Specific metrics include carbon reduction trajectory, workforce diversity targets, and customer trust scores. Clawback provisions in place.",
        source: { standard: "IFRS S1 / Say-on-Pay", reference: "IFRS S1.27(b)", methodology: "Evaluated weighting, specificity, and ambition of ESG-linked compensation components.", reportPage: "Proxy Statement, p.34" }
      },
    ],
  },
  {
    id: "aapl",
    name: "Apple Inc.",
    ticker: "AAPL",
    exchange: "NASDAQ",
    sector: "Technology",
    country: "United States",
    overallScore: 79,
    overallRating: "Strong",
    eScore: 82,
    sScore: 74,
    gScore: 80,
    summary: "Apple demonstrates strong environmental leadership with carbon neutral operations achieved in 2023. Supply chain sustainability remains an area of ongoing improvement with ambitious 2030 targets.",
    reportYear: 2024,
    metrics: [
      {
        id: "aapl-e1", name: "GHG Emissions Reduction", category: "E", score: 85, rating: "Leader",
        summary: "Carbon neutral for corporate operations; targeting full value chain by 2030.",
        detail: "Corporate operations carbon neutral since 2020. Manufacturing emissions reduced 45% since 2015. Over 300 suppliers committed to 100% renewable energy. Scope 3 emissions at 19.2M tCO2e, declining 12% YoY.",
        source: { standard: "IFRS S2 / TCFD", reference: "IFRS S2.29(a)", methodology: "Assessed against absolute emissions trajectory and value chain decarbonization progress.", reportPage: "Environmental Progress, p.28" }
      },
      {
        id: "aapl-s1", name: "Supply Chain Labor Standards", category: "S", score: 68, rating: "Strong",
        summary: "Expanded auditing program; some ongoing concerns in certain supplier regions.",
        detail: "Conducted 1,200 supplier audits in 2024. 98% compliance rate on working hours standards. Identified and remediated 8 core labor violations. Invested $50M in supplier employee education programs.",
        source: { standard: "GRI 414 / UN Guiding Principles", reference: "GRI 414-2", methodology: "Evaluated audit coverage, violation trends, remediation effectiveness, and transparency.", reportPage: "Supply Chain, p.52" }
      },
      {
        id: "aapl-g1", name: "Board Independence & Oversight", category: "G", score: 82, rating: "Leader",
        summary: "87% independent board; strong ESG governance integration.",
        detail: "7 of 8 board members independent. Nominating committee oversees ESG strategy. Annual ESG risk assessment integrated into enterprise risk management. 37.5% female board representation.",
        source: { standard: "IFRS S1", reference: "IFRS S1.27(a)", methodology: "Assessed board composition, ESG integration in governance, and oversight effectiveness.", reportPage: "Governance, p.88" }
      },
    ],
  },
  {
    id: "bhp",
    name: "BHP Group Limited",
    ticker: "BHP",
    exchange: "ASX",
    sector: "Mining & Metals",
    country: "Australia",
    overallScore: 65,
    overallRating: "Strong",
    eScore: 55,
    sScore: 70,
    gScore: 72,
    summary: "BHP shows improving sustainability performance for a resources company. Significant decarbonization challenges remain given operational emissions intensity, but strong community engagement and governance frameworks.",
    reportYear: 2024,
    metrics: [
      {
        id: "bhp-e1", name: "GHG Emissions Reduction", category: "E", score: 48, rating: "Average",
        summary: "30% reduction target by 2030 from FY2020 baseline; on track but absolute emissions remain high.",
        detail: "Scope 1 & 2 emissions of 10.8 MtCO2e. Operational GHG intensity reduced 14% from FY2020. Scope 3 emissions of 252 MtCO2e dominated by steel and energy customers. $4B allocated to decarbonization projects.",
        source: { standard: "IFRS S2 / TCFD", reference: "IFRS S2.29(a)", methodology: "Assessed against sectoral decarbonization pathway and absolute reduction trajectory.", reportPage: "Climate Report, p.18" }
      },
      {
        id: "bhp-s1", name: "Community & Indigenous Relations", category: "S", score: 75, rating: "Strong",
        summary: "Strengthened indigenous engagement framework; $280M community investment.",
        detail: "Heritage protection protocols enhanced post-Juukan Gorge. 42 community partnerships active. Indigenous employment at 8.2% of Australian workforce. Free Prior Informed Consent integrated into project approvals.",
        source: { standard: "GRI 411 / IFRS S1", reference: "GRI 411-1", methodology: "Evaluated against FPIC implementation, community investment, and indigenous employment targets.", reportPage: "Social Value, p.64" }
      },
      {
        id: "bhp-g1", name: "Climate Governance", category: "G", score: 72, rating: "Strong",
        summary: "Board-level climate committee; climate scenario analysis integrated into strategy.",
        detail: "Dedicated Sustainability Committee of the Board meets 6 times annually. Three climate scenarios modeled (1.5°C, 2°C, 3°C). Climate risk embedded in capital allocation decisions. Say-on-Climate vote implemented.",
        source: { standard: "IFRS S2 / TCFD", reference: "IFRS S2.6", methodology: "Assessed governance structures, scenario analysis rigor, and strategic integration of climate risk.", reportPage: "Governance, p.92" }
      },
    ],
  },
  {
    id: "nesn",
    name: "Nestlé S.A.",
    ticker: "NESN",
    exchange: "SIX",
    sector: "Consumer Staples",
    country: "Switzerland",
    overallScore: 71,
    overallRating: "Strong",
    eScore: 68,
    sScore: 75,
    gScore: 70,
    summary: "Nestlé demonstrates broad sustainability commitment across its value chain. Strong nutrition and community programs, though deforestation and packaging targets face scrutiny on progress pace.",
    reportYear: 2024,
    metrics: [
      {
        id: "nesn-e1", name: "Packaging & Circular Economy", category: "E", score: 62, rating: "Strong",
        summary: "82% of packaging recyclable or reusable; 2025 target at risk.",
        detail: "82.5% of packaging designed for recycling (target: 100% by 2025). Reduced virgin plastic use by 14.9%. Invested CHF 2B in sustainable packaging R&D. Flexible packaging recycling remains key challenge.",
        source: { standard: "GRI 306 / Ellen MacArthur Foundation", reference: "GRI 306-2", methodology: "Assessed packaging recyclability rates, virgin material reduction, and progress against stated targets.", reportPage: "Packaging Report, p.35" }
      },
      {
        id: "nesn-s1", name: "Nutrition & Health Impact", category: "S", score: 78, rating: "Strong",
        summary: "Reformulated 8,500 products; strong nutrition labeling transparency.",
        detail: "8,500 products reformulated to reduce sodium, sugar, and saturated fat. Nutri-Score adopted across European markets. $1.7B invested in nutritional science R&D. Affordable nutrition programs reaching 100M people.",
        source: { standard: "GRI 416 / Access to Nutrition Index", reference: "GRI 416-1", methodology: "Evaluated product reformulation scope, transparency measures, and accessibility programs.", reportPage: "Nutrition Report, p.22" }
      },
    ],
  },
  {
    id: "shel",
    name: "Shell plc",
    ticker: "SHEL",
    exchange: "LSE",
    sector: "Energy",
    country: "United Kingdom",
    overallScore: 52,
    overallRating: "Average",
    eScore: 42,
    sScore: 58,
    gScore: 60,
    summary: "Shell faces significant transition risks as an energy major. Revised climate targets show reduced ambition. Strong safety record but faces ongoing litigation and scrutiny on transition pace.",
    reportYear: 2024,
    metrics: [
      {
        id: "shel-e1", name: "Energy Transition Strategy", category: "E", score: 40, rating: "Average",
        summary: "Revised 2030 intensity targets downward; significant fossil fuel expansion continues.",
        detail: "Net carbon intensity target revised from -30% to -15-20% by 2030. $5.6B invested in low-carbon solutions (23% of capex). LNG expansion continues with 3 new projects approved. Scope 3 reduction pathway unclear.",
        source: { standard: "IFRS S2 / TCFD", reference: "IFRS S2.33", methodology: "Assessed transition strategy credibility, capital allocation alignment, and target ambition against IEA scenarios.", reportPage: "Energy Transition Report, p.15" }
      },
      {
        id: "shel-s1", name: "Health & Safety Performance", category: "S", score: 72, rating: "Strong",
        summary: "Industry-leading TRIR; zero fatalities target progress.",
        detail: "Total Recordable Injury Rate of 0.8 per million hours (industry avg: 1.4). One contractor fatality in reporting period. Process safety events reduced 22% YoY. $400M invested in safety technology and training.",
        source: { standard: "GRI 403 / IOGP", reference: "GRI 403-9", methodology: "Benchmarked safety metrics against sector peers and assessed trend trajectory.", reportPage: "Safety Report, p.48" }
      },
    ],
  },
];

export const searchCompanies = (query: string): Company[] => {
  const q = query.toLowerCase();
  return companies.filter(
    (c) =>
      c.name.toLowerCase().includes(q) ||
      c.ticker.toLowerCase().includes(q) ||
      c.sector.toLowerCase().includes(q)
  );
};

export const getCompany = (id: string): Company | undefined =>
  companies.find((c) => c.id === id);
