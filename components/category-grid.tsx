import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Rings",
    image: "/silver-rings-collection.jpg",
    href: "/shop?category=rings",
  },
  {
    id: 2,
    name: "Chains",
    image: "/silver-chains-collection.jpg",
    href: "/shop?category=chains",
  },
  {
    id: 3,
    name: "Pendants",
    image: "/silver-pendants-collection.jpg",
    href: "/shop?category=pendants",
  },
  {
    id: 4,
    name: "Bracelets",
    image: "/silver-bracelets-collection.jpg",
    href: "/shop?category=bracelets",
  },
]

export default function CategoryGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">Shop by Category</h2>
          <p className="text-muted-foreground text-lg">Explore our curated collections of timeless silver jewellery</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link key={category.id} href={category.href}>
              <div
                className="group relative overflow-hidden rounded-lg aspect-square cursor-pointer stagger-item hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={category.image || "/placeholder.svg"}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/80 text-sm">Explore Collection</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
