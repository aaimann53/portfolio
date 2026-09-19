import type { ReactNode } from "react";
import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui";

const icons: Record<string, ReactNode> = {
  "Web Development": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="m8 9-3 3 3 3M16 9l3 3-3 3M13 6l-2 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "Flutter App Development": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <path d="M8 3h8a1.5 1.5 0 0 1 1.5 1.5v15A1.5 1.5 0 0 1 16 21H8a1.5 1.5 0 0 1-1.5-1.5v-15A1.5 1.5 0 0 1 8 3Z" />
      <path d="M10.5 17.5h3" strokeLinecap="round" />
    </svg>
  ),
  "Backend & API Development": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="3.5" y="4" width="17" height="7" rx="2" />
      <rect x="3.5" y="13" width="17" height="7" rx="2" />
      <path d="M7 7.5h.01M7 16.5h.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  "UI Implementation": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5">
      <rect x="3.5" y="4" width="17" height="16" rx="2" />
      <path d="M3.5 9h17M9.5 9v11" strokeLinecap="round" />
    </svg>
  ),
};

export function Services() {
  return (
    <section id="services" className="w-full border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <SectionHeading eyebrow="Services" title="What I can do for you" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-line bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-background text-accent transition-colors group-hover:border-accent/40 group-hover:text-accent-muted">
                  {icons[service.title] ?? null}
                </div>
                <span
                  aria-hidden="true"
                  className="text-sm font-semibold tabular-nums text-line"
                >
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
