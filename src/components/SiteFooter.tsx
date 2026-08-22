import { Link } from "react-router-dom";
import logoMark from "@/assets/verafi-mark.png";
import { audiences } from "@/data/audiences";

export const SiteFooter = () => (
  <footer className="bg-primary mt-24">
    <div className="container px-6 md:px-10 py-12 flex flex-col md:flex-row md:items-start justify-between gap-8">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <img src={logoMark} alt="VeraFi logo" className="w-[22px] h-[22px] object-contain" />
          <span className="font-serif text-xl font-bold text-primary-foreground tracking-wide">VeraFi</span>
        </div>
        <p className="font-sans text-sm text-primary-foreground/60 max-w-xs">
          Sustainability intelligence on demand.
        </p>
      </div>

      <div className="flex gap-14">
        <div>
          <p className="font-mono text-micro tracking-[0.2em] uppercase text-accent mb-3">Who it's for</p>
          <ul className="space-y-2">
            {audiences.map((a) => (
              <li key={a.slug}>
                <Link
                  to={`/${a.slug}`}
                  className="font-sans text-sm text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-mono text-micro tracking-[0.2em] uppercase text-accent mb-3">Standards</p>
          <ul className="space-y-2 font-sans text-sm text-primary-foreground/70">
            <li>IFRS S1 · General requirements</li>
            <li>IFRS S2 · Climate disclosures</li>
            <li>GRI Universal Standards</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-sidebar-border">
      <div className="container px-6 md:px-10 py-5">
        <p className="font-mono text-micro tracking-[0.14em] uppercase text-primary-foreground/40">
          © {new Date().getFullYear()} VeraFi · Assessments are research inputs, not investment advice
        </p>
      </div>
    </div>
  </footer>
);
