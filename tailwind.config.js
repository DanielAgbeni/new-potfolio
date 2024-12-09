/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			width: {
				150: '150px',
				190: '190px',
				225: '225px',
				275: '275px',
				300: '300px',
				340: '340px',
				350: '350px',
				375: '375px',
				460: '460px',
				656: '656px',
				880: '880px',
				508: '508px',
			},
			height: {
				80: '80px',
				150: '150px',
				225: '225px',
				300: '300px',
				340: '340px',
				370: '370px',
				420: '420px',
				510: '510px',
				600: '600px',
				650: '650px',
				685: '685px',
				800: '800px',
				'90vh': '90vh',
			},
			minWidth: {
				210: '210px',
				350: '350px',
				620: '620px',
			},
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1280px',
				'2xl': '1536px',
			},
			backgroundImage: {
				hero: 'url(../src/component/img/bg.png)',
			},
			colors: {
				primary: {
					DEFAULT: '#1a365d', // dark blue
					light: '#2c5282', // medium blue
				},
				secondary: {
					DEFAULT: '#c53030', // red
					light: '#e53e3e', // light red
				},
				accent: {
					DEFAULT: '#2d3748', // dark gray
					light: '#4a5568', // light gray
				},
				background: {
					DEFAULT: '#1a202c', // dark background
					light: '#2d3748', // lighter background
				},
			},
		},
	},
	plugins: [],
};
