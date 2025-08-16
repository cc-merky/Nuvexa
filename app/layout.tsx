import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Nuvexa - AI-Powered Technology Solutions & Cloud Infrastructure',
    template: '%s | Nuvexa - Intelligent Technology Partners'
  },
  description: 'Transform your business with Nuvexa\'s AI agents, cloud hosting, custom applications, and technology consultancy. Empowering SMEs, healthcare, and fintech with intelligent solutions.',
  keywords: [
    'AI agents',
    'cloud hosting',
    'custom application development',
    'technology consultancy',
    'digital transformation',
    'enterprise IT services',
    'cloud infrastructure',
    'AI automation',
    'healthcare technology',
    'fintech solutions',
    'SME technology solutions',
    'managed cloud services',
    'DevOps support',
    'cybersecurity audits'
  ],
  authors: [{ name: 'Nuvexa Technology Team' }],
  creator: 'Nuvexa',
  publisher: 'Nuvexa',
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nuvexa.com',
    siteName: 'Nuvexa',
    title: 'Nuvexa - AI-Powered Technology Solutions & Cloud Infrastructure',
    description: 'Engineering intelligent technology that inspires transformation, accelerates growth, and simplifies complexity for every business.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nuvexa - Intelligent Technology Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nuvexa - AI-Powered Technology Solutions',
    description: 'Transform your business with intelligent AI agents, cloud hosting, and technology consultancy services.',
    images: ['/twitter-image.jpg'],
    creator: '@nuvexa',
  },
  alternates: {
    canonical: 'https://nuvexa.com',
  },
  category: 'technology',
  classification: 'Business Technology Solutions',
  other: {
    'application-name': 'Nuvexa',
    'msapplication-TileColor': '#000000',
    'theme-color': '#000000',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Nuvexa',
    'format-detection': 'telephone=no',
  },
  verification: {
    google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
  metadataBase: new URL('https://nuvexa.com'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Nuvexa",
              "description": "Full-spectrum technology company delivering AI agents, cloud infrastructure, technology consultancy, and bespoke applications",
              "url": "https://nuvexa.com",
              "logo": "https://nuvexa.com/logo.png",
              "sameAs": [
                "https://linkedin.com/company/nuvexa",
                "https://twitter.com/nuvexa"
              ],
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-XXX-XXX-XXXX",
                "contactType": "customer service",
                "availableLanguage": "English"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "US"
              },
              "founder": {
                "@type": "Person",
                "name": "Nuvexa Founding Team"
              },
              "foundingDate": "2024",
              "industry": "Information Technology",
              "services": [
                "Custom Application Development",
                "Cloud Hosting and Infrastructure Setup",
                "AI-Powered Agents and Automation",
                "Technology Consultancy and Digital Transformation",
                "Enterprise IT Services"
              ]
            })
          }}
        />
        
        {/* Additional SEO Tags */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
