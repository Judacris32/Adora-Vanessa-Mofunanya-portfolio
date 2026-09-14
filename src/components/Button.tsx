import Link from "next/link";
import clsx from "clsx";
import { ArrowUpRight } from "lucide-react";
import { AnchorHTMLAttributes } from "react";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "ghost";
  external?: boolean;
  className?: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className,
  ...rest
}: ButtonProps) {
  const classes = clsx(
    "group inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-body text-[13px] uppercase tracking-[0.2em] transition-all duration-500 ease-signature",
    variant === "solid" && "bg-ink text-cream hover:bg-rose-600",
    variant === "outline" && "border border-ink/30 text-ink hover:border-ink hover:bg-ink hover:text-cream",
    variant === "ghost" && "text-ink hover:text-rose-600",
    className
  );

  const content = (
    <>
      <span>{children}</span>
      <ArrowUpRight
        size={15}
        strokeWidth={1.5}
        className="transition-transform duration-500 ease-signature group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noreferrer noopener" className={classes} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
