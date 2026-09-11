import type { NextConfig } from 'next';

// Empty for mirandamurarik.com or username.github.io; /repo for project Pages.
const basePath = process.env.PAGES_BASE_PATH || '';
const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath,
  images: { unoptimized: true },
};
export default nextConfig;
