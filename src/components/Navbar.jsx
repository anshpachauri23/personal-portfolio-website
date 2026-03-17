import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { name: "About",      href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills",     href: "#skills" },
  { name: "Projects",   href: "#projects" },
  { name: "Contact",    href: "#contact" },
];

const ResumeDropdown = ({ onClose }) => (
  <div
    style={{
      position: "absolute",
      top: "calc(100% + 8px)",
      right: 0,
      background: "hsl(var(--background))",
      border: "1px solid hsl(var(--border))",
      borderRadius: "6px",
      boxShadow: "0 6px 20px rgba(0,0,0,0.12)",
      zIndex: 200,
      minWidth: "200px",
      overflow: "hidden",
    }}
  >
    {[
      { flag: "🇺🇸", label: "US Résumé (PDF)", file: "/Ansh_Pachauri_resume_US.pdf" },
      { flag: "🇮🇳", label: "India Résumé (PDF)", file: "/Ansh_Pachauri_resume_IND.pdf" },
    ].map(({ flag, label, file }) => (
      <a
        key={file}
        href={file}
        download
        onClick={onClose}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          padding: "0.6rem 1rem",
          fontFamily: "'EB Garamond', serif",
          fontSize: "1rem",
          color: "hsl(var(--foreground))",
          textDecoration: "none",
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "hsl(var(--secondary))")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
      >
        {flag} {label}
      </a>
    ))}
  </div>
);

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handler = (e) => {
      if (resumeRef.current && !resumeRef.current.contains(e.target)) {
        setIsResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300 bg-background",
        isScrolled ? "py-3 border-b border-border shadow-sm" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          style={{ fontFamily: "'EB Garamond', serif", fontStyle: "italic", fontSize: "1.4rem" }}
          className="text-foreground tracking-tight leading-none"
        >
          Ansh Pachauri
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              style={{ fontFamily: "'EB Garamond', serif", fontSize: "1.05rem" }}
              className="text-foreground/65 hover:text-foreground transition-colors duration-200"
            >
              {item.name}
            </a>
          ))}

          {/* Resume dropdown */}
          <div ref={resumeRef} style={{ position: "relative" }}>
            <button
              onClick={() => setIsResumeOpen((o) => !o)}
              style={{
                fontFamily: "'EB Garamond', serif",
                fontSize: "1.05rem",
                background: "hsl(var(--foreground))",
                color: "hsl(var(--background))",
                border: "2px solid hsl(var(--foreground))",
                borderRadius: "6px",
                padding: "4px 16px",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "hsl(var(--foreground))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "hsl(var(--foreground))";
                e.currentTarget.style.color = "hsl(var(--background))";
              }}
            >
              Résumé ▾
            </button>
            {isResumeOpen && (
              <ResumeDropdown onClose={() => setIsResumeOpen(false)} />
            )}
          </div>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Mobile drawer */}
        <div
          className={cn(
            "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col items-center gap-8 text-2xl">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                style={{ fontFamily: "'EB Garamond', serif" }}
                className="text-foreground/80 hover:text-foreground transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="flex flex-col items-center gap-3 mt-2">
              {[
                { flag: "🇺🇸", label: "US Résumé", file: "/Ansh_Pachauri_resume_US.pdf" },
                { flag: "🇮🇳", label: "India Résumé", file: "/Ansh_Pachauri_resume_IND.pdf" },
              ].map(({ flag, label, file }) => (
                <a
                  key={file}
                  href={file}
                  download
                  style={{
                    fontFamily: "'EB Garamond', serif",
                    fontSize: "1.1rem",
                    color: "hsl(var(--foreground))",
                    textDecoration: "underline",
                    textUnderlineOffset: "4px",
                  }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {flag} {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
