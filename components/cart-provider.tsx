"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

export type CartItem = {
  id: string
  name: string
  price: number
  image: string
  qty: number
}

export type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, "qty">, qty?: number) => void
  removeItem: (id: string) => void
  updateQty: (id: string, qty: number) => void
  clear: () => void
  subtotal: number
  count: number
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)
const STORAGE_KEY = "kaza-cart"

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY)
      if (raw) setItems(JSON.parse(raw))
    } catch {}
  }, [])

  // Persist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items))
    } catch {}
  }, [items])

  const addItem = (item: Omit<CartItem, "qty">, qty = 1) => {
    setItems((prev) => {
      const idx = prev.findIndex((p) => p.id === item.id)
      if (idx > -1) {
        const next = [...prev]
        next[idx] = { ...next[idx], qty: next[idx].qty + qty }
        return next
      }
      return [...prev, { ...item, qty }]
    })
    setIsOpen(true)
  }

  const removeItem = (id: string) => setItems((prev) => prev.filter((p) => p.id !== id))

  const updateQty = (id: string, qty: number) =>
    setItems((prev) => prev.map((p) => (p.id === id ? { ...p, qty: Math.max(1, qty) } : p)))

  const clear = () => setItems([])

  const subtotal = useMemo(() => items.reduce((sum, i) => sum + i.price * i.qty, 0), [items])
  const count = useMemo(() => items.reduce((sum, i) => sum + i.qty, 0), [items])

  const value: CartContextType = {
    items,
    addItem,
    removeItem,
    updateQty,
    clear,
    subtotal,
    count,
    isOpen,
    openCart: () => setIsOpen(true),
    closeCart: () => setIsOpen(false),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export function useCart() {
  const ctx = useContext(CartContext)
  if (!ctx) throw new Error("useCart must be used within CartProvider")
  return ctx
}