import type { Metadata } from 'next'
import { Inter, Oswald } from 'next/font/google'
import './globals.css'
import { defaultMetadata } from './lib/seo/metadata'
import { organizationSchema, serviceSchema, faqSchema } from './lib/seo/schema'
import Script from 'next/script'
import { ClientLayout } from './components/ClientLayout'
import { SkipLinks } from './components/SkipLinks'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { FloatingContact } from './components/FloatingContact'
import { Breadcrumbs } from './components/Breadcrumbs'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const oswald = Oswald({ 
  subsets: ['latin'],
  variable: '--font-oswald',
  display: 'swap',
})

export const metadata: Metadata = defaultMetadata

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${oswald.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              organizationSchema,
              serviceSchema,
              faqSchema
            ])
          }}
        />
      </head>
      <body className={inter.className}>
        <SkipLinks />
        <ClientLayout>
          <Header />
          <Breadcrumbs />
          {children}
          <Footer />
          <FloatingContact />
        </ClientLayout>
      </body>
    </html>
  )
}