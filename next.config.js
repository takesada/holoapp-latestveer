/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

// next.config.js
module.exports = {
  experimental: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }
}

module.exports = nextConfig
