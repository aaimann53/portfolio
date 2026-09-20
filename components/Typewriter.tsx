"use client";

import { useEffect, useState, useSyncExternalStore } from "react";

const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function subscribeToReducedMotion(onChange: () => void) {
  const query = window.matchMedia(reducedMotionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

const getReducedMotion = () => window.matchMedia(reducedMotionQuery).matches;

// The server can't know the preference, so it renders the animated state and
// the first client render matches it; the real value arrives after hydration.
const getReducedMotionOnServer = () => false;

type TypewriterProps = {
  text: string;
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  holdDuration?: number;
  restartDelay?: number;
};

export function Typewriter({
  text,
  className = "",
  typeSpeed = 70,
  deleteSpeed = 35,
  holdDuration = 1800,
  restartDelay = 500,
}: TypewriterProps) {
  const [count, setCount] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reducedMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    getReducedMotion,
    getReducedMotionOnServer,
  );

  useEffect(() => {
    if (reducedMotion) return;

    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && count < text.length) {
      timeout = setTimeout(() => setCount((c) => c + 1), typeSpeed);
    } else if (!deleting && count === text.length) {
      timeout = setTimeout(() => setDeleting(true), holdDuration);
    } else if (deleting && count > 0) {
      timeout = setTimeout(() => setCount((c) => c - 1), deleteSpeed);
    } else {
      timeout = setTimeout(() => setDeleting(false), restartDelay);
    }

    return () => clearTimeout(timeout);
  }, [
    reducedMotion,
    count,
    deleting,
    text,
    typeSpeed,
    deleteSpeed,
    holdDuration,
    restartDelay,
  ]);

  // With reduced motion the whole line is shown at once — the mid-type count
  // stays where it is so the reveal is instant either way.
  const visible = reducedMotion ? text.length : count;

  return (
    <span className={`inline-block text-left ${className}`}>
      <span className="sr-only">{text}</span>
      {/* The invisible copy reserves the full line so the text never jitters. */}
      <span aria-hidden="true" className="relative block">
        <span className="invisible">{text}</span>
        <span className="absolute inset-0">
          {text.slice(0, visible)}
          {!reducedMotion && (
            <span className="caret-blink ml-0.5 inline-block h-[1em] w-0.5 translate-y-[0.15em] bg-accent align-middle" />
          )}
        </span>
      </span>
    </span>
  );
}
