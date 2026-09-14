import Link from "next/link";
import Image from "next/image";
import { nav, site } from "@/lib/content";
import { instagramIcon, logo } from "@/lib/images";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-parchment">
      <div className="container-page grid gap-12 py-20 md:grid-cols-3 md:py-24">
        <div>
          <div className="flex items-center gap-4">
            <div className="shrink-0 rounded-xl border border-parchment/10 bg-parchment p-1 shadow-[0_14px_30px_-16px_rgba(0,0,0,0.7)]">
              <Image
                src={logo.footerMark.src}
                alt={logo.footerMark.alt}
                width={logo.footerMark.width}
                height={logo.footerMark.height}
                className="h-11 w-auto object-contain sm:h-[3.25rem]"
              />
            </div>
            <p className="font-display text-3xl italic text-parchment sm:text-3xl">
              {site.tagline}
            </p>
          </div>
          <p className="mt-6 max-w-xs font-body text-sm leading-relaxed text-parchment/55">
            {site.name} Founder &amp; Creative Director of {site.label}, a handmade
            luxury fashion house based in {site.location}.
          </p>
        </div>

        <div>
          <p className="font-body text-[12px] uppercase tracking-[0.25em] text-parchment/40">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="font-body text-sm text-parchment/70 transition-colors hover:text-rose-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-body text-[12px] uppercase tracking-[0.25em] text-parchment/40">
            Connect
          </p>
          <div className="mt-5 space-y-3.5">
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 font-body text-sm text-parchment/70 transition-colors hover:text-rose-300"
            >
              <Image
                src={instagramIcon.src}
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] rounded-[5px]"
              />
              {site.instagramHandle}
            </a>
            <a
              href={site.instagram}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-3 font-body text-sm text-parchment/70 transition-colors hover:text-rose-300"
            >
              <Image
                src= "/images/social/mail-icon.png"
                alt=""
                width={18}
                height={18}
                className="h-[18px] w-[18px] rounded-[5px]"
              />
              vanessamofunanya1@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-parchment/10">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-6 text-center font-body text-xs text-parchment/40 sm:flex-row sm:text-left">
          <p>
            © {year} {site.name}. All rights reserved.
          </p>
          <p>{site.label} Handmade Luxury Fashion</p>
        </div>
      </div>
    </footer>
  );
}
