import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Building2, MapPin, Loader2, BadgeCheck, Calendar } 
from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCompany } from "@/data/companies";
import { ScoreGauge } from "@/components/ScoreGauge";

import { IssueCard } from "@/components/IssueCard";
import { AssessmentCriteria } from "@/components/AssessmentCriteria";
import { FinancialMateriality } from "@/components/FinancialMateriality";

import { SiteHeader } from "@/components/SiteHeader";

const CompanyProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { data: company, isLoading } = useQuery({
    queryKey: ["company", id],
    queryFn: () => fetchCompany(id || ""),
    enabled: Boolean(id),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center text-slate">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span className="eyebrow text-micro">Reading disclosures</span>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-h2 text-deep-water mb-3">No assessment on file</h1>
          <Link to="/search" className="text-anchor text-label hover:underline">
            Back to 
the index
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen 
bg-background">
      <SiteHeader />

      <main className="container px-6 md:px-10 py-10 
max-w-4xl">
        <Link
          to="/search"
          className="inline-flex items-center gap-1.5 eyebrow text-micro text-slate hover:text-anchor mb-8 transition-colors"
        >
          <ArrowLeft className="h-3.5 
w-3.5" /> 
Back to the index
        </Link>

        {/* Company header + top issues */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-8">
          <div className="lg:col-span-3">
            <div className="bg-card border 
border-border border-t-2 border-t-deep-water p-6 md:p-8 shadow-subtle h-full">
              <h1 className="text-h2 text-deep-water mb-2.5">{company.name}</h1>
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-sm text-slate mb-5">
                <span className="font-mono text-caption 
tracking-[0.1em]">
                  {company.ticker} · {company.exchange}
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="h-3.5 w-3.5" 
/>
                  {company.sector}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="h-3.5 
w-3.5" />
                  {company.country}
                </span>
                <span className="flex items-center gap-1.5 
font-mono">
                  <Calendar className="h-3.5 
w-3.5" />
                  FY{company.reportYear}
                </span>
              </div>
              <p className="font-serif text-body text-foreground/90">{company.summary}</p>
              <p className="flex items-center gap-2 
mt-5">
                <BadgeCheck className="h-4 
w-4 verification-mark shrink-0" />
                <span className="font-mono text-caption text-slate">
                  Assessed against 
filed reports · IFRS S1 / S2 
and GRI
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-2">
            <h2 className="eyebrow text-micro text-slate 
mb-3">Top sustainability issues</h2>
            <div className="space-y-2">
              {company.issues.map((issue) => (
                <IssueCard key={issue.id} issue={issue} 

/>
              ))}
            </div>
          </div>
        </div>

        {/* Assessment criteria */}
        <section className="mb-8">
          <h2 className="eyebrow text-micro 
text-slate mb-3">PRINCIPLES-BASED SUSTAINABILITY ASSESSMENT</h2>
          <AssessmentCriteria criteria={company.assessmentCriteria} />
        </section>

        {/* Financial materiality */}
        <section className="mb-8">
          <h2 className="eyebrow text-micro text-slate 
mb-3">FINANCIAL MATERIALITY</h2>
          <FinancialMateriality items={company.financialMateriality} />
        </section>

        <footer className="mt-14 
pt-6 border-t border-border">
          <p className="font-mono text-caption text-slate">
            Findings drawn from publicly filed sustainability and annual reports. Standards mapping aligned to IFRS S1 /
            S2 and GRI. Where a claim lacks a citable source 
it is recorded as unevidenced, not scored favourably.
          </p>
        </footer>
      </main>
    </div>
  );
};

export 
default CompanyProfile;
