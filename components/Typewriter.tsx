"use client";

import { useEffect, useState } from "react";

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
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setAnimate(false);
      setCount(text.length);
    }
  }, [text]);

  useEffect(() => {
    if (!animate) return;

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
  }, [animate, count, deleting, text, typeSpeed, deleteSpeed, holdDuration, restartDelay]);

  return (
    <span className={`inline-block text-left ${className}`}>
      <span className="sr-only">{text}</span>
      {/* The invisible copy reserves the full line so the text never jitters. */}
      <span aria-hidden="true" className="relative block">
        <span className="invisible">{text}</span>
        <span className="absolute inset-0">
          {text.slice(0, count)}
          {animate && (
            <span className="caret-blink ml-0.5 inline-block h-[1em] w-0.5 translate-y-[0.15em] bg-accent align-middle" />
          )}
        </span>
      </span>
    </span>
  );
}
