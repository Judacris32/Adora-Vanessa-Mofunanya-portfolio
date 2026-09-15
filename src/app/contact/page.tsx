import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contactCopy, site } from "@/lib/content";
import { portraits, instagramIcon, mailIcon, mapIcon } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact",
  description: contactCopy.body,
};

export default function ContactPage() {
  return (
    <>
      <section className="container-page pb-16 pt-40 sm:pt-48">
        <PageHeader
          eyebrow={contactCopy.eyebrow}
          heading={contactCopy.heading}
          body={contactCopy.body}
        />
      </section>

      <section className="container-page grid gap-16 pb-28 sm:pb-36 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <Reveal>
            <div className="space-y-4">
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-3 font-body text-ink/70 transition-colors hover:text-rose-600"
              >
                <Image src={mailIcon.src} alt="" width={22} height={22} className="h-[22px] w-[22px]" />
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 font-body text-ink/70 transition-colors hover:text-rose-600"
              >
                <Image src={instagramIcon.src} alt="" width={22} height={22} className="h-[22px] w-[22px] rounded-[6px]" />
                {site.instagramHandle}
              </a>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.location)}`}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 font-body text-ink/70 transition-colors hover:text-rose-600"
              >
                <Image src={mapIcon.src} alt="" width={22} height={22} className="h-[22px] w-[22px]" />
                {site.location}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-8 max-w-md font-display text-xl italic leading-relaxed text-ink/80">
              “{contactCopy.personalNote}”
            </p>
            <p className="mt-2 font-body text-sm text-ink/50">{contactCopy.personalSign}</p>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="relative mt-10 hidden aspect-[4/3] w-full overflow-hidden rounded-sm sm:block">
              <Image
                src={portraits[8].src}
                alt={portraits[8].alt}
                fill
                className="object-cover"
                sizes="40vw"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal delay={0.16}>
            <div className="rounded-2xl border border-ink/15 bg-cream-100 p-8 shadow-[0_1px_2px_rgba(26,22,20,0.04),0_16px_40px_-24px_rgba(26,22,20,0.35)] sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
