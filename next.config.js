/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "picsum.photos",
      "placeimg.com",
      "i0.wp.com",
      "loremflickr.com",
      "api.escuelajs.co",
    ],
  },
};

module.exports = nextConfig;
