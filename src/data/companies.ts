import { supabase } from "@/integrations/supabase/client";

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

export type AssessmentCriterion = {
  name: string;
  score: number;
  rating: ESGRating;
  summary: string;
};

export type CompanySummary = {
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
};

export type Company = CompanySummary & {
  metrics: ESGMetric[];
  assessmentCriteria: AssessmentCriterion[];
};

export const getRating = (score: number): ESGRating => {
  if (score >= 80) return "Leader";
  if (score >= 60) return "Strong";
  if (score >= 40) return "Average";
  return "Laggard";
};

type CompanyRow = {
  id: string;
  name: string;
  ticker: string;
  exchange: string;
  sector: string;
  country: string;
  overall_score: number;
  overall_rating: ESGRating;
  e_score: number;
  s_score: number;
  g_score: number;
  summary: string;
  report_year: number;
};

const mapCompany = (row: CompanyRow): CompanySummary => ({
  id: row.id,
  name: row.name,
  ticker: row.ticker,
  exchange: row.exchange,
  sector: row.sector,
  country: row.country,
  overallScore: row.overall_score,
  overallRating: row.overall_rating,
  eScore: row.e_score,
  sScore: row.s_score,
  gScore: row.g_score,
  summary: row.summary,
  reportYear: row.report_year,
});

const COMPANY_COLUMNS =
  "id,name,ticker,exchange,sector,country,overall_score,overall_rating,e_score,s_score,g_score,summary,report_year";

export const fetchCompanies = async (query?: string): Promise<CompanySummary[]> => {
  let request = supabase.from("companies").select(COMPANY_COLUMNS).order("overall_score", { ascending: false });

  if (query && query.trim().length > 0) {
    const q = `%${query.trim()}%`;
    request = request.or(`name.ilike.${q},ticker.ilike.${q},sector.ilike.${q}`);
  }

  const { data, error } = await request;
  if (error) throw error;
  return (data as CompanyRow[]).map(mapCompany);
};

export const fetchCompany = async (id: string): Promise<Company | null> => {
  const [companyRes, metricsRes, criteriaRes] = await Promise.all([
    supabase.from("companies").select(COMPANY_COLUMNS).eq("id", id).maybeSingle(),
    supabase
      .from("esg_metrics")
      .select(
        "id,name,category,score,rating,summary,detail,source_standard,source_reference,source_methodology,source_report_page,sort_order"
      )
      .eq("company_id", id)
      .order("sort_order", { ascending: true }),
    supabase
      .from("assessment_criteria")
      .select("name,score,rating,summary,sort_order")
      .eq("company_id", id)
      .order("sort_order", { ascending: true }),
  ]);

  if (companyRes.error) throw companyRes.error;
  if (metricsRes.error) throw metricsRes.error;
  if (criteriaRes.error) throw criteriaRes.error;
  if (!companyRes.data) return null;

  return {
    ...mapCompany(companyRes.data as CompanyRow),
    metrics: (metricsRes.data ?? []).map((m: any) => ({
      id: m.id,
      name: m.name,
      category: m.category,
      score: m.score,
      rating: m.rating,
      summary: m.summary,
      detail: m.detail,
      source: {
        standard: m.source_standard,
        reference: m.source_reference,
        methodology: m.source_methodology,
        reportPage: m.source_report_page ?? undefined,
      },
    })),
    assessmentCriteria: (criteriaRes.data ?? []).map((c: any) => ({
      name: c.name,
      score: c.score,
      rating: c.rating,
      summary: c.summary,
    })),
  };
};
