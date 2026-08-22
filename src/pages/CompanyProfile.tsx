import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Building2, Calendar, MapPin, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCompany } from "@/data/companies";
import { ScoreGauge } from "@/components/ScoreGauge";
import { RatingBadge } from "@/components/RatingBadge";
import { MetricCard } from "@/components/MetricCard";
import { AssessmentCriteria } from "@/components/AssessmentCriteria";
import logoMark from "@/assets/verafi-mark.png";

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
        <div className="flex items-center text-muted-foreground">
          <Loader2 className="h-4 w-4 animate-spin mr-2" />
          <span className="font-mono text-micro tracking-[0.14em] uppercase">Loading assessment</span>
        </div>
      </div>
    );
  }

  if (!company) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-h2 text-foreground mb-2">Company not found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to search</Link>
        </div>
      </div>
    );
  }

  const eMetrics = company.metrics.filter((m) => m.category === "E");
  const sMetrics = company.metrics.filter((m) => m.category === "S");
  const gMetrics = company.metrics.filter((m) => m.category === "G");

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary sticky top-0 z-50">
        <div className="container flex items-center justify-between h-[52px] px-10">
          <div className="flex items-center gap-2">
            <Link to="/" className="flex items-center gap-2">
              <img src={logoMark} alt="VeraFi logo" className="w-[22px] h-[22px] object-contain" />
              <span className="font-serif text-xl font-bold text-white tracking-wide">VeraFi</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
            <span className="font-sans text-label text-accent border-b border-accent pb-0.5 tracking-[0.08em]">ASSESSMENT</span>
            <span className="font-sans text-label text-white/40 tracking-[0.08em]">COMPARE</span>
            <span className="font-sans text-label text-white/40 tracking-[0.08em]">STANDARDS</span>
          </div>
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-accent glow-lime" />
            <span className="font-mono text-micro text-accent tracking-[0.1em]">LIVE</span>
          </div>
        </div>
      </header>

      <main className="container px-4 py-8 max-w-4xl">
        <Link to="/" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back to search
        </Link>

        {/* Company Header */}
        <div className="bg-card border border-border border-t-[3px] border-t-primary p-6 shadow-raised mb-6 animate-fade-in">
          <div className="flex flex-col sm:flex-row sm:items-start gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-serif text-h2 text-foreground">{company.name}</h1>
                <RatingBadge rating={company.overallRating} />
              </div>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mb-4">
                <span className="font-mono text-caption text-muted-foreground">{company.ticker} · {company.exchange}</span>
                <span className="flex items-center gap-1"><Building2 className="h-3.5 w-3.5" />{company.sector}</span>
                <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{company.country}</span>
                <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />FY{company.reportYear}</span>
              </div>
              <p className="text-sm text-secondary-foreground leading-relaxed">{company.summary}</p>
            </div>
            <div className="flex items-center gap-6 sm:gap-8 shrink-0">
              <ScoreGauge score={company.overallScore} rating={company.overallRating} size="lg" label="Overall" />
            </div>
          </div>

          {/* E/S/G Breakdown */}
          <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border">
            <div className="flex flex-col items-center">
              <ScoreGauge score={company.eScore} rating={company.eScore >= 80 ? "Leader" : company.eScore >= 60 ? "Strong" : company.eScore >= 40 ? "Average" : "Laggard"} size="md" label="Environmental" />
            </div>
            <div className="flex flex-col items-center">
              <ScoreGauge score={company.sScore} rating={company.sScore >= 80 ? "Leader" : company.sScore >= 60 ? "Strong" : company.sScore >= 40 ? "Average" : "Laggard"} size="md" label="Social" />
            </div>
            <div className="flex flex-col items-center">
              <ScoreGauge score={company.gScore} rating={company.gScore >= 80 ? "Leader" : company.gScore >= 60 ? "Strong" : company.gScore >= 40 ? "Average" : "Laggard"} size="md" label="Governance" />
            </div>
          </div>
        </div>

        {/* Assessment Criteria */}
        <section className="mb-6 animate-fade-in" style={{ animationDelay: "50ms" }}>
          <h2 className="font-mono text-micro text-muted-foreground tracking-[0.14em] uppercase mb-3">Assessment Criteria</h2>
          <AssessmentCriteria criteria={company.assessmentCriteria} />
        </section>

        {/* Metrics */}
        <div className="space-y-6">
          {eMetrics.length > 0 && (
            <section className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h2 className="font-mono text-micro text-muted-foreground tracking-[0.14em] uppercase mb-3">Environmental Metrics</h2>
              <div className="space-y-2">{eMetrics.map((m) => <MetricCard key={m.id} metric={m} />)}</div>
            </section>
          )}
          {sMetrics.length > 0 && (
            <section className="animate-fade-in" style={{ animationDelay: "200ms" }}>
              <h2 className="font-mono text-micro text-muted-foreground tracking-[0.14em] uppercase mb-3">Social Metrics</h2>
              <div className="space-y-2">{sMetrics.map((m) => <MetricCard key={m.id} metric={m} />)}</div>
            </section>
          )}
          {gMetrics.length > 0 && (
            <section className="animate-fade-in" style={{ animationDelay: "300ms" }}>
              <h2 className="font-mono text-micro text-muted-foreground tracking-[0.14em] uppercase mb-3">Governance Metrics</h2>
              <div className="space-y-2">{gMetrics.map((m) => <MetricCard key={m.id} metric={m} />)}</div>
            </section>
          )}
        </div>

        <footer className="mt-12 pt-6 border-t border-border text-center">
          <p className="font-mono text-micro text-muted-foreground tracking-wide">
            Assessment based on publicly available sustainability reports. Standards mapping aligned to IFRS S1/S2 and GRI.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default CompanyProfile;
