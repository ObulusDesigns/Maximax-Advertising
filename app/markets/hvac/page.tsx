import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'HVAC Companies',
  slug: 'hvac',
  tagline: 'Capture Emergency Repairs and Seasonal Maintenance',
  description: 'Mobile billboards put your HVAC services in front of homeowners when they need you most. Target heat waves, cold snaps, and seasonal maintenance periods to maximize emergency calls and service contracts.',
  painPoints: [
    'Extreme seasonal fluctuations in demand',
    'Competition from large chains and franchises',
    'Emergency service visibility during peak times',
    'Building trust for in-home services',
    'Maintaining steady revenue during mild weather'
  ],
  solutions: [
    {
      title: 'Emergency Response Marketing',
      description: 'Deploy during heat waves and cold snaps when AC/heating failures create urgent demand.'
    },
    {
      title: 'Maintenance Campaign Timing',
      description: 'Target spring and fall maintenance seasons when homeowners prepare for weather changes.'
    },
    {
      title: 'Neighborhood Saturation',
      description: 'Build local reputation by maintaining consistent presence in service areas.'
    },
    {
      title: 'Trust and Credibility',
      description: 'Showcase licenses, certifications, and years of local service to build confidence.'
    }
  ],
  benefits: [
    'Generate 100+ service calls monthly',
    'Immediate deployment during temperature extremes',
    'Target aging systems and older neighborhoods',
    'Promote 24/7 emergency service',
    'Advertise maintenance agreements and tune-ups',
    'Display financing and special offers',
    'Build local brand recognition',
    'Capture competitor's dissatisfied customers'
  ],
  stats: {
    roi: '7.8x',
    reach: '40,000+',
    engagement: '21%'
  },
  caseStudy: {
    title: 'Boca Raton HVAC Service Success',
    result: 'An HVAC company used mobile billboards during a summer heat wave, targeting older neighborhoods and advertising 24/7 emergency service.',
    metric: '218% increase in emergency calls'
  },
  faqs: [
    {
      question: 'When should HVAC companies use mobile billboard advertising?',
      answer: 'Deploy immediately during heat waves (above 95°F) and cold snaps (below 50°F) when systems fail. Also target April-May for AC tune-ups and September-October for heating maintenance. Year-round campaigns maintain steady service call volume during mild weather.'
    },
    {
      question: 'What areas generate the most HVAC service calls?',
      answer: 'Focus on neighborhoods with homes 15+ years old (aging systems), apartment complexes (multiple units), commercial districts (business clients), and areas experiencing new construction (system installations). Also target near big box stores where people buy window units during emergencies.'
    },
    {
      question: 'How do mobile billboards generate emergency HVAC calls?',
      answer: 'During temperature extremes, homeowners with failed systems are desperate for immediate help. Mobile billboards displaying "24/7 Emergency Service" and "Same Day Repair" with your phone number generate immediate calls. We can deploy within hours of weather events.'
    },
    {
      question: 'What HVAC advertising messages work best?',
      answer: 'Emergency service availability, same-day service, free estimates, maintenance special pricing, financing options, and energy savings perform best. During extremes, "AC Repair Today" or "Heating Fixed Fast" with prominent phone numbers drive immediate response.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Mobile billboard advertising for HVAC companies in South Florida. Capture emergency repairs and seasonal maintenance with GPS-tracked LED billboard trucks.',
  keywords: [
    'HVAC advertising Florida',
    'AC repair marketing Miami',
    'heating cooling billboard advertising',
    'emergency HVAC advertising',
    'air conditioning marketing',
    'HVAC contractor billboards',
    'AC service advertising',
    'HVAC lead generation Florida'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function HVACPage() {
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