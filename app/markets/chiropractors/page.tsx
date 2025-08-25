import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'Chiropractors',
  slug: 'chiropractors',
  tagline: 'Attract New Patients Suffering from Back Pain, Auto Injuries, and Chronic Conditions',
  description: 'Mobile billboard advertising connects your chiropractic practice with thousands of potential patients daily. Target busy intersections, medical districts, and residential areas where people experiencing pain are actively seeking relief.',
  painPoints: [
    'Struggling to attract new patients in a competitive market',
    'Limited marketing budget compared to larger medical practices',
    'Difficulty educating the public about chiropractic benefits',
    'Competing with physical therapy and pain management clinics',
    'Building trust as a legitimate healthcare option'
  ],
  solutions: [
    {
      title: 'Target Pain Points',
      description: 'Reach people in traffic (literally experiencing back pain) with compelling messages about immediate relief.'
    },
    {
      title: 'Educational Messaging',
      description: 'Use rotating displays to educate about conditions you treat - from sports injuries to pregnancy care.'
    },
    {
      title: 'Local Presence',
      description: 'Build neighborhood recognition by consistently advertising in your service area.'
    },
    {
      title: 'Affordable Growth',
      description: 'Generate 20-30 new patient inquiries monthly for less than the cost of one newspaper ad.'
    }
  ],
  benefits: [
    'Reach 25,000+ potential patients daily in your service area',
    'Target gyms, sports complexes, and corporate offices',
    'Build trust through consistent neighborhood presence',
    'Advertise near auto body shops for accident victims',
    'Promote same-day appointments and walk-ins',
    'Showcase patient testimonials and success stories',
    'Change messages for different conditions throughout the day',
    'Track exact routes and impressions with GPS data'
  ],
  stats: {
    roi: '4.8x',
    reach: '25,000+',
    engagement: '15%'
  },
  caseStudy: {
    title: 'West Palm Beach Wellness Center Campaign',
    result: 'A family chiropractic practice used mobile billboards to target school zones and family neighborhoods, emphasizing pediatric and prenatal care.',
    metric: '35 new patient families in 30 days'
  },
  faqs: [
    {
      question: 'How effective are mobile billboards for chiropractors?',
      answer: 'Extremely effective! People experiencing pain are actively looking for solutions. Our mobile billboards reach them during their daily commute when back pain is often at its worst. Chiropractors typically see 20-30 new patient inquiries per month from our campaigns.'
    },
    {
      question: 'What areas should I target for my chiropractic practice?',
      answer: 'Focus on high-traffic intersections during rush hour, corporate office parks, gyms and fitness centers, shopping centers, and residential neighborhoods within a 5-mile radius of your practice. We also recommend targeting auto body shops and law offices for personal injury cases.'
    },
    {
      question: 'What messages work best for chiropractic advertising?',
      answer: 'Messages highlighting immediate pain relief, same-day appointments, insurance acceptance, and specific conditions (back pain, headaches, auto injuries) perform best. Including a clear call-to-action with your phone number is crucial.'
    },
    {
      question: 'How quickly can I expect results?',
      answer: 'Most chiropractors see an increase in phone calls within the first week. By month two, practices typically report 20-30% increases in new patient visits. The cumulative effect of consistent advertising builds strong brand recognition in your community.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Mobile billboard advertising for chiropractors in South Florida. Attract new patients with back pain, auto injuries, and chronic conditions using GPS-tracked LED billboard trucks.',
  keywords: [
    'chiropractor advertising Miami',
    'chiropractic marketing Florida',
    'chiropractor billboard advertising',
    'chiropractic practice growth',
    'healthcare mobile billboards',
    'LED truck advertising chiropractor',
    'chiropractic patient acquisition',
    'back pain clinic advertising'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function ChiropractorsPage() {
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