// =============================
// NEXT.CONFIG.MJS - Next.js Configuration File
// =============================

/**
 * @type {import('next').NextConfig}
 * Main configuration object for Next.js
 */
const nextConfig = {

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
    // (no experimental flags required currently)
  },

  // Output tracing root moved to top-level (preferred) to avoid invalid config warnings
  outputFileTracingRoot: process.cwd(),
}

export default nextConfig