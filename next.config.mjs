// =============================
// NEXT.CONFIG.MJS - Next.js Configuration File
// =============================

/**
 * @type {import('next').NextConfig}
 * Main configuration object for Next.js
 */
const nextConfig = {
  // ESLint configuration for build process
  eslint: {
    ignoreDuringBuilds: true,
  },
  // TypeScript configuration for build process
  typescript: {
    ignoreBuildErrors: true,
  },
  // Image optimization settings
  images: {
    unoptimized: true,
  },
  // Experimental features
  experimental: {
    outputFileTracingRoot: process.cwd(), // Explicitly set workspace root to silence warning
  },
}

export default nextConfig