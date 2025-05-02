/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowInvalidOrigin: true,
        },
      },
    async rewrites() {
      return [
        {
          source: '/api/:path*',
          destination: 'https://stunning-waddle-pvpx4wpwvqv26xwp-3000.app.github.dev/:path*',
        },
      ];
    },
  };
  
  export default nextConfig;
  