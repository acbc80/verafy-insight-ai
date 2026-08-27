import { Link } from "react-router-dom";
import { ArrowRight, LineChart, Landmark, Building2, Search, ScanText, FileCheck2, BadgeCheck } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { VennDiagram } from "@/components/VennDiagram";
import { audiences } from "@/data/audiences";


const icons = [LineChart, Landmark, Building2];

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Name the company",
    body: "Enter a name or ticker. VeraFi pulls the latest filed sustainability and annual reports for that issuer.",
  },
  {
    icon: ScanText,
    step: "02",
    title: "Claims are tested against evidence",
    body: "Every target, transition claim and figure is traced to the page that supports it — or flagged as unevidenced.",
  },
  {
    icon: FileCheck2,
    step: "03",
    title: "You get the finding and the workings",
    body: "A defensible assessment across ambition, credibility, transparency, accountability and additionality, each score sourced.",
  },
];

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className="container px-6 md:px-10 pt-20 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-[1fr_420px] gap-12 items-start">
            <div>
              <p className="eyebrow text-micro text-anchor mb-6">SUSTAINABILITY INTELLIGENCE ON DEMAND</p>
              <h1 className="text-display text-deep-water mb-6">
                Corporate sustainability claims are self-assessed. VeraFi marks the paper.
              </h1>
              <p className="font-serif text-body text-slate max-w-xl mb-4">
                VeraFi reads a company&apos;s sustainability disclosures, tests each claim using expert assessment, and returns a
                sector-specific analysis mapped to IFRS S1, S2 and GRI.
              </p>
              <p className="flex items-center gap-2 mb-10">
                <BadgeCheck className="h-4 w-4 verification-mark shrink-0" />
                <span className="font-mono text-caption text-slate">Every score traced to a cited page</span>
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to="/search"
                  className="inline-flex items-center gap-2 bg-anchor text-accent-foreground text-label px-6 h-12 hover:bg-deep-water transition-colors"
                >
                  Assess a company
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="#audiences"
                  className="inline-flex items-center gap-2 border border-border text-deep-water text-label px-6 h-12 hover:border-anchor transition-colors"
                >
                  Who it&apos;s for
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-12 pt-8 border-t border-border">
                {["IFRS S1", "IFRS S2", "GRI Universal", "Evidence on the record"].map((s) => (
                  <span key={s} className="eyebrow text-micro text-slate">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="hidden md:flex justify-end pt-2">
              <div className="w-full max-w-[360px]">
                <VennDiagram />
              </div>
            </div>
          </div>
        </section>


        {/* Audiences */}
        <section id="audiences" className="container px-6 md:px-10 pb-24">
          <p className="eyebrow text-micro text-anchor mb-10">Who it&apos;s for</p>


          <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
            {audiences.map((audience, i) => {
              const Icon = icons[i];
              return (
                <Link
                  key={audience.slug}
                  to={`/${audience.slug}`}
                  className="group bg-card hover:bg-muted/50 transition-colors p-8 flex flex-col animate-fade-in"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <Icon className="h-5 w-5 text-anchor mb-6" />
                  <p className="eyebrow text-micro text-slate mb-2">{audience.kicker}</p>
                  <h3 className="text-h3 text-deep-water group-hover:text-anchor transition-colors mb-3">
                    {audience.title}
                  </h3>
                  <p className="font-serif text-body text-slate mb-6">{audience.promise}</p>
                  <ul className="space-y-2.5 mb-8">
                    {audience.cardPoints.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-foreground/85">
                        <span className="text-anchor">—</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <span className="mt-auto inline-flex items-center gap-2 eyebrow text-micro text-anchor">
                    Read more
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        {/* How it works */}
        <section className="container px-6 md:px-10 pb-24">
          <p className="eyebrow text-micro text-anchor mb-3">The method</p>
          <h2 className="text-h2 text-deep-water mb-10">From filing to defensible finding</h2>

          <div className="grid gap-10 md:grid-cols-3">
            {steps.map(({ icon: Icon, step, title, body }) => (
              <div key={step} className="border-t-2 border-deep-water pt-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-h3 tabular text-anchor">{step}</span>
                  <Icon className="h-4 w-4 text-slate" />
                </div>
                <h3 className="text-h3 text-deep-water mb-3">{title}</h3>
                <p className="font-serif text-body text-slate">{body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Closing CTA */}
        <section className="bg-deep-water">
          <div className="container px-6 md:px-10 py-20 text-center">
            <h2 className="text-h2 text-paper mb-4">Start with a holding you already doubt</h2>
            <p className="font-serif text-body text-paper/65 max-w-lg mx-auto mb-8">
              Pull a listed company and read the assessment criterion by criterion, with every source cited.
            </p>
            <Link
              to="/search"
              className="inline-flex items-center gap-2 bg-anchor-lift text-deep-water text-label px-8 h-12 hover:bg-paper transition-colors"
            >
              Assess a company
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
