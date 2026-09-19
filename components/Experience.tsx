import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/ui";
import { TimelineEntry } from "@/components/TimelineEntry";

export function Experience() {
  return (
    <section id="experience" className="w-full">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <SectionHeading eyebrow="Experience" title="Where I've worked" />

        <div className="mt-12 space-y-12">
          {experience.map((item) => (
            <TimelineEntry key={`${item.organisation}-${item.title}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
