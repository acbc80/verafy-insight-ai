CREATE TYPE public.overall_action AS ENUM ('Monitor','Engage','Escalate');

ALTER TABLE public.companies ADD COLUMN overall_rating_temp public.overall_action;

UPDATE public.companies
SET overall_rating_temp = (CASE
  WHEN overall_score >= 70 THEN 'Monitor'
  WHEN overall_score >= 40 THEN 'Engage'
  ELSE 'Escalate'
END)::public.overall_action;

ALTER TABLE public.companies DROP COLUMN overall_rating;
ALTER TABLE public.companies RENAME COLUMN overall_rating_temp TO overall_rating;
ALTER TABLE public.companies ALTER COLUMN overall_rating SET NOT NULL;

CREATE TABLE public.company_issues (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id TEXT NOT NULL REFERENCES public.companies(id) ON DELETE CASCADE,
  rank INTEGER NOT NULL CHECK (rank BETWEEN 1 AND 3),
  name TEXT NOT NULL,
  summary TEXT NOT NULL,
  detail TEXT NOT NULL,
  score INTEGER NOT NULL CHECK (score BETWEEN 0 AND 100),
  rating public.esg_rating NOT NULL,
  source_standard TEXT NOT NULL,
  source_reference TEXT NOT NULL,
  source_methodology TEXT NOT NULL,
  source_report_page TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
CREATE INDEX idx_company_issues_company ON public.company_issues(company_id);

GRANT SELECT ON public.company_issues TO anon, authenticated;
GRANT ALL ON public.company_issues TO service_role;
ALTER TABLE public.company_issues ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Company issues are publicly readable" ON public.company_issues FOR SELECT USING (true);