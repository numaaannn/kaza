"use client"

import { useMemo } from "react"
import { X, Minus, Plus, Trash2, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

function formatINR(n: number) {
  return new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(n)
}

export default function CartDrawer() {
  const { items, subtotal, count, isOpen, closeCart, removeItem, updateQty, clear } = useCart()

  const whatsappUrl = useMemo(() => {
    if (items.length === 0) return "#"
    const phone = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || ""
    const lines = [
      "Hi Numaans Silver Shop, I'd like to buy these items:",
      ...items.map((i) => `- ${i.name} x${i.qty} — ₹${(i.price * i.qty).toLocaleString()}`),
      `Total: ₹${subtotal.toLocaleString()}`,
      "Please guide me through the purchase.",
    ]
    const text = encodeURIComponent(lines.join("\n"))
    return phone ? `https://wa.me/${phone}?text=${text}` : `https://wa.me/?text=${text}`
  }, [items, subtotal])

  return (
    <div
      aria-hidden={!isOpen}
      className={`fixed inset-0 z-[60] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={closeCart}
      />

      {/* Panel */}
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-background border-l border-border shadow-xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <header className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold">Your Cart ({count})</h3>
          <button onClick={closeCart} className="p-2 hover:bg-muted rounded-md">
            <X className="w-5 h-5" />
          </button>
        </header>

        <div className="h-[calc(100%-200px)] overflow-auto p-4 space-y-4">
          {items.length === 0 ? (
            <p className="text-muted-foreground">Your cart is empty.</p>
          ) : (
            items.map((i) => (
              <div key={i.id} className="flex gap-3 border border-border rounded-lg p-3">
                <img src={i.image} alt={i.name} className="w-20 h-20 object-cover rounded-md" />
                <div className="flex-1">
                  <p className="text-sm font-medium line-clamp-2">{i.name}</p>
                  <p className="text-xs text-muted-foreground">{formatINR(i.price)}</p>
                  <div className="mt-2 flex items-center gap-2">
                    <Button size="icon-sm" variant="outline" onClick={() => updateQty(i.id, i.qty - 1)}>
                      <Minus className="w-4 h-4" />
                    </Button>
                    <span className="w-8 text-center text-sm">{i.qty}</span>
                    <Button size="icon-sm" variant="outline" onClick={() => updateQty(i.id, i.qty + 1)}>
                      <Plus className="w-4 h-4" />
                    </Button>
                    <Button size="icon-sm" variant="ghost" onClick={() => removeItem(i.id)}>
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <footer className="absolute bottom-0 left-0 right-0 border-t border-border p-4 space-y-3 bg-background">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">Subtotal</span>
            <span className="text-lg font-bold">{formatINR(subtotal)}</span>
          </div>
          <div className="flex gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1"
            >
              <Button className="w-full bg-green-600 hover:bg-green-600/90 text-white">
                <MessageCircle className="w-4 h-4 mr-2" /> Buy Now on WhatsApp
              </Button>
            </a>
            <Button variant="outline" onClick={clear} className="shrink-0">
              Clear
            </Button>
          </div>
        </footer>
      </aside>
    </div>
  )
}