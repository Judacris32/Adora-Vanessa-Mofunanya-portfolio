"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("avm-theme", next ? "dark" : "light");
    } catch {
      /* ignore (private browsing, etc.) */
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={mounted && dark ? "Switch to light mode" : "Switch to dark mode"}
      aria-pressed={mounted ? dark : false}
      className={`relative flex h-8 w-14 shrink-0 items-center rounded-full border border-ink/15 bg-cream-100 px-1 transition-colors ${className}`}
    >
      <span
        className="flex h-6 w-6 items-center justify-center rounded-full bg-cream shadow-sm transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{ transform: mounted && dark ? "translateX(22px)" : "translateX(0)" }}
      >
        {mounted && dark ? (
          <Moon size={13} strokeWidth={1.75} className="text-ink" />
        ) : (
          <Sun size={13} strokeWidth={1.75} className="text-ink" />
        )}
      </span>
    </button>
  );
}
