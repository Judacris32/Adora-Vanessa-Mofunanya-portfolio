import clsx from "clsx";
import Reveal from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  heading,
  body,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div className={clsx(align === "center" && "text-center", className)}>
      {eyebrow && (
        <Reveal>
          <p className="font-body text-[12px] uppercase tracking-[0.3em] text-rose-600">
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.08}>
        <h2 className="mt-3 font-display text-4xl leading-[1.1] text-ink sm:text-5xl">
          {heading}
        </h2>
      </Reveal>
      {body && (
        <Reveal delay={0.16}>
          <p
            className={clsx(
              "mt-5 max-w-2xl font-body text-base leading-relaxed text-ink/65 sm:text-lg",
              align === "center" && "mx-auto"
            )}
          >
            {body}
          </p>
        </Reveal>
      )}
    </div>
  );
}
