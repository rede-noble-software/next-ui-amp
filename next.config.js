/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to enable server-side rendering
  // Removed 'trailingSlash: true' as it's not needed for SSR
  // Re-enabled image optimization for better performance
  images: {
    // Image optimization is available with Node.js server
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable experimental features if needed
  experimental: {
    // Add any experimental features here
  }
}

module.exports = nextConfig
