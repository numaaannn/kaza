import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { name, email, message } = await req.json().catch(() => ({}))

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
  }

  // TODO: Integrate email provider (e.g., Resend, SendGrid) or CRM webhook
  // For now, we just respond success to keep it Vercel-friendly with no secrets.
  return NextResponse.json({ ok: true })
}