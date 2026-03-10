import { Link } from "react-router-dom";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  CheckCircle2,
  Globe,
  ShieldCheck,
  TrendingUp,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: BarChart3,
    title: "Granular E/S/G Breakdown",
    description:
      "Scores across Environmental, Social, and Governance pillars — not a single opaque number. See precisely where companies lead and where gaps remain.",
  },
  {
    icon: BookOpen,
    title: "Standards-Aligned Metrics",
    description:
      "Every metric mapped to IFRS S1/S2, GRI, and TCFD. Each assessment traces back to the source report page, methodology, and reference standard.",
  },
  {
    icon: ShieldCheck,
    title: "Five-Dimension Framework",
    description:
      "Companies are scored on Ambition, Credibility, Transparency, Accountability, and Additionality — the criteria that actually predict durable outcomes.",
  },
  {
    icon: Zap,
    title: "AI-Powered Extraction",
    description:
      "Machine-assisted analysis of public sustainability disclosures, updated continuously as new reports and filings are published.",
  },
  {
    icon: Globe,
    title: "Global Listed Coverage",
    description:
      "Major exchanges and sectors covered. Search by company name, ticker symbol, or sector to surface the profile you need instantly.",
  },
  {
    icon: TrendingUp,
    title: "Investor-Grade Rigour",
    description:
      "Built for asset managers, ESG analysts, and sustainability professionals who need data they can cite in decisions and reporting.",
  },
];

const stats = [
  { value: "500+", label: "Companies assessed" },
  { value: "12", label: "Sectors covered" },
  { value: "3", label: "Reporting standards" },
  { value: "5", label: "Assessment dimensions" },
];

const ratings = [
  {
    label: "Strong",
    range: "80–100",
    color: "bg-lime-dark",
    textColor: "text-lime-dark",
    borderColor: "border-lime-dark/20",
    bgColor: "bg-lime-light/10",
    description: "Robust disclosures, credible targets, and verified progress.",
  },
  {
    label: "Developing",
    range: "50–79",
    color: "bg-warning",
    textColor: "text-warning",
    borderColor: "border-warning/20",
    bgColor: "bg-warning/5",
    description: "Meaningful commitments with gaps in execution or evidence.",
  },
  {
    label: "Gaps Found",
    range: "0–49",
    color: "bg-destructive",
    textColor: "text-destructive",
    borderColor: "border-destructive/20",
    bgColor: "bg-destructive/5",
    description: "Material deficiencies in disclosure, targets, or credibility.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Nav ───────────────────────────────────────────────── */}
      <header className="bg-primary sticky top-0 z-50">
        <div className="container flex items-center justify-between h-[52px] px-10">
          <div className="flex items-center gap-2">
            <div className="w-[22px] h-[22px] bg-accent rounded-icon flex items-center justify-center font-serif font-bold text-sm text-primary">
              V
            </div>
            <span className="font-serif text-xl font-bold text-white tracking-wide">
              Verafy
            </span>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="font-sans text-label text-white/50 hover:text-white/90 tracking-[0.08em] transition-colors"
            >
              FEATURES
            </a>
            <a
              href="#methodology"
              className="font-sans text-label text-white/50 hover:text-white/90 tracking-[0.08em] transition-colors"
            >
              METHODOLOGY
            </a>
            <Link
              to="/app"
              className="font-sans text-label text-accent border border-accent/40 hover:border-accent hover:bg-accent/10 px-3 py-1.5 rounded-sm tracking-[0.08em] transition-all"
            >
              SEARCH →
            </Link>
          </nav>
          <div className="flex items-center gap-1.5 md:hidden">
            <Link
              to="/app"
              className="font-sans text-label text-accent tracking-[0.08em]"
            >
              SEARCH →
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section
          className="bg-primary text-white relative overflow-hidden"
          style={{
            background:
              "radial-gradient(ellipse 80% 100% at 65% 40%, hsl(159 50% 19%) 0%, hsl(163 58% 12%) 55%, hsl(163 60% 10%) 100%)",
          }}
        >
          {/* Subtle dot grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.06]"
            style={{
              backgroundImage:
                "radial-gradient(circle, hsl(84 79% 66%) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="container px-10 py-28 md:py-36 relative min-h-[88vh] flex items-center">
            <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
              {/* Left: copy */}
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-tag px-3 py-1.5 mb-8">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent glow-lime" />
                  <span className="font-mono text-micro text-accent tracking-[0.2em] uppercase">
                    ESG Intelligence · Live Data
                  </span>
                </div>

                <h1 className="font-serif text-display text-white leading-[1.02] mb-6">
                  Sustainability
                  <br />
                  intelligence you
                  <br />
                  can{" "}
                  <em className="text-accent not-italic">trust.</em>
                </h1>

                <p className="text-body text-white/65 max-w-md mb-10 leading-[1.85]">
                  AI-powered ESG assessments for publicly traded companies,
                  mapped to IFRS S1/S2 and GRI standards. Built for investors
                  and analysts who need answers they can stand behind.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    to="/app"
                    className="inline-flex items-center gap-2.5 bg-accent text-accent-foreground font-sans font-semibold text-sm px-7 py-3.5 rounded-sm hover:bg-lime-light transition-colors shadow-lime-glow"
                  >
                    Search a company
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href="#methodology"
                    className="inline-flex items-center gap-2 font-sans text-sm text-white/50 hover:text-white/80 transition-colors"
                  >
                    How it works →
                  </a>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center gap-3 mt-10 pt-10 border-t border-white/10">
                  <span className="font-mono text-micro text-white/30 tracking-[0.12em] uppercase mr-1">
                    Aligned to
                  </span>
                  {["IFRS S1", "IFRS S2", "GRI", "TCFD"].map((s) => (
                    <span
                      key={s}
                      className="font-mono text-micro text-white/50 border border-white/15 px-2.5 py-1 rounded-tag tracking-[0.06em] hover:border-white/30 transition-colors"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right: product card preview */}
              <div
                className="hidden lg:flex flex-col gap-3 animate-fade-in"
                style={{ animationDelay: "180ms" }}
              >
                {/* Main score card */}
                <div className="bg-card border border-border border-t-[3px] border-t-accent shadow-deep p-6 rounded-sm">
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <p className="font-mono text-micro text-muted-foreground tracking-[0.14em] uppercase mb-1">
                        Company Profile
                      </p>
                      <p className="font-serif text-h3 text-foreground">
                        Acme Renewables Ltd
                      </p>
                      <p className="font-mono text-caption text-muted-foreground mt-0.5">
                        ACME · LSE · Energy
                      </p>
                    </div>
                    <span className="font-mono text-micro bg-lime-light/40 text-lime-dark border border-lime-dark/25 px-2.5 py-1 rounded-tag tracking-[0.08em]">
                      STRONG
                    </span>
                  </div>

                  {/* Overall score bar */}
                  <div className="mb-5">
                    <div className="flex items-end justify-between mb-1.5">
                      <span className="font-mono text-micro text-muted-foreground tracking-[0.1em] uppercase">
                        Overall Score
                      </span>
                      <span className="font-serif text-h2 text-foreground leading-none">
                        78
                      </span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-1.5">
                      <div
                        className="bg-lime-dark h-1.5 rounded-full"
                        style={{ width: "78%" }}
                      />
                    </div>
                  </div>

                  {/* E/S/G */}
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                    {[
                      { cat: "Environmental", short: "E", score: 82 },
                      { cat: "Social", short: "S", score: 71 },
                      { cat: "Governance", short: "G", score: 74 },
                    ].map(({ short, score }) => (
                      <div key={short} className="text-center">
                        <div className="relative w-12 h-12 mx-auto mb-2">
                          <svg
                            className="w-12 h-12 -rotate-90"
                            viewBox="0 0 48 48"
                          >
                            <circle
                              cx="24"
                              cy="24"
                              r="19"
                              fill="none"
                              stroke="hsl(144 18% 91%)"
                              strokeWidth="3.5"
                            />
                            <circle
                              cx="24"
                              cy="24"
                              r="19"
                              fill="none"
                              stroke="hsl(90 47% 47%)"
                              strokeWidth="3.5"
                              strokeDasharray={`${(score / 100) * 119.4} 119.4`}
                              strokeLinecap="round"
                            />
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center font-serif text-sm font-bold text-foreground">
                            {score}
                          </span>
                        </div>
                        <p className="font-mono text-micro text-muted-foreground tracking-[0.08em]">
                          {short}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Criteria mini-card */}
                <div className="bg-card border border-border shadow-subtle p-4 rounded-sm">
                  <p className="font-mono text-micro text-muted-foreground tracking-[0.14em] uppercase mb-3">
                    Assessment Criteria
                  </p>
                  <div className="space-y-2">
                    {[
                      { name: "Ambition", met: true },
                      { name: "Credibility", met: true },
                      { name: "Transparency", met: true },
                      { name: "Accountability", met: false },
                      { name: "Additionality", met: true },
                    ].map(({ name, met }) => (
                      <div
                        key={name}
                        className="flex items-center justify-between"
                      >
                        <span className="font-mono text-micro text-secondary-foreground tracking-[0.06em]">
                          {name}
                        </span>
                        <div className="flex items-center gap-1.5">
                          <div
                            className={`w-1.5 h-1.5 rounded-full ${met ? "bg-lime-dark" : "bg-warning"}`}
                          />
                          <span
                            className={`font-mono text-micro tracking-[0.06em] ${met ? "text-lime-dark" : "text-warning"}`}
                          >
                            {met ? "Met" : "Partial"}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats row ────────────────────────────────────────── */}
        <section className="border-y border-border bg-card">
          <div className="container px-10 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-border">
              {stats.map(({ value, label }) => (
                <div key={label} className="text-center px-4 first:pl-0 last:pr-0">
                  <p className="font-serif text-h2 text-foreground mb-1">
                    {value}
                  </p>
                  <p className="font-mono text-micro text-muted-foreground tracking-[0.12em] uppercase">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────────────────────── */}
        <section id="features" className="container px-10 py-24 md:py-32">
          <div className="max-w-xl mb-14">
            <p className="font-mono text-micro text-muted-foreground tracking-[0.2em] uppercase mb-4">
              Why Verafy
            </p>
            <h2 className="font-serif text-h2 text-foreground mb-4">
              ESG data without the guesswork
            </h2>
            <p className="text-body text-muted-foreground leading-relaxed">
              Third-party ESG scores can diverge by over 60 points for the same
              company. Verafy builds from primary disclosures — transparent,
              traceable, and consistent.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {features.map((f, i) => (
              <div
                key={f.title}
                className="bg-card p-7 animate-fade-in hover:bg-secondary/30 transition-colors group"
                style={{ animationDelay: `${80 + i * 60}ms` }}
              >
                <div className="w-9 h-9 bg-primary/8 border border-primary/10 rounded-icon flex items-center justify-center mb-5 group-hover:bg-primary/12 transition-colors">
                  <f.icon className="h-4 w-4 text-primary" />
                </div>
                <h3 className="font-serif text-h3 text-foreground mb-2.5">
                  {f.title}
                </h3>
                <p className="text-body text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Methodology ──────────────────────────────────────── */}
        <section
          id="methodology"
          className="bg-primary text-white relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, hsl(84 79% 66%) 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="container px-10 py-24 md:py-32 relative">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left */}
              <div>
                <p className="font-mono text-micro text-accent tracking-[0.2em] uppercase mb-4">
                  Methodology
                </p>
                <h2 className="font-serif text-h2 text-white mb-6">
                  Three tiers.
                  <br />
                  No ambiguity.
                </h2>
                <p className="text-body text-white/65 mb-8 leading-[1.85] max-w-md">
                  Each company receives an overall score driven by primary
                  disclosure data — annual reports, CDP submissions, and
                  regulatory filings. Scores feed into a three-tier rating that
                  signals overall sustainability maturity.
                </p>
                <Link
                  to="/app"
                  className="inline-flex items-center gap-2 text-sm font-sans text-accent hover:text-lime-light transition-colors"
                >
                  Explore a company profile
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* Right: rating tiers */}
              <div className="space-y-3">
                {ratings.map(({ label, range, color, textColor, borderColor, bgColor, description }) => (
                  <div
                    key={label}
                    className={`flex items-start gap-4 border ${borderColor} ${bgColor} px-6 py-5 rounded-sm`}
                  >
                    <div className={`w-1 h-full min-h-[3rem] self-stretch rounded-full ${color} shrink-0`} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-1">
                        <p className={`font-serif text-row ${textColor}`}>
                          {label}
                        </p>
                        <span className={`font-mono text-micro ${textColor} opacity-60 tracking-[0.06em]`}>
                          {range}
                        </span>
                      </div>
                      <p className="text-body text-white/55 leading-relaxed">
                        {description}
                      </p>
                    </div>
                    <CheckCircle2 className={`h-4 w-4 ${textColor} opacity-40 shrink-0 mt-1`} />
                  </div>
                ))}

                <p className="font-mono text-micro text-white/25 tracking-[0.1em] pt-2">
                  Scores driven by publicly available sustainability disclosures
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section className="container px-10 py-24 md:py-32">
          <div className="bg-card border border-border shadow-raised p-12 md:p-16 text-center relative overflow-hidden">
            {/* Subtle background accent */}
            <div
              className="absolute inset-0 opacity-[0.025] pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 80% at 50% 50%, hsl(163 58% 14%), transparent)",
              }}
            />
            <div className="relative">
              <p className="font-mono text-micro text-muted-foreground tracking-[0.2em] uppercase mb-5">
                Get started · Free access
              </p>
              <h2 className="font-serif text-h2 text-foreground mb-5">
                Search any listed company
              </h2>
              <p className="text-body text-muted-foreground max-w-sm mx-auto mb-10 leading-relaxed">
                Access full ESG profiles instantly. No account, no
                subscription, no delay.
              </p>
              <Link
                to="/app"
                className="inline-flex items-center gap-2.5 bg-primary text-primary-foreground font-sans font-semibold text-sm px-10 py-4 rounded-sm hover:bg-forest-mid transition-colors shadow-raised"
              >
                Open the assessment tool
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="border-t border-border">
        <div className="container px-10 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-[20px] h-[20px] bg-primary rounded-icon flex items-center justify-center font-serif font-bold text-xs text-primary-foreground">
              V
            </div>
            <span className="font-serif text-base font-bold text-foreground tracking-wide">
              Verafy
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#features"
              className="font-mono text-micro text-muted-foreground hover:text-foreground tracking-[0.1em] uppercase transition-colors"
            >
              Features
            </a>
            <a
              href="#methodology"
              className="font-mono text-micro text-muted-foreground hover:text-foreground tracking-[0.1em] uppercase transition-colors"
            >
              Methodology
            </a>
            <Link
              to="/app"
              className="font-mono text-micro text-muted-foreground hover:text-foreground tracking-[0.1em] uppercase transition-colors"
            >
              Search
            </Link>
          </div>
          <p className="font-mono text-micro text-muted-foreground/60 tracking-wide text-center sm:text-right max-w-xs">
            Based on publicly available disclosures. Aligned to IFRS S1/S2 and GRI.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
