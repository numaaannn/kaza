/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: {
    outputFileTracingRoot: process.cwd(), // Explicitly set workspace root to silence warning
  },
}

export default nextConfig