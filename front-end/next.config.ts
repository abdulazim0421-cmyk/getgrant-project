import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* Перенаправления (твои существующие настройки) */
    async redirects() {
        return [
            {
                source: '/',
                destination: '/Home',
                permanent: true,
            },
        ];
    },

    /* ДОБАВЛЕНО: Разрешаем Next.js скачивать картинки из медиабиблиотеки Strapi */
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '1337',
                pathname: '/uploads/**',
            },
        ],
    },
};

export default nextConfig;