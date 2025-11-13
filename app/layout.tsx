import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Script from 'next/script'

export const metadata: Metadata = {
  title: 'Daniel Agbeni | Full Stack Developer & Cloud Engineer',
  description: 'Frontend Developer (React, Next.js), Backend Developer (Node.js, Express, MongoDB), and Cloud Engineer specializing in deployment, scalability, and infrastructure. Building modern web applications with cutting-edge technologies.',
  keywords: [
    'Daniel Agbeni',
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
    url: 'https://danielagbeni.com',
    title: 'Daniel Agbeni | Full Stack Developer & Cloud Engineer',
    description: 'Frontend Developer (React, Next.js), Backend Developer (Node.js, Express, MongoDB), and Cloud Engineer specializing in deployment, scalability, and infrastructure.',
    siteName: 'Daniel Agbeni Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daniel Agbeni | Full Stack Developer & Cloud Engineer',
    description: 'Frontend Developer (React, Next.js), Backend Developer (Node.js, Express, MongoDB), and Cloud Engineer',
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
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=JetBrains+Mono:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans">
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
