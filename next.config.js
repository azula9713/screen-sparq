/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'cdn.sanity.io',
      'lh3.googleusercontent.com',
      'avatars.githubusercontent.com',
    ],
  },
}

module.exports = nextConfig
