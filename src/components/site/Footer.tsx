import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";

const faqs = [
  {
    q: "Who is Hyderabad Globe FC?",
    a: "Hyderabad Globe FC (HGFC) is a heritage football club founded in 1968, based in Hyderabad, Telangana. The club develops grassroots talent and competes in regional and state-level tournaments under the Telangana Football Association.",
  },
  {
    q: "How can I join the academy?",
    a: "Submit the trial form in the Academy section above. Open trials run quarterly across U-13, U-15, U-17, and U-21 age groups in Hyderabad. Our scouts respond within 48 hours.",
  },
  {
    q: "What tournaments has the club won?",
    a: "In 2025, HGFC won the Hyderabad Sporting Football Tournament and the YSR Trophy. Across 57 years, the club has lifted 30+ trophies and trained more than 1,000 players.",
  },
  {
    q: "Where do you train and play?",
    a: "Home training and matches take place across Hyderabad's leading turfs in partnership with the Telangana Football Association.",
  },
];

const sponsors = ["GLOBE SPORTS", "TFA", "AIFF", "TELANGANA", "HYDERABAD"];

export const Footer = () => {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <footer id="contact" className="relative bg-foreground text-background">
      {/* FAQ */}
      <section className="border-b border-background/10 py-20 md:py-28">
        <div className="container-fluid">
          <div className="grid-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="col-span-12 md:col-span-4"
            >
              <div className="eyebrow mb-4">FAQ</div>
              <h2 className="font-display text-display-md uppercase text-balance">
                Quick answers,<br /> straight from the <span className="text-accent">club.</span>
              </h2>
            </motion.div>
            <div className="col-span-12 md:col-span-8 md:col-start-5">
              <ul className="divide-y divide-background/10 border-y border-background/10">
                {faqs.map((f, i) => (
                  <li key={f.q}>
                    <button
                      onClick={() => setOpen(open === i ? null : i)}
                      className="flex w-full items-center justify-between py-6 text-left hover:text-accent transition-colors"
                      aria-expanded={open === i}
                    >
                      <span className="font-display text-xl uppercase pr-6">{f.q}</span>
                      <ChevronDown className={`h-5 w-5 shrink-0 transition-transform ${open === i ? "rotate-180 text-accent" : ""}`} />
                    </button>
                    <div className={`grid transition-all duration-500 ${open === i ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"}`}>
                      <p className="overflow-hidden text-background/75 text-fluid-body max-w-2xl">{f.a}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map + Contact */}
      <section className="border-b border-background/10">
        <div className="grid md:grid-cols-2">
          <div className="relative min-h-[320px] md:min-h-[420px] bg-primary">
            <iframe
              title="Hyderabad Globe FC location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121788.3635!2d78.3676!3d17.4126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDI0JzQ1LjQiTiA3OMKwMjcnMjkuOCJF!5e0!3m2!1sen!2sin!4v1700000000000"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale contrast-[1.1] opacity-90"
              style={{ border: 0 }}
              allowFullScreen
            />
          </div>
          <div className="p-10 md:p-16 grid content-center gap-8">
            <div>
              <div className="eyebrow mb-3">Get in touch</div>
              <h3 className="font-display text-display-md uppercase">Visit. Watch. <span className="text-accent">Join.</span></h3>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-accent/10 text-accent"><MapPin className="h-5 w-5" /></span>
                <div><div className="text-xs uppercase tracking-[0.2em] text-background/50">Address</div><div className="text-fluid-body">Hyderabad, Telangana, India</div></div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-accent/10 text-accent"><Phone className="h-5 w-5" /></span>
                <div><div className="text-xs uppercase tracking-[0.2em] text-background/50">Phone</div><div className="text-fluid-body">+91 98765 43210</div></div>
              </li>
              <li className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-sm bg-accent/10 text-accent"><Mail className="h-5 w-5" /></span>
                <div><div className="text-xs uppercase tracking-[0.2em] text-background/50">Email</div><div className="text-fluid-body">trials@hyderabadglobefc.in</div></div>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="border-b border-background/10 py-14">
        <div className="container-fluid">
          <div className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-background/40 mb-8">In partnership with</div>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {sponsors.map((s) => (
              <span key={s} className="font-display text-2xl tracking-widest text-background/40 hover:text-accent transition-colors">
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom */}
      <div className="container-fluid py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-sm bg-gradient-gold"><span className="font-display text-lg text-foreground">H</span></span>
          <div>
            <div className="font-display text-base">HYDERABAD GLOBE FC</div>
            <div className="text-[11px] uppercase tracking-[0.2em] text-background/50">Est. 1968 · Telangana</div>
          </div>
        </div>
        <div className="text-xs text-background/50">© {new Date().getFullYear()} Hyderabad Globe FC. All rights reserved.</div>
        <div className="flex items-center gap-3">
          {[Instagram, Facebook, Youtube].map((Icon, i) => (
            <a key={i} href="#" aria-label="Social" className="grid h-10 w-10 place-items-center rounded-sm border border-background/15 hover:border-accent hover:text-accent transition-colors">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
