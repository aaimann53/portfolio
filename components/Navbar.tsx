"use client";

import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/data";

const iconButton =
  "inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface text-foreground transition-all duration-300 hover:border-foreground/25 hover:text-accent";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState(site.nav[0]?.href ?? "#home");
  const [emailOpen, setEmailOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const emailRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu with Escape.
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  // Dismiss the email tag on outside click or Escape.
  useEffect(() => {
    if (!emailOpen) return;

    const onPointerDown = (event: PointerEvent) => {
      if (!emailRef.current?.contains(event.target as Node)) {
        setEmailOpen(false);
      }
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setEmailOpen(false);
    };

    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [emailOpen]);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(site.contactEmail);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard access can be blocked; the address is selectable either way.
    }
  }

  // Highlight the nav link for the section currently in view.
  useEffect(() => {
    const ids = site.nav.map((item) => item.href.replace("#", ""));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-line bg-background/80 backdrop-blur-md"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 w-full max-w-5xl items-center justify-between px-6">
        <a
          href="#home"
          className="text-[15px] font-semibold tracking-tight text-foreground"
        >
          <span className="text-accent">Aiman</span> Jadoon
        </a>
        <ul className="hidden items-center gap-8 md:flex">
          {site.nav.map((item) => {
            const isActive = active === item.href;
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-sm transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted"
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute -bottom-1.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <a
              href={site.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={iconButton}
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>

            {site.linkedinUrl && (
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className={iconButton}
              >
                <LinkedinIcon className="h-[18px] w-[18px]" />
              </a>
            )}

            <div ref={emailRef} className="relative">
              <button
                type="button"
                onClick={() => setEmailOpen((value) => !value)}
                aria-expanded={emailOpen}
                aria-label="Show email address"
                className={iconButton}
              >
                <MailIcon className="h-[18px] w-[18px]" />
              </button>

              {emailOpen && (
                <div className="absolute right-0 top-full z-50 mt-2 w-72 rounded-xl border border-line bg-surface p-3 text-left shadow-[0_24px_48px_-24px_rgba(0,0,0,0.9)]">
                  <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
                    Email
                  </p>
                  <div className="mt-2 flex items-center justify-between gap-3">
                    <a
                      href={`mailto:${site.contactEmail}`}
                      className="truncate text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {site.contactEmail}
                    </a>
                    <button
                      type="button"
                      onClick={copyEmail}
                      className="shrink-0 rounded-md border border-line px-2 py-1 text-[11px] font-medium text-muted transition-colors hover:border-foreground/25 hover:text-foreground"
                    >
                      {copied ? "Copied" : "Copy"}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-foreground md:hidden"
          >
            {open ? (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-line bg-background/95 backdrop-blur-md md:hidden">
          <ul className="space-y-1 px-6 py-4">
            {site.nav.map((item) => {
              const isActive = active === item.href;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-md px-2 py-2.5 text-sm transition-colors hover:bg-surface hover:text-foreground ${
                      isActive ? "text-accent" : "text-muted"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
            <li className="flex flex-wrap items-center gap-2 pt-2">
              <a
                href={site.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
              >
                <GithubIcon className="h-4 w-4" />
                GitHub
              </a>
              {site.linkedinUrl && (
                <a
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
                >
                  <LinkedinIcon className="h-4 w-4" />
                  LinkedIn
                </a>
              )}
              <a
                href={`mailto:${site.contactEmail}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-line bg-surface px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent/60 hover:text-accent"
              >
                <MailIcon className="h-4 w-4" />
                Email
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49 0-.24-.01-.88-.01-1.72-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.63.07-.63 1.01.07 1.54 1.06 1.54 1.06.89 1.57 2.34 1.12 2.91.85.09-.66.35-1.12.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.27 2.75 1.05a9.36 9.36 0 0 1 5.02 0c1.91-1.32 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.94-2.34 4.81-4.57 5.06.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.6.69.49A10.05 10.05 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  );
}

export function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05a3.75 3.75 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14Zm1.78 13.02H3.55V9h3.57v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0Z" />
    </svg>
  );
}

export function MailIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      aria-hidden="true"
    >
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m4.5 7.5 7.5 5.25L19.5 7.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
