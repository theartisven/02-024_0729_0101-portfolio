/** @type {import('next').NextConfig} */
const nextConfig = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ["@svgr/webpack"],
		});

		return config;
	},
	 // Add this line to silence the error and use Turbopack
    turbopack: {}, 
};

export default nextConfig;
