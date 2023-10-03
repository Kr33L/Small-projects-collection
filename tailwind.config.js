/** @type {import('tailwindcss').Config} */

module.exports = {
	mode: 'jit',
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				text: 'var(--text)',
				background: 'var(--background)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
			},

			keyframes: {
				horizontal: {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(20px)' },
				},
				vertical: {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(20px)' },
				},

				expand: {
					'0%': { transform: 'scale(0)' },
					'100%': { transform: 'scale(1)' },
				},
			},
			animation: {
				slideH: 'horizontal 1s ease-in-out',
				slideV: 'vertical 1s ease-in-out',
				expand: 'expand 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
};
