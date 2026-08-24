import { Link } from "react-router-dom";
import logoMark from "@/assets/verafi-mark.png";
import { audiences } from "@/data/audiences";

export const SiteFooter = () => (
  <footer className="bg-deep-water mt-24">
    <div className="container px-6 md:px-10 py-14 flex flex-col md:flex-row md:items-start justify-between gap-10">
      <div>
        <div className="flex items-center gap-2.5 mb-3">
          <img src={logoMark} alt="VeraFi" className="w-6 h-6 object-contain" />
          <span className="text-xl font-semibold text-paper tracking-[-0.02em]">VeraFi</span>
        </div>
        {/* Tagline set as editable type, not baked artwork */}
        <p className="font-serif text-body text-paper/55 max-w-xs">
          Verified sustainability judgment, with the workings shown.
        </p>
      </div>

      <div className="flex gap-14">
        <div>
          <p className="eyebrow text-micro text-anchor-lift mb-3">Who it's for</p>
          <ul className="space-y-2">
            {audiences.map((a) => (
              <li key={a.slug}>
                <Link to={`/${a.slug}`} className="text-sm text-paper/65 hover:text-anchor-lift transition-colors">
                  {a.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow text-micro text-anchor-lift mb-3">Standards</p>
          <ul className="space-y-2 font-mono text-sm text-paper/65">
            <li>IFRS S1 · General requirements</li>
            <li>IFRS S2 · Climate disclosures</li>
            <li>GRI Universal Standards</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="border-t border-sidebar-border">
      <div className="container px-6 md:px-10 py-5">
        <p className="eyebrow text-micro text-paper/40">
          © {new Date().getFullYear()} VeraFi · Assessments are research inputs, not investment advice
        </p>
      </div>
    </div>
  </footer>
);
