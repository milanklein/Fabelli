export async function POST(request: Request) {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const secret = process.env.GOOGLE_SHEETS_SECRET;

  if (!webhookUrl || !secret) {
    console.error(
      "GOOGLE_SHEETS_WEBHOOK_URL or GOOGLE_SHEETS_SECRET is not configured",
    );
    return Response.json(
      { ok: false, error: "Server not configured" },
      { status: 500 },
    );
  }

  const data = await request.json();

  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...data, secret }),
  });

  if (!res.ok) {
    console.error("Google Sheets webhook failed:", res.status, await res.text());
    return Response.json(
      { ok: false, error: "Webhook request failed" },
      { status: 502 },
    );
  }

  return Response.json({ ok: true });
}
