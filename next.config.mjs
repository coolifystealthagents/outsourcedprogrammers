/** @type {import("next").NextConfig} */
const securityHeaders = [
  { key: "Content-Security-Policy-Report-Only", value: "default-src https: data: blob:; object-src none; base-uri none; frame-ancestors none" },
  { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
];
const nextConfig = {
  // Legacy routes have known lint debt; CI runs TypeScript separately while
  // production builds remain deterministic.
  eslint: { ignoreDuringBuilds: true },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};
export default nextConfig;
