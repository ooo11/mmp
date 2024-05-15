/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'imgcdn.jumpsay.com',
                port: '',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
