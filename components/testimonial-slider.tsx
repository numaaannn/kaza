"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Fashion Enthusiast",
    content:
      "KAZA jewellery is absolutely stunning! The quality is exceptional and the designs are so elegant. I've received countless compliments on my purchases.",
    rating: 5,
    image: "/woman-avatar.png",
  },
  {
    id: 2,
    name: "Arjun Patel",
    role: "Jewellery Collector",
    content:
      "Finally found a brand that understands minimalist design. Each piece is a work of art. The customer service is impeccable too!",
    rating: 5,
    image: "/man-avatar.png",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    role: "Wedding Planner",
    content:
      "I recommend KAZA to all my clients. The silver jewellery is perfect for both everyday wear and special occasions. Truly timeless pieces.",
    rating: 5,
    image: "/woman-avatar-2.png",
  },
]

export default function TestimonialSlider() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => {
    setCurrent(index)
  }

  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">What Our Customers Say</h2>
          <p className="text-muted-foreground text-lg">Join thousands of satisfied customers who love KAZA</p>
        </div>

        <div className="relative">
          {/* Testimonial Card */}
          <div className="bg-background rounded-lg p-8 md:p-12 shadow-sm border border-border">
            <div className="flex gap-1 mb-6">
              {[...Array(testimonials[current].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>

            <p className="text-lg text-foreground mb-8 leading-relaxed text-pretty">
              "{testimonials[current].content}"
            </p>

            <div className="flex items-center gap-4">
              <img
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-foreground">{testimonials[current].name}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={() => goToSlide((current - 1 + testimonials.length) % testimonials.length)}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === current ? "bg-primary w-8" : "bg-muted-foreground"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={() => goToSlide((current + 1) % testimonials.length)}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
