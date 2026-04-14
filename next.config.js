/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  env: {
    APP_VERSION: process.env.npm_package_version || '1.0.0',
  },
}

module.exports = nextConfig