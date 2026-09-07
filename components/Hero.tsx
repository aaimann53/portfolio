import Link from "next/link";
import { site } from "@/lib/data";
import { GithubIcon } from "@/components/Navbar";

export function Hero() {
  return (
    <section id="home" className="w-full">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 pt-16 pb-20 text-center sm:pt-24 sm:pb-28">
        <span className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-1.5 text-xs font-medium tracking-wide text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {site.availability}
        </span>

        <p className="mt-8 text-xs font-medium tracking-[0.2em] text-accent">
          {site.role}
        </p>

        <h1 className="mt-5 max-w-3xl text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-5xl md:text-6xl">
          {site.tagline}
        </h1>

        <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted sm:text-lg">
          {site.description}
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="#work"
            className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-background transition-all hover:bg-accent-muted"
          >
            View My Work
          </Link>
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-7 text-sm font-medium text-foreground transition-all hover:border-accent/60 hover:text-accent"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
            <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
