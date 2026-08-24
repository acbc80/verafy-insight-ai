import { CompanySearch } from "@/components/CompanySearch";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const Search = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />

      <main className="container px-6 md:px-10 py-16 flex-1">
        <div className="max-w-3xl mx-auto mb-10">
          <p className="eyebrow text-micro text-anchor mb-4">Assessment index · FY2024</p>
          <h1 className="text-h2 text-deep-water mb-3">Which company&apos;s claims do you need tested?</h1>
          <p className="font-serif text-body text-slate max-w-xl">
            Search by name or ticker. Scores are stated with the evidence level that produced them.
          </p>
        </div>
        <CompanySearch />
      </main>

      <SiteFooter />
    </div>
  );
};

export default Search;
