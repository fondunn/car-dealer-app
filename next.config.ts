import type { NextConfig } from 'next';

const isProduction = process.env.NODE_ENV === 'production';
const GH_REPOSITORY_TITLE = '/car-dealer-app';
const nextConfig: NextConfig = {
  output: isProduction ? 'export' : 'standalone',
  basePath: isProduction ? GH_REPOSITORY_TITLE : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
