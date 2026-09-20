import type { EducationItem } from "@/lib/data";

export function EducationEntry({ item }: { item: EducationItem }) {
  const name = item.organisation ?? item.title;

  return (
    <div className="grid grid-cols-1 gap-2 py-8 first:pt-0 sm:grid-cols-[150px_1fr] sm:gap-8">
      <p className="text-base tabular-nums text-muted">{item.period}</p>

      <div className="flex items-start gap-4">
        {item.logo && (
          // Institution mark — drop an image in /public and set `logo` on the item.
          <div className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-surface">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={item.logo}
              alt={`${name} logo`}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
        )}

        <div className="min-w-0">
          <h4 className="text-[17px] font-semibold tracking-tight text-foreground sm:text-lg">
            {item.title}
          </h4>

          {item.organisation && (
            <p className="mt-2 text-base text-muted">{item.organisation}</p>
          )}

          {item.description && (
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
              {item.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
