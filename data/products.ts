export interface Product {
  id: string
  name: string
  price: number
  description: string
  image: string
  category: string
  purity: string
  weight: string
  inStock: boolean
}

export const products: Product[] = [
  {
    id: "1",
    name: "ring",
    price: 0,
    description: "A sleek and simple silver ring perfect for everyday wear.",
    image: "/minimalist-silver-ring.jpg",
    category: "rings",
    purity: "925 Silver",
    weight: "2.5g",
    inStock: true,
  },
  {
    id: "2",
    name: "chain",
    price: 0,
    description: "Elegant chain necklace with a timeless design.",
    image: "/delicate-silver-chain.jpg",
    category: "chains",
    purity: "925 Silver",
    weight: "4.2g",
    inStock: true,
  },
  {
    id: "3",
    name: "pendant",
    price: 0,
    description: "Sophisticated pendant featuring a lustrous pearl.",
    image: "/silver-pearl-pendant.jpg",
    category: "pendants",
    purity: "925 Silver",
    weight: "3.8g",
    inStock: true,
  },
  {
    id: "4",
    name: "ring",
    price: 0,
    description: "Set of three minimalist rings to wear together or separately.",
    image: "/stacked-silver-rings.jpg",
    category: "rings",
    purity: "925 Silver",
    weight: "6.0g",
    inStock: true,
  },
]
