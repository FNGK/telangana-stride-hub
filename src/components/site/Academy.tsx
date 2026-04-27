import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { z } from "zod";
import { CheckCircle2, Send, Trash2, Inbox } from "lucide-react";
import { toast } from "sonner";
import { addTrial, listTrials, removeTrial, STATUS_META, type TrialRecord } from "@/lib/trials";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(80),
  age: z.coerce.number().int().min(8, "Min age 8").max(35, "Max age 35"),
  position: z.enum(["GK", "DEF", "MID", "FWD"]),
  phone: z.string().trim().regex(/^[+]?[\d\s-]{8,15}$/, "Invalid phone"),
  email: z.string().trim().email("Invalid email").max(200),
  message: z.string().trim().max(500).optional(),
});

export const Academy = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sent, setSent] = useState(false);
  const [trials, setTrials] = useState<TrialRecord[]>([]);

  useEffect(() => {
    const sync = () => setTrials(listTrials());
    sync();
    window.addEventListener("hgfc:trials-updated", sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener("hgfc:trials-updated", sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd);
    const result = schema.safeParse(data);
    if (!result.success) {
      const errs: Record<string, string> = {};
      result.error.issues.forEach((i) => { errs[i.path[0] as string] = i.message; });
      setErrors(errs);
      toast.error("Please fix the highlighted fields.");
      return;
    }
    setErrors({});
    addTrial({
      name: result.data.name,
      age: result.data.age,
      position: result.data.position,
      phone: result.data.phone,
      email: result.data.email,
      message: result.data.message,
    });
    setSent(true);
    toast.success("Trial request received. Track its status below.");
    e.currentTarget.reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="academy" className="relative bg-primary py-24 md:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--accent)/0.18),transparent_55%)]" />
      <div className="container-fluid relative">
        <div className="grid-12 gap-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="eyebrow mb-5">The Academy</div>
            <h2 className="font-display text-display-lg uppercase text-background text-balance">
              Wear the <span className="text-accent">badge.</span>
              <br /> Earn the legacy.
            </h2>
            <p className="mt-6 text-fluid-body text-background/75 max-w-md text-pretty">
              Trials open quarterly across U-13, U-15, U-17, and U-21 squads.
              Submit your details — our scouts review every application within 48 hours.
            </p>
            <ul className="mt-10 space-y-4">
              {[
                "Professional coaching from AFC-licensed staff",
                "Monthly fitness, nutrition & video review",
                "Pathway to senior squad and inter-state tournaments",
                "Scholarships available for talent",
              ].map((b) => (
                <li key={b} className="flex items-start gap-3 text-background/85">
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm">{b}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            onSubmit={onSubmit}
            noValidate
            className="col-span-12 lg:col-span-7 lg:col-start-6 rounded-sm glass p-7 md:p-10 shadow-elevated"
          >
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" name="name" error={errors.name} />
              <Field label="Age" name="age" type="number" error={errors.age} />
              <div className="md:col-span-1">
                <label className="block text-[10px] font-bold uppercase tracking-[0.22em] text-accent mb-2">
                  Position
                </label>
                <select
                  name="position"
                  required
                  defaultValue="MID"
                  className="w-full rounded-sm bg-background/10 border border-background/20 px-4 py-3 text-background focus:border-accent focus:bg-background/15 outline-none transition-colors"
                >
                  <option value="GK" className="text-foreground">Goalkeeper</option>
                  <option value="DEF" className="text-foreground">Defender</option>
                  <option value="MID" className="text-foreground">Midfielder</option>
                  <option value="FWD" className="text-foreground">Forward</option>
                </select>
                {errors.position && <p className="mt-1.5 text-xs text-destructive">{errors.position}</p>}
              </div>
              <Field label="Phone" name="phone" type="tel" error={errors.phone} />
              <div className="md:col-span-2">
                <Field label="Email" name="email" type="email" error={errors.email} />
              </div>
              <div className="md:col-span-2">
                <label className="block text-[10px] font-bold uppercase tracking-[0.22em] text-accent mb-2">
                  Tell us about your game (optional)
                </label>
                <textarea
                  name="message"
                  rows={4}
                  maxLength={500}
                  className="w-full rounded-sm bg-background/10 border border-background/20 px-4 py-3 text-background placeholder:text-background/40 focus:border-accent focus:bg-background/15 outline-none transition-colors resize-none"
                  placeholder="Clubs played for, achievements, dream position…"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={sent}
              className="mt-7 group inline-flex w-full items-center justify-center gap-3 rounded-sm bg-accent px-7 py-4 text-sm font-bold uppercase tracking-[0.2em] text-accent-foreground shadow-gold transition-all hover:bg-accent-glow disabled:opacity-60"
            >
              {sent ? (<><CheckCircle2 className="h-4 w-4" /> Submitted</>) : (<>Submit Trial Request <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" /></>)}
            </button>
          </motion.form>
        </div>

        {/* Trial status tracker */}
        <TrialTracker trials={trials} onRemove={(id) => { removeTrial(id); toast("Trial removed from this device."); }} />
      </div>
    </section>
  );
};

const TrialTracker = ({ trials, onRemove }: { trials: TrialRecord[]; onRemove: (id: string) => void }) => {
  if (trials.length === 0) return null;
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="mt-16 rounded-sm glass p-7 md:p-9 shadow-elevated"
    >
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <Inbox className="h-5 w-5 text-accent" strokeWidth={1.75} />
          <div>
            <div className="eyebrow !text-accent">Your trial requests</div>
            <p className="text-xs text-background/60 mt-1">Stored on this device. Status updates roll in as our scouts review.</p>
          </div>
        </div>
        <span className="rounded-sm bg-background/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] text-background/80">
          {trials.length} {trials.length === 1 ? "request" : "requests"}
        </span>
      </div>
      <ul className="divide-y divide-background/10">
        {trials.map((t) => {
          const meta = STATUS_META[t.status];
          return (
            <li key={t.id} className="py-4 flex flex-wrap items-center gap-4 justify-between">
              <div className="min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-display text-lg uppercase text-background">{t.name}</span>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-accent">
                    {t.position} · Age {t.age}
                  </span>
                </div>
                <div className="mt-1 text-xs text-background/55">
                  Submitted {new Date(t.submittedAt).toLocaleDateString(undefined, { day: "2-digit", month: "short", year: "numeric" })}
                  {" · "}
                  Ref <span className="font-mono">{t.id.slice(2, 10)}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className={`rounded-sm border px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.22em] ${meta.tone}`}>
                  {meta.label}
                </span>
                <button
                  type="button"
                  onClick={() => onRemove(t.id)}
                  aria-label={`Remove trial for ${t.name}`}
                  className="rounded-sm p-1.5 text-background/50 hover:text-destructive hover:bg-background/10 transition-colors"
                >
                  <Trash2 className="h-4 w-4" />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </motion.div>
  );
};

const Field = ({ label, name, type = "text", error }: { label: string; name: string; type?: string; error?: string }) => (
  <div>
    <label htmlFor={name} className="block text-[10px] font-bold uppercase tracking-[0.22em] text-accent mb-2">
      {label}
    </label>
    <input
      id={name}
      name={name}
      type={type}
      required
      maxLength={200}
      className={`w-full rounded-sm bg-background/10 border px-4 py-3 text-background placeholder:text-background/40 focus:bg-background/15 outline-none transition-colors ${
        error ? "border-destructive" : "border-background/20 focus:border-accent"
      }`}
    />
    {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
  </div>
);
