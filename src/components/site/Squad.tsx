import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Search, X } from "lucide-react";
import { players, type Position } from "@/data/players";
import { OptimizedImage } from "@/components/OptimizedImage";

const filters: { key: "ALL" | Position; label: string }[] = [
  { key: "ALL", label: "All" },
  { key: "GK", label: "Goalkeepers" },
  { key: "DEF", label: "Defenders" },
  { key: "MID", label: "Midfielders" },
  { key: "FWD", label: "Forwards" },
];

type SortKey = "number" | "name" | "goals" | "assists" | "apps";

const sorts: { key: SortKey; label: string }[] = [
  { key: "number", label: "Squad #" },
  { key: "name", label: "Name A–Z" },
  { key: "goals", label: "Top scorers" },
  { key: "assists", label: "Top assists" },
  { key: "apps", label: "Most apps" },
];

export const Squad = () => {
  const [active, setActive] = useState<"ALL" | Position>("ALL");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState<SortKey>("number");

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    let out = active === "ALL" ? players : players.filter((p) => p.position === active);
    if (q) {
      out = out.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          String(p.number).includes(q) ||
          p.position.toLowerCase().includes(q),
      );
    }
    const sorted = [...out].sort((a, b) => {
      switch (sort) {
        case "name": return a.name.localeCompare(b.name);
        case "goals": return b.stats.goals - a.stats.goals;
        case "assists": return b.stats.assists - a.stats.assists;
        case "apps": return b.stats.apps - a.stats.apps;
        default: return a.number - b.number;
      }
    });
    return sorted;
  }, [active, query, sort]);

  return (
    <section id="squad" className="relative bg-background py-24 md:py-36">
      <div className="container-fluid">
        <div className="grid-12 mb-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-7"
          >
            <div className="eyebrow mb-4">The Eleven · Season 25/26</div>
            <h2 className="font-display text-display-lg uppercase text-foreground text-balance">
              The men who wear the <span className="text-accent">badge.</span>
            </h2>
          </motion.div>
          <div className="col-span-12 md:col-span-5 flex flex-wrap gap-2 md:justify-end">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setActive(f.key)}
                className={`rounded-sm border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all ${
                  active === f.key
                    ? "border-accent bg-accent text-accent-foreground shadow-gold"
                    : "border-border bg-surface text-muted-foreground hover:border-foreground hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Search + sort toolbar */}
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" strokeWidth={1.75} />
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by name, number, position…"
              aria-label="Search squad"
              className="w-full rounded-sm border border-border bg-surface pl-10 pr-9 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-colors"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                aria-label="Clear search"
                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm p-1 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
          <div className="flex items-center gap-2">
            <label htmlFor="squad-sort" className="text-[10px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
              Sort
            </label>
            <select
              id="squad-sort"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortKey)}
              className="rounded-sm border border-border bg-surface px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-foreground focus:border-accent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent transition-colors"
            >
              {sorts.map((s) => (
                <option key={s.key} value={s.key}>{s.label}</option>
              ))}
            </select>
          </div>
        </div>

        <motion.ul
          key={`${active}-${sort}-${query}`}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.length === 0 && (
            <li className="col-span-full rounded-sm border border-dashed border-border bg-surface p-12 text-center text-sm text-muted-foreground">
              No players match <span className="font-semibold text-foreground">"{query}"</span>. Try a different search.
            </li>
          )}
          {list.map((p) => (
            <motion.li
              key={p.id}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              className="group tactile-card relative overflow-hidden rounded-sm bg-surface shadow-tactile"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <OptimizedImage
                  src={p.image}
                  alt={`${p.name}, #${p.number}, ${p.position}`}
                  className="h-full w-full object-cover object-top grayscale-[0.15] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/10 to-transparent" />

                {/* Number watermark */}
                <div className="absolute -right-4 -top-6 font-display text-[9rem] leading-none text-background/15 select-none pointer-events-none">
                  {p.number}
                </div>

                {/* Position pill */}
                <div className="absolute top-4 left-4 rounded-sm bg-accent/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-accent-foreground">
                  {p.position}
                </div>

                {/* Bottom info */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
                    #{p.number} · {p.position}
                  </div>
                  <div className="mt-1 font-display text-2xl uppercase text-background">{p.name}</div>

                  {/* Expand reveal */}
                  <div className="mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                    <p className="text-sm text-background/85 mb-4">{p.bio}</p>
                    <div className="grid grid-cols-3 gap-2 border-t border-background/20 pt-3">
                      {[
                        { k: "Apps", v: p.stats.apps },
                        { k: "Goals", v: p.stats.goals },
                        { k: "Assists", v: p.stats.assists },
                      ].map((s) => (
                        <div key={s.k}>
                          <div className="font-display text-xl text-accent">{s.v}</div>
                          <div className="text-[10px] uppercase tracking-wider text-background/60">{s.k}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>

        <p className="mt-10 text-center text-sm text-muted-foreground">
          Hover a card to reveal full stats. Mobile? Tap to expand.
        </p>
      </div>
    </section>
  );
};
