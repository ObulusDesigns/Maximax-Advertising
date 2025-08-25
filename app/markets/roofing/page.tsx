import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'Roofing Companies',
  slug: 'roofing',
  tagline: 'Generate Emergency Leads and Build Year-Round Business',
  description: 'Mobile billboards help roofing companies capture storm damage repairs, insurance claims, and routine replacements. Target storm-affected areas immediately and maintain steady lead flow during slow seasons.',
  painPoints: [
    'Feast or famine cycle dependent on storms',
    'Intense competition after weather events',
    'Difficulty maintaining steady lead flow',
    'Building trust for large investments',
    'Competition from storm chasers and out-of-state companies'
  ],
  solutions: [
    {
      title: 'Storm Response Team',
      description: 'Deploy immediately to storm-damaged areas while homeowners are assessing damage and filing claims.'
    },
    {
      title: 'Year-Round Visibility',
      description: 'Maintain consistent presence during slow seasons to capture routine replacements and repairs.'
    },
    {
      title: 'Local Trust Building',
      description: 'Emphasize local presence, licenses, and warranties to compete with storm chasers.'
    },
    {
      title: 'Insurance Expertise',
      description: 'Highlight insurance claim assistance and approved contractor status.'
    }
  ],
  benefits: [
    'Generate 80+ roofing leads monthly',
    'Immediate deployment to storm-damaged areas',
    'Target aging neighborhoods needing replacements',
    'Showcase warranties and certifications',
    'Promote insurance claim assistance',
    'Display before/after transformations',
    'Advertise free inspections and estimates',
    'Build local reputation and trust'
  ],
  stats: {
    roi: '6.5x',
    reach: '35,000+',
    engagement: '19%'
  },
  caseStudy: {
    title: 'Fort Lauderdale Roofing Contractor',
    result: 'A local roofing company used mobile billboards year-round, intensifying campaigns after storms and targeting older neighborhoods.',
    metric: '143% increase in annual revenue'
  },
  faqs: [
    {
      question: 'How quickly can mobile billboards respond to storms?',
      answer: 'We can deploy trucks within 2-4 hours of a storm event. This immediate response puts your company in front of homeowners while they\'re assessing damage and before competitors arrive. Early visibility after storms is crucial for capturing insurance claims.'
    },
    {
      question: 'What areas should roofing companies target?',
      answer: 'Focus on storm-damaged zones immediately after weather events, neighborhoods with homes 15+ years old, areas with visible roof damage, and communities where you\'ve completed recent jobs. Also target insurance offices and Home Depot/Lowe\'s parking lots.'
    },
    {
      question: 'How do mobile billboards work during slow seasons?',
      answer: 'During non-storm periods, mobile billboards maintain steady lead flow by targeting aging neighborhoods, promoting preventive maintenance, and highlighting warranties. Consistent visibility ensures you\'re top-of-mind when homeowners need routine repairs or replacements.'
    },
    {
      question: 'What roofing messages generate the most leads?',
      answer: 'Emergency response availability, insurance claim assistance, free inspections, local company emphasis, warranty details, and financing options perform best. After storms, "We Work With Your Insurance" and "Emergency Tarping Available" messages are highly effective.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Mobile billboard advertising for roofing companies in South Florida. Generate emergency leads and build year-round business with GPS-tracked LED billboard trucks.',
  keywords: [
    'roofing advertising Florida',
    'roofer marketing Miami',
    'roofing billboard advertising',
    'storm damage roofing ads',
    'roof replacement marketing',
    'roofing contractor advertising',
    'emergency roofing billboards',
    'roofing lead generation Florida'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function RoofingPage() {
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