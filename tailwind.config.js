/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				// Sleek black-based color palette
				primary: {
					DEFAULT: '#00ff88', // Neon green accent
					dark: '#00cc6e',
					light: '#33ffaa',
				},
				secondary: {
					DEFAULT: '#00d4ff', // Cyan accent
					dark: '#00a8cc',
					light: '#33ddff',
				},
				accent: {
					DEFAULT: '#ff00ff', // Magenta accent
					dark: '#cc00cc',
					light: '#ff33ff',
				},
				dark: {
					100: '#0a0a0a', // Darkest black
					200: '#0f0f0f', // Very dark
					300: '#1a1a1a', // Dark
					400: '#242424', // Medium dark
					500: '#2e2e2e', // Medium
					600: '#383838', // Light medium
					700: '#424242', // Lighter
					800: '#4d4d4d', // Even lighter
					900: '#575757', // Lightest dark
				},
			},
			fontFamily: {
				mono: ['JetBrains Mono', 'monospace'],
				sans: ['Inter', 'sans-serif'],
			},
			animation: {
				'gradient': 'gradient 8s linear infinite',
				'glow': 'glow 2s ease-in-out infinite alternate',
				'float': 'float 3s ease-in-out infinite',
				'slide-up': 'slideUp 0.5s ease-out',
				'slide-down': 'slideDown 0.5s ease-out',
			},
			keyframes: {
				gradient: {
					'0%, 100%': {
						'background-size': '200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size': '200% 200%',
						'background-position': 'right center'
					},
				},
				glow: {
					'from': {
						'box-shadow': '0 0 10px #00ff88, 0 0 20px #00ff88, 0 0 30px #00ff88',
					},
					'to': {
						'box-shadow': '0 0 20px #00ff88, 0 0 30px #00ff88, 0 0 40px #00ff88',
					},
				},
				float: {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' },
				},
				slideUp: {
					'from': { transform: 'translateY(100%)', opacity: '0' },
					'to': { transform: 'translateY(0)', opacity: '1' },
				},
				slideDown: {
					'from': { transform: 'translateY(-100%)', opacity: '0' },
					'to': { transform: 'translateY(0)', opacity: '1' },
				},
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'grid-pattern': 'linear-gradient(to right, #1a1a1a 1px, transparent 1px), linear-gradient(to bottom, #1a1a1a 1px, transparent 1px)',
			},
		},
	},
	plugins: [],
};
