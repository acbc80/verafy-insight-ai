import { Link, useLocation } from "react-router-dom";
import logoMark from "@/assets/verafi-mark.png";
import { audiences } from "@/data/audiences";

export const SiteHeader = () => {
  const { pathname } = useLocation();

  return (
    <header className="bg-primary sticky top-0 z-50">
      <div className="container flex items-center justify-between h-[52px] px-6 md:px-10">
        <Link to="/" className="flex items-center gap-2">
          <img src={logoMark} alt="VeraFi logo" className="w-[22px] h-[22px] object-contain" />
          <span className="font-serif text-xl font-bold text-primary-foreground tracking-wide">VeraFi</span>
        </Link>

        <nav className="flex items-center gap-5 md:gap-7">
          <div className="hidden md:flex items-center gap-6">
            {audiences.map((a) => (
              <Link
                key={a.slug}
                to={`/${a.slug}`}
                className={`font-mono text-micro tracking-[0.16em] uppercase transition-colors ${
                  pathname === `/${a.slug}`
                    ? "text-accent"
                    : "text-primary-foreground/70 hover:text-accent"
                }`}
              >
                {a.nav}
              </Link>
            ))}
          </div>
          <Link
            to="/search"
            className="bg-accent text-accent-foreground font-mono text-micro tracking-[0.16em] uppercase px-3 py-[7px] hover:shadow-lime-glow transition-shadow"
          >
            Search a company
          </Link>
        </nav>
      </div>
    </header>
  );
};
