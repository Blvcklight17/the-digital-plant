export async function POST(request) {
  const body = await request.json();
  const email = String(body.email || "").trim().toLowerCase();

  if (!email || !email.includes("@")) {
    return Response.json({ error: "Valid email required" }, { status: 400 });
  }

  /*
    Production integration options:
    - Beehiiv
    - ConvertKit
    - Mailchimp
    - Buttondown
    - Supabase
    - Airtable
    - Google Sheets webhook

    Keep this as a safe validation endpoint until a provider is connected.
  */

  if (!process.env.NEWSLETTER_PROVIDER) {
    return Response.json({
      ok: true,
      email,
      message: "Newsletter endpoint is ready. Connect a provider before public launch."
    });
  }

  return Response.json({
    ok: true,
    email,
    message: "Subscribed."
  });
}
