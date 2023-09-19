/** @type {import('next').NextConfig} */

const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/resume',
				permanent: false,
			},
			{
				source: '/blog',
				destination: '/resume',
				permanent: false,
			},
			{
				source: '/projects',
				destination: '/resume',
				permanent: false,
			},
		];
	},
	webpack: (config) => {
		config.externals = [...config.externals, 'canvas', 'jsdom'];
		return config;
	},
};

module.exports = nextConfig;
