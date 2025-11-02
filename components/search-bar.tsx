"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"

export default function SearchBar({ onClose }: { onClose?: () => void }) {
  const [q, setQ] = useState("")
  const router = useRouter()

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    const query = q.trim()
    if (query.length > 0) router.push(`/shop?q=${encodeURIComponent(query)}`)
    onClose?.()
  }

  return (
    <form onSubmit={submit} className="flex items-center gap-2 w-full">
      <div className="flex items-center gap-2 flex-1 border border-border rounded-md px-3 py-2 bg-background">
        <Search className="w-4 h-4 text-muted-foreground" />
        <input
          autoFocus
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search products..."
          className="w-full bg-transparent outline-none text-sm"
        />
      </div>
      <button type="button" onClick={onClose} className="p-2 hover:bg-muted rounded-md">
        <X className="w-4 h-4" />
      </button>
    </form>
  )
}