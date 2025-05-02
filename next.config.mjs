/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
          allowInvalidOrigin: true,
        },
      }
  };
  
  export default nextConfig;
  