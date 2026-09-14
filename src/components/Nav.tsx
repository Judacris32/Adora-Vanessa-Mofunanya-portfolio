"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/content";
import { logo, instagramIcon } from "@/lib/images";
import ThemeToggle from "@/components/ThemeToggle";
import clsx from "clsx";

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || open
          ? "bg-cream-50/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(42,33,29,0.08)]"
          : "bg-transparent"
      )}
    >
      <div className="container-page relative flex h-20 items-center justify-between md:h-24">
        <Link href="/" className="flex shrink-0 items-center gap-3 group" aria-label="Adora Vanessa Mofunanya — Home">
          <Image
            src={logo.full.src}
            alt={logo.full.alt}
            width={logo.full.width}
            height={logo.full.height}
            priority
            className="h-8 w-auto sm:h-9 md:h-10 border border-ink/10 rounded-lg"
          />
          <span className="hidden h-6 w-px bg-ink/15 lg:block" aria-hidden="true" />
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 rounded-full border border-ink/10 bg-cream-50/85 px-1.5 py-1.5 shadow-[0_1px_12px_rgba(42,33,29,0.08)] backdrop-blur-md lg:flex">
          {nav.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "rounded-full px-5 py-2 text-center font-body text-[12px] uppercase tracking-[0.2em] transition-colors duration-300",
                  active ? "bg-charcoal text-parchment" : "text-ink/75 hover:bg-ink/10 hover:text-ink"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <ThemeToggle className="hidden lg:flex" />

          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Dela-Fin on Instagram"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-cream-50/85 shadow-[0_1px_12px_rgba(42,33,29,0.08)] backdrop-blur-md transition-transform hover:scale-110 lg:flex"
          >
            <Image src={instagramIcon.src} alt="" width={20} height={20} className="h-5 w-5" />
          </a>

          <button
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-ink/10 bg-cream-50/85 text-ink shadow-[0_1px_12px_rgba(42,33,29,0.08)] backdrop-blur-md lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X size={22} strokeWidth={1.25} /> : <Menu size={22} strokeWidth={1.25} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-cream-50 lg:hidden"
          >
            <nav className="container-page flex flex-col items-center gap-1 pb-8 pt-2 text-center">
              {nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  className="w-full"
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="block border-b border-ink/10 py-4 text-center font-display text-2xl text-ink"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="mt-6 inline-flex items-center gap-2 text-[13px] uppercase tracking-[0.2em] text-ink/70"
              >
                <Image src={instagramIcon.src} alt="" width={16} height={16} className="h-4 w-4" /> {site.instagramHandle}
              </a>
              <div className="mt-6 flex items-center gap-3">
                <span className="text-[11px] uppercase tracking-[0.25em] text-ink/50">Dark mode</span>
                <ThemeToggle />
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
