"use client"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import { ChevronDown } from "lucide-react"

const allProducts = [
  {
    id: "1",
    name: "Minimalist Silver Ring",
    price: 2499,
    image: "/minimalist-silver-ring.jpg",
    category: "Rings",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "2",
    name: "Delicate Silver Chain",
    price: 3999,
    image: "/delicate-silver-chain.jpg",
    category: "Chains",
    rating: 4.9,
    reviews: 89,
  },
  {
    id: "3",
    name: "Pearl Silver Pendant",
    price: 4499,
    image: "/pearl-silver-pendant.jpg",
    category: "Pendants",
    rating: 4.7,
    reviews: 156,
  },
  {
    id: "4",
    name: "Geometric Silver Bracelet",
    price: 3299,
    image: "/geometric-silver-bracelet.jpg",
    category: "Bracelets",
    rating: 4.6,
    reviews: 92,
  },
  {
    id: "5",
    name: "Custom Name Ring",
    price: 2999,
    image: "/custom-name-silver-ring.jpg",
    category: "Rings",
    rating: 4.9,
    reviews: 203,
  },
  {
    id: "6",
    name: "Twisted Silver Bangle",
    price: 3599,
    image: "/minimalist-silver-ring.jpg",
    category: "Bracelets",
    rating: 4.7,
    reviews: 78,
  },
  {
    id: "7",
    name: "Layered Silver Necklace",
    price: 4299,
    image: "/delicate-silver-chain.jpg",
    category: "Chains",
    rating: 4.8,
    reviews: 145,
  },
  {
    id: "8",
    name: "Moonstone Silver Pendant",
    price: 5299,
    image: "/pearl-silver-pendant.jpg",
    category: "Pendants",
    rating: 4.9,
    reviews: 98,
  },
]

const categories = ["All", "Rings", "Chains", "Pendants", "Bracelets"]
const sortOptions = [
  { label: "Newest", value: "newest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Most Popular", value: "popular" },
]

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [sortBy, setSortBy] = useState("newest")
  const [showFilters, setShowFilters] = useState(false)

  const filteredProducts = allProducts.filter(
    (product) => selectedCategory === "All" || product.category === selectedCategory,
  )

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case "price-asc":
        return a.price - b.price
      case "price-desc":
        return b.price - a.price
      case "popular":
        return b.reviews - a.reviews
      default:
        return 0
    }
  })

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <section className="bg-muted py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-2 text-balance">Shop Our Collection</h1>
          <p className="text-muted-foreground text-lg">
            Discover {filteredProducts.length} timeless pieces of 925 silver jewellery
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className={`lg:col-span-1 ${showFilters ? "block" : "hidden lg:block"}`}>
              <div className="space-y-6">
                {/* Category Filter */}
                <div className="space-y-4">
                  <h3 className="font-semibold text-foreground text-lg">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setSelectedCategory(category)
                          setShowFilters(false)
                        }}
                        className={`block w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-foreground hover:bg-muted"
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-4 border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground text-lg">Price Range</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="rounded" />
                      <span>Under ₹3,000</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="rounded" />
                      <span>₹3,000 - ₹5,000</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                      <input type="checkbox" className="rounded" />
                      <span>Above ₹5,000</span>
                    </label>
                  </div>
                </div>

                {/* Rating Filter */}
                <div className="space-y-4 border-t border-border pt-6">
                  <h3 className="font-semibold text-foreground text-lg">Rating</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    {[5, 4, 3].map((rating) => (
                      <label key={rating} className="flex items-center gap-2 cursor-pointer hover:text-foreground">
                        <input type="checkbox" className="rounded" />
                        <span className="flex gap-1">
                          {[...Array(rating)].map((_, i) => (
                            <span key={i} className="text-accent">
                              ★
                            </span>
                          ))}
                          <span>& up</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              {/* Toolbar */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
                <p className="text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{sortedProducts.length}</span> products
                </p>

                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex-1 sm:flex-none px-4 py-2 border border-border rounded-lg text-foreground hover:bg-muted transition-colors"
                  >
                    Filters
                  </button>

                  <div className="relative flex-1 sm:flex-none">
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground appearance-none cursor-pointer hover:border-primary transition-colors"
                    >
                      {sortOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* Products Grid */}
              {sortedProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {sortedProducts.map((product) => (
                    <ProductCard key={product.id} {...product} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="text-muted-foreground text-lg">No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
