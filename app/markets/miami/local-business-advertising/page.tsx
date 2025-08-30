import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'Local Business Advertising Miami',
  slug: 'local-business-advertising-miami',
  tagline: 'Affordable High-Impact Advertising for Miami Small Businesses',
  description: 'Mobile billboard advertising helps Miami local businesses compete with national chains and online giants. From Calle Ocho boutiques to Aventura service providers, reach your neighborhood customers with targeted, cost-effective campaigns that build community presence and drive foot traffic.',
  painPoints: [
    'Limited marketing budgets compared to national competitors',
    'Difficulty reaching local customers who shop online',
    'High cost of traditional Miami media (TV, radio, print)',
    'Getting noticed in oversaturated digital advertising space',
    'Building awareness in specific Miami neighborhoods',
    'Competing with Amazon and big box stores for customer loyalty'
  ],
  solutions: [
    {
      title: 'Hyperlocal Neighborhood Campaigns',
      description: 'Focus your entire budget on the 3-5 mile radius around your business, maximizing impact where your customers live and work.'
    },
    {
      title: 'Small Business Collective Buying',
      description: 'Partner with neighboring businesses to share mobile billboard costs while each promotes their unique offerings during different time slots.'
    },
    {
      title: 'Community Event Presence',
      description: 'Leverage local events like farmers markets, street fairs, and cultural festivals to reach engaged community members actively supporting local businesses.'
    },
    {
      title: 'Flexible Budget Options',
      description: 'Start with as little as half-day campaigns during peak times, scaling up based on results without long-term contracts.'
    }
  ],
  benefits: [
    'Reach 30,000+ local customers daily in your target area',
    'Affordable rates starting at $400/day with no minimum contracts',
    'Build neighborhood brand recognition and trust',
    'Support "Shop Local" movement with visible community presence',
    'Target specific Miami neighborhoods and demographics',
    'Compete effectively against online retailers and chains',
    'Promote daily specials, events, and seasonal offerings',
    'Generate immediate foot traffic and phone calls'
  ],
  stats: {
    roi: '6.8x',
    reach: '30,000+',
    engagement: '26%'
  },
  caseStudy: {
    title: 'Coral Gables Family-Owned Auto Repair Shop',
    result: 'A third-generation auto repair shop used targeted mobile billboards in Coral Gables and South Miami, emphasizing their 40-year local history and family values, competing against national chains.',
    metric: '67% increase in new customers, 85% from within 5-mile radius'
  },
  faqs: [
    {
      question: 'Can small Miami businesses really afford mobile billboard advertising?',
      answer: 'Absolutely! Unlike traditional billboards requiring $3,000-10,000 monthly commitments, mobile billboards start at just $400/day with no long-term contracts. Many small businesses run campaigns 2-3 days per month during peak periods, achieving better ROI than digital ads. You can also partner with neighboring businesses to share costs while each getting dedicated advertising time.'
    },
    {
      question: 'Which Miami neighborhoods work best for local business advertising?',
      answer: 'Focus on the neighborhoods where your customers live and work. High-traffic local areas include Miracle Mile in Coral Gables, Lincoln Road in South Beach, Calle Ocho in Little Havana, Main Highway in Coconut Grove, and Aventura Mall area. The key is concentrating your campaign within a 3-5 mile radius of your location for maximum local impact.'
    },
    {
      question: 'How do local businesses compete with online retailers?',
      answer: 'Mobile billboards help you emphasize advantages that online retailers can\'t match - immediate availability, personal service, local expertise, and community support. Highlight same-day service, free local delivery, expert advice, and your contribution to the local economy. Showcase your faces, your story, and your commitment to the Miami community.'
    },
    {
      question: 'What types of local businesses see the best results?',
      answer: 'Service businesses (auto repair, salons, medical offices), restaurants and cafes, retail stores, fitness studios, and professional services all see excellent results. The key is businesses that serve a local customer base and can benefit from neighborhood visibility. Businesses offering urgent services (AC repair, plumbing) see particularly strong ROI from immediate local awareness.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Local advertising in Miami for small businesses. Affordable mobile LED billboard campaigns to reach neighborhood customers, build community presence, and compete with national chains.',
  keywords: [
    'local advertising Miami',
    'Miami small business advertising',
    'local business marketing Miami',
    'Miami neighborhood advertising',
    'affordable advertising Miami',
    'Miami local billboard advertising',
    'small business billboards Miami',
    'Miami community advertising',
    'local Miami marketing',
    'Miami business promotion',
    'neighborhood marketing Miami',
    'Miami local business billboards'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function LocalBusinessAdvertisingMiamiPage() {
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