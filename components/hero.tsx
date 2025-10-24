"use client"

import React, { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Slide = {
  id: string
  image: string
  headline: string
  subtext: string
}

const slides: Slide[] = [
  { id: "slide-1", image: "/luxury-silver-jewelry-display-elegant-minimalist.jpg", headline: "Timeless Minimal Silver", subtext: "Modern, handcrafted pieces in pure 925 silver. Simple. Versatile. Lasting." },
  { id: "slide-2", image: "/minimal-silver-rings.jpg", headline: "Everyday Elegance", subtext: "Signature rings and bands designed for daily wear with a refined touch." },
  { id: "slide-3", image: "/pearl-silver-pendant.jpg", headline: "Statement Pendants", subtext: "Hand-polished pendants that elevate any outfit with subtle luxury." },
]

export default function Hero() {
  const [index, setIndex] = useState(0)
  // allow mobile to flow naturally by default (0 = no forced min-height)
  const [minHeight, setMinHeight] = useState<number>(0)
  const timeoutRef = useRef<number | null>(null)
  const delay = 5000

  useEffect(() => {
    const next = () => setIndex((i) => (i + 1) % slides.length)
    timeoutRef.current = window.setTimeout(next, delay)
    return () => { if (timeoutRef.current) window.clearTimeout(timeoutRef.current) }
  }, [index])

  useEffect(() => {
    const update = () => {
      const nav = document.querySelector("nav") as HTMLElement | null
      const navH = nav ? Math.ceil(nav.getBoundingClientRect().height) : 64
      // On small screens let the layout size naturally (no forced 100vh)
      if (window.innerWidth < 768) {
        setMinHeight(0)
        return
      }
      // On desktop/tablet enforce a viewport-aware height but with a lower min
      const h = Math.max(480, window.innerHeight - navH)
      setMinHeight(h)
    }
    update()
    window.addEventListener("resize", update)
    let mo: MutationObserver | null = null
    const navEl = document.querySelector("nav")
    if (navEl && typeof MutationObserver !== "undefined") {
      mo = new MutationObserver(() => update())
      mo.observe(navEl, { attributes: true, subtree: true, childList: true })
    }
    return () => {
      window.removeEventListener("resize", update)
      if (mo) mo.disconnect()
    }
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % slides.length)
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + slides.length) % slides.length)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="hero-carousel grid grid-cols-1 md:grid-cols-2 items-center" style={{ minHeight }}>
          {/* Slides */}
          <div className="relative col-span-1 md:col-span-2 h-full">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out pointer-events-none ${
                  i === index ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0"
                }`}
                aria-hidden={i === index ? "false" : "true"}
              >
                <img src={s.image} alt={s.headline} className="absolute inset-0 w-full h-full object-cover" />
                {/* lighter overlay so black text is readable */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent" />
              </div>
            ))}
          </div>

          {/* Content (left-aligned) with black text */}
          <div className="col-span-1 px-6 md:px-12 lg:px-20 z-20">
            <div className="max-w-xl text-left text-black h-full flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-widest opacity-90">KAZA Jewellery</p>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
                {slides[index].headline}
              </h2>
              <p className="mt-4 text-lg text-black/80 max-w-xl">{slides[index].subtext}</p>

              <div className="mt-8">
                <Link href="/collections">
                  <Button size="lg" className="bg-black text-white px-6 py-3 rounded-md shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5">
                    Explore Collections
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Controls (right side on desktop) */}
            <div className="col-span-1 hidden md:flex justify-end items-center px-8 z-20">
            <div className="flex flex-col items-end gap-4">
              <div className="flex gap-3">
              {slides.map((_, i) => (
                <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-black scale-110" : "bg-black/40"}`} />
              ))}
              </div>

              <div className="flex gap-3 items-center text-black/80">
              <button onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)} aria-label="Previous slide" className="px-3 py-2 border border-black/30 rounded-md hover:bg-black/5">‹</button>
              <button onClick={() => setIndex((i) => (i + 1) % slides.length)} aria-label="Next slide" className="px-3 py-2 border border-black/30 rounded-md hover:bg-black/5">›</button>
              </div>
            </div>
            </div>

            {/* reduce hero image height slightly so bottom is visible without scrolling */}
            <style>{`
            /* Use the viewport-height sizing only on medium+ screens. On mobile
               keep the hero flexible so content can stack and avoid vertical
               overflow (browser UI, address bar, etc). */
            @media (min-width: 768px) {
              .hero-carousel .absolute.inset-0 img,
              .hero-carousel > .relative img {
                height: calc(100vh - 0.5cm) !important;
                max-height: calc(100vh - 0.5cm) !important;
              }
              .hero-carousel .absolute.inset-0 > div,
              .hero-carousel .absolute.inset-0 .bg-gradient-to-r {
                height: calc(100vh - 0.5cm) !important;
                max-height: calc(100vh - 0.5cm) !important;
              }
              /* ensure the hero container doesn't force full 100vh via earlier injected styles */
              .hero-carousel {
                min-height: calc(100vh - 0.5cm) !important;
                height: calc(100vh - 0.5cm) !important;
              }
            }
            `}</style>
        </div>
      </div>
    </section>
  )
}
// Inject simple runtime styles to make the hero images full-screen backgrounds
(function () {
  if (typeof document === "undefined") return
  const id = "hero-fullscreen-styles"
  if (document.getElementById(id)) return

  const style = document.createElement("style")
  style.id = id
  style.textContent = `
    @media (min-width: 768px) {
      .hero-carousel {
        min-height: 100vh !important;
        height: 100vh !important;
        width: 100vw !important;
        margin-left: calc(50% - 50vw) !important;
        margin-right: calc(50% - 50vw) !important;
        left: 0;
        right: 0;
        position: relative;
      }

      section.relative.overflow-hidden.bg-background { min-height: 100vh !important; }

      .hero-carousel > .relative img,
      .hero-carousel .absolute.inset-0 img {
        width: 100vw !important;
        height: 100vh !important;
        object-fit: cover !important;
        display: block;
      }

      .hero-carousel .absolute.inset-0 > div,
      .hero-carousel .absolute.inset-0 .bg-gradient-to-r {
        height: 100vh !important;
        width: 100vw !important;
        left: 0;
      }
    }
  `
  document.head.appendChild(style)
})()