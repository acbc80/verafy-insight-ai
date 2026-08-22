import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCompanies } from "@/data/companies";
import { RatingBadge } from "@/components/RatingBadge";

export const CompanySearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data: results = [], isLoading, isError } = useQuery({
    queryKey: ["companies", query],
    queryFn: () => fetchCompanies(query),
  });

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative mb-6">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search company name or ticker…"
          className="w-full h-12 pl-12 pr-4 bg-card border border-border border-b-2 border-b-primary text-foreground placeholder:text-muted-foreground focus:outline-none focus:shadow-focus transition-all font-sans text-body"
          autoFocus
        />
      </div>

      <div className="space-y-1">
        {isLoading && (
          <div className="flex items-center justify-center py-8 text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            <span className="font-mono text-micro tracking-[0.14em] uppercase">Loading companies</span>
          </div>
        )}

        {isError && (
          <p className="text-center text-muted-foreground py-8">Unable to load companies. Please try again.</p>
        )}

        {results.map((company, i) => (
          <button
            key={company.id}
            onClick={() => navigate(`/company/${company.id}`)}
            className="w-full flex items-center justify-between p-4 bg-card border border-border border-l-[3px] border-l-transparent hover:border-l-lime-dark hover:shadow-subtle transition-all text-left group animate-fade-in"
            style={{ animationDelay: `${i * 50}ms` }}
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3">
                <span className="font-serif text-h3 text-foreground group-hover:text-primary transition-colors">
                  {company.name}
                </span>
                <span className="font-mono text-caption text-muted-foreground tracking-wider">
                  {company.ticker}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-1">
                <span className="font-mono text-micro text-muted-foreground">{company.exchange}</span>
                <span className="text-muted-foreground/40">·</span>
                <span className="font-sans text-label text-muted-foreground">{company.sector}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 ml-4">
              <span className="font-serif text-h3 font-bold text-foreground">{company.overallScore}</span>
              <RatingBadge rating={company.overallRating} />
            </div>
          </button>
        ))}

        {!isLoading && !isError && results.length === 0 && (
          <p className="text-center text-muted-foreground py-8">No companies found matching "{query}"</p>
        )}
      </div>
    </div>
  );
};
