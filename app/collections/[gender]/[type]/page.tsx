import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import ProductCard from "@/components/product-card"
import FiltersBar from "@/components/collections/FiltersBar"
import { products, type Gender, type Category } from "@/lib/products"

function withinPrice(price: number, tier?: string | null) {
  if (!tier) return true
  if (tier === "low") return price <= 3000
  if (tier === "medium") return price > 3000 && price <= 6000
  if (tier === "high") return price > 6000
  return true
}

function csvHas(q: URLSearchParams, key: string, val: string) {
  const raw = q.get(key)
  if (!raw) return true
  return raw.split(",").includes(val)
}

function anyCSV(q: URLSearchParams, key: string, vals: (string | undefined | null)[]) {
  const raw = q.get(key)
  if (!raw) return true
  const set = new Set(raw.split(","))
  return vals.some((v) => (v ? set.has(v) : false))
}

export default function Page({
  params,
  searchParams,
}: {
  params: { gender: Gender; type: Category }
  searchParams: { [k: string]: string | string[] | undefined }
}) {
  const { gender, type } = params
  const qp = new URLSearchParams(
    Object.entries(searchParams).flatMap(([k, v]) => (Array.isArray(v) ? [[k, v.join(",")]] : v ? [[k, v]] : []))
  )

  const filtered = products.filter((p) => {
    if (p.category !== type) return false
    if (p.gender && p.gender !== gender) return false
    // Price tier
    if (!withinPrice(p.price, qp.get("price"))) return false
    // Material type
    if (!anyCSV(qp, "material", [p.materialType])) return false
    // Style
    if (!anyCSV(qp, "style", [p.style])) return false
    // Occasion
    if (!anyCSV(qp, "occasion", [p.occasion])) return false
    // New arrivals
    const wantNew = qp.get("new")?.split(",").includes("1")
    if (wantNew && !p.newArrival) return false
    // Best sellers
    const wantBest = qp.get("bestseller")?.split(",").includes("1")
    if (wantBest && !p.bestseller) return false
    return true
  })

  const titleType = type.charAt(0).toUpperCase() + type.slice(1)
  const titleGender = gender === "women" ? "Women" : "Men"

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="bg-muted py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
            {titleGender} · {titleType}
          </h1>
          <p className="text-muted-foreground">Refine by price, material, style, occasion, and more.</p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <FiltersBar />

          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((p) => (
                <ProductCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  image={p.image}
                  category={p.category}
                  rating={p.rating}
                  reviews={p.reviews}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No products match the selected filters.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
