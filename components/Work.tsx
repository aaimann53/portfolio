import { projects, site, type Project } from "@/lib/data";
import { SectionHeading } from "@/components/ui";

const pad = (n: number) => String(n).padStart(2, "0");

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-3.5 w-3.5"
      aria-hidden="true"
    >
      <path
        d="M7.5 16.5 16.5 7.5M9.5 7.5h7v7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  // Each project can link to its own repo; until then the card opens the
  // GitHub profile set in `site.githubUrl`.
  const href = project.href ?? site.githubUrl;
  const external = href.startsWith("http");

  return (
    <a
      href={href}
      {...(external
        ? {
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": `${project.title} (opens in a new tab)`,
          }
        : {})}
      className="group flex flex-col rounded-xl border border-line bg-surface p-6 transition-[background-color,border-color,transform] duration-300 ease-out hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-surface-2"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex min-w-0 items-start gap-3.5">
          {project.image && (
            // Real thumbnail mode: drop a square image in /public and set it.
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={project.image}
              alt=""
              loading="lazy"
              className="h-10 w-10 shrink-0 rounded-lg border border-line object-cover"
            />
          )}

          <div className="min-w-0">
            <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted/80">
              {pad(index + 1)} · {project.category}
            </p>
            <h3 className="mt-2 text-[17px] font-semibold tracking-tight text-foreground">
              {project.title}
            </h3>
          </div>
        </div>

        <span
          aria-hidden="true"
          className="mt-1 shrink-0 text-muted transition-transform duration-300 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground"
        >
          <ArrowIcon />
        </span>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted">
        {project.description}
      </p>

      <ul className="mt-auto flex flex-wrap gap-x-3.5 gap-y-1 pt-6 text-[13px] text-muted/80">
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </a>
  );
}

export function Work() {
  return (
    <section id="work" className="w-full border-t border-line">
      <div className="mx-auto w-full max-w-5xl px-6 py-20 sm:py-28">
        <SectionHeading
          eyebrow="Projects"
          title="Selected Work"
          className="[&>h2]:uppercase [&>h2]:tracking-[0.02em]"
        />

        <p className="mt-5 max-w-2xl text-pretty leading-relaxed text-muted">
          Things I&apos;ve built, contributed to, and explored across mobile, web,
          AI, and software development.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
