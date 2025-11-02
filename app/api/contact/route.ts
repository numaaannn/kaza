import { NextResponse } from "next/server"
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY } from "@/lib/site-info"

export async function POST(req: Request) {
  const { name, email, message } = await req.json().catch(() => ({}))

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
  }

  // TODO: Integrate email provider (e.g., Resend, SendGrid) or CRM webhook
  // For now, we just respond success to keep it Vercel-friendly with no secrets.
  return NextResponse.json({ ok: true })
}

export async function GET() {
  // Expose basic contact info for the storefront (no secrets)
  return NextResponse.json({ email: CONTACT_EMAIL, phone: CONTACT_PHONE_DISPLAY })
}