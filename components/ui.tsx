import { site } from "@/lib/data";
import { GithubIcon } from "@/components/Navbar";

export function SectionHeading({
  eyebrow,
  title,
  className = "",
}: {
  eyebrow?: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {eyebrow && (
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-surface px-2.5 py-1 text-xs font-medium text-muted">
      {children}
    </span>
  );
}

export function CTAButtons({
  onContactClick,
}: {
  onContactClick: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        type="button"
        onClick={onContactClick}
        className="inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-background shadow-[0_10px_40px_-12px_rgba(163,230,53,0.45)] transition-all hover:bg-accent-muted hover:shadow-[0_14px_50px_-12px_rgba(163,230,53,0.55)] active:scale-[0.98]"
      >
        Let&apos;s Work Together
      </button>
      <a
        href={site.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-line bg-surface px-7 text-sm font-medium text-foreground transition-all hover:border-accent/60 hover:text-accent active:scale-[0.98]"
      >
        <GithubIcon className="h-4 w-4" />
        GitHub
        <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
