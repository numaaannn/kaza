"use client"

import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { GENDER_TYPES, type Gender } from "@/lib/products"

export default function CollectionsPage() {
  const router = useRouter()
  const [gender, setGender] = useState<Gender | null>(null)

  const onTypeClick = (t: string) => {
    if (!gender) return
    router.push(`/collections/${gender}/${t}`)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-muted py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2">Collections</h1>
              <p className="text-muted-foreground text-lg">Browse by gender, then pick a type to explore.</p>
            </div>
            <Link
              href="/collections/customize"
              className="inline-flex items-center justify-center h-10 px-4 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors"
            >
              Customize Jewellery
            </Link>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="flex gap-4">
            {(["women", "men"] as const).map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`px-6 py-3 rounded-lg border transition-all ${
                  gender === g ? "bg-foreground text-background border-foreground" : "bg-background text-foreground hover:bg-muted"
                }`}
              >
                {g === "women" ? "Women" : "Men"}
              </button>
            ))}
          </div>

          {gender ? (
            <div>
              <h2 className="text-xl font-semibold mb-4">Select a type for {gender === "women" ? "Women" : "Men"}</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {GENDER_TYPES[gender].map((t) => (
                  <button
                    key={t}
                    onClick={() => onTypeClick(t)}
                    className="p-4 rounded-lg border hover:shadow-md hover:-translate-y-0.5 transition-all text-sm font-medium capitalize"
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-muted-foreground">Choose Men or Women to see available types.</div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
