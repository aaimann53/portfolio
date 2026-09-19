import type { EducationItem } from "@/lib/data";

export function EducationEntry({ item }: { item: EducationItem }) {
  return (
    <div className="grid grid-cols-1 gap-2 py-8 first:pt-0 sm:grid-cols-[150px_1fr] sm:gap-8">
      <p className="text-base tabular-nums text-muted">{item.period}</p>

      <div>
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
  );
}
