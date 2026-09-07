import { CTAButtons } from "@/components/ui";

export function CTA() {
  return (
    <section id="contact" className="w-full border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center px-6 py-24 text-center sm:py-32">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Have a project in mind?
        </h2>
        <p className="mt-5 max-w-md text-pretty text-lg text-muted">
          Let&apos;s turn your idea into a polished, functional product.
        </p>
        <div className="mt-9">
          <CTAButtons />
        </div>
      </div>
    </section>
  );
}
