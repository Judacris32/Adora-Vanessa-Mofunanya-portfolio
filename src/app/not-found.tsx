import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-page flex min-h-[80vh] flex-col items-center justify-center text-center">
      <p className="font-body text-[12px] uppercase tracking-[0.3em] text-rose-600">404</p>
      <h1 className="mt-4 font-display text-4xl italic text-ink sm:text-5xl">
        This page has stepped off the runway.
      </h1>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-8 py-4 font-body text-[13px] uppercase tracking-[0.2em] text-cream transition-colors hover:bg-rose-600"
      >
        Return home
      </Link>
    </section>
  );
}
