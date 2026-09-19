"use client";

import { useEffect, useRef, useState } from "react";
import type { TimelineEntry as TimelineEntryData } from "@/lib/data";
import { Tag } from "@/components/ui";

const meta = "text-sm text-muted";

const ignored = new Set(["in", "of", "and", "the", "&"]);

function initialsOf(name: string) {
  return name
    .split(/[\s-]+/)
    .filter((word) => word && !ignored.has(word.toLowerCase()))
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TimelineEntry({ item }: { item: TimelineEntryData }) {
  const [expanded, setExpanded] = useState(false);
  const [overflowing, setOverflowing] = useState(false);
  const bodyRef = useRef<HTMLParagraphElement>(null);

  // Only offer "see more" when the clamped text is actually cut off.
  useEffect(() => {
    if (expanded || !item.description) return;
    const node = bodyRef.current;
    if (!node) return;

    const check = () =>
      setOverflowing(node.scrollHeight > node.clientHeight + 1);

    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [item.description, expanded]);

  const name = item.organisation ?? item.title;
  const organisationLine = [item.organisation, item.type]
    .filter(Boolean)
    .join(" · ");
  const periodLine = [item.period, item.duration].filter(Boolean).join(" · ");
  const locationLine = [item.location, item.workMode].filter(Boolean).join(" · ");

  return (
    <article className="flex gap-5 sm:gap-7">
      {/* Company / institution mark */}
      <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-line bg-surface sm:h-16 sm:w-16">
        {item.logo ? (
          // Real logo mode: drop an image in /public and set `logo` on the item.
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={item.logo}
            alt={`${name} logo`}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="text-base font-semibold tracking-tight text-foreground/70"
          >
            {initialsOf(name)}
          </span>
        )}
      </div>

      <div className="min-w-0 flex-1">
        <h3 className="text-[17px] font-semibold tracking-tight text-foreground sm:text-lg">
          {item.title}
        </h3>

        {organisationLine && (
          <p className={`mt-1.5 ${meta}`}>{organisationLine}</p>
        )}

        {periodLine && <p className={`mt-0.5 ${meta}`}>{periodLine}</p>}

        {locationLine && <p className={`mt-0.5 ${meta}`}>{locationLine}</p>}

        {item.description && (
          <div className="mt-5">
            <p
              ref={bodyRef}
              className={`text-sm leading-relaxed text-muted ${
                expanded ? "" : "line-clamp-3"
              }`}
            >
              {item.description}
            </p>

            {overflowing && (
              <button
                type="button"
                onClick={() => setExpanded((value) => !value)}
                className="mt-1.5 text-sm font-medium text-muted transition-colors duration-300 hover:text-foreground"
              >
                {expanded ? "see less" : "…see more"}
              </button>
            )}
          </div>
        )}

        {item.tech && item.tech.length > 0 && (
          <ul className="mt-5 flex flex-wrap gap-2">
            {item.tech.map((tech) => (
              <li key={tech}>
                <Tag>{tech}</Tag>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
