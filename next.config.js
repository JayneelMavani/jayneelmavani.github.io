/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'your-domain.com'],
  },
  experimental: {
    optimizePackageImports: ['gsap'],
  },
  // Enable optimizations for production
  swcMinify: true,
  compress: true,
  poweredByHeader: false,
}

module.exports = nextConfig
