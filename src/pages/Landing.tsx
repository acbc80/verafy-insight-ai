import { Link } from "react-router-dom";
import { ArrowRight, LineChart, Landmark, Building2, Search, ScanText, FileCheck2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { audiences } from "@/data/audiences";

const icons = [LineChart, Landmark, Building2];

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Search a listed company",
    body: "Enter a company name or ticker. VeraFi locates its latest published sustainability disclosures.",
  },
  {
    icon: ScanText,
    step: "02",
    title: "AI reads the reports",
    body: "Domain-trained models extract targets, claims and evidence from annual and sustainability reports.",
  },
  {
    icon: FileCheck2,
    step: "03",
    title: "Receive a scored assessment",
    body: "A profile scored across ambition, credibility, transparency, accountability and additionality — every score sourced.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="container px-6 md:px-10 pt-20 pb-24">
          <div className="max-w-3xl">
            <p className="font-mono text-micro text-lime-dark tracking-[0.24em] uppercase mb-6">
              Sustainability intelligence on demand
            </p>
            <h1 className="font-serif text-display text-foreground mb-6">
              Assess what a company&nbsp;actually
              <span className="italic"> does</span> about sustainability.
            </h1>
            <p className="text-body text-muted-foreground max-w-xl mb-10">
              VeraFi reads company sustainability reports with domain-expert AI and returns a structured,
              source-linked assessment mapped to IFRS S1, S2 and GRI — in minutes, not days.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/search"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-label tracking-[0.14em] uppercase px-6 h-12 hover:shadow-raised transition-shadow"
              >
                Search a company
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="#audiences"
                className="inline-flex items-center gap-2 border border-primary/30 text-primary font-mono text-label tracking-[0.14em] uppercase px-6 h-12 hover:border-primary transition-colors"
              >
                Who it&apos;s for
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-12 pt-8 border-t border-border">
              {["IFRS S1", "IFRS S2", "GRI Universal", "Source-linked evidence"].map((s) => (
                <span key={s} className="font-mono text-micro tracking-[0.18em] uppercase text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Audiences */}
        <section id="audiences" className="container px-6 md:px-10 pb-24">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="font-mono text-micro text-lime-dark tracking-[0.24em] uppercase mb-3">Who it&apos;s for</p>
              <h2 className="font-serif text-h2 text-foreground">Built for three sides of the same question</h2>
            </div>
          </div>

          <div className="grid gap-1 md:grid-cols-3">
            {audiences.map((audience, i) => {
              const Icon = icons[i];
              return (
                <Link
                  key={audience.slug}
                  to={`/${audience.slug}`}
                  className="group bg-card border border-border border-l-[3px] border-l-transparent hover:border-l-lime-dark hover:shadow-subtle transition-all p-8 flex flex-col animate-fade-in"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <Icon className="h-6 w-6 text-lime-dark mb-6" />
                  <p className="font-mono text-micro tracking-[0.2em] uppercase text-muted-foreground mb-2">
                    {audience.kicker}
                  </p>
                  <h3 className="font-serif text-h3 text-foreground group-hover:text-primary transition-colors mb-3">
                    {audience.title}
                  </h3>
                  <p className="text-body text-muted-foreground mb-6">{audience.promise}</p>
                  <ul className="space-y-2 mb-8">
                    {audience.cardPoints.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-foreground/80">
                        <span className="text-lime-dark">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 font-mono text-micro tracking-[0.18em] uppercase text-primary">
                    Learn more
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section className="container px-6 md:px-10 pb-24">
          <p className="font-mono text-micro text-lime-dark tracking-[0.24em] uppercase mb-3">How it works</p>
          <h2 className="font-serif text-h2 text-foreground mb-10">Three steps to an assessment</h2>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map(({ icon: Icon, step, title, body }) => (
              <div key={step} className="border-t-2 border-primary pt-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-h3 text-primary">{step}</span>
                  <Icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <h3 className="font-serif text-h3 text-foreground mb-3">{title}</h3>
                <p className="text-body text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-primary">
          <div className="container px-6 md:px-10 py-20 text-center">
            <h2 className="font-serif text-h2 text-primary-foreground mb-4">
              Start with a company you already follow
            </h2>
            <p className="text-body text-primary-foreground/70 max-w-lg mx-auto mb-8">
              Search a listed company and see the full assessment, criterion by criterion.
            </p>
            <Link
              to="/search"
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground font-mono text-label tracking-[0.14em] uppercase px-8 h-12 hover:shadow-lime-glow transition-shadow"
            >
              Search a company
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Landing;
