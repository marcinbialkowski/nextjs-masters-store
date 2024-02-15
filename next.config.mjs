/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
  rewrites: () => [
    {
      source: '/products',
      destination: '/products/1',
    },
  ],
};

export default nextConfig;
