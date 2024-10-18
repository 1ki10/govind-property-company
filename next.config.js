/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['randomuser.me', 'images.ctfassets.net'], // Menambahkan domain Contentful
  },
  // CSS Modules sudah aktif secara default, jadi tidak perlu ditambahkan secara eksplisit
}

module.exports = nextConfig