import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'Miami Real Estate Advertising',
  slug: 'miami-real-estate-advertising',
  tagline: 'Dominate Miami\'s Luxury Real Estate Market with Mobile Impact',
  description: 'Mobile billboard advertising connects Miami real estate professionals with qualified buyers and sellers across diverse markets - from Brickell luxury condos to Coral Gables estates and Aventura developments. Reach international buyers, investors, and local move-up buyers with targeted neighborhood campaigns.',
  painPoints: [
    'Reaching international buyers visiting Miami for property tours',
    'High competition in luxury condo market with 100+ new developments',
    'Connecting with cash buyers and investors in a fast-moving market',
    'Building brand recognition against established brokerages',
    'Marketing to diverse communities in their preferred language',
    'Promoting open houses and new listings with short lead times'
  ],
  solutions: [
    {
      title: 'Luxury Corridor Targeting',
      description: 'Focus on Brickell Avenue, Coral Gables, Key Biscayne, and Miami Beach where luxury buyers live, work, and visit properties.'
    },
    {
      title: 'International Buyer Outreach',
      description: 'Target Miami International Airport, luxury hotels, and areas frequented by Brazilian, Colombian, and Venezuelan buyers with multilingual messaging.'
    },
    {
      title: 'Open House Traffic Generation',
      description: 'Deploy same-day campaigns in specific neighborhoods to drive immediate traffic to open houses and property showings.'
    },
    {
      title: 'Development & Pre-Construction Marketing',
      description: 'Build awareness for new developments in Edgewater, Downtown Miami, and Aventura with stunning architectural renderings on LED displays.'
    }
  ],
  benefits: [
    'Reach 45,000+ potential buyers and sellers daily',
    'Target specific Miami neighborhoods and price points',
    'Display stunning property photos and virtual tours on HD screens',
    'Promote open houses with real-time directions and timing',
    'Build agent and brokerage brand recognition',
    'Reach international buyers at hotels and airports',
    'Showcase luxury amenities and lifestyle imagery',
    'Generate seller leads in targeted neighborhoods'
  ],
  stats: {
    roi: '9.2x',
    reach: '45,000+',
    engagement: '31%'
  },
  caseStudy: {
    title: 'Brickell Luxury Condo Development',
    result: 'A new 60-story luxury condo development used mobile billboards to target international buyers at MIA airport and luxury hotels, while also reaching local professionals in Brickell and Coral Gables.',
    metric: '40% of units sold in pre-construction phase, $127M in sales generated'
  },
  faqs: [
    {
      question: 'Which Miami neighborhoods should real estate agents target?',
      answer: 'For luxury properties, focus on Brickell, Downtown Miami, Edgewater, Miami Beach, Coral Gables, Coconut Grove, and Key Biscayne. For family homes, target Aventura, Pinecrest, Palmetto Bay, and Kendall. For investors, concentrate on up-and-coming areas like Wynwood, Design District, and Little River. Match your routes to your listing locations and price points.'
    },
    {
      question: 'How can mobile billboards reach international buyers?',
      answer: 'Target Miami International Airport arrival areas, luxury hotels in South Beach and Downtown, and international banking centers in Brickell. Use multilingual messaging (Spanish, Portuguese, and English) and highlight investment opportunities, visa programs, and lifestyle benefits that appeal to foreign buyers.'
    },
    {
      question: 'What\'s the best strategy for promoting open houses?',
      answer: 'Deploy mobile billboards 2-3 days before the open house in the specific neighborhood and surrounding areas. On the day of the open house, concentrate routes within a 3-mile radius with directional messaging and timing. Include QR codes for instant property details and virtual tours to pre-qualify visitors.'
    },
    {
      question: 'How do independent agents compete with major brokerages?',
      answer: 'Mobile billboards level the playing field by providing high-impact visibility without massive budgets. Focus on personal branding, local expertise, and specific neighborhood dominance. Highlight your unique value propositions like bilingual service, international connections, or specialized market knowledge that big firms can\'t match.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Miami real estate advertising with mobile LED billboards. Reach luxury buyers in Brickell, international investors, and local home seekers. Promote listings, open houses, and new developments.',
  keywords: [
    'Miami real estate advertising',
    'Miami realtor marketing',
    'Brickell condo advertising',
    'Miami luxury real estate billboards',
    'Miami Beach property marketing',
    'Coral Gables real estate advertising',
    'Miami property billboard advertising',
    'real estate agent marketing Miami',
    'Miami open house promotion',
    'Miami development advertising'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function MiamiRealEstateAdvertisingPage() {
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