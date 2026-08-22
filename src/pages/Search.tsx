import { CompanySearch } from "@/components/CompanySearch";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const Search = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="container px-4 py-16 flex-1">
        <div className="text-center mb-12">
          <p className="font-mono text-micro text-muted-foreground tracking-[0.2em] uppercase mb-4">
            Sustainability Assessment · 2024
          </p>
          <h1 className="font-serif text-display text-foreground mb-4">Sustainability Intelligence</h1>
          <p className="text-body text-muted-foreground max-w-xl mx-auto">
            AI-powered ESG assessments mapped to IFRS standards. Search a company to view its sustainability profile.
          </p>
        </div>
        <CompanySearch />
      </main>

      <SiteFooter />
    </div>
  );
};

export default Search;
