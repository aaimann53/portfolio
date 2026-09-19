"use client";

import { useState } from "react";
import { site } from "@/lib/data";

const label =
  "block text-[11px] font-medium uppercase tracking-[0.18em] text-muted";

const field =
  "mt-2 w-full rounded-lg border border-line bg-background px-4 py-3 text-sm text-foreground transition-colors placeholder:text-muted/50 focus:border-accent/60";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(payload?.error ?? "Something went wrong.");
      }

      form.reset();
      setStatus("sent");
    } catch (caught) {
      setError(
        caught instanceof Error
          ? caught.message
          : "Something went wrong. Please email me directly.",
      );
      setStatus("error");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-surface p-6 text-left sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={label}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Your name"
            className={field}
          />
        </div>

        <div>
          <label htmlFor="contact-email" className={label}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@email.com"
            className={field}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className={label}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about your project…"
          className={`${field} resize-y`}
        />
      </div>

      {status === "sent" ? (
        <p
          role="status"
          className="mt-6 rounded-lg border border-accent/30 bg-accent/10 px-4 py-3 text-sm text-foreground"
        >
          Thanks — your message is on its way. I&apos;ll reply to the email you
          left.
        </p>
      ) : (
        <button
          type="submit"
          disabled={status === "sending"}
          className="mt-6 w-full rounded-xl bg-accent py-3.5 text-sm font-semibold text-background transition-all duration-300 hover:bg-accent-muted active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send Message"}
        </button>
      )}

      {status === "error" && (
        <p role="alert" className="mt-4 text-sm text-red-400">
          {error}
        </p>
      )}

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-muted">
          Or email me directly at{" "}
          <a
            href={`mailto:${site.contactEmail}`}
            className="text-foreground transition-colors hover:text-accent"
          >
            {site.contactEmail}
          </a>
        </p>
        <button
          type="button"
          onClick={onClose}
          className="text-xs font-medium text-muted transition-colors hover:text-foreground"
        >
          Close
        </button>
      </div>
    </form>
  );
}
