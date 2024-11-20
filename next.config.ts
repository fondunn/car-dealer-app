import type { NextConfig } from 'next';
type Output = 'standalone' | 'export' | undefined;
const basePath =
  process.env.NODE_ENV === 'development'
    ? ''
    : process.env.GH_PAGES_TITLE || '';

const output = (process.env.OUTPUT as Output) || 'standalone';

const nextConfig: NextConfig = {
  output,
  basePath,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
