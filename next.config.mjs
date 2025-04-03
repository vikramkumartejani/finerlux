/** @type {import('next').NextConfig} */
const nextConfig = {
     images: {
       deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
       formats: ['image/webp', 'image/avif'],
     },
     compress: true,
     webpack(config) {
       config.module.rules.push({
         test: /\.svg$/,
         use: ['@svgr/webpack']
       });
       return config;
     }
   }
   
   export default nextConfig;