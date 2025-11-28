import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Script from 'next/script';

export const metadata: Metadata = {
	title: 'Daniel Agbeni',
	description:
		'I am Daniel Agbeni Oluwafemi, a skilled Full Stack Developer and Cloud Engineer. I specialize in creating scalable web solutions with modern technologies.',
	keywords: [
		'Daniel Agbeni',
		'Daniel Agbeni Oluwafemi',
		'Founder of UploadDoc',
		'UploadDoc',
		'Full Stack Developer',
		'Frontend Developer',
		'Backend Developer',
		'Cloud Engineer',
		'React',
		'Next.js',
		'Node.js',
		'Express',
		'MongoDB',
		'TypeScript',
		'JavaScript',
		'AWS',
		'Google Cloud',
		'Docker',
		'Kubernetes',
	],
	authors: [{ name: 'Daniel Agbeni' }],
	creator: 'Daniel Agbeni',
	publisher: 'Daniel Agbeni',
	openGraph: {
		type: 'website',
		locale: 'en_US',
		url: 'https://danielagbeni.uploaddoc.app',
		title: 'Daniel Agbeni',
		description:
			'I am Daniel Agbeni Oluwafemi, a skilled Full Stack Developer and Cloud Engineer. I specialize in creating scalable web solutions with modern technologies.',
		siteName: 'Daniel Agbeni Portfolio',
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Daniel Agbeni',
		description:
			'I am Daniel Agbeni Oluwafemi, a skilled Full Stack Developer and Cloud Engineer. I specialize in creating scalable web solutions with modern technologies.',
		creator: '@danielagbeni',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	verification: {
		google: 'your-google-verification-code',
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Daniel Agbeni Oluwafemi',
		jobTitle: 'Founder & Full Stack Developer',
		worksFor: {
			'@type': 'Organization',
			name: 'UploadDoc',
		},
		url: 'https://danielagbeni.uploaddoc.app',
		sameAs: [
			'https://www.linkedin.com/in/danielagbeni',
			'https://github.com/danielagbeni',
			'https://twitter.com/danielagbeni',
		],
	};

	return (
		<html lang="en">
			<head>
				<link
					rel="preconnect"
					href="https://fonts.googleapis.com"
				/>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin=""
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap"
					rel="stylesheet"
				/>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className="font-sans">
				<Header />
				<main className="min-h-screen">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
