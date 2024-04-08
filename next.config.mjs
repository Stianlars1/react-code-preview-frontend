/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      type: "asset/source",
    });
    config.module.rules.push({ test: /\.txt$/, use: "raw-loader" });

    return config;
  },
};

export default nextConfig;
