import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";

const articles = [
  {
    tag: "Strategy",
    title: "The 2026 AIFF Roadmap",
    excerpt:
      "How Hyderabad Globe FC is aligning its grassroots pathway with the AIFF's Vision 2047 — building India's next generation from Telangana soil up.",
    read: "8 min read",
    accent: "hsl(43 65% 52%)",
  },
  {
    tag: "Scouting",
    title: "The TFA Revolution",
    excerpt:
      "Inside the Telangana Football Association Summer Camps. Who's the next Sai Kumar? Our scouts file their reports from the maidans.",
    read: "6 min read",
    accent: "hsl(358 75% 52%)",
  },
  {
    tag: "Performance",
    title: "Nutrition for Champions",
    excerpt:
      "Modern diet trends for youth players surviving — and thriving — in Hyderabad's 42°C summers. What our U-21s actually eat.",
    read: "5 min read",
    accent: "hsl(222 47% 11%)",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="relative bg-surface-elevated py-24 md:py-36">
      <div className="container-fluid">
        <div className="grid-12 mb-14 items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="col-span-12 md:col-span-8"
          >
            <div className="eyebrow mb-4">The Journal</div>
            <h2 className="font-display text-display-lg uppercase text-foreground text-balance">
              Field notes from the <span className="text-accent">touchline.</span>
            </h2>
          </motion.div>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
          className="grid gap-6 md:grid-cols-3"
        >
          {articles.map((a, i) => (
            <motion.li
              key={a.title}
              variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
            >
              <article className="tactile-card group h-full overflow-hidden rounded-sm bg-surface shadow-tactile">
                <div className="relative h-48 overflow-hidden" style={{ background: a.accent }}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(0_0%_100%/0.18),transparent_60%)]" />
                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between">
                    <span className="rounded-sm bg-background/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                      {a.tag}
                    </span>
                    <span className="font-display text-5xl text-background/40">0{i + 1}</span>
                  </div>
                  <div className="absolute bottom-5 left-5 inline-flex items-center gap-1.5 text-[11px] font-medium text-background/80">
                    <Clock className="h-3 w-3" /> {a.read}
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl uppercase text-foreground leading-tight">
                    {a.title}
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed text-pretty">
                    {a.excerpt}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent group-hover:gap-3 transition-all">
                    Read article
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
