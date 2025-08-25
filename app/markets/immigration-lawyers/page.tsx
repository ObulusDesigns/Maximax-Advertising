import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'Immigration Lawyers',
  slug: 'immigration-lawyers',
  tagline: 'Connect with Immigrant Communities Seeking Legal Assistance',
  description: 'Reach diverse immigrant populations in their neighborhoods with multilingual mobile billboard advertising. Target ethnic districts, consulates, and community centers where your services are needed most.',
  painPoints: [
    'Difficulty reaching diverse immigrant communities',
    'Language barriers in traditional advertising',
    'Building trust within immigrant populations',
    'Competition from notarios and document preparers',
    'Limited advertising budget for community outreach'
  ],
  solutions: [
    {
      title: 'Community-Focused Targeting',
      description: 'Advertise in Little Haiti, Little Havana, and other ethnic neighborhoods where immigrants live and work.'
    },
    {
      title: 'Multilingual Messaging',
      description: 'Display ads in Spanish, Creole, Portuguese, and other languages to connect authentically.'
    },
    {
      title: 'Trust Building',
      description: 'Consistent presence in immigrant communities builds familiarity and trust over time.'
    },
    {
      title: 'Event Targeting',
      description: 'Advertise at cultural festivals, churches, and community gatherings where immigrants congregate.'
    }
  ],
  benefits: [
    'Reach 35,000+ immigrants daily in their communities',
    'Target consulates, immigration offices, and USCIS',
    'Advertise at cultural events and religious centers',
    'Build trust through consistent neighborhood presence',
    'Display messages in multiple languages',
    'Promote free consultations and payment plans',
    'Target specific visa categories and services',
    'Generate 40+ qualified consultations monthly'
  ],
  stats: {
    roi: '6.3x',
    reach: '35,000+',
    engagement: '22%'
  },
  caseStudy: {
    title: 'Miami Immigration Law Firm Growth',
    result: 'An immigration firm used mobile billboards in Little Havana and Hialeah, advertising in Spanish and English during citizenship workshops.',
    metric: '85% increase in new clients'
  },
  faqs: [
    {
      question: 'How can mobile billboards reach immigrant communities effectively?',
      answer: 'Mobile billboards excel at reaching immigrant communities because we can target specific ethnic neighborhoods, cultural centers, and gathering places. Our trucks can display messages in multiple languages and build trust through consistent presence in these communities.'
    },
    {
      question: 'What languages can be displayed on mobile billboards?',
      answer: 'Our LED displays support all languages including Spanish, Haitian Creole, Portuguese, Chinese, Arabic, and more. We can rotate between languages throughout the day to reach different communities effectively.'
    },
    {
      question: 'Where should immigration lawyers advertise?',
      answer: 'Focus on ethnic neighborhoods, consulates, USCIS offices, cultural centers, religious institutions, international markets, money transfer locations, and areas with high immigrant populations. We provide demographic data to optimize your routes.'
    },
    {
      question: 'How do mobile billboards build trust with immigrant communities?',
      answer: 'Consistent presence in immigrant neighborhoods builds familiarity and trust. When community members see your firm advertising in their language, in their neighborhood, repeatedly over time, you become a trusted resource rather than an unknown entity.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Mobile billboard advertising for immigration lawyers in Miami-Dade and Palm Beach. Connect with immigrant communities through multilingual LED billboard truck campaigns.',
  keywords: [
    'immigration lawyer advertising Miami',
    'immigration attorney marketing Florida',
    'Spanish billboard advertising',
    'multilingual legal advertising',
    'immigration law firm marketing',
    'immigrant community advertising',
    'visa attorney billboards',
    'citizenship lawyer advertising'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function ImmigrationLawyersPage() {
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