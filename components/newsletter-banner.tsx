"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

export default function NewsletterBanner() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-secondary text-secondary-foreground">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Stay Updated with New Collections</h2>
            <p className="text-secondary-foreground/80 text-lg">
              Subscribe to our newsletter for exclusive offers, new designs, and jewellery tips.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-foreground/50" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 rounded-lg bg-secondary-foreground/10 border border-secondary-foreground/20 text-secondary-foreground placeholder:text-secondary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary-foreground/30"
              />
            </div>
            <Button type="submit" className="bg-background text-foreground hover:bg-background/90 font-semibold">
              {submitted ? "Subscribed!" : "Subscribe"}
            </Button>
          </form>

          <p className="text-sm text-secondary-foreground/70">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
