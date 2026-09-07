import { skills } from "@/lib/data";
import { SectionHeading } from "@/components/ui";

export function Skills() {
  return (
    <section id="skills" className="w-full">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <SectionHeading eyebrow="Skills" title="What I work with" />

        <div className="mt-10 flex flex-wrap gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/50 hover:text-accent"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
