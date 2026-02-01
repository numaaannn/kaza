"use client"

import { useState } from "react"
import { Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-provider"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
  category: string
  rating?: number
  reviews?: number
}

export default function ProductCard({ id, name, price, image, category, rating = 4.5, reviews = 0 }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const { addItem } = useCart()

  return (
    <div className="group animate-fade-in">
      {/* Product Image Container */}
      <div
        className="relative bg-muted rounded-lg overflow-hidden mb-4 aspect-square hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />

        {/* Overlay Actions */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center gap-3 transition-all duration-300 animate-fade-in">
<Button
              size="sm"
              onClick={() => addItem({ id, name, price, image })}
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4 mr-2" />
              Add to Cart
            </Button>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="p-2 bg-background rounded-full hover:bg-primary/20 transition-colors duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <Heart
                className={`w-5 h-5 transition-all duration-300 ${
                  isFavorite ? "fill-accent text-accent scale-110" : "text-foreground"
                }`}
              />
            </button>
          </div>
        )}

        {/* Favorite Button (Mobile) */}
        <button
          onClick={() => setIsFavorite(!isFavorite)}
          className="absolute top-3 right-3 p-2 bg-background rounded-full hover:bg-primary/20 transition-colors duration-300 md:hidden hover:shadow-lg hover:-translate-y-1"
        >
          <Heart
            className={`w-5 h-5 transition-all duration-300 ${
              isFavorite ? "fill-accent text-accent scale-110" : "text-foreground"
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="space-y-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">{category}</p>
        <h3 className="text-sm font-semibold text-foreground line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>

        {/* Rating */}
        {reviews > 0 && (
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-xs transition-all duration-300 ${
                    i < Math.floor(rating) ? "text-accent scale-110" : "text-muted"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>
        )}

        {/* Price */}
        <p className="text-lg font-bold text-foreground">₹{price.toLocaleString()}</p>
      </div>
    </div>
  )
}
