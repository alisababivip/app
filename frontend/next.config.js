const TerserPlugin = require("terser-webpack-plugin");
const JavaScriptObfuscator = require("webpack-obfuscator");

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    workerThreads: false,
    cpus: 1,
    parallelServerCompiles: false,
    parallelServerBuildTraces: false,
    webpackBuildWorker: false,
  },
  reactStrictMode: false,
  trailingSlash: false,
  images: {
    loader: "custom",
    loaderFile: "./jsdevlivr.js",
    minimumCacheTTL: 43200,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.jsdelivr.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "gwfd.qatgwawm.net",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "bks1998.shop",
        pathname: "**",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/account/:path*",
        destination: "/src/app/account/:path*",
      },
      {
        source: "/api/:path*",
        destination: "https://betapi.spaceplus.live/api/:path*",
      },
    ];
  },
  productionBrowserSourceMaps: false,
  webpack(config, { isServer }) {
    if (!isServer && process.env.NODE_ENV !== "development") {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: true,
            mangle: true,
          },
        })
      );

      // Nếu muốn dùng obfuscator, bỏ comment đoạn sau:
      /*
      config.plugins.push(
        new JavaScriptObfuscator(
          {
            rotateStringArray: true,
            stringArray: true,
            stringArrayThreshold: 0.75,
            splitStrings: true,
            simplify: true,
          },
          []
        )
      );
      */
    }

    if (isServer) {
      config.resolve.alias["fs"] = false;
    }

    return config;
  },
};

// ⚠️ Thêm để tránh lỗi CORS từ các IP nội bộ trong môi trường dev
if (process.env.NODE_ENV === "development") {
  nextConfig.allowedDevOrigins = [
    "http://172.16.0.2",
    "http://localhost:3000",
  ];
}

module.exports = nextConfig;
