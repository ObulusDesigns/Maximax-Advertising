import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'Impact Windows & Doors',
  slug: 'impact-windows-doors',
  tagline: 'Target Homeowners Before Hurricane Season',
  description: 'Reach homeowners when they\'re thinking about hurricane protection. Mobile billboards create urgency around impact window installations, insurance savings, and limited-time offers that drive immediate action.',
  painPoints: [
    'Seasonal demand concentrated around hurricane season',
    'High competition from established companies',
    'Difficulty explaining value proposition and ROI',
    'Long sales cycles with multiple decision makers',
    'Building trust for large home improvement investments'
  ],
  solutions: [
    {
      title: 'Hurricane Season Urgency',
      description: 'Create urgency before and during hurricane season when homeowners are most motivated to protect their homes.'
    },
    {
      title: 'Neighborhood Targeting',
      description: 'Focus on neighborhoods with older homes that need upgrades and areas recovering from storm damage.'
    },
    {
      title: 'Insurance Savings Message',
      description: 'Highlight insurance discounts and long-term savings that offset installation costs.'
    },
    {
      title: 'Trust Building',
      description: 'Showcase certifications, warranties, and local installations to build credibility.'
    }
  ],
  benefits: [
    'Reach 30,000+ homeowners daily in target neighborhoods',
    'Create urgency during hurricane season preparation',
    'Target older homes and storm-damaged areas',
    'Showcase product quality and certifications',
    'Promote insurance savings and financing',
    'Display before/after transformations',
    'Advertise limited-time offers and incentives',
    'Generate 60+ qualified estimates monthly'
  ],
  stats: {
    roi: '5.8x',
    reach: '30,000+',
    engagement: '16%'
  },
  caseStudy: {
    title: 'Miami Hurricane Protection Company',
    result: 'An impact window installer used mobile billboards before hurricane season, targeting coastal communities and older neighborhoods.',
    metric: '92% increase in installation quotes'
  },
  faqs: [
    {
      question: 'When should impact window companies advertise?',
      answer: 'Start campaigns in March-April before hurricane season (June-November) when homeowners are planning upgrades. Increase frequency May-June when urgency peaks. Also target post-storm periods when damage is visible and insurance claims are being processed.'
    },
    {
      question: 'What neighborhoods should we target?',
      answer: 'Focus on coastal communities, older neighborhoods (homes 20+ years), high-value properties, and areas with recent storm damage. Also target neighborhoods where competitors are installing - nothing sells like seeing neighbors get new windows.'
    },
    {
      question: 'How do mobile billboards generate leads for impact windows?',
      answer: 'Mobile billboards create awareness and urgency at the perfect time. Homeowners see your message repeatedly in their neighborhood, building trust. Messages about insurance savings, hurricane protection, and limited-time offers drive immediate calls for estimates.'
    },
    {
      question: 'What messaging works best for impact window advertising?',
      answer: 'Emphasize insurance savings (up to 45% discount), hurricane protection, noise reduction, security benefits, and energy efficiency. Include financing options, free estimates, and create urgency with "Install Before Hurricane Season" messaging.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Mobile billboard advertising for impact windows and doors companies in South Florida. Target homeowners before hurricane season with LED billboard trucks.',
  keywords: [
    'impact windows advertising Florida',
    'hurricane windows marketing Miami',
    'impact doors billboard advertising',
    'storm protection advertising',
    'window installation marketing',
    'hurricane protection billboards',
    'impact glass advertising',
    'home improvement marketing Florida'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function ImpactWindowsDoorsPage() {
  const structuredData = marketStructuredData({
    industry: marketData.industry,
    description: metadataInfo.description
  })

  return (
    <>
      <Script
        id="market-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Header />
      <main>
        <MarketPageTemplate {...marketData} />
      </main>
      <Footer />
      <FloatingContact />
    </>
  )
}