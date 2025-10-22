"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"
import { Button } from "@/components/ui/button"

const TYPES = [
  "earrings",
  "necklaces",
  "bracelets",
  "rings",
  "anklets",
  "bangles",
  "pendants",
  "sets",
]
const MATERIALS = ["pure silver", "oxidized", "silver with gemstones"]
const FINISHES = ["high polish", "matte", "brushed", "oxidized"]
const STYLES = ["minimalistic", "statement", "traditional", "modern"]

export default function CustomizePage() {
  const [form, setForm] = useState({
    type: "rings",
    material: "pure silver",
    finish: "high polish",
    style: "minimalistic",
    engraving: "",
    charms: [] as string[],
  })

  const update = (k: string, v: any) => setForm((prev: any) => ({ ...prev, [k]: v }))

  const previewText = `Type: ${form.type}\nMaterial: ${form.material}\nFinish: ${form.finish}\nStyle: ${form.style}\nEngraving: ${form.engraving || "—"}\nCharms: ${form.charms.join(", ") || "—"}`

  const submit = () => {
    // In real app, send to API endpoint
    alert("Preferences submitted! We'll get back with a quote.")
    console.log("Customize submission", form)
  }

  const toggleCharm = (label: string) => {
    setForm((prev) => {
      const exists = prev.charms.includes(label)
      return { ...prev, charms: exists ? prev.charms.filter((c: string) => c !== label) : [...prev.charms, label] }
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-muted py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Customize</h1>
          <p className="text-muted-foreground text-lg">Design your silver jewellery and share preferences with our team.</p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Form */}
          <div className="space-y-6">
            {/* Type */}
            <div>
              <div className="text-sm font-semibold mb-2">Jewellery type</div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {TYPES.map((t) => (
                  <Button key={t} variant={form.type === t ? "default" : "outline"} onClick={() => update("type", t)}>
                    {t}
                  </Button>
                ))}
              </div>
            </div>

            {/* Material */}
            <div>
              <div className="text-sm font-semibold mb-2">Material</div>
              <div className="flex flex-wrap gap-2">
                {MATERIALS.map((m) => (
                  <Button key={m} variant={form.material === m ? "default" : "outline"} onClick={() => update("material", m)}>
                    {m}
                  </Button>
                ))}
              </div>
            </div>

            {/* Finish */}
            <div>
              <div className="text-sm font-semibold mb-2">Finish</div>
              <div className="flex flex-wrap gap-2">
                {FINISHES.map((f) => (
                  <Button key={f} variant={form.finish === f ? "default" : "outline"} onClick={() => update("finish", f)}>
                    {f}
                  </Button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div>
              <div className="text-sm font-semibold mb-2">Style</div>
              <div className="flex flex-wrap gap-2">
                {STYLES.map((s) => (
                  <Button key={s} variant={form.style === s ? "default" : "outline"} onClick={() => update("style", s)}>
                    {s}
                  </Button>
                ))}
              </div>
            </div>

            {/* Engraving */}
            <div>
              <div className="text-sm font-semibold mb-2">Engraving (optional)</div>
              <input
                value={form.engraving}
                onChange={(e) => update("engraving", e.target.value)}
                placeholder="Name / initials / date"
                maxLength={20}
                className="w-full h-10 px-3 rounded-md border bg-background"
              />
              <div className="text-xs text-muted-foreground mt-1">Max 20 characters. Additional fonts on request.</div>
            </div>

            {/* Charms */}
            <div>
              <div className="text-sm font-semibold mb-2">Add charms (optional)</div>
              <div className="flex flex-wrap gap-2">
                {["heart", "star", "infinity", "birthstone"].map((c) => (
                  <Button key={c} variant={form.charms.includes(c) ? "default" : "outline"} onClick={() => toggleCharm(c)}>
                    {c}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <Button onClick={submit}>Submit Preferences</Button>
              <a
                href={`mailto:hello@kaza-jewellery.com?subject=Customize%20Request&body=${encodeURIComponent(previewText)}`}
                className="inline-flex items-center justify-center h-9 px-4 rounded-md border"
              >
                Email Preview
              </a>
            </div>
          </div>

          {/* Preview */}
          <div className="border rounded-lg p-4 h-fit bg-muted/30">
            <div className="text-sm font-semibold mb-3">Preview</div>
            <div className="text-sm whitespace-pre-wrap font-mono bg-background rounded-md p-4 border">
              {previewText}
            </div>
            <div className="text-xs text-muted-foreground mt-3">
              Visual preview can be integrated here (e.g., layering SVG/3D assets) in a future iteration.
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
