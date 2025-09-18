import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import { marketsData, getMarketBySlug } from '@/app/lib/data/markets'
import Script from 'next/script'

// Generate static params for all market pages
export async function generateStaticParams() {
  return marketsData.map((market) => ({
    slug: market.slug,
  }))
}

// Generate metadata for each market page
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const market = getMarketBySlug(params.slug)
  
  if (!market) {
    return {
      title: 'Market Not Found - Maximax Advertising',
      description: 'The requested market page could not be found.',
    }
  }

  return generateMarketMetadata({
    industry: market.industry,
    description: `${market.tagline}. ${market.description}`,
    keywords: market.keywords || [],
    slug: market.slug,
  })
}

export default function MarketPage({ params }: { params: { slug: string } }) {
  const market = getMarketBySlug(params.slug)
  
  if (!market) {
    notFound()
  }

  const structuredData = marketStructuredData({
    industry: market.industry,
    description: market.description,
  })

  return (
    <>
      <Script
        id="market-structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <MarketPageTemplate {...market} />
      <Footer />
      <FloatingContact />
    </>
  )
}