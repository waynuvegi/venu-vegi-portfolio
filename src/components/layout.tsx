import { ReactNode, useState, useEffect } from "react";
import { Menu, X, Linkedin, Mail } from "lucide-react";
import { SITE } from "@/data/content";

const navLinks = [
  { name: "Impact", href: "#impact" },
  { name: "Coverage", href: "#coverage" },
  { name: "Experience", href: "#experience" },
  { name: "Philosophy", href: "#how-i-think" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const NAVY = "hsl(221, 55%, 24%)";
const GOLD = "hsl(43, 74%, 49%)";

export function Layout({ children }: { children: ReactNode }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-white/80 backdrop-blur-sm border-b border-border/50"
        }`}
      >
        <div className="container mx-auto px-6 h-18 flex items-center justify-between py-4">
          <button
            onClick={() => scrollTo("#hero")}
            data-testid="link-logo"
            className="text-xl font-serif font-bold tracking-tight"
            style={{ color: NAVY }}
          >
            Venu <span style={{ color: GOLD }}>Vegi</span>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.href)}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.name}
              </button>
            ))}
            <a
              href={SITE.calendly}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-schedule-nav"
              className="inline-flex items-center justify-center rounded-md text-sm font-semibold text-white h-10 px-5 transition-opacity hover:opacity-90"
              style={{ backgroundColor: NAVY }}
            >
              Schedule a Call
            </a>
          </nav>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-border shadow-lg">
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  data-testid={`link-mobile-nav-${link.name.toLowerCase()}`}
                  className="text-left text-base font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <a
                href={SITE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-schedule-mobile"
                className="inline-flex items-center justify-center rounded-md text-sm font-semibold text-white h-12 px-6 mt-2 transition-opacity hover:opacity-90"
                style={{ backgroundColor: NAVY }}
              >
                Schedule a Call
              </a>
            </div>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer style={{ backgroundColor: NAVY }}>
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-8">
            <div>
              <div className="text-2xl font-serif font-bold text-white mb-1">
                Venu <span style={{ color: GOLD }}>Vegi</span>
              </div>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                {SITE.tagline}
              </p>
            </div>

            <div className="flex flex-wrap gap-x-7 gap-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollTo(link.href)}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  {link.name}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "white" }}
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${SITE.email}`}
                aria-label="Send email"
                className="w-10 h-10 rounded-xl flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "white" }}
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div
            className="pt-6 border-t text-xs text-center"
            style={{ borderColor: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.28)" }}
          >
            © {new Date().getFullYear()} Venu Vegi. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
