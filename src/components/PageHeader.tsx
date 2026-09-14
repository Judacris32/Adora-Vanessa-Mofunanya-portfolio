import Reveal from "./Reveal";

type PageHeaderProps = {
  eyebrow: string;
  heading: string;
  body?: string;
};

/**
 * PageHeader — the centered editorial masthead used to open Collections,
 * Press, and Contact. Mirrors the About hero's eyebrow-rule motif, but
 * flanks the rule on both sides since the whole block is centered rather
 * than paired with a portrait.
 */
export default function PageHeader({ eyebrow, heading, body }: PageHeaderProps) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <Reveal>
        <div className="flex items-center justify-center gap-3">
          <span className="h-px w-8 bg-rose-400" aria-hidden="true" />
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-rose-600">
            {eyebrow}
          </p>
          <span className="h-px w-8 bg-rose-400" aria-hidden="true" />
        </div>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="mt-5 text-balance font-display text-5xl leading-[1.05] text-ink sm:text-6xl lg:text-7xl">
          {heading}
        </h1>
      </Reveal>
      {body && (
        <Reveal delay={0.16}>
          <p className="mx-auto mt-6 max-w-xl text-balance font-body text-base leading-relaxed text-ink/65 sm:text-lg">
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
