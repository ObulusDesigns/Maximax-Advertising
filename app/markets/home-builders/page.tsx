import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'Home Builders',
  slug: 'home-builders',
  tagline: 'Drive Traffic to Model Homes and New Communities',
  description: 'Mobile billboard advertising puts your new home communities in front of qualified buyers. Target growing areas, apartment complexes, and busy commuter routes to reach families ready to purchase their dream home.',
  painPoints: [
    'Difficulty driving traffic to model homes and sales centers',
    'Competition from established builders and communities',
    'Long sales cycles requiring sustained marketing',
    'Reaching qualified buyers in a competitive market',
    'High cost of traditional real estate advertising'
  ],
  solutions: [
    {
      title: 'Model Home Traffic',
      description: 'Drive buyers directly to your sales centers with GPS-guided routes and turn-by-turn directions.'
    },
    {
      title: 'Community Awareness',
      description: 'Build excitement for new phases and grand openings in surrounding neighborhoods.'
    },
    {
      title: 'Qualified Targeting',
      description: 'Focus on apartment complexes and rental communities where residents are ready to buy.'
    },
    {
      title: 'Sustained Presence',
      description: 'Maintain visibility throughout the entire sales cycle with flexible long-term campaigns.'
    }
  ],
  benefits: [
    'Generate 100+ model home visits weekly',
    'Target apartment complexes and rental communities',
    'Showcase home designs and community amenities',
    'Promote incentives and limited-time offers',
    'Build awareness for grand openings',
    'Display starting prices and financing options',
    'Create urgency with lot availability updates',
    'Track visitor traffic from specific routes'
  ],
  stats: {
    roi: '7.2x',
    reach: '45,000+',
    engagement: '14%'
  },
  caseStudy: {
    title: 'Palm Beach County Builder Success',
    result: 'A luxury home builder used mobile billboards to promote their new waterfront community, targeting high-income areas and country clubs.',
    metric: '23 homes sold in 60 days'
  },
  faqs: [
    {
      question: 'How effective are mobile billboards for selling new homes?',
      answer: 'Extremely effective! Mobile billboards generate an average of 100+ model home visits per week. With the average new home sale valued at $400,000+, just one sale can provide a 10x return on your advertising investment. Builders typically see 7.2x ROI from our campaigns.'
    },
    {
      question: 'What areas should home builders target?',
      answer: 'Focus on apartment complexes, rental communities, growing suburban areas, and commuter routes. We also recommend targeting near competitor communities to capture comparison shoppers. Special emphasis on areas with good schools for family-oriented developments.'
    },
    {
      question: 'Can you promote multiple communities simultaneously?',
      answer: 'Yes! Our LED displays can rotate between different communities, floor plans, and price points throughout the day. This allows you to maximize your advertising investment by promoting your entire portfolio to different market segments.'
    },
    {
      question: 'How do mobile billboards drive model home traffic?',
      answer: 'We create routes that literally guide buyers to your sales center. Trucks can display "Follow Me to [Community Name]" messages with directional arrows, making it easy for interested buyers to visit immediately. Weekend routes during prime home shopping hours are particularly effective.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Mobile billboard advertising for home builders in South Florida. Drive traffic to model homes and new communities with GPS-tracked LED billboard trucks.',
  keywords: [
    'home builder advertising Florida',
    'new home marketing Miami',
    'real estate billboard advertising',
    'model home traffic generation',
    'new community marketing',
    'home builder mobile billboards',
    'residential development advertising',
    'new construction marketing Florida'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function HomeBuildersPage() {
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