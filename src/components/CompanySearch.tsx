import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { fetchCompanies } from "@/data/companies";
import { RatingBadge } from "@/components/RatingBadge";
import { evidenceOf, evidenceText } from "@/lib/rating";
import { cn } from "@/lib/utils";

export const CompanySearch = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const { data: results = [], isLoading, isError } = useQuery({
    queryKey: ["companies", query],
    queryFn: () => fetchCompanies(query),
  });

  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="relative mb-8">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="COMPANY OR TICKER"
          className="w-full h-14 pl-11 pr-4 bg-card border border-border border-b-2 border-b-anchor text-foreground font-mono text-body tracking-[0.06em] placeholder:text-slate/60 focus:outline-none focus:shadow-focus transition-shadow"
          autoFocus
        />
      </div>

      {/* Table headers in Slate */}
      <div className="hidden sm:flex items-center gap-4 px-5 pb-2 border-b border-border">
        <span className="eyebrow text-micro text-slate flex-1">Company</span>
        <span className="eyebrow text-micro text-slate w-40">Sector</span>
        <span className="eyebrow text-micro text-slate w-14 text-right">Score</span>
        <span className="eyebrow text-micro text-slate w-28 text-right">Evidence</span>
      </div>

      <div className="divide-y divide-border border-x border-b border-border bg-card">
        {isLoading && (
          <div className="flex items-center justify-center py-10 text-slate">
            <Loader2 className="h-4 w-4 animate-spin mr-2" />
            <span className="eyebrow text-micro">Reading disclosures</span>
          </div>
        )}

        {isError && (
          <p className="text-center font-serif text-body text-slate py-10">
            The company index did not respond. Try again.
          </p>
        )}

        {results.map((company, i) => {
          const level = evidenceOf(company.overallScore);
          return (
            <button
              key={company.id}
              onClick={() => navigate(`/company/${company.id}`)}
              className="w-full flex flex-wrap sm:flex-nowrap items-center gap-y-2 gap-x-4 p-5 hover:bg-muted/60 transition-colors text-left group animate-fade-in"
              style={{ animationDelay: `${i * 45}ms` }}
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3">
                  <span className="text-row text-foreground group-hover:text-anchor transition-colors">
                    {company.name}
                  </span>
                  <span className="font-mono text-caption text-slate tracking-[0.1em]">{company.ticker}</span>
                </div>
                <span className="font-mono text-caption text-slate">{company.exchange}</span>
              </div>
              <span className="w-40 text-sm text-slate">{company.sector}</span>
              <span className={cn("w-14 text-right font-mono text-row tabular", evidenceText[level])}>
                {company.overallScore}
              </span>
              <span className="w-28 flex sm:justify-end">
                <RatingBadge rating={company.overallRating} />
              </span>
            </button>
          );
        })}

        {!isLoading && !isError && results.length === 0 && (
          <p className="text-center font-serif text-body text-slate py-10">
            No company in the index matches “{query}”.
          </p>
        )}
      </div>
    </div>
  );
};
