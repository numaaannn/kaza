import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-background to-muted py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest animate-fade-in">
                Timeless Elegance
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance animate-slide-up">
                Pure 925 Silver Jewellery
              </h1>
              <p
                className="text-lg text-muted-foreground leading-relaxed text-pretty animate-slide-up"
                style={{ animationDelay: "0.2s" }}
              >
                Discover our curated collection of minimal, modern silver jewellery. Each piece is crafted with
                precision and designed for the contemporary you.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <Link href="/shop">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  Shop Now
                </Button>
              </Link>
              <Link href="/collections">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:-translate-y-1 transition-all duration-300 bg-transparent"
                >
                  View Collections
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div
              className="flex flex-wrap gap-6 pt-8 border-t border-border animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="space-y-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs font-semibold text-muted-foreground uppercase">Certified</p>
                <p className="text-sm font-medium text-foreground">925 Silver</p>
              </div>
              <div className="space-y-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs font-semibold text-muted-foreground uppercase">Handcrafted</p>
                <p className="text-sm font-medium text-foreground">In India</p>
              </div>
              <div className="space-y-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <p className="text-xs font-semibold text-muted-foreground uppercase">Lifetime</p>
                <p className="text-sm font-medium text-foreground">Warranty</p>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative h-96 md:h-full min-h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg overflow-hidden animate-slide-in-right">
            <img
              src="/placeholder.svg?key=vt5zh"
              alt="KAZA Silver Jewellery Collection"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
