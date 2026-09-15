"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

// Every section on every page reveals itself via Framer Motion's
// `whileInView` (see Reveal.tsx), which checks each element's position
// against the viewport the moment it mounts. Because this wrapper delays
// mounting the new page until the old one has fully faded out
// (`mode="wait"`), that first check can land before the browser has
// settled scroll/layout for the freshly-mounted page — leaving whole
// sections stuck at opacity: 0 until something forces a recheck. A reload
// always looks fine because it starts clean at the top of the page; a
// client-side route change (any <Link>, including the footer nav) doesn't.
//
// IntersectionObserver only recomputes on a real layout/scroll change —
// dispatching a synthetic "scroll" event does nothing — so the fix is to
// reset scroll on every route change, then nudge the browser with a real
// (1px, instantly reversed, invisible) scroll once the new page has
// settled. That forces every Reveal to get a correct, fresh reading
// without the visitor needing to scroll first.
function resettleScrollObservers() {
  window.scrollTo(0, 0);
  requestAnimationFrame(() => {
    window.scrollBy(0, 1);
    requestAnimationFrame(() => window.scrollBy(0, -1));
  });
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={resettleScrollObservers}
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
