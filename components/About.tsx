import { SectionHeading } from "@/components/ui";

export function About() {
  return (
    <section id="about" className="w-full border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <SectionHeading title="Building products from idea to implementation." />
          <p className="mt-6 leading-relaxed text-muted">
            I&apos;m a software developer who cares about the
            details. I take products from an initial idea all the way to a
            polished, working implementation — pairing clean, responsive
            interfaces with reliable backends. From mobile apps built with
            Flutter to web platforms and APIs, I focus on practical, real-world
            functionality that delivers a great experience.
          </p>
        </div>
      </div>
    </section>
  );
}
