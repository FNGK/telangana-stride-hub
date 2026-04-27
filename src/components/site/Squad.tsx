import { motion } from "framer-motion";
import { useState } from "react";
import { players, type Position } from "@/data/players";

const filters: { key: "ALL" | Position; label: string }[] = [
  { key: "ALL", label: "All" },
  { key: "GK", label: "Goalkeepers" },
  { key: "DEF", label: "Defenders" },
  { key: "MID", label: "Midfielders" },
  { key: "FWD", label: "Forwards" },
];

export const Squad = () => {
  const [active, setActive] = useState<"ALL" | Position>("ALL");
  const list = active === "ALL" ? players : players.filter((p) => p.position === active);

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

        <motion.ul
          key={active}
          initial="hidden"
          animate="show"
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((p) => (
            <motion.li
              key={p.id}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } } }}
              className="group tactile-card relative overflow-hidden rounded-sm bg-surface shadow-tactile"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                <img
                  src={p.image}
                  alt={`${p.name}, #${p.number}, ${p.position}`}
                  loading="lazy"
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
