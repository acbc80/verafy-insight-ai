CREATE TYPE public.esg_rating AS ENUM ('Leader','Strong','Average','Laggard');
CREATE TYPE public.esg_category AS ENUM ('E','S','G');

CREATE TABLE public.companies (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  ticker TEXT NOT NULL,
  exchange TEXT NOT NULL,
  sector TEXT NOT NULL,
  country TEXT NOT NULL,
  overall_score INTEGER NOT NULL CHECK (overall_score BETWEEN 0 AND 100),
  overall_rating public.esg_rating NOT NULL,
  e_score INTEGER NOT NULL CHECK (e_score BETWEEN 0 AND 100),
  s_score INTEGER NOT NULL CHECK (s_score BETWEEN 0 AND 100),
  g_score INTEGER NOT NULL CHECK (g_score BETWEEN 0 AND 100),
  summary TEXT NOT NULL,
  report_year INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.companies TO anon, authenticated;
GRANT ALL ON public.companies TO service_role;
ALTER TABLE public.companies ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Companies are publicly readable" ON public.companies FOR SELECT USING (true);

CREATE TABLE public.esg_metrics (
  id TEXT PRIMARY KEY,
  company_id TEXT NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  category public.esg_category NOT NULL,
  score INTEGER NOT NULL CHECK (score BETWEEN 0 AND 100),
  rating public.esg_rating NOT NULL,
  summary TEXT NOT NULL,
  detail TEXT NOT NULL,
  source_standard TEXT NOT NULL,
  source_reference TEXT NOT NULL,
  source_methodology TEXT NOT NULL,
  source_report_page TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_esg_metrics_company ON public.esg_metrics(company_id);
GRANT SELECT ON public.esg_metrics TO anon, authenticated;
GRANT ALL ON public.esg_metrics TO service_role;
ALTER TABLE public.esg_metrics ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Metrics are publicly readable" ON public.esg_metrics FOR SELECT USING (true);

CREATE TABLE public.assessment_criteria (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id TEXT NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  score INTEGER NOT NULL CHECK (score BETWEEN 0 AND 100),
  rating public.esg_rating NOT NULL,
  summary TEXT NOT NULL,
  sort_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (company_id, name)
);
CREATE INDEX idx_assessment_criteria_company ON public.assessment_criteria(company_id);
GRANT SELECT ON public.assessment_criteria TO anon, authenticated;
GRANT ALL ON public.assessment_criteria TO service_role;
ALTER TABLE public.assessment_criteria ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Criteria are publicly readable" ON public.assessment_criteria FOR SELECT USING (true);

CREATE OR REPLACE FUNCTION public.update_updated_at_column() RETURNS TRIGGER AS $$ BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql SET search_path = public;
CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON public.companies FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();