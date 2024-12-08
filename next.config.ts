import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/', // Ruta de origen
        destination: '/home', // Ruta destino
        permanent: true, // true para redirección 301, false para 302
      },
    ];
  },
  reactStrictMode: false
};

export default nextConfig;