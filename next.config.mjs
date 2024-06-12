/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i1.pickpik.com",
      },
    ],
  },
};

export default nextConfig;
