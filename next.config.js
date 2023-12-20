/** @type {import('next').NextConfig} */
const nextConfig = {
	env: {
		BACKEND_BASE_URL: process.env.BACKEND_BASE_URL,
		BASE_URL: process.env.BASE_URL,
	},
	async rewrites() {
		return [
			{
				source: "/api/:path*",
				destination: "https://dev.backend.wigglz.garonzlab.com/:path*",
			},
		];
	},
	// async headers() {
	//     return [{
	// 		// matching all API routes
	// 		source: "/:path*",
	// 		headers: [
	// 			// { key: "Access-Control-Allow-Credentials", value: "false" },
	// 			{ key: "Access-Control-Allow-Origin", value: "*" }, // replace this your actual origin
	// 			{ key: "Access-Control-Allow-Methods", value: "GET,DELETE,PATCH,POST,PUT" },
	// 			{ key: "Access-Control-Allow-Headers", value: "Origin, X-Requested-With, Content-Type, Authorizatio, X-CSRF-Token, Accept, Accept-Version, Content-Length, Content-MD5, Date, X-Api-Version, Access-Control-Allow-Headers" },
	// 		]
	// 	}]
	// }
	images: {
		domains: [
			"media.furchildpets.com",
			"192.168.0.195",
			"cdn-icons-png.flaticon.com",
		],
	},
};

module.exports = nextConfig;
