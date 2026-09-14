import type { Metadata } from "next";
import Image from "next/image";
import { Award } from "lucide-react";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import { aboutCopy, site } from "@/lib/content";
import { portraits, sketches, commission } from "@/lib/images";

export const metadata: Metadata = {
  title: "About",
  description: aboutCopy.lede,
};

export default function AboutPage() {
  return (
    <>
      {/* Hero — name paired with portrait, top-aligned so nothing floats in empty space */}
      <section className="container-page grid gap-10 pb-16 pt-40 sm:gap-12 sm:pb-20 sm:pt-48 lg:grid-cols-12 lg:items-start lg:gap-10">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-rose-400" aria-hidden="true" />
              <p className="font-body text-[12px] uppercase tracking-[0.3em] text-rose-600">
                {aboutCopy.eyebrow}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <h1 className="mt-5 font-display text-6xl leading-[1.02] text-ink sm:text-7xl lg:text-[5.5rem]">
              {aboutCopy.heading}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-sm font-display text-2xl italic leading-snug text-ink/45 sm:text-3xl">
              {site.tagline}
            </p>
          </Reveal>
        </div>
      </section>

      {/* Story — portrait and card sit side by side, mirroring the hero the other way round */}
      <section className="container-page pb-24 sm:pb-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="border border-ink/10 bg-parchment p-3">
                <div className="relative aspect-[3/4] w-full overflow-hidden">
                  <Image
                    src={portraits[0].src}
                    alt={portraits[0].alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-ink/10 bg-white p-8 shadow-[0_30px_60px_-25px_rgba(0,0,0,0.3)] dark:shadow-[0_30px_60px_-20px_rgba(0,0,0,0.65)] sm:p-10">
                <div className="space-y-7 [hyphens:auto]">
                  <p className="text-justify font-display text-2xl leading-relaxed text-black sm:text-3xl">
                    {aboutCopy.lede}
                  </p>
                  {aboutCopy.paragraphs.map((p, i) => (
                    <p key={i} className="text-justify font-body text-base leading-relaxed text-black sm:text-lg">
                      {p}
                    </p>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* In the Studio */}
      <section className="container-page pb-24 sm:pb-32">
        <div className="border-t border-ink/10 pt-10">
          <Reveal>
            <p className="font-body text-[12px] uppercase tracking-[0.25em] text-ink/40">In the Studio</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[portraits[1], portraits[3], portraits[5], portraits[7]].map((p, i) => (
              <Reveal key={p.src} delay={i * 0.08} y={16}>
                <div className="border border-ink/10 bg-parchment p-1.5">
                  <div className="relative aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={p.src}
                      alt={p.alt}
                      fill
                      className="object-cover transition-transform duration-[1200ms] ease-signature hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy — compact statement banner */}
      <section className="bg-accent-quote py-16 text-ink sm:py-20 mx-14 sm:mx-24 lg:mx-32 xl:mx-40 2xl:mx-48 rounded-lg">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-ink">
                {aboutCopy.philosophyHeading}
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-justify font-display text-xl italic leading-relaxed text-ink/85 sm:text-2xl [hyphens:auto]">
                {aboutCopy.philosophyBody}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="container-page py-14 sm:py-20">
        <div className="border-t border-ink/10 pt-10">
          <Reveal>
            <p className="font-body text-[12px] uppercase tracking-[0.25em] text-ink/40">Recognition</p>
          </Reveal>
          <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-8">
              <Reveal delay={0.05}>
                <div className="flex items-center gap-2 text-gold-dark">
                  <Award size={16} strokeWidth={1.5} />
                  <span className="font-body text-[11px] uppercase tracking-[0.2em]">AFAA 2025 Winner</span>
                </div>
              </Reveal>
              <Reveal delay={0.1}>
                <h3 className="mt-4 max-w-xl font-display text-3xl leading-snug text-ink sm:text-4xl">
                  Emerging Innovative Fashion Designer of the Year
                </h3>
              </Reveal>
              <Reveal delay={0.18}>
                <p className="mt-4 max-w-xl text-justify font-body text-ink/60">
                  Awarded by the African Fashion and Arts Award, 5 December 2025, Transcorp Hilton
                  Hotel, Abuja, Nigeria.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-4 lg:text-right">
              <Reveal delay={0.24}>
                <Button href="/press" variant="outline">
                  Read the feature
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Process — twin of the Philosophy banner, same accent, plain statement voice */}
      <section className="bg-accent-quote py-16 text-ink sm:py-20 mx-14 sm:mx-24 lg:mx-32 xl:mx-40 2xl:mx-48 rounded-lg">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <Reveal>
              <p className="font-body text-sm font-semibold uppercase tracking-[0.25em] text-ink">
                {aboutCopy.processHeading}
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p className="mt-5 text-justify font-display text-xl leading-relaxed text-ink/85 sm:text-2xl [hyphens:auto]">
                {aboutCopy.processBody}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="container-page pb-28 pt-14 sm:pb-36 sm:pt-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <Reveal>
            <figure className="relative aspect-[3/4] w-full overflow-hidden bg-ink/5">
              <Image
                src={sketches[0].src}
                alt={sketches[0].alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4 font-body text-xs uppercase tracking-[0.15em] text-parchment">
                The sketch
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1}>
            <figure className="relative aspect-[3/4] w-full overflow-hidden bg-ink/5">
              <Image
                src={commission[1].src}
                alt={commission[1].alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4 font-body text-xs uppercase tracking-[0.15em] text-parchment">
                Handmade in the studio
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.2}>
            <figure className="relative aspect-[3/4] w-full overflow-hidden bg-ink/5">
              <Image
                src={commission[3].src}
                alt={commission[3].alt}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-4 font-body text-xs uppercase tracking-[0.15em] text-parchment">
                Worn on stage
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>
    </>
  );
}
