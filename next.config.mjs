/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.tina.io"],
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
