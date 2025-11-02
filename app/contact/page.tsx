"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CONTACT_EMAIL, CONTACT_PHONE_DISPLAY, CONTACT_PHONE_TEL, CONTACT_WHATSAPP_URL } from "@/lib/site-info"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [error, setError] = useState<string | null>(null)

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setError(null)
    const form = e.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error("Failed to send message")
      setStatus("success")
      form.reset()
    } catch (err: any) {
      setError(err?.message || "Something went wrong")
      setStatus("error")
    }
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-muted-foreground mb-10">
            Have a question about our products or an order? Send us a message and we’ll get back to you within 24 hours.
          </p>

          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  placeholder="Your full name"
                  className="w-full border border-border rounded-md px-3 py-2 bg-background"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full border border-border rounded-md px-3 py-2 bg-background"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="How can we help?"
                className="w-full border border-border rounded-md px-3 py-2 bg-background"
              />
            </div>

            <div className="flex items-center gap-4">
              <Button disabled={status === "loading"}>
                {status === "loading" ? "Sending..." : "Send Message"}
              </Button>
              {status === "success" && <span className="text-green-600">Message sent! We’ll reply soon.</span>}
              {status === "error" && <span className="text-red-600">{error}</span>}
            </div>
          </form>

          <div className="mt-10 grid md:grid-cols-2 gap-6 items-center">
            <div className="p-6 border border-border rounded-md">
              <h3 className="font-semibold mb-2">Other ways to reach us</h3>
              <p className="text-sm mb-2">Email: <a className="text-accent underline" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
              <p className="text-sm mb-2">Phone: <a className="text-accent underline" href={`tel:${CONTACT_PHONE_TEL}`}>{CONTACT_PHONE_DISPLAY}</a></p>
              <p className="text-sm">WhatsApp: <a className="text-accent underline" href={CONTACT_WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Message us on WhatsApp</a></p>
            </div>
            <div className="p-6">
              <h3 className="font-semibold mb-2">Support hours</h3>
              <p className="text-sm">Mon–Fri: 9:00 AM — 6:00 PM IST</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}