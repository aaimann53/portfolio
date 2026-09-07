import type { Project } from "@/lib/data";

const accentMap: Record<string, string> = {
  accent: "from-lime-300/20 via-emerald-400/10 to-teal-300/10",
  sky: "from-sky-300/20 via-sky-400/10 to-indigo-300/10",
  violet: "from-violet-300/20 via-violet-400/10 to-fuchsia-300/10",
  rose: "from-rose-300/20 via-rose-400/10 to-orange-300/10",
  emerald: "from-emerald-300/20 via-emerald-400/10 to-lime-300/10",
  amber: "from-amber-300/20 via-amber-400/10 to-yellow-300/10",
};

const barMap: Record<string, string> = {
  accent: "bg-lime-300/50",
  sky: "bg-sky-300/50",
  violet: "bg-violet-300/50",
  rose: "bg-rose-300/50",
  emerald: "bg-emerald-300/50",
  amber: "bg-amber-300/50",
};

/**
 * Pure visual placeholder for projects that don't have a real screenshot yet.
 * Once you drop a real image into /public, set `image` on the project and this
 * will be bypassed automatically by the Work card.
 */
export function Placeholder({ project }: { project: Project }) {
  const tint = accentMap[project.accent ?? "accent"];
  const bar = barMap[project.accent ?? "accent"];
  const featured = project.featured;

  return (
    <div
      aria-hidden="true"
      className={`flex h-full w-full flex-col bg-gradient-to-br ${tint} p-4 sm:p-5`}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-1.5 pb-3">
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
        <span className="h-2 w-2 rounded-full bg-foreground/20" />
      </div>

      <div className="flex flex-1 flex-col gap-3">
        <div className={`h-2 w-1/2 rounded-full bg-foreground/25 ${bar}`} />
        <div className="h-2 w-2/3 rounded-full bg-foreground/15" />
        <div className="mt-2 grid flex-1 gap-3 sm:grid-cols-2">
          <div className="rounded-lg bg-background/50 p-3 backdrop-blur-sm">
            <div className={`mb-2 h-16 rounded-md bg-foreground/10 ${featured ? "sm:h-24" : ""}`} />
            <div className="h-1.5 w-3/4 rounded-full bg-foreground/20" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-foreground/10" />
          </div>
          <div className="hidden rounded-lg bg-background/50 p-3 backdrop-blur-sm sm:block">
            <div className={`mb-2 h-16 rounded-md bg-foreground/10 ${featured ? "sm:h-24" : ""}`} />
            <div className="h-1.5 w-3/4 rounded-full bg-foreground/20" />
            <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-foreground/10" />
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        <span className={`h-1.5 w-10 rounded-full ${bar}`} />
        <span className="h-1.5 w-8 rounded-full bg-foreground/20" />
        <span className="h-1.5 w-6 rounded-full bg-foreground/20" />
      </div>
    </div>
  );
}
