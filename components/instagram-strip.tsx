import Link from "next/link"

const instagramPosts = [
  {
    id: 1,
    image: "/instagram-silver-jewelry-1.jpg",
    link: "https://instagram.com",
  },
  {
    id: 2,
    image: "/instagram-silver-jewelry-2.jpg",
    link: "https://instagram.com",
  },
  {
    id: 3,
    image: "/instagram-silver-jewelry-3.jpg",
    link: "https://instagram.com",
  },
  {
    id: 4,
    image: "/instagram-silver-jewelry-4.jpg",
    link: "https://instagram.com",
  },
  {
    id: 5,
    image: "/instagram-silver-jewelry-5.jpg",
    link: "https://instagram.com",
  },
  {
    id: 6,
    image: "/placeholder.svg?height=300&width=300",
    link: "https://instagram.com",
  },
]

export default function InstagramStrip() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2 text-balance">Follow Us on Instagram</h2>
          <p className="text-muted-foreground mb-6">@numaanssilvershop</p>
          <Link
            href="https://instagram.com"
            target="_blank"
            className="inline-block text-primary font-semibold hover:text-primary/80 transition-colors"
          >
            Follow for daily inspiration
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {instagramPosts.map((post) => (
            <Link key={post.id} href={post.link} target="_blank">
              <div className="relative overflow-hidden rounded-lg aspect-square group cursor-pointer">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt="Instagram post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold">
                    View
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
