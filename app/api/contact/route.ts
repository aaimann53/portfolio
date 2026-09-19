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

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [site.contactEmail],
    replyTo: email,
    subject: `New project enquiry from ${name}`,
    text: `${message}\n\n—\n${name}\n${email}`,
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
