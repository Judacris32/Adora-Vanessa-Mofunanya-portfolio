import type { Metadata } from "next";
import Image from "next/image";
import { Award, Quote } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import PageHeader from "@/components/PageHeader";
import Button from "@/components/Button";
import { pressCopy } from "@/lib/content";
import { pressEvidence, commission } from "@/lib/images";

export const metadata: Metadata = {
  title: "Press",
  description: pressCopy.awardBody,
};

export default function PressPage() {
  return (
    <>
      <section className="container-page pb-16 pt-40 sm:pt-48">
        <PageHeader
          eyebrow={pressCopy.eyebrow}
          heading={pressCopy.heading}
          body={pressCopy.subheading}
        />
      </section>

      {/* Award feature */}
      <section className="container-page grid gap-12 pb-24 lg:grid-cols-12 lg:gap-10 sm:pb-32">
        <div className="lg:col-span-7">
          <Reveal>
            <div className="flex items-center gap-2 text-gold-dark">
              <Award size={16} strokeWidth={1.5} />
              <span className="font-body text-[11px] uppercase tracking-[0.2em]">
                AFAA 2025 Winner
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-6 font-display text-3xl leading-tight text-ink sm:text-4xl">
              {pressCopy.awardTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.18}>
            <p className="mt-6 font-body text-base leading-relaxed text-ink/70 sm:text-lg">
              {pressCopy.awardBody}
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-10 rounded-sm border-l-2 border-rose-500 bg-cream-100 p-7">
              <Quote size={22} strokeWidth={1.25} className="text-rose-500" />
              <p className="mt-3 font-display text-xl italic leading-snug text-ink sm:text-2xl">
                “{pressCopy.articleQuote}”
              </p>
              <p className="mt-4 font-body text-xs uppercase tracking-[0.15em] text-ink/50">
                {pressCopy.articleOutlet} — {pressCopy.articleAuthor}, {pressCopy.articleDate}
              </p>
              <p className="mt-1 font-body text-sm text-ink/60">
                &ldquo;{pressCopy.articleHeadline}&rdquo;
              </p>
              <div className="mt-4">
                <Button href={pressCopy.articleUrl} external variant="ghost">
                  Read the article
                </Button>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-5 lg:col-span-5">
          <Reveal delay={0.1}>
            <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-ink/5">
              <Image
                src={pressEvidence.trophy.src}
                alt={pressEvidence.trophy.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-square w-full overflow-hidden rounded-sm bg-ink/5">
              <Image
                src={pressEvidence.flyer.src}
                alt={pressEvidence.flyer.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Custom commission */}
      <section className="bg-charcoal py-24 text-parchment sm:py-32">
        <div className="container-page grid items-center gap-12 lg:grid-cols-12">
          <div className="order-2 lg:order-1 lg:col-span-7">
            <Reveal>
              <p className="font-body text-[12px] uppercase tracking-[0.3em] text-rose-300">
                Custom Commission
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
                {pressCopy.commissionHeading}
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl font-body text-base leading-relaxed text-parchment/70 sm:text-lg">
                {pressCopy.commissionBody}
              </p>
            </Reveal>
          </div>
          <div className="order-1 grid grid-cols-2 gap-4 lg:order-2 lg:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <Image src={commission[0].src} alt={commission[0].alt} fill className="object-cover" sizes="20vw" />
            </div>
            <div className="relative mt-8 aspect-[3/4] overflow-hidden rounded-sm">
              <Image src={commission[3].src} alt={commission[3].alt} fill className="object-cover" sizes="20vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="container-page py-24 sm:py-32">
        <SectionHeading
          eyebrow="Details"
          heading="A closer look"
          align="left"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {commission.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.08}>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm bg-ink/5">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-signature hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
