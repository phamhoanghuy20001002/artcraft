/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,

    },
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'uploadthing.com'
        ]
    }
}

module.exports = nextConfig
