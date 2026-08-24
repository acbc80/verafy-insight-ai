import { Link, useLocation } from "react-router-dom";
import logoMark from "@/assets/verafi-mark.png";
import { audiences } from "@/data/audiences";
import { FontSizeControl } from "@/components/FontSizeControl";


export const SiteHeader = () => {
  const { pathname } = useLocation();

  return (
    <header className="bg-deep-water sticky top-0 z-50">
      <div className="container flex items-center justify-between h-14 px-6 md:px-10">
        {/* Mark-only glyph plus separately set wordmark — never a shrunk lockup */}
        <Link to="/" className="flex items-center gap-2.5">
          <img src={logoMark} alt="VeraFi" className="w-6 h-6 object-contain" />
          <span className="text-xl font-semibold text-paper tracking-[-0.02em]">VeraFi</span>
        </Link>

        <nav className="flex items-center gap-5 md:gap-8">
          <div className="hidden md:flex items-center gap-7">
            {audiences.map((a) => (
              <Link
                key={a.slug}
                to={`/${a.slug}`}
                className={`eyebrow text-micro transition-colors ${
                  pathname === `/${a.slug}` ? "text-anchor-lift" : "text-paper/60 hover:text-anchor-lift"
                }`}
              >
                {a.nav}
              </Link>
            ))}
          </div>
          <FontSizeControl />
          <Link

            to="/search"
            className="bg-anchor text-accent-foreground text-label px-4 py-2 hover:bg-anchor-lift hover:text-deep-water transition-colors"
          >
            Assess a company
          </Link>
        </nav>
      </div>
    </header>
  );
};
