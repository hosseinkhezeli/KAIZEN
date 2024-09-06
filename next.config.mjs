/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:true,
    images:{
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'www.stockvault.net',
                pathname:'/data/**',
                port:""
            },
        ],
    }
};

export default nextConfig;
