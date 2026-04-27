import { ImgHTMLAttributes } from "react";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  eager?: boolean;
}

/**
 * Drop-in <img> with sensible performance defaults:
 * - lazy loading + async decoding by default
 * - eager + high priority for above-the-fold
 * - prevents CLS when width/height passed
 */
export const OptimizedImage = ({ eager, loading, decoding, fetchPriority, ...rest }: Props & { fetchPriority?: "high" | "low" | "auto" }) => (
  <img
    loading={loading ?? (eager ? "eager" : "lazy")}
    decoding={decoding ?? "async"}
    fetchPriority={fetchPriority ?? (eager ? "high" : "auto")}
    {...rest}
  />
);