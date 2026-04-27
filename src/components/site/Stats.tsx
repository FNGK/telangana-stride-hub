import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { Trophy, Users, Calendar, Award } from "lucide-react";

const stats = [
  { icon: Calendar, label: "Years of Legacy", value: 57, suffix: "+" },
  { icon: Trophy, label: "Trophies Lifted", value: 30, suffix: "+" },
  { icon: Users, label: "Players Trained", value: 1000, suffix: "+" },
  { icon: Award, label: "U-21 Champions", value: 8, suffix: "x" },
];

export const Stats = () => {
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="container-fluid">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="eyebrow justify-center mb-4">Heritage in Numbers</div>
          <h2 className="font-display text-display-md uppercase text-foreground text-balance">
            Built on <span className="text-accent">decades</span> of devotion.
          </h2>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm bg-border md:grid-cols-4"
        >
          {stats.map((s) => (
            <motion.li
              key={s.label}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
              className="bg-surface p-8 md:p-10"
            >
              <s.icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
              <div className="mt-6 text-5xl md:text-6xl text-foreground">
                <Counter to={s.value} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {s.label}
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};
