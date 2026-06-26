export async function POST(request) {
  const body = await request.json();

  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim().toLowerCase();
  const message = String(body.message || "").trim();

  if (!name || !email.includes("@") || !message) {
    return Response.json({ error: "Name, valid email, and message are required." }, { status: 400 });
  }

  /*
    Production integration options:
    - Resend
    - SendGrid
    - Mailgun
    - Postmark
    - Formspree
    - Supabase table
    - Airtable
    - Google Sheets webhook

    The endpoint is intentionally safe for launch preparation:
    it validates input but does not expose secrets or attempt to send
    until you add a provider.
  */

  if (!process.env.CONTACT_PROVIDER) {
    return Response.json({
      ok: true,
      message: "Contact endpoint is ready. Connect an email/contact provider before public launch."
    });
  }

  return Response.json({
    ok: true,
    message: "Message received."
  });
}
