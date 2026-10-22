/** @type {import('next').NextConfig} */
const csp=["default-src 'self'","base-uri 'self'","object-src 'none'","frame-ancestors 'none'","form-action 'self'","img-src 'self' data: https:","font-src 'self' data:","style-src 'self' 'unsafe-inline'","script-src 'self' 'unsafe-inline' https://acrtracking.stealthagents.us https://static.cloudflareinsights.com","connect-src 'self' https://acrtracking.stealthagents.us https://cloudflareinsights.com","frame-src https://go.oncehub.com","upgrade-insecure-requests"].join('; ');
const securityHeaders=[
 {key:'Content-Security-Policy',value:csp},
 {key:'Strict-Transport-Security',value:'max-age=31536000; includeSubDomains; preload'},
 {key:'Referrer-Policy',value:'strict-origin-when-cross-origin'},
 {key:'X-Content-Type-Options',value:'nosniff'},
 {key:'X-Frame-Options',value:'DENY'},
 {key:'Permissions-Policy',value:'camera=(), microphone=(), geolocation=(), payment=(), usb=()'},
 {key:'Cross-Origin-Opener-Policy',value:'same-origin-allow-popups'},
];
const nextConfig={eslint:{ignoreDuringBuilds:true},async redirects(){return [{source:'/contact',destination:'/contact-us',permanent:true}]},async headers(){return [{source:'/:path*',headers:securityHeaders}]}};
export default nextConfig;
