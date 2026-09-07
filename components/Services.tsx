import { services } from "@/lib/data";
import { SectionHeading } from "@/components/ui";

export function Services() {
  return (
    <section id="services" className="w-full border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <SectionHeading eyebrow="Services" title="What I can do for you" />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-line bg-surface p-6 transition-all hover:border-accent/40 sm:p-8"
            >
              <h3 className="text-lg font-semibold tracking-tight text-foreground">
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
