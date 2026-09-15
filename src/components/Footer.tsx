import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/content";
import { instagramIcon, mailIcon, mapIcon, logo } from "@/lib/images";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-parchment">
      {/* One compact row on desktop — logo/tagline, nav, connect links all
          share a single line instead of stacking into a tall block; only
          wraps to multiple rows once the screen is too narrow to fit it. */}
      <div className="container-page flex flex-col items-center gap-6 py-10 sm:py-12 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex items-center gap-3">
          <div className="shrink-0 rounded-lg border border-parchment/10 bg-parchment p-1.5">
            <Image
              src={logo.footerMark.src}
              alt={logo.footerMark.alt}
              width={logo.footerMark.width}
              height={logo.footerMark.height}
              className="h-8 w-auto object-contain"
            />
          </div>
          <p className="font-display text-lg italic text-parchment sm:text-xl">
            {site.tagline}
          </p>
        </div>

        <nav
          aria-label="Footer"
          className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-body text-[12px] uppercase tracking-[0.15em] text-parchment/65 transition-colors hover:text-rose-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={site.instagram}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Instagram — ${site.instagramHandle}`}
            className="flex items-center gap-2 font-body text-sm text-parchment/65 transition-colors hover:text-rose-300"
          >
            <Image
              src={instagramIcon.src}
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px] rounded-[6px]"
            />
            <span className="hidden sm:inline">{site.instagramHandle}</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label={`Email — ${site.email}`}
            className="flex items-center gap-2 font-body text-sm text-parchment/65 transition-colors hover:text-rose-300"
          >
            <Image
              src={mailIcon.src}
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px]"
            />
            <span className="hidden sm:inline">{site.email}</span>
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location)}`}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`Location — ${site.location}`}
            className="flex items-center gap-2 font-body text-sm text-parchment/65 transition-colors hover:text-rose-300"
          >
            <Image
              src={mapIcon.src}
              alt=""
              width={22}
              height={22}
              className="h-[22px] w-[22px]"
            />
            <span className="hidden sm:inline">{site.location}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-parchment/10">
        <div className="container-page flex flex-col items-center justify-between gap-1 py-4 text-center font-body text-xs text-parchment/40 sm:flex-row sm:text-left">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.label} Handmade Luxury Fashion</p>
        </div>
      </div>
    </footer>
  );
}
