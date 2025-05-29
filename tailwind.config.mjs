/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// primary: 'rgb(243 0 71 / <alpha-value>)',
				primary: 'rgb(243 239 248 / <alpha-value>)',
				secondary: 'rgb(42 159 168 / <alpha-value>)',
				tertiary: 'rgb(94 73 85 / <alpha-value>)',
				surface: 'rgb(42 43 42 / <alpha-value>)'
			}
		},
	},
	plugins: [
		import('@tailwindcss/typography')
	],
}
