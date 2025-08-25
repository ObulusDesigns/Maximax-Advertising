import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'Personal Injury Lawyers',
  slug: 'personal-injury-lawyers',
  tagline: 'Dominate Your Market with High-Impact Mobile Billboard Advertising',
  description: 'Stand out in the competitive personal injury legal market with mobile LED billboards. Target accident hotspots, hospitals, and high-traffic areas to reach victims when they need legal help most.',
  painPoints: [
    'Extreme competition from other personal injury firms',
    'High cost of TV and radio advertising',
    'Difficulty standing out in a saturated market',
    'Building trust with accident victims',
    'Competing with large firms with bigger budgets'
  ],
  solutions: [
    {
      title: 'Strategic Accident Targeting',
      description: 'Position trucks at known accident zones, near hospitals, and auto body shops where victims seek help.'
    },
    {
      title: 'Dominate Local Market',
      description: 'Create overwhelming presence in your service area that larger firms can\'t match locally.'
    },
    {
      title: 'Instant Response Capability',
      description: 'Deploy trucks to major accident scenes within hours to reach victims immediately.'
    },
    {
      title: 'Cost-Effective Dominance',
      description: 'Achieve market saturation for 70% less than TV advertising with better local targeting.'
    }
  ],
  benefits: [
    'Target 40,000+ drivers daily at accident-prone intersections',
    'Advertise near emergency rooms and urgent care centers',
    'Build massive brand recognition in your territory',
    'Display compelling case results and settlement amounts',
    'Create urgency with statute of limitations messaging',
    'Outmaneuver competitors with flexible routing',
    'Dominate specific practice areas (auto, slip & fall, medical)',
    'Generate 50+ qualified leads monthly'
  ],
  stats: {
    roi: '8.5x',
    reach: '40,000+',
    engagement: '18%'
  },
  caseStudy: {
    title: 'Miami Personal Injury Firm Success',
    result: 'A boutique injury firm used mobile billboards to compete with major firms, targeting I-95 accident zones and hospital districts.',
    metric: '127% increase in case intake'
  },
  faqs: [
    {
      question: 'Why are mobile billboards effective for personal injury lawyers?',
      answer: 'Mobile billboards reach accident victims where they are - in traffic, near hospitals, and in their neighborhoods. Unlike static billboards, we can target specific accident-prone intersections and adjust routes based on traffic patterns. The average personal injury case value of $30,000+ means just one case can pay for months of advertising.'
    },
    {
      question: 'How do mobile billboards compare to TV advertising for lawyers?',
      answer: 'Mobile billboards cost 70% less than TV advertising while providing better local targeting. You reach the same 40,000+ people daily, but with precise geographic control. Plus, your message isn\'t competing with other lawyer ads in the same commercial break.'
    },
    {
      question: 'What locations work best for personal injury lawyer advertising?',
      answer: 'Focus on high-accident intersections, hospital emergency rooms, physical therapy clinics, auto body shops, workers\' comp clinics, and busy highways during rush hour. We provide accident heat maps to optimize your routes.'
    },
    {
      question: 'Can I respond quickly to major accidents?',
      answer: 'Yes! We offer rapid deployment services. When a major accident occurs, we can have trucks in the area within 2-4 hours, ensuring your firm is top-of-mind when victims need legal help. This immediate response capability gives you a huge advantage over competitors.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Mobile billboard advertising for personal injury lawyers in Miami and Palm Beach. Dominate your legal market with GPS-tracked LED trucks targeting accident zones and hospitals.',
  keywords: [
    'personal injury lawyer advertising',
    'accident attorney marketing Florida',
    'legal billboard advertising Miami',
    'PI lawyer mobile billboards',
    'attorney advertising trucks',
    'legal marketing Florida',
    'injury lawyer patient acquisition',
    'accident attorney billboards'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function PersonalInjuryLawyersPage() {
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