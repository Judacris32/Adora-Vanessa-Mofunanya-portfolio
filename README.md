# Adora Vanessa Mofunanya — Portfolio Website

A multi-page portfolio for luxury fashion designer **Adora Vanessa Mofunanya**, founder &
creative director of **Dela-Fin**. Built with Next.js (App Router), TypeScript, Tailwind CSS,
and Framer Motion.

## Pages

- `/` — Home
- `/about` — About (bio, philosophy, process, award)
- `/collections` — Filterable gallery (Couture, Ready-to-Wear, Accessories & Footwear, Loungewear)
- `/press` — AFAA 2025 award feature + custom commission
- `/contact` — Contact form + details

## Getting started

This project was authored in a sandboxed environment without package-registry access, so the
dependencies have **not** been installed or build-verified here. Everything has been checked for
syntax correctness, but you'll want to do a normal first run locally:

```bash
npm install
npm run dev
```

Then open http://localhost:3000. To build for production:

```bash
npm run build
npm run start
```

## Deploying

The project is a standard Next.js App Router app, so it deploys to **Vercel** with zero config —
push the repo, import it in Vercel, and it builds automatically. Netlify, Cloudflare Pages, or any
Node host will also work.

## Things to personalize before launch

1. **Contact email** — `src/lib/content.ts` → `site.email` is currently a placeholder
   (`hello@adoravanessamofunanya.com`). Update it to the address you want inquiries to reach.
2. **Contact form backend** — `src/components/ContactForm.tsx` currently opens a pre-filled
   `mailto:` link (no backend needed, works immediately). To make it a proper in-page form, wire
   the `handleSubmit` function to a service like [Formspree](https://formspree.io),
   [Resend](https://resend.com), or a Next.js API route, and POST the `FormData` there instead.
3. **Domain** — `src/app/layout.tsx` → `metadataBase` is set to a placeholder domain. Update it
   to your real domain once you have one (used for social share previews).
4. **Favicon / logo** — sourced from the logo you provided at
   `public/images/logo/avm-logo.png`; the app icon (`src/app/icon.png`) was cropped from the
   monogram mark. Swap either file if you'd like a different crop.
5. **Bio copy** — `src/lib/content.ts` → `aboutCopy`, `homeCopy`, `pressCopy` were written from
   the award evidence, the Dela-Fin brand mission statement, and the photography you shared. If
   you have a more personal bio (education, career origin story, founding year, etc.), replace the
   `paragraphs` array with your own words — I kept things to verifiable facts rather than
   inventing details.

## Image credits & organization

All photography, sketches, and product imagery are the ones you provided, organized under
`public/images/`:

- `portraits/` — designer portraits in the studio
- `collections/couture/` `ready-to-wear/` `accessories-footwear/` `loungewear/` — the Collections
  gallery, pre-sorted by category (freely re-organize by moving files + updating
  `src/lib/images.ts`)
- `press/` — the custom commission (coat worn on stage) + cropped AFAA award evidence (trophy,
  nominee flyer)
- `sketches/` — original design sketches, deduplicated from your uploads
- `logo/` — your logo file and the favicon crop

To add, remove, or re-caption any image, edit `src/lib/images.ts` — every image used on the site
is declared there with its path, alt text, and (optionally) a caption.

## Tech notes

- **Framer Motion** powers page transitions (`PageTransition.tsx`), scroll reveals
  (`Reveal.tsx`), the collections filter/lightbox, and hover interactions.
- **Tailwind** theme tokens (colors, fonts) live in `tailwind.config.ts`, matched to your logo's
  rose-gold / blush / cream palette.
- Fonts are **Fraunces** (display/serif, used italic for pull-quotes) and **Jost** (body/sans,
  uppercase-tracked for labels), loaded via `next/font/google` — no manual font files needed.
- No CMS or database — content lives in `src/lib/content.ts` and `src/lib/images.ts` as plain
  TypeScript, easy to edit directly or wire up to a headless CMS later if you outgrow it.
