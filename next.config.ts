import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export as static site
  output: "export",

  // Enable React strict mode for highlighting potential problems
  reactStrictMode: true,

  // Use SWC for faster minification
  // swcMinify: true,

  // Ensure all URLs have trailing slashes (good for static hosting)
  trailingSlash: true,

  // Image optimization (for static export, only allow static domains or local images)
  images: {
    unoptimized: true, // Required for static export
    // Optionally, you can add domains if you use remote images
    // domains: ["your-remote-image-domain.com"],
  },

  // Asset prefix for GitHub Pages (adjust this based on your repo name)
  // If your repo is named "aih", use "/aih/"
  // If your repo is named "username.github.io", use "/"
  assetPrefix: process.env.NODE_ENV === 'production' ? '/aih/' : '',

  // Internationalization (optional, set default locale)
  // i18n: {
  //   locales: ["en"],
  //   defaultLocale: "en",
  // },
};

export default nextConfig;
