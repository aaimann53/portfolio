import { site } from "@/lib/data";
import { GithubIcon } from "@/components/Navbar";

export function Footer() {
  return (
    <footer className="w-full border-t border-line">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={site.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            <GithubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-foreground"
          >
            Back to top
            <span aria-hidden="true">↑</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
