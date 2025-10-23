export interface Product {
  id: string
  name: string
  category: 'rings' | 'necklaces' | 'earrings' | 'bracelets' | 'chains' | 'pendants'
  gender: 'men' | 'women' | 'unisex'
  price: number
  originalPrice?: number
  image: string
  metal: 'gold' | 'silver' | 'platinum' | 'diamond'
  weight?: string
  purity?: string
  featured?: boolean
  trending?: boolean
}

export const jewelryProducts: Product[] = [
  // Women's Collection
  {
    id: 'w001',
    name: 'Radiant Diamond Solitaire Ring',
    category: 'rings',
    gender: 'women',
    price: 125000,
    originalPrice: 145000,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
    metal: 'diamond',
    weight: '2.5g',
    purity: '18K',
    featured: true,
    trending: true
  },
  {
    id: 'w002',
    name: 'Eternal Love Necklace Set',
    category: 'necklaces',
    gender: 'women',
    price: 89000,
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    metal: 'gold',
    weight: '12.3g',
    purity: '22K',
    featured: true
  },
  {
    id: 'w003',
    name: 'Pearl Drop Earrings',
    category: 'earrings',
    gender: 'women',
    price: 45000,
    originalPrice: 52000,
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=400&h=400&fit=crop',
    metal: 'gold',
    weight: '4.2g',
    purity: '18K',
    trending: true
  },
  {
    id: 'w004',
    name: 'Royal Heritage Bangles',
    category: 'bracelets',
    gender: 'women',
    price: 78000,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=400&fit=crop',
    metal: 'gold',
    weight: '25.6g',
    purity: '22K',
    featured: true
  },
  {
    id: 'w005',
    name: 'Floral Diamond Pendant',
    category: 'pendants',
    gender: 'women',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=400&h=400&fit=crop',
    metal: 'diamond',
    weight: '3.8g',
    purity: '18K',
    trending: true
  },
  {
    id: 'w006',
    name: 'Contemporary Gold Chain',
    category: 'chains',
    gender: 'women',
    price: 67000,
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=400&fit=crop',
    metal: 'gold',
    weight: '8.9g',
    purity: '22K'
  },

  // Men's Collection
  {
    id: 'm001',
    name: 'Executive Gold Ring',
    category: 'rings',
    gender: 'men',
    price: 85000,
    originalPrice: 95000,
    image: 'https://images.unsplash.com/photo-1623874228601-f4193c7b5944?w=400&h=400&fit=crop',
    metal: 'gold',
    weight: '6.5g',
    purity: '22K',
    featured: true
  },
  {
    id: 'm002',
    name: 'Bold Statement Chain',
    category: 'chains',
    gender: 'men',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    metal: 'gold',
    weight: '35.2g',
    purity: '22K',
    featured: true,
    trending: true
  },
  {
    id: 'm003',
    name: 'Classic Gold Bracelet',
    category: 'bracelets',
    gender: 'men',
    price: 75000,
    image: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=400&h=400&fit=crop',
    metal: 'gold',
    weight: '18.4g',
    purity: '18K'
  },
  {
    id: 'm004',
    name: 'Modern Platinum Ring',
    category: 'rings',
    gender: 'men',
    price: 135000,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=400&fit=crop',
    metal: 'platinum',
    weight: '8.2g',
    purity: '95%',
    trending: true
  }
]

export const categories = [
  { id: 'rings', name: 'Rings', icon: '💍' },
  { id: 'necklaces', name: 'Necklaces', icon: '📿' },
  { id: 'earrings', name: 'Earrings', icon: '👂' },
  { id: 'bracelets', name: 'Bracelets', icon: '💫' },
  { id: 'chains', name: 'Chains', icon: '⛓️' },
  { id: 'pendants', name: 'Pendants', icon: '💎' }
]

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    review: "Absolutely stunning jewelry! The craftsmanship is exceptional and the customer service is top-notch.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Arjun Patel",
    review: "Bought a wedding ring set from here. Quality is amazing and the designs are contemporary yet traditional.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Sneha Gupta",
    review: "Love my diamond necklace! It's exactly what I wanted for my special occasion.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
]