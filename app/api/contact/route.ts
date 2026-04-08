import { NextResponse } from "next/server";
import { Resend } from "resend";

// Lazy-init so the route can still be type-checked even when no key is set yet.
function getResend() {
  const key = process.env.RESEND_API_KEY;
  if (!key) return null;
  return new Resend(key);
}

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || "hello@2girlsonthego.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL || "2 Girls on the Go <noreply@2girlsonthego.com>";

type ContactPayload = {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  destination?: string;
  travelers?: string;
  budget?: string;
  travelStyle?: string[];
  message?: string;
};

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function formatBody(p: ContactPayload) {
  const lines = [
    ["Name", `${p.firstName ?? ""} ${p.lastName ?? ""}`.trim()],
    ["Email", p.email ?? ""],
    ["Phone", p.phone ?? ""],
    ["Destination", p.destination ?? ""],
    ["Travelers", p.travelers ?? ""],
    ["Budget", p.budget ?? ""],
    ["Travel style", (p.travelStyle ?? []).join(", ")],
    ["Message", p.message ?? ""],
  ];

  const text = lines.map(([label, value]) => `${label}: ${value || "—"}`).join("\n");
  const html = `
    <div style="font-family: -apple-system, system-ui, sans-serif; max-width: 560px; margin: 0 auto; padding: 24px;">
      <h2 style="color: #1e3a8a; margin: 0 0 16px;">New travel request</h2>
      <table style="width: 100%; border-collapse: collapse;">
        ${lines
          .map(
            ([label, value]) => `
            <tr>
              <td style="padding: 8px 12px 8px 0; vertical-align: top; color: #64748b; font-weight: 600; width: 110px; border-bottom: 1px solid #e2e8f0;">${escapeHtml(
                label,
              )}</td>
              <td style="padding: 8px 0; color: #0f172a; border-bottom: 1px solid #e2e8f0; white-space: pre-wrap;">${escapeHtml(
                value || "—",
              )}</td>
            </tr>`,
          )
          .join("")}
      </table>
      <p style="margin-top: 24px; color: #94a3b8; font-size: 12px;">
        Sent from 2 Girls on the Go contact form
      </p>
    </div>
  `;
  return { text, html };
}

export async function POST(req: Request) {
  let payload: ContactPayload;
  try {
    payload = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Minimum required fields
  if (!payload.firstName || !payload.email) {
    return NextResponse.json(
      { error: "First name and email are required" },
      { status: 400 },
    );
  }

  // Very simple email format check
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  const resend = getResend();
  if (!resend) {
    // No API key set yet — log payload server-side and return success-ish
    // so the form is testable in dev without a Resend account.
    console.warn(
      "[contact] RESEND_API_KEY not set. Logging payload only:",
      payload,
    );
    return NextResponse.json({
      ok: true,
      mode: "dev-log",
      message:
        "Form received. Set RESEND_API_KEY in .env.local to enable real email sending.",
    });
  }

  const { text, html } = formatBody(payload);

  try {
    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: payload.email,
      subject: `New trip request — ${payload.firstName} ${payload.lastName ?? ""}`.trim(),
      text,
      html,
    });

    if (result.error) {
      console.error("[contact] resend error:", result.error);
      return NextResponse.json(
        { error: "Email send failed" },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true, id: result.data?.id });
  } catch (err) {
    console.error("[contact] unexpected error:", err);
    return NextResponse.json({ error: "Email send failed" }, { status: 500 });
  }
}
