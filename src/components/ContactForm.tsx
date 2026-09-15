"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { site, contactCopy } from "@/lib/content";

const inquiryTypes = ["Custom Commission", "Collaboration", "Styling / Press", "General Inquiry"];

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString() ?? "";
    const email = form.get("email")?.toString() ?? "";
    const phone = form.get("phone")?.toString() ?? "";
    const type = form.get("type")?.toString() ?? "";
    const message = form.get("message")?.toString() ?? "";

    const subject = encodeURIComponent(`${type || "Inquiry"} — ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}${phone ? `\nPhone: ${phone}` : ""}\nInquiry type: ${type}\n\n${message}`
    );

    // No backend is wired up yet — this opens a pre-filled email as a
    // functional fallback. Swap this for a POST to Formspree / Resend /
    // your API route of choice when you're ready to go live.
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" type="text" placeholder="Your full name" required />
        <Field label="Email" name="email" type="email" placeholder="you@email.com" required />
      </div>

      <Field label="Phone" name="phone" type="tel" placeholder="Optional" />

      <div>
        <label className="font-body text-[12px] uppercase tracking-[0.2em] text-ink/50">
          Inquiry type
        </label>
        <div className="mt-3 flex flex-wrap gap-2">
          {inquiryTypes.map((t) => (
            <label key={t} className="cursor-pointer">
              <input type="radio" name="type" value={t} defaultChecked={t === inquiryTypes[0]} className="peer sr-only" />
              <span className="inline-block rounded-full border border-ink/20 px-4 py-2 font-body text-xs uppercase tracking-[0.12em] text-ink/60 transition-colors peer-checked:border-ink peer-checked:bg-charcoal peer-checked:text-parchment peer-focus-visible:ring-2 peer-focus-visible:ring-rose-400 peer-focus-visible:ring-offset-2">
                {t}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="font-body text-[12px] uppercase tracking-[0.2em] text-ink/50">
          Tell me about your vision <span className="text-rose-600">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          className="mt-3 w-full rounded-lg border border-ink/15 bg-white/70 px-4 py-3 font-body text-base text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-100"
          placeholder="Occasion, timeline, fabric or colour ideas, inspiration..."
        />
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-2">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="rounded-full bg-charcoal px-8 py-4 font-body text-[13px] uppercase tracking-[0.2em] text-parchment transition-colors hover:bg-rose-600"
        >
          Send Inquiry
        </motion.button>
        {submitted && (
          <motion.p
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            className="font-body text-sm text-ink/50"
          >
            Opening your email app…
          </motion.p>
        )}
      </div>
      <p className="font-body text-xs leading-relaxed text-ink/40">{contactCopy.formNote}</p>
    </form>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="font-body text-[12px] uppercase tracking-[0.2em] text-ink/50">
        {label}
        {required && <span className="text-rose-600"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-3 w-full rounded-lg border border-ink/15 bg-white/70 px-4 py-3 font-body text-base text-ink outline-none transition-colors placeholder:text-ink/30 focus:border-rose-500 focus:bg-white focus:ring-2 focus:ring-rose-100"
      />
    </div>
  );
}
