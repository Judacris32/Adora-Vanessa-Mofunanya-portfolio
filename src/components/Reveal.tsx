"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode, useEffect, useState } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  y?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
};

const makeVariants = (y: number): Variants => ({
  hidden: { opacity: 0, y },
  visible: { opacity: 1, y: 0 },
});

// Framer Motion's whileInView relies on an IntersectionObserver, which
// doesn't exist during server rendering. When Reveal's animated wrapper is
// part of the very first (server-hydrated) paint, Framer Motion has to
// guess at styles server-side that don't always match what React commits
// on the client's first render — React then reports a hydration mismatch
// (errors #418 / #423 / #329) and throws away the server HTML, rebuilding
// the whole tree client-side. That's what was actually causing content to
// vanish and pop back in on first load — not a scroll or animation-timing
// issue, an actual hydration failure happening on every page.
//
// Skipping the animated wrapper for just that one, one-time hydration pass
// removes the mismatch entirely (server and client both render a plain
// div, nothing to disagree about). Every client-side navigation after that
// — no hydration involved, just a normal client render — gets the full
// reveal animation exactly as before.
let hasHydrated = false;

/**
 * Reveal — fades + slides content into view as it scrolls into the viewport.
 * Wraps Framer Motion's whileInView so any section can opt into the same
 * signature reveal without repeating boilerplate.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 28,
  duration = 0.8,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const [skipAnimation] = useState(() => !hasHydrated);

  useEffect(() => {
    hasHydrated = true;
  }, []);

  if (skipAnimation) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      variants={makeVariants(y)}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
