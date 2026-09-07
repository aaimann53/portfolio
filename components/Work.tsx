import { projects, type Project } from "@/lib/data";
import { SectionHeading, Tag } from "@/components/ui";
import { Placeholder } from "@/components/Placeholder";

const cardHover =
  "flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface transition-all duration-300 will-change-transform hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)]";

function CardImage({ project }: { project: Project }) {
  const { image, title } = project;
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-surface">
      {image ? (
        // Real screenshot mode: drop an image in /public and set project.image.
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt={`${title} screenshot`}
          className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          loading="lazy"
        />
      ) : (
        <div className="h-full w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]">
          <Placeholder project={project} />
        </div>
      )}
    </div>
  );
}

export function Work() {
  const featured = projects.find((p) => p.featured)!;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="w-full">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <SectionHeading eyebrow="Portfolio" title="Selected Work" />

        <div className="mt-12 space-y-20">
          {/* Featured project — Meezban */}
          <article className={cardHover}>
            <div className="relative">
              <CardImage project={featured} />
              <span className="absolute left-4 top-4 rounded-full border border-line bg-background/80 px-3 py-1 text-xs font-medium text-foreground backdrop-blur-md">
                Featured Project
              </span>
            </div>

            <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
              <div className="max-w-xl">
                <h3 className="text-2xl font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                  {featured.title}
                </h3>
                {featured.tagline && (
                  <p className="mt-1 text-sm font-medium text-accent">
                    {featured.tagline}
                  </p>
                )}
                <p className="mt-3 leading-relaxed text-muted">
                  {featured.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>

                {featured.features && (
                  <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {featured.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-center gap-2 text-sm text-muted"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          className="h-4 w-4 shrink-0 text-accent"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                        >
                          <path
                            d="M5 13l4 4L19 7"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              <div className="shrink-0 lg:pt-8">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:border-accent/60 hover:text-accent"
                >
                  View Case Study
                  <span
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
            </div>
          </article>

          {/* Other projects */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {rest.map((project) => (
              <article key={project.title} className={cardHover}>
                <CardImage project={project} />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
