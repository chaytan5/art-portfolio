/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dywu7jrjp/image/upload/**",
      },
    ],
  },
};

module.exports = nextConfig;
