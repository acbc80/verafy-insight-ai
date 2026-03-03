import { CompanySearch } from "@/components/CompanySearch";
import { Leaf } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border">
        <div className="container flex items-center h-14 px-4">
          <div className="flex items-center gap-2">
            <Leaf className="h-5 w-5 text-primary" />
            <span className="font-semibold text-foreground tracking-tight">Verafy</span>
          </div>
        </div>
      </header>

      <main className="container px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-3">
            Sustainability Intelligence
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            AI-powered ESG assessments mapped to IFRS standards. Search a company to view its sustainability profile.
          </p>
        </div>
        <CompanySearch />
      </main>
    </div>
  );
};

export default Index;
