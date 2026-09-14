"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { motion, LayoutGroup, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { allCollectionCategories, CollectionImage } from "@/lib/images";
import Lightbox from "./Lightbox";

type Category = (typeof allCollectionCategories)[number]["key"] | "all";

export default function CollectionsGallery() {
  const [active, setActive] = useState<Category>("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const flatAll: (CollectionImage & { category: string })[] = useMemo(
    () =>
      allCollectionCategories.flatMap((cat) =>
        cat.items.map((item) => ({ ...item, category: cat.key }))
      ),
    []
  );

  const visible = useMemo(
    () => (active === "all" ? flatAll : flatAll.filter((i) => i.category === active)),
    [active, flatAll]
  );

  const filters: { key: Category; label: string }[] = [
    { key: "all", label: "All Work" },
    ...allCollectionCategories.map((c) => ({ key: c.key as Category, label: c.label })),
  ];

  return (
    <div>
      <LayoutGroup>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-b border-ink/10 pb-6">
          {filters.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={clsx(
                "relative font-body text-[13px] uppercase tracking-[0.2em] transition-colors",
                active === f.key ? "text-ink" : "text-ink/40 hover:text-ink/70"
              )}
            >
              {f.label}
              {active === f.key && (
                <motion.span
                  layoutId="gallery-underline"
                  className="absolute -bottom-[25px] left-0 right-0 h-[1.5px] bg-rose-600"
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </div>
      </LayoutGroup>

      <motion.div
        layout
        className="mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3"
      >
        <AnimatePresence mode="popLayout">
          {visible.map((item, i) => (
            <motion.button
              layout
              key={item.src}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.05, ease: [0.22, 1, 0.36, 1] }}
              onClick={() => setLightboxIndex(i)}
              className="group relative mb-5 block w-full overflow-hidden rounded-sm bg-ink/5 text-left"
            >
              <div className="relative w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={900}
                  height={1200}
                  className="h-auto w-full object-cover transition-transform duration-[1200ms] ease-signature group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <p className="pointer-events-none absolute bottom-4 left-4 right-4 translate-y-2 font-body text-xs text-parchment opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {item.alt}
                </p>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <Lightbox
        items={visible}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </div>
  );
}
