/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				text: {
					50: 'var(--text-50)',
					100: 'var(--text-100)',
					200: 'var(--text-200)',
					300: 'var(--text-300)',
					400: 'var(--text-400)',
					500: 'var(--text-500)',
					600: 'var(--text-600)',
					700: 'var(--text-700)',
					800: 'var(--text-800)',
					900: 'var(--text-900)',
					950: 'var(--text-950)',
				},
				background: {
					50: 'var(--background-50)',
					100: 'var(--background-100)',
					200: 'var(--background-200)',
					300: 'var(--background-300)',
					400: 'var(--background-400)',
					500: 'var(--background-500)',
					600: 'var(--background-600)',
					700: 'var(--background-700)',
					800: 'var(--background-800)',
					900: 'var(--background-900)',
					950: 'var(--background-950)',
				},
				primary: {
					DEFAULT: 'var(--primary-500)',
					50: 'var(--primary-50)',
					100: 'var(--primary-100)',
					200: 'var(--primary-200)',
					300: 'var(--primary-300)',
					400: 'var(--primary-400)',
					500: 'var(--primary-500)',
					600: 'var(--primary-600)',
					700: 'var(--primary-700)',
					800: 'var(--primary-800)',
					900: 'var(--primary-900)',
					950: 'var(--primary-950)',
				},
				secondary: {
					DEFAULT: 'var(--secondary-500)',
					50: 'var(--secondary-50)',
					100: 'var(--secondary-100)',
					200: 'var(--secondary-200)',
					300: 'var(--secondary-300)',
					400: 'var(--secondary-400)',
					500: 'var(--secondary-500)',
					600: 'var(--secondary-600)',
					700: 'var(--secondary-700)',
					800: 'var(--secondary-800)',
					900: 'var(--secondary-900)',
					950: 'var(--secondary-950)',
				},
				accent: {
					DEFAULT: 'var(--accent-500)',
					50: 'var(--accent-50)',
					100: 'var(--accent-100)',
					200: 'var(--accent-200)',
					300: 'var(--accent-300)',
					400: 'var(--accent-400)',
					500: 'var(--accent-500)',
					600: 'var(--accent-600)',
					700: 'var(--accent-700)',
					800: 'var(--accent-800)',
					900: 'var(--accent-900)',
					950: 'var(--accent-950)',
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
						'box-shadow': '0 0 10px #3b44c4, 0 0 20px #3b44c4, 0 0 30px #3b44c4',
					},
					'to': {
						'box-shadow': '0 0 20px #3b44c4, 0 0 30px #3b44c4, 0 0 40px #3b44c4',
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
