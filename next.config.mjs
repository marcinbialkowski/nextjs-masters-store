import nextMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    mdxRs: true,
    typedRoutes: true,
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  pageExtensions: ['ts', 'tsx', 'mdx'],
  redirects: async () => [
    {
      source: '/products',
      destination: '/products/1',
      permanent: true,
    },
    {
      source: '/categories/:categorySlug',
      destination: '/categories/:categorySlug/1',
      permanent: true,
    },
  ],
};

export default nextMDX()(nextConfig);
