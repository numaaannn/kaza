import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata = {
  title: "About KAZA | 925 Silver Jewellery",
  description:
    "KAZA crafts timeless 925 silver jewellery with precision and passion. Learn our story and what makes our pieces unique.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold">Our Story</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Founded with a love for craftsmanship, KAZA creates minimal, modern jewellery in pure 925 sterling silver.
            Each piece is designed for everyday elegance and built to last, crafted by skilled artisans with meticulous
            attention to detail.
          </p>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <img
              src="/artisan-hands-crafting-silver-jewellery.jpg"
              alt="KAZA artisans crafting silver jewellery"
              className="w-full rounded-lg object-cover"
            />
            <div className="space-y-4">
              <h2 className="text-2xl font-semibold">What We Stand For</h2>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                <li>Purity and authenticity with certified 925 silver</li>
                <li>Thoughtful design centered on comfort and style</li>
                <li>Responsible, small-batch production</li>
                <li>Lifetime care and support for your jewellery</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}