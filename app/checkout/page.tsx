"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Check, Lock } from "lucide-react"

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: string
  city: string
  state: string
  pincode: string
  cardName: string
  cardNumber: string
  expiry: string
  cvv: string
}

export default function CheckoutPage() {
  const [step, setStep] = useState<"shipping" | "payment" | "confirmation">("shipping")
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("payment")
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStep("confirmation")
  }

  const subtotal = 9497
  const shipping = 0
  const tax = 1710
  const total = subtotal + shipping + tax

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="bg-muted py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground text-balance">Checkout</h1>
        </div>
      </section>

      {/* Checkout Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Progress Steps */}
              <div className="flex gap-4 mb-12">
                {["shipping", "payment", "confirmation"].map((s, index) => (
                  <div key={s} className="flex items-center gap-3 flex-1">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                        step === s
                          ? "bg-secondary text-secondary-foreground"
                          : ["shipping", "payment", "confirmation"].indexOf(step) > index
                            ? "bg-primary text-primary-foreground"
                            : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {["shipping", "payment", "confirmation"].indexOf(step) > index ? (
                        <Check className="w-5 h-5" />
                      ) : (
                        index + 1
                      )}
                    </div>
                    <span className="hidden sm:inline text-sm font-medium text-foreground capitalize">{s}</span>
                    {index < 2 && <div className="hidden lg:block flex-1 h-0.5 bg-border" />}
                  </div>
                ))}
              </div>

              {/* Shipping Form */}
              {step === "shipping" && (
                <form onSubmit={handleShippingSubmit} className="space-y-6">
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h2 className="text-xl font-bold text-foreground mb-6">Shipping Address</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">First Name</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Last Name</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-foreground mb-2">Address</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">City</label>
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">State</label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Pincode</label>
                        <input
                          type="text"
                          name="pincode"
                          value={formData.pincode}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-base"
                  >
                    Continue to Payment
                  </Button>
                </form>
              )}

              {/* Payment Form */}
              {step === "payment" && (
                <form onSubmit={handlePaymentSubmit} className="space-y-6">
                  <div className="bg-card rounded-lg p-6 border border-border">
                    <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                      <Lock className="w-5 h-5" />
                      Payment Information
                    </h2>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-foreground mb-2">Cardholder Name</label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-foreground mb-2">Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">Expiry Date</label>
                        <input
                          type="text"
                          name="expiry"
                          placeholder="MM/YY"
                          value={formData.expiry}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">CVV</label>
                        <input
                          type="text"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button
                      type="button"
                      onClick={() => setStep("shipping")}
                      variant="outline"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground py-6"
                    >
                      Back
                    </Button>
                    <Button
                      type="submit"
                      className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 py-6 text-base"
                    >
                      Place Order
                    </Button>
                  </div>
                </form>
              )}

              {/* Confirmation */}
              {step === "confirmation" && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-2">Order Confirmed!</h2>
                  <p className="text-muted-foreground mb-8">
                    Thank you for your purchase. Your order has been placed successfully.
                  </p>
                  <p className="text-sm text-muted-foreground mb-8">
                    Order ID: <span className="font-semibold text-foreground">#KAZA-2024-001234</span>
                  </p>
                  <p className="text-muted-foreground mb-8">
                    A confirmation email has been sent to{" "}
                    <span className="font-semibold text-foreground">{formData.email}</span>
                  </p>
                  <Link href="/">
                    <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      Continue Shopping
                    </Button>
                  </Link>
                </div>
              )}
            </div>

            {/* Order Summary Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-muted rounded-lg p-6 space-y-4 sticky top-20">
                <h2 className="text-xl font-bold text-foreground">Order Summary</h2>

                <div className="space-y-3 border-b border-border pb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium text-foreground">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium text-accent">Free</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Tax (18%)</span>
                    <span className="font-medium text-foreground">₹{tax.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between text-lg">
                  <span className="font-semibold text-foreground">Total</span>
                  <span className="font-bold text-foreground">₹{total.toLocaleString()}</span>
                </div>

                <div className="bg-background rounded p-3 text-xs text-muted-foreground space-y-2">
                  <p className="font-semibold text-foreground">Order includes:</p>
                  <ul className="space-y-1">
                    <li>✓ Minimalist Silver Ring (1x)</li>
                    <li>✓ Delicate Silver Chain (2x)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
