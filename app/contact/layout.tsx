import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Maximax Advertising | Mobile Billboard Advertising in South Florida',
  description: 'Get in touch with Maximax Advertising for mobile billboard advertising services in South Florida. Call (561) 720-0521 or fill out our contact form for a free consultation and custom quote.',
  keywords: 'contact maximax advertising, mobile billboard quote, south florida advertising contact, LED truck advertising quote, palm beach advertising contact',
  openGraph: {
    title: 'Contact Maximax Advertising | Mobile Billboard Advertising in South Florida',
    description: 'Get in touch with Maximax Advertising for mobile billboard advertising services in South Florida. Call (561) 720-0521 or fill out our contact form for a free consultation and custom quote.',
    url: 'https://maximaxmobileadvertising.com/contact/',
    type: 'website',
    images: [
      {
        url: 'https://maximaxmobileadvertising.com/images/1-1.png',
        width: 1200,
        height: 630,
        alt: 'Maximax Mobile Advertising',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Maximax Advertising | Mobile Billboard Advertising in South Florida',
    description: 'Get in touch with Maximax Advertising for mobile billboard advertising services in South Florida. Call (561) 720-0521 or fill out our contact form.',
  },
}

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
