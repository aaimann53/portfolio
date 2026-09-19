import { skillGroups } from "@/lib/data";
import { SectionHeading } from "@/components/ui";

export function Skills() {
  return (
    <section id="skills" className="w-full">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <SectionHeading eyebrow="Skills" title="Technology Stack" />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/40 sm:p-8"
            >
              <header className="flex items-baseline justify-between gap-4">
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {group.title}
                </h3>
                <span
                  aria-hidden="true"
                  className="text-[11px] font-medium tabular-nums tracking-[0.15em] text-muted/60"
                >
                  {String(group.skills.length).padStart(2, "0")}
                </span>
              </header>

              <ul className="mt-6 flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center rounded-full border border-line bg-background px-3.5 py-1.5 text-sm font-medium text-foreground transition-colors duration-300 hover:border-accent/50 hover:text-accent"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
