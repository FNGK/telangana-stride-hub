import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

export const Counter = ({ to, suffix = "" }: { to: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 2.2, ease: [0.22, 1, 0.36, 1] });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="font-display tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
};
