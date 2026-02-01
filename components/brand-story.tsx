import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function BrandStory() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image (replaced with About emblem) */}
          <div className="order-2 md:order-1">
            <div className="w-full rounded-lg overflow-hidden bg-muted/50 flex items-center justify-center p-6">
              <img src="/logo.png" alt="Numaans Silver Shop Artisan Emblem" className="w-full h-full object-contain" loading="eager" />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div className="space-y-4">
              <p className="text-sm font-semibold text-primary uppercase tracking-widest">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-balance">
                Crafted with Passion, Worn with Pride
              </h2>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                Numaans Silver Shop was born from a vision to create timeless silver jewellery that celebrates individuality and
                minimalist elegance. Each piece is handcrafted by skilled artisans using pure 925 silver, ensuring
                quality and durability that lasts a lifetime.
              </p>
              <p className="text-muted-foreground leading-relaxed text-pretty">
                We believe in sustainable practices and ethical sourcing. Our commitment to excellence means every
                detail matters, from the initial design to the final polish.
              </p>
            </div>

            <Link href="/about">
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
