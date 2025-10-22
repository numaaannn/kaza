export interface Product {
  id: string
  name: string
  category: "rings" | "chains" | "pendants" | "custom"
  price: number
  originalPrice?: number
  image: string
  images: string[]
  description: string
  material: string
  weight: string
  rating: number
  reviews: number
  inStock: boolean
  bestseller?: boolean
  featured?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "Minimalist Silver Ring",
    category: "rings",
    price: 4999,
    image: "/minimalist-silver-ring.jpg",
    images: ["/minimalist-silver-ring-front.jpg", "/minimalist-silver-ring-side.jpg", "/minimalist-silver-ring-detail.jpg"],
    description:
      "A timeless minimalist ring crafted from pure 925 silver. Perfect for everyday wear with its sleek design and comfortable fit.",
    material: "925 Sterling Silver",
    weight: "2.5g",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    bestseller: true,
    featured: true,
  },
  {
    id: "2",
    name: "Delicate Silver Chain",
    category: "chains",
    price: 6499,
    originalPrice: 7999,
    image: "/delicate-silver-chain.jpg",
    images: ["/delicate-silver-chain-full.jpg", "/delicate-silver-chain-close.jpg", "/delicate-silver-chain-detail.jpg"],
    description:
      "An elegant 18-inch silver chain with a refined link design. Versatile enough to wear alone or layered with pendants.",
    material: "925 Sterling Silver",
    weight: "3.2g",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    bestseller: true,
  },
  {
    id: "3",
    name: "Geometric Silver Pendant",
    category: "pendants",
    price: 5499,
    image: "/geometric-silver-pendant.jpg",
    images: ["/geometric-silver-pendant-front.jpg", "/geometric-silver-pendant-back.jpg", "/geometric-silver-pendant-detail.jpg"],
    description:
      "A modern geometric pendant that adds an artistic touch to any outfit. Handcrafted with precision and attention to detail.",
    material: "925 Sterling Silver",
    weight: "1.8g",
    rating: 4.7,
    reviews: 56,
    inStock: true,
    featured: true,
  },
  {
    id: "4",
    name: "Custom Name Ring",
    category: "custom",
    price: 7999,
    image: "/custom-name-silver-ring.jpg",
    images: ["/custom-name-ring-front.jpg", "/custom-name-ring-side.jpg", "/custom-name-ring-detail.jpg"],
    description:
      "Personalize your jewelry with a custom engraved name ring. Each piece is made to order with your unique specifications.",
    material: "925 Sterling Silver",
    weight: "3.5g",
    rating: 4.9,
    reviews: 203,
    inStock: true,
    bestseller: true,
  },
  {
    id: "5",
    name: "Twisted Silver Bangle",
    category: "rings",
    price: 8999,
    image: "/twisted-silver-bangle.jpg",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "A statement bangle with a beautiful twisted design. Perfect for stacking or wearing as a standalone piece.",
    material: "925 Sterling Silver",
    weight: "4.2g",
    rating: 4.6,
    reviews: 78,
    inStock: true,
  },
  {
    id: "6",
    name: "Pearl Silver Pendant",
    category: "pendants",
    price: 9999,
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "An elegant pendant featuring a lustrous pearl set in 925 silver. A timeless piece for special occasions.",
    material: "925 Sterling Silver with Pearl",
    weight: "2.1g",
    rating: 4.8,
    reviews: 92,
    inStock: true,
    featured: true,
  },
  {
    id: "7",
    name: "Layered Silver Chain Set",
    category: "chains",
    price: 11999,
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "A set of three delicate chains in varying lengths, perfect for creating a layered look. Mix and match as desired.",
    material: "925 Sterling Silver",
    weight: "5.8g",
    rating: 4.7,
    reviews: 134,
    inStock: true,
    bestseller: true,
  },
  {
    id: "8",
    name: "Signet Silver Ring",
    category: "rings",
    price: 6999,
    image: "/placeholder.svg?height=400&width=400",
    images: [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ],
    description:
      "A classic signet ring with a polished finish. Versatile and elegant, suitable for both casual and formal wear.",
    material: "925 Sterling Silver",
    weight: "3.8g",
    rating: 4.5,
    reviews: 67,
    inStock: true,
  },
]
