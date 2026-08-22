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
          <p className="font-mono text-micro text-lime-dark tracking-[0.24em] uppercase mb-6">{audience.kicker}</p>
          <h1 className="font-serif text-display text-foreground mb-6 max-w-3xl">
            VeraFi for {audience.title.toLowerCase()}
          </h1>
          <p className="text-body text-muted-foreground max-w-xl mb-10">{audience.promise}</p>
          <Link
            to="/search"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-mono text-label tracking-[0.14em] uppercase px-6 h-12 hover:shadow-raised transition-shadow"
          >
            Search a company
            <ArrowRight className="h-4 w-4" />
          </Link>
        </section>

        <section className="container px-6 md:px-10 pb-24">
          <p className="font-mono text-micro text-lime-dark tracking-[0.24em] uppercase mb-3">What you get</p>
          <h2 className="font-serif text-h2 text-foreground mb-10">Where VeraFi earns its place</h2>
          <div className="grid gap-1 md:grid-cols-2">
            {audience.benefits.map((benefit, i) => (
              <div
                key={benefit.title}
                className="bg-card border border-border border-l-[3px] border-l-transparent hover:border-l-lime-dark hover:shadow-subtle transition-all p-8 animate-fade-in"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <h3 className="font-serif text-h3 text-foreground mb-3">{benefit.title}</h3>
                <p className="text-body text-muted-foreground">{benefit.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container px-6 md:px-10 pb-24">
          <p className="font-mono text-micro text-lime-dark tracking-[0.24em] uppercase mb-3">In your workflow</p>
          <h2 className="font-serif text-h2 text-foreground mb-10">How VeraFi fits</h2>
          <div className="grid gap-8 md:grid-cols-3">
            {audience.workflow.map((item) => (
              <div key={item.step} className="border-t-2 border-primary pt-6">
                <span className="font-mono text-h3 text-primary block mb-4">{item.step}</span>
                <h3 className="font-serif text-h3 text-foreground mb-3">{item.title}</h3>
                <p className="text-body text-muted-foreground">{item.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container px-6 md:px-10 pb-24">
          <div className="border-t border-border pt-8 flex flex-wrap gap-8">
            {others.map((other) => (
              <Link key={other.slug} to={`/${other.slug}`} className="group">
                <p className="font-mono text-micro tracking-[0.2em] uppercase text-muted-foreground mb-2">
                  Also for
                </p>
                <span className="font-serif text-h3 text-foreground group-hover:text-primary transition-colors inline-flex items-center gap-2">
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
