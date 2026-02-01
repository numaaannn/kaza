"use client"

import React, { useEffect, useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

type Slide = {
  id: string
  image?: string
  headline: string
  subtext: string
}

const slides: Slide[] = [
  { id: "slide-1", headline: "Timeless Minimal Silver", subtext: "Modern, handcrafted pieces in pure 925 silver. Simple. Versatile. Lasting." },
  { id: "slide-2", headline: "Everyday Elegance", subtext: "Signature rings and bands designed for daily wear with a refined touch." },
  { id: "slide-3", headline: "Statement Pendants", subtext: "Hand-polished pendants that elevate any outfit with subtle luxury." },
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
        <div className="hero-carousel grid grid-cols-1 md:grid-cols-2 items-center" style={{ minHeight: minHeight || 'auto' }}>
          {/* Slides */}
          <div className="relative col-span-1 md:col-span-2 h-[400px] md:h-full">
            {slides.map((s, i) => (
              <div
                key={s.id}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out pointer-events-none ${
                  i === index ? "opacity-100 z-10 pointer-events-auto" : "opacity-0 z-0"
                }`}
                aria-hidden={i === index ? "false" : "true"}
              >
                {/* Theme-aware background (no images) */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/60 via-white/30 to-transparent dark:from-black/60 dark:via-black/40 dark:to-transparent" />

                {/* decorative background text: stronger metallic treatment, separate light/dark gradients */}
                <div aria-hidden="true" className="absolute inset-0 flex items-center justify-end pr-4 md:pr-12 pointer-events-none z-0">
                  <div className="text-right select-none max-w-[48%]">
                    {/* Light-mode metallic text (visible in light mode only) */}
                    <span
                      className="block font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent drop-shadow-sm block dark:hidden"
                      style={{
                        background: 'linear-gradient(180deg, #ffffff 0%, #e6edf3 25%, #bfc8cf 55%, #9aa4ad 80%)',
                        WebkitBackgroundClip: 'text'
                      }}
                    >
                      Welcome
                    </span>

                    <span
                      className="block font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 bg-clip-text text-transparent drop-shadow-md block dark:hidden"
                      style={{
                        background: 'linear-gradient(180deg, #fbfcfd 0%, #dfe7ee 30%, #c7cfd6 60%, #a2aab1 100%)',
                        WebkitBackgroundClip: 'text'
                      }}
                    >
                      to Numaans Shop
                    </span>

                    {/* Dark-mode metallic text (visible in dark mode only) */}
                    <span
                      className="hidden dark:block font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent drop-shadow-sm"
                      style={{
                        background: 'linear-gradient(180deg, #e9eef3 0%, #c6ccd3 30%, #9aa3aa 65%, #6e7880 100%)',
                        WebkitBackgroundClip: 'text'
                      }}
                    >
                      Welcome
                    </span>

                    <span
                      className="hidden dark:block font-extrabold leading-tight tracking-tight text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 bg-clip-text text-transparent drop-shadow-md"
                      style={{
                        background: 'linear-gradient(180deg, #f0f5fa 0%, #d0d8df 30%, #9ea9b1 65%, #7b8087 100%)',
                        WebkitBackgroundClip: 'text'
                      }}
                    >
                      to Numaans Shop
                    </span>
                  </div>
                </div>

                {/* decorative subtle center mark to anchor the empty background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-24 h-24 rounded-full bg-white/10 dark:bg-black/20 blur-sm" />
                </div>
              </div>
            ))}
          </div>

          {/* Content (left-aligned) - use theme-aware foreground colors instead of hard-coded black */}
          <div className="col-span-1 px-6 md:px-12 lg:px-20 z-20">
            <div className="max-w-xl text-left text-foreground h-full flex flex-col justify-center">
              {/* Render the current slide headline and subtext as plain text (no images) */}
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">{slides[index].headline}</h2>
              {slides[index].subtext && (
                <p className="mt-4 text-lg text-foreground opacity-80 max-w-xl">{slides[index].subtext}</p>
              )}

              <div className="mt-8">
                <Link href="/shop">
                  <Button size="lg" className="bg-foreground text-background px-6 py-3 rounded-md shadow-md hover:shadow-lg transition transform hover:-translate-y-0.5">
                    Shop Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          {/* Controls (right side on desktop) */}
            <div className="col-span-1 hidden md:flex justify-end items-center px-8 z-20">
            <div className="flex flex-col items-end gap-4">
              {/* No slide controls when hero is a single text slide */}
              {slides.length > 1 && (
                <>
                  <div className="flex gap-3">
                    {slides.map((_, i) => (
                      <button key={i} onClick={() => setIndex(i)} aria-label={`Go to slide ${i + 1}`} className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-foreground scale-110" : "bg-foreground opacity-40"}`} />
                    ))}
                  </div>

                  <div className="flex gap-3 items-center text-foreground opacity-80">
                    <button onClick={() => setIndex((i) => (i - 1 + slides.length) % slides.length)} aria-label="Previous slide" className="px-3 py-2 border border-border rounded-md hover:bg-muted">‹</button>
                    <button onClick={() => setIndex((i) => (i + 1) % slides.length)} aria-label="Next slide" className="px-3 py-2 border border-border rounded-md hover:bg-muted">›</button>
                  </div>
                </>
              )}
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