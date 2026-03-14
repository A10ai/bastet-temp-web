import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: isProd ? '/bastet-temp-web' : '',
  assetPrefix: isProd ? '/bastet-temp-web/' : '',
  images: {
    unoptimized: true,
  },
};

export default withNextIntl(nextConfig);
