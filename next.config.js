/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "urchin-app-4hcup.ondigitalocean.app",
      "tmdb.org",
      "themoviedb.org",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "*.githubusercontent.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
