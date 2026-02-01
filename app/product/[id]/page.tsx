"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Heart, Share2, ShoppingBag, Truck, Shield, RotateCcw } from "lucide-react"
import ProductCard from "@/components/product-card"

const productDetails: Record<string, any> = {
  "1": {
    id: "1",
    name: "Ring",
    price: 0,
    originalPrice: 2999,
    image: "/icons/rings.svg",
    category: "Rings",
    rating: 4.8,
    reviews: 124,
    description:
      "A timeless minimalist ring crafted from pure 925 silver. Perfect for everyday wear, this elegant piece features a sleek design that complements any style.",
    details: [
      "Material: 925 Sterling Silver",
      "Weight: 3.5g",
      "Size: Adjustable (6-8)",
      "Finish: Polished",
      "Hypoallergenic",
    ],
    images: ["/icons/rings.svg", "/icons/rings.svg", "/icons/rings.svg"],
  },
  "2": {
    id: "2",
    name: "Chain",
    price: 0,
    originalPrice: 4499,
    image: "/icons/chains.svg",
    category: "Chains",
    rating: 4.9,
    reviews: 89,
    description:
      "An exquisite delicate chain that adds a touch of elegance to any outfit. Made from premium 925 silver with a refined finish.",
    details: [
      "Material: 925 Sterling Silver",
      "Length: 18 inches (adjustable)",
      "Weight: 4.2g",
      "Clasp: Lobster",
      "Hypoallergenic",
    ],
    images: ["/icons/chains.svg", "/icons/chains.svg", "/icons/chains.svg"],
  },
}

const relatedProducts = [
  {
    id: "3",
    name: "Pendant",
    price: 0,
    image: "/icons/pendants.svg",
    category: "Pendants",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    name: "Bracelet",
    price: 0,
    image: "/icons/bracelets.svg",
    category: "Bracelets",
    rating: 4.6,
    reviews: 92,
  },
  {
    id: "5",
    name: "Ring",
    price: 0,
    image: "/icons/rings.svg",
    category: "Rings",
    rating: 4.9,
    reviews: 203,
  },
]

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = productDetails[params.id] || productDetails["1"]
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Product Section */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="bg-muted rounded-lg overflow-hidden aspect-square">
                <img
                  src={product.images[selectedImage] || product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-8"
                />
              </div>
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? "border-primary" : "border-border"
                    }`}
                  >
                    <img
                      src={image || "/placeholder.svg"}
                      alt={`View ${index + 1}`}
                      className="w-full h-full object-contain p-2"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-2">{product.category}</p>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">{product.name}</h1>

                {/* Rating */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`text-lg ${i < Math.floor(product.rating) ? "text-accent" : "text-muted"}`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-foreground">₹{product.price.toLocaleString()}</span>
                  <span className="text-lg text-muted-foreground line-through">
                    ₹{product.originalPrice.toLocaleString()}
                  </span>
                  {discount > 0 && (
                    <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {discount}% OFF
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed text-pretty mb-6">{product.description}</p>
              </div>

              {/* Product Details */}
              <div className="border-t border-b border-border py-6 space-y-3">
                {product.details.map((detail: string, index: number) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{detail.split(":")[0]}</span>
                    <span className="font-medium text-foreground">{detail.split(":")[1]}</span>
                  </div>
                ))}
              </div>

              {/* Actions */}
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    >
                      −
                    </button>
                    <span className="px-6 py-2 font-semibold text-foreground">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-4 py-2 text-foreground hover:bg-muted transition-colors"
                    >
                      +
                    </button>
                  </div>
                  <Button className="flex-1 bg-secondary text-secondary-foreground hover:bg-secondary/90 text-base py-6">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    Add to Cart
                  </Button>
                </div>

                <div className="flex gap-3">
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="flex-1 px-4 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2"
                  >
                    <Heart className={`w-5 h-5 ${isFavorite ? "fill-accent text-accent" : ""}`} />
                    {isFavorite ? "Saved" : "Save"}
                  </button>
                  <button className="flex-1 px-4 py-3 border border-border rounded-lg text-foreground hover:bg-muted transition-colors flex items-center justify-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                <div className="text-center space-y-2">
                  <Truck className="w-6 h-6 text-primary mx-auto" />
                  <p className="text-xs font-semibold text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center space-y-2">
                  <Shield className="w-6 h-6 text-primary mx-auto" />
                  <p className="text-xs font-semibold text-muted-foreground">Lifetime Warranty</p>
                </div>
                <div className="text-center space-y-2">
                  <RotateCcw className="w-6 h-6 text-primary mx-auto" />
                  <p className="text-xs font-semibold text-muted-foreground">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="border-t border-border pt-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-balance">You Might Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
