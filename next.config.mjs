/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.tina.io"],
  },
  async rewrites() {
    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  // images: {
  //   remotePatterns: [
  //     {
  //       protocol: "https",
  //       hostname: "scontent.cdninstagram.com",
  //       port: "",
  //       pathname: "",
  //     },
  //     {
  //       protocol: "https",
  //       hostname: "images.unsplash.com",
  //       port: "",
  //       pathname: "",
  //     },
  //   ],
  // },
};

export default nextConfig;
