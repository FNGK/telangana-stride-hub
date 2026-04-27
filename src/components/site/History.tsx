import { motion } from "framer-motion";
import teamCelebration from "@/assets/team-celebration.jpg";
import teamLineup from "@/assets/team-lineup.jpg";
import { Trophy } from "lucide-react";

export const History = () => {
  return (
    <section id="history" className="relative bg-primary py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--accent)/0.12),transparent_50%)]" />
      <div className="container-fluid relative">
        <div className="grid-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="eyebrow mb-5">Chapter 57 · 2025</div>
            <h2 className="font-display text-display-lg uppercase text-background text-balance">
              Two cups. One <span className="text-accent">unforgettable</span> season.
            </h2>
            <p className="mt-6 text-fluid-body text-background/75 max-w-lg">
              In 2025, the Globe rose again. Champions of the Hyderabad Sporting Football Tournament
              and lifters of the YSR Trophy — a season the badge will never forget.
              From dusty maidans to floodlit grass, this is football the Telangana way.
            </p>

            <ul className="mt-10 space-y-4">
              {[
                { y: "2025", t: "Hyderabad Sporting Football Tournament — Winners" },
                { y: "2025", t: "YSR Trophy — Champions" },
                { y: "1968", t: "Founded as a community club in old Hyderabad" },
              ].map((e) => (
                <li key={e.t} className="flex items-start gap-4 border-l border-accent/40 pl-5">
                  <Trophy className="h-5 w-5 text-accent mt-1 shrink-0" strokeWidth={1.5} />
                  <div>
                    <div className="font-display text-2xl text-accent">{e.y}</div>
                    <div className="text-background/85 text-sm">{e.t}</div>
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="col-span-12 lg:col-span-7 grid grid-cols-6 gap-4"
          >
            <div className="col-span-6 md:col-span-4 relative overflow-hidden rounded-sm shadow-elevated">
              <img
                src={teamCelebration}
                alt="Hyderabad Globe FC squad celebrating after a 2025 victory"
                loading="lazy"
                width={1920}
                height={1280}
                className="aspect-[4/3] w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-primary/90 to-transparent">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Champions</div>
                <div className="font-display text-xl text-background">YSR Trophy 2025</div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-2 relative overflow-hidden rounded-sm shadow-elevated">
              <img
                src={teamLineup}
                alt="Hyderabad Globe FC official team lineup"
                loading="lazy"
                width={1280}
                height={1920}
                className="h-full w-full object-cover aspect-[3/4] md:aspect-auto"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
