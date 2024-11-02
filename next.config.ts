// next.config.js
/** @type {import('next').NextConfig} */
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'], // Add Cloudinary domain
    // Alternatively, you can use remotePatterns for more specific control
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '/dwxm42izp/image/upload/**',
      },
    ],
  },
  compress: true,
  // swcMinify: true,
  
  // Configure webpack for additional optimizations
  webpack: (config: any, { dev, isServer }:{dev:any, isServer:any}) => {
    // Only run minification in production builds
    if (!dev && !isServer) {
      // Enable terser for JavaScript
      config.optimization.minimize = true;
      
      // Configure CSS minification
      config.optimization.minimizer.push(
        new CssMinimizerPlugin({
          minimizerOptions: {
            preset: ['default', {
              discardComments: { removeAll: true },
              normalizeWhitespace: true,
            }],
          },
        })
      );
    }
    
    return config;
  }
};

module.exports = nextConfig;