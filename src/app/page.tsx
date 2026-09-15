import Image from "next/image";
import Link from "next/link";
import { ArrowDown, Scissors, Shirt, ShoppingBag, Pencil, Footprints, Trophy } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import Button from "@/components/Button";
import HeroSlideshow from "@/components/HeroSlideshow";
import { homeCopy, site } from "@/lib/content";
import { portraits, allCollectionCategories, pressEvidence, heroSlides } from "@/lib/images";

const introFacts = [
  { label: "Studio", value: "Essex, United Kingdom" },
  { label: "Technique", value: "Hand-crochet, beadwork & draped faux fur" },
  { label: "Production", value: "Made to order, one of one" },
  { label: "Recognition", value: "AFAA 2025 Emerging Innovative Fashion Designer of the Year" }
];

const marqueeItems = [
  { label: "Handmade Luxury", Icon: Scissors },
  { label: "Couture", Icon: Shirt },
  { label: "Ready-to-Wear", Icon: ShoppingBag },
  { label: "Custom Commissions", Icon: Pencil },
  { label: "Accessories & Footwear", Icon: Footprints },
  { label: "AFAA 2025 Award Winner", Icon: Trophy },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[100svh] min-h-[640px] w-full items-center overflow-hidden">
        <HeroSlideshow slides={heroSlides} />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal/80 via-charcoal/25 to-charcoal/20" />
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background:
              "radial-gradient(ellipse 62% 55% at 50% 52%, rgba(42,33,29,0.5), transparent 72%)",
          }}
        />

        <div className="container-page relative z-10 flex w-full flex-col items-center px-6 py-28 text-center sm:py-32">
          <Reveal y={10} duration={0.9}>
            <div className="flex items-center gap-3 text-gold/80" aria-hidden="true">
              <span className="h-px w-9 bg-gold/50" />
              <span className="h-[7px] w-[7px] rotate-45 bg-gold/80" />
              <span className="h-px w-9 bg-gold/50" />
            </div>
          </Reveal>
          <Reveal y={14} delay={0.1} duration={1}>
            <p className="mt-5 max-w-sm font-body text-[11px] font-medium uppercase tracking-[0.32em] text-parchment/95 sm:text-[12px]">
              {homeCopy.heroKicker}
            </p>
          </Reveal>
          <Reveal y={24} delay={0.2} duration={1}>
            <h1
              className="mt-5 max-w-3xl font-display text-6xl font-bold italic leading-[1.02] text-white sm:text-7xl lg:text-8xl"
              style={{ textShadow: "0 4px 28px rgba(0,0,0,0.35)" }}
            >
              {homeCopy.heroHeadline}
            </h1>
          </Reveal>
          <Reveal delay={0.32} duration={1}>
            <p className="mt-7 max-w-lg font-body text-base leading-relaxed text-white/90 sm:text-lg">
              {homeCopy.heroSub}
            </p>
          </Reveal>
          <Reveal delay={0.44} duration={1}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button href="/collections" variant="solid" className="!bg-cream !text-ink hover:!bg-rose-500 hover:!text-parchment">
                View Collections
              </Button>
              <Button href="/contact" variant="outline" className="!border-parchment/50 !text-parchment hover:!bg-cream hover:!text-ink">
                Begin a Commission
              </Button>
            </div>
          </Reveal>
        </div>

        <div className="absolute bottom-8 right-8 z-10 hidden flex-col items-center gap-2 text-parchment/60 sm:flex">
          <span className="font-body text-[11px] uppercase tracking-[0.3em]">Scroll</span>
          <ArrowDown size={16} strokeWidth={1.25} className="animate-bounce" />
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden border-y border-ink/10 bg-cream-100 py-5">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="flex items-center gap-3 font-display text-xl italic text-ink/60">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-rose-300/40 bg-rose-50 text-rose-500">
                <item.Icon size={13} strokeWidth={1.5} />
              </span>
              {item.label}
            </span>
          ))}
        </div>
      </div>

      {/* Intro */}
      <section className="container-page py-24 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="border border-ink/10 bg-parchment p-3">
                <div className="relative aspect-[4/5] w-full overflow-hidden">
                  <Image
                    src={portraits[4].src}
                    alt={portraits[4].alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col justify-center lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-rose-400" aria-hidden="true" />
                <p className="font-body text-[12px] uppercase tracking-[0.3em] text-rose-600">
                  {homeCopy.introEyebrow}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 font-display text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
                Craft, colour, and <span className="italic text-rose-700 dark:text-gold">quiet luxury</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-justify font-body text-base leading-relaxed text-ink/70 first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-6xl first-letter:italic first-letter:leading-[0.75] first-letter:text-rose-700 dark:text-parchment dark:first-letter:text-gold sm:text-lg">
                {homeCopy.introBody}
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-5 max-w-xl text-justify font-body text-base leading-relaxed text-ink/70 dark:text-parchment sm:text-lg">
                {homeCopy.introBodySecondary}
              </p>
            </Reveal>
            <Reveal delay={0.28}>
              <blockquote className="mt-8 max-w-xl border-l-2 border-rose-400 pl-6 font-display text-xl italic leading-snug text-ink/85 sm:text-2xl">
                &ldquo;{homeCopy.introQuote}&rdquo;
              </blockquote>
            </Reveal>
            <Reveal delay={0.34}>
              <div className="mt-9 grid max-w-xl grid-cols-2 gap-x-6 gap-y-7 border-t border-ink/10 pt-7">
                {introFacts.map((f) => (
                  <div key={f.label} className="border-l-2 border-rose-200 pl-4">
                    <p className="font-body text-[10px] uppercase tracking-[0.2em] text-ink/40">{f.label}</p>
                    <p className="mt-1 font-body text-sm text-ink/75">{f.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="mt-8">
                <Button href="/about" variant="solid">
                  Read the full story
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Award highlight */}
      <section className="bg-charcoal py-24 text-parchment sm:py-32">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-gold/50" aria-hidden="true" />
                <p className="font-body text-[12px] uppercase tracking-[0.3em] text-gold">
                  {homeCopy.awardEyebrow}
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">
                {homeCopy.awardHeading}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-parchment/70 sm:text-lg">
                {homeCopy.awardBody}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <div className="mt-8">
                <Button href="/press" variant="outline" className="!border-cream/40 !text-parchment hover:!bg-cream hover:!text-ink">
                  See the recognition
                </Button>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-5">
            <Reveal delay={0.15} y={16}>
              <div className="border border-parchment/10 bg-parchment p-3">
                <div className="relative aspect-[723/820] w-full overflow-hidden">
                  <Image
                    src={pressEvidence.articleScreenshot.src}
                    alt={pressEvidence.articleScreenshot.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 40vw"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Collections preview */}
      <section className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow={homeCopy.collectionsEyebrow}
          heading={homeCopy.collectionsHeading}
          align="left"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {allCollectionCategories.map((cat, i) => (
            <Reveal key={cat.key} delay={i * 0.1}>
              <Link href="/collections" className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm bg-ink/5">
                  <Image
                    src={cat.items[0].src}
                    alt={cat.items[0].alt}
                    fill
                    className="object-cover transition-transform duration-[1200ms] ease-signature group-hover:scale-110"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent" />
                  <p className="absolute bottom-5 left-5 right-5 font-display text-lg text-parchment">
                    {cat.label}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-page pb-28 sm:pb-36">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 rounded-sm border border-ink/10 bg-accent-quote p-10 sm:p-14 lg:flex-row lg:items-end">
            <div>
              <h2 className="max-w-lg font-display text-3xl leading-tight sm:text-4xl">
                {homeCopy.ctaHeading}
              </h2>
              <p className="mt-4 max-w-md font-body text-ink/60">{homeCopy.ctaBody}</p>
            </div>
            <Button href="/contact" variant="solid">
              Get in touch
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
