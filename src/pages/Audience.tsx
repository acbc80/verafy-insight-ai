import { Link, useLocation, Navigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { audiences, getAudience } from "@/data/audiences";

const Audience = () => {
  const { pathname } = useLocation();
  const audience = getAudience(pathname.replace(/^\//, ""));

  if (!audience) return <Navigate to="/" replace />;

  const others = audiences.filter((a) => a.slug !== audience.slug);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <main>
        <section className="container px-6 md:px-10 pt-20 pb-16">
          <p className="eyebrow text-micro text-anchor mb-6">{audience.kicker}</p>
          <h1 className="text-display text-deep-water mb-6 max-w-3xl">
            VeraFi for {audience.title.toLowerCase()}
          </h1>
          <p className="font-serif text-body text-slate max-w-xl mb-10">{audience.promise}</p>
          <Link
            to="/search"
            className="inline-flex items-center gap-2 bg-anchor text-accent-foreground text-label px-6 h-12 hover:bg-deep-water transition-colors"
          >
            Assess a company
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        <section className="container px-6 md:px-10 pb-24">
          <p className="eyebrow text-micro text-anchor mb-3">What you get</p>
          <h2 className="text-h2 text-deep-water mb-10">Where VeraFi earns its place</h2>
          <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
            {audience.benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="bg-card hover:bg-muted/50 transition-colors p-8 animate-fade-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h3 className="text-h3 text-deep-water mb-3">{benefit.title}</h3>
                <p className="font-serif text-body text-slate">{benefit.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container px-6 md:px-10 pb-24">
          <p className="eyebrow text-micro text-anchor mb-3">In your workflow</p>
          <h2 className="text-h2 text-deep-water mb-10">How VeraFi fits</h2>
          <div className="grid gap-10 md:grid-cols-3">
            {audience.workflow.map((item) => (
              <div key={item.step} className="border-t-2 border-deep-water pt-6">
                <span className="font-mono text-h3 tabular text-anchor block mb-4">{item.step}</span>
                <h3 className="text-h3 text-deep-water mb-3">{item.title}</h3>
                <p className="font-serif text-body text-slate">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container px-6 md:px-10 pb-24">
          <div className="border-t border-border pt-8 flex flex-wrap gap-10">
            {others.map((other) => (
              <Link key={other.slug} to={`/${other.slug}`} className="group">
                <p className="eyebrow text-micro text-slate mb-2">Also for</p>
                <span className="text-h3 text-deep-water group-hover:text-anchor transition-colors inline-flex items-center gap-2">
                  {other.title}
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Audience;
