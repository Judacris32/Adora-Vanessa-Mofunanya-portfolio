import type { Metadata } from "next";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import Reveal from "@/components/Reveal";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { contactCopy, site } from "@/lib/content";
import { portraits, instagramIcon } from "@/lib/images";

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
                <Mail size={18} strokeWidth={1.5} />
                {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-3 font-body text-ink/70 transition-colors hover:text-rose-600"
              >
                <Image src={instagramIcon.src} alt="" width={18} height={18} className="h-[18px] w-[18px]" />
                {site.instagramHandle}
              </a>
              <p className="flex items-center gap-3 font-body text-ink/70">
                <MapPin size={18} strokeWidth={1.5} />
                {site.location}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
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
            <div className="rounded-sm border border-ink/10 bg-cream-100 p-8 sm:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
