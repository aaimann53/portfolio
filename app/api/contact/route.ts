import { NextResponse } from "next/server";
import { Resend } from "resend";
import { site } from "@/lib/data";

type Payload = {
  name?: unknown;
  email?: unknown;
  message?: unknown;
};

const asText = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/** Keep user input from injecting markup into the HTML email. */
const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      {
        error:
          "Email sending isn't set up yet — add RESEND_API_KEY to your environment.",
      },
      { status: 503 },
    );
  }

  const body = (await request.json().catch(() => null)) as Payload | null;

  const name = asText(body?.name);
  const email = asText(body?.email);
  const message = asText(body?.message);

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Please fill in your name, email and message." },
      { status: 400 },
    );
  }

  if (!emailPattern.test(email)) {
    return NextResponse.json(
      { error: "That email address doesn't look right." },
      { status: 400 },
    );
  }

  if (name.length > 200 || email.length > 200) {
    return NextResponse.json(
      { error: "That name or email address is a little too long." },
      { status: 400 },
    );
  }

  if (message.length > 5000) {
    return NextResponse.json(
      { error: "That message is a little too long." },
      { status: 400 },
    );
  }

  // Until a domain is verified in Resend, the shared test sender can only
  // deliver to the email address the Resend account was created with.
  // Once your domain is verified, set CONTACT_FROM_EMAIL to e.g.
  // "Portfolio <hello@yourdomain.com>".
  const from =
    process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>";

  // Where submissions land. Kept separate from the public contact address so
  // the inbox can differ from the address visitors see.
  const to = process.env.CONTACT_TO_EMAIL?.trim() || site.contactEmail;

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `New project enquiry from ${name}`,
    text: [
      `Name:  ${name}`,
      `Email: ${email}`,
      "",
      message,
      "",
      "—",
      "Sent from the portfolio contact form. Reply to this email to answer directly.",
    ].join("\n"),
    html: [
      '<div style="font-family:ui-sans-serif,system-ui,-apple-system,Segoe UI,Arial,sans-serif;font-size:15px;line-height:1.6;color:#111">',
      `<p style="margin:0 0 4px"><strong>${escapeHtml(name)}</strong></p>`,
      `<p style="margin:0 0 20px">${escapeHtml(email)}</p>`,
      `<div style="white-space:pre-wrap;padding:16px;border-left:3px solid #a3e635;background:#f6f6f6">${escapeHtml(message)}</div>`,
      '<p style="margin:20px 0 0;font-size:13px;color:#666">Sent from the portfolio contact form. Reply to this email to answer directly.</p>',
      "</div>",
    ].join("\n"),
  });

  if (error) {
    return NextResponse.json(
      {
        error: `The message couldn't be sent (${error.message}). Please email me directly.`,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
