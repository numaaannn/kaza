import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import CategoryGrid from "@/components/category-grid"
import BrandStory from "@/components/brand-story"
import BestsellersSlider from "@/components/bestsellers-slider"
import TestimonialSlider from "@/components/testimonial-slider"
import InstagramStrip from "@/components/instagram-strip"
import NewsletterBanner from "@/components/newsletter-banner"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CategoryGrid />
      <BestsellersSlider />
      <BrandStory />
      <TestimonialSlider />
      <InstagramStrip />
      <NewsletterBanner />
      <Footer />
    </main>
  )
}
