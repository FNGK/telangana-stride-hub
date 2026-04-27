import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const links = [
  { href: "#squad", label: "Squad" },
  { href: "#history", label: "Heritage" },
  { href: "#blog", label: "Journal" },
  { href: "#academy", label: "Academy" },
];

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="container-fluid">
        <nav
          className={`flex items-center justify-between rounded-sm px-5 py-3 transition-all duration-500 ${
            scrolled ? "glass-light shadow-tactile" : "glass"
          }`}
          aria-label="Primary"
        >
          <a href="#top" className="flex items-center gap-3 group">
            <span className="grid h-9 w-9 place-items-center rounded-sm bg-gradient-gold shadow-gold">
              <span className="font-display text-lg text-primary">H</span>
            </span>
            <span className={`font-display text-lg tracking-wide ${scrolled ? "text-foreground" : "text-background"}`}>
              HYDERABAD <span className="text-accent">GLOBE</span> FC
            </span>
          </a>
          <ul className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className={`text-sm font-medium tracking-wide hover:text-accent transition-colors ${
                    scrolled ? "text-foreground" : "text-background/90"
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#academy"
            className="hidden sm:inline-flex items-center gap-2 rounded-sm bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground shadow-gold hover:bg-accent-glow transition-colors"
          >
            Trial
          </a>
        </nav>
      </div>
    </motion.header>
  );
};
