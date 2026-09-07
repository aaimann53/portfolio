import { experience } from "@/lib/data";
import { SectionHeading, Tag } from "@/components/ui";

export function Experience() {
  return (
    <section id="experience" className="w-full">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <SectionHeading eyebrow="Experience" title="Where I&apos;ve worked" />

        <div className="mt-12">
          {experience.map((item) => (
            <div
              key={item.role}
              className="relative grid grid-cols-1 gap-2 border-l border-line pl-6 sm:grid-cols-[140px_1fr] sm:gap-8 sm:pl-10"
            >
              {/* Dot on the timeline */}
              <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent" />

              <span className="text-sm font-medium text-accent">
                {item.period}
              </span>

              <div>
                <h3 className="text-lg font-semibold tracking-tight text-foreground">
                  {item.role}
                  <span className="font-normal text-muted">
                    {" "}
                    — {item.company}
                  </span>
                </h3>
                <p className="mt-1 text-xs font-medium uppercase tracking-wide text-muted">
                  {item.type}
                </p>
                <p className="mt-3 max-w-xl leading-relaxed text-muted">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
