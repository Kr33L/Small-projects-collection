/** @type {import('next').NextConfig} */

const nextConfig = {
	webpack: (config) => {
		config.module.rules.push({
			test: /\.node/,
			use: 'raw-loader',
		});

		config.externals = [...config.externals, 'canvas', 'jsdom'];
		return config;
	},
};

module.exports = nextConfig;
