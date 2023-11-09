/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "uxvwzaucatmhoopnapag.supabase.co",
      },
    ],
  },
};

module.exports = nextConfig;
