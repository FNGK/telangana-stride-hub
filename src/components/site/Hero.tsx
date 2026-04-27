import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-stadium.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-primary">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Floodlit football stadium at dusk"
          width={1920}
          height={1080}
          className="h-full w-full object-cover animate-ken-burns"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent)/0.15),transparent_60%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-fluid flex min-h-[100svh] flex-col justify-end pb-20 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="grid-12"
        >
          <div className="col-span-12 lg:col-span-9">
            <div className="eyebrow text-accent mb-6">
              <span className="h-px w-10 bg-accent" />
              EST. 1968 · HYDERABAD · TELANGANA
            </div>

            <h1 className="font-display text-display-xl uppercase text-background text-balance">
              The Pride of <span className="text-accent">Telangana.</span>
              <br />
              The Future of Indian Football.
            </h1>

            <p className="mt-8 max-w-2xl text-fluid-lead text-background/80 text-pretty">
              Fifty-seven years of grit. Thirty trophies. One thousand players raised.
              Hyderabad Globe FC is where heritage meets the next generation.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#squad"
                className="group inline-flex items-center gap-3 rounded-sm bg-accent px-7 py-4 text-sm font-semibold uppercase tracking-widest text-accent-foreground shadow-gold transition-all hover:bg-accent-glow hover:shadow-elevated"
              >
                Meet the Squad
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#history"
                className="group inline-flex items-center gap-3 rounded-sm border border-background/30 bg-background/5 px-7 py-4 text-sm font-semibold uppercase tracking-widest text-background backdrop-blur-md transition-all hover:bg-background/10"
              >
                <Play className="h-4 w-4" />
                Our Story
              </a>
            </div>
          </div>
        </motion.div>

        {/* Glass strip */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm glass md:grid-cols-4"
        >
          {[
            { k: "EST.", v: "1968" },
            { k: "TROPHIES", v: "30+" },
            { k: "PLAYERS RAISED", v: "1000+" },
            { k: "2025 CHAMPIONS", v: "YSR · HSF" },
          ].map((s) => (
            <div key={s.k} className="bg-primary/40 px-6 py-6">
              <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-accent">{s.k}</div>
              <div className="mt-2 font-display text-3xl text-background md:text-4xl">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
