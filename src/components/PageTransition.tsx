"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

// Same root cause as Reveal.tsx: this wrapper's animated opacity/clip-path
// styles can disagree between what the server renders and what the client
// decides to paint on its first hydration pass, which React reports as a
// hydration mismatch and "fixes" by discarding the server HTML and
// rebuilding client-side — the real reason content was vanishing and
// reappearing on first load, confirmed by the React hydration errors
// (#418/#423/#329) showing up on every page, in more than one browser.
//
// Rendering children plainly (no animation) for that one hydration pass
// removes the mismatch entirely; every client-side navigation afterwards —
// no hydration involved — gets the full page transition exactly as before.
let hasHydrated = false;

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [skipAnimation] = useState(() => !hasHydrated);

  useEffect(() => {
    hasHydrated = true;
  }, []);

  if (skipAnimation) {
    return <>{children}</>;
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
