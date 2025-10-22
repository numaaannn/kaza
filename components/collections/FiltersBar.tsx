"use client"

import { useMemo } from "react"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"

const PRICE_TIERS = [
  { key: "low", label: "Low (≤ ₹3,000)" },
  { key: "medium", label: "Medium (₹3,001–₹6,000)" },
  { key: "high", label: "High (≥ ₹6,001)" },
] as const

const MATERIALS = ["pure silver", "oxidized", "silver with gemstones"] as const
const STYLES = ["minimalistic", "statement", "traditional", "modern"] as const
const OCCASIONS = ["daily wear", "party", "gifting"] as const

function useQP() {
  const search = useSearchParams()
  return useMemo(() => new URLSearchParams(search.toString()), [search])
}

export default function FiltersBar() {
  const router = useRouter()
  const pathname = usePathname()
  const qp = useQP()

  const setParam = (key: string, value: string | null) => {
    if (value === null || value === "") qp.delete(key)
    else qp.set(key, value)
    router.replace(`${pathname}?${qp.toString()}`)
  }

  const toggleInCSV = (key: string, value: string) => {
    const raw = qp.get(key) || ""
    const parts = raw ? raw.split(",") : []
    const idx = parts.indexOf(value)
    if (idx >= 0) parts.splice(idx, 1)
    else parts.push(value)
    if (parts.length === 0) qp.delete(key)
    else qp.set(key, parts.join(","))
    router.replace(`${pathname}?${qp.toString()}`)
  }

  const isChecked = (key: string, val: string) => {
    const raw = qp.get(key)
    if (!raw) return false
    return raw.split(",").includes(val)
  }

  const activePrice = qp.get("price") || ""

  const clearAll = () => {
    const keys = ["price", "material", "style", "occasion", "new", "bestseller"]
    keys.forEach((k) => qp.delete(k))
    router.replace(pathname)
  }

  return (
    <div className="w-full border rounded-lg p-4 bg-background">
      <div className="flex flex-wrap gap-4 items-center justify-between">
        <div className="flex flex-wrap gap-6">
          {/* Price */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase text-muted-foreground">Price</div>
            <div className="flex gap-2">
              {PRICE_TIERS.map((t) => (
                <Button
                  key={t.key}
                  variant={activePrice === t.key ? "default" : "outline"}
                  size="sm"
                  onClick={() => setParam("price", activePrice === t.key ? null : t.key)}
                >
                  {t.label}
                </Button>
              ))}
            </div>
          </div>

          {/* Material */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase text-muted-foreground">Material</div>
            <div className="flex gap-2 flex-wrap">
              {MATERIALS.map((m) => (
                <Button
                  key={m}
                  variant={isChecked("material", m) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleInCSV("material", m)}
                >
                  {m}
                </Button>
              ))}
            </div>
          </div>

          {/* Style */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase text-muted-foreground">Style</div>
            <div className="flex gap-2 flex-wrap">
              {STYLES.map((s) => (
                <Button
                  key={s}
                  variant={isChecked("style", s) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleInCSV("style", s)}
                >
                  {s}
                </Button>
              ))}
            </div>
          </div>

          {/* Occasion */}
          <div className="space-y-2">
            <div className="text-xs font-semibold uppercase text-muted-foreground">Occasion</div>
            <div className="flex gap-2 flex-wrap">
              {OCCASIONS.map((o) => (
                <Button
                  key={o}
                  variant={isChecked("occasion", o) ? "default" : "outline"}
                  size="sm"
                  onClick={() => toggleInCSV("occasion", o)}
                >
                  {o}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <Button
            variant={isChecked("new", "1") ? "default" : "outline"}
            size="sm"
            onClick={() => toggleInCSV("new", "1")}
          >
            New Arrivals
          </Button>
          <Button
            variant={isChecked("bestseller", "1") ? "default" : "outline"}
            size="sm"
            onClick={() => toggleInCSV("bestseller", "1")}
          >
            Best Sellers
          </Button>
          <Button variant="ghost" size="sm" onClick={clearAll}>
            Clear All
          </Button>
        </div>
      </div>
    </div>
  )
}
