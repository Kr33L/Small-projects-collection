/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			text: '#020303',
			bg: '#f5f7fa',
			primary: '#9a4288',
			secondary: '#f0e9db',
			accent: '#4db35f',
			dark: {
				text: '#fcfdfd',
				bg: '#05070a',
				primary: '#bd65ac',
				secondary: '#241d0f',
				accent: '#4db35f',
			},
		},
	},
	plugins: [],
};
