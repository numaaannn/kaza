import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://numaanssilvershop.com"
  const urls = [
    "/",
    "/shop",
    "/about",
    "/custom",
    "/cart",
  ]

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls
    .map(
      (u) => `\n  <url>\n    <loc>${baseUrl}${u}</loc>\n    <lastmod>${new Date().toISOString()}</lastmod>\n  </url>`
    )
    .join("")}
\n</urlset>`

  return new Response(xml, { headers: { "Content-Type": "application/xml" } })
}