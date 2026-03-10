import { Link } from "react-router-dom";
import { CompanySearch } from "@/components/CompanySearch";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary sticky top-0 z-50">
        <div className="container flex items-center h-[52px] px-10">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-[22px] h-[22px] bg-accent rounded-icon flex items-center justify-center font-serif font-bold text-sm text-primary">
              V
            </div>
            <span className="font-serif text-xl font-bold text-white tracking-wide">Verafy</span>
          </Link>
        </div>
      </header>

      <main className="container px-4 py-16">
        <div className="text-center mb-12">
          <p className="font-mono text-micro text-muted-foreground tracking-[0.2em] uppercase mb-4">
            Sustainability Assessment · 2024
          </p>
          <h1 className="font-serif text-display text-foreground mb-4">
            Sustainability Intelligence
          </h1>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            AI-powered ESG assessments mapped to IFRS standards. Search a company to view its sustainability profile.
          </p>
        </div>
        <CompanySearch />
      </main>
    </div>
  );
};

export default Index;
