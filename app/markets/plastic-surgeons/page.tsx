import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'Plastic Surgeons',
  slug: 'plastic-surgeons',
  tagline: 'Reach High-Value Patients Actively Seeking Cosmetic Procedures',
  description: 'Target affluent demographics in Miami-Dade and Palm Beach Counties with mobile LED billboards. Perfect for promoting Brazilian Butt Lifts, breast augmentation, mommy makeovers, and facial rejuvenation procedures.',
  painPoints: [
    'High competition from other practices makes it hard to stand out',
    'Traditional advertising is expensive with uncertain ROI',
    'Difficulty reaching specific demographics in premium neighborhoods',
    'Building trust and credibility with potential patients',
    'Seasonal fluctuations in patient volume'
  ],
  solutions: [
    {
      title: 'Precision Targeting',
      description: 'Target high-income areas like Aventura, Bal Harbour, Boca Raton, and Palm Beach with GPS-tracked routes.'
    },
    {
      title: 'Build Instant Credibility',
      description: 'Large-format LED displays create a premium brand presence that builds trust and authority.'
    },
    {
      title: 'Flexible Campaigns',
      description: 'Adjust messaging for seasonal procedures, special promotions, or new treatment launches instantly.'
    },
    {
      title: 'Cost-Effective Reach',
      description: '80% less expensive than traditional billboards with 4x more impressions in target areas.'
    }
  ],
  benefits: [
    'Reach 30,000+ potential patients daily in affluent neighborhoods',
    'Target specific areas near luxury shopping centers and country clubs',
    'Build brand awareness with repeated exposure on daily commutes',
    'Showcase before/after results on high-resolution 4K displays',
    'Drive traffic during traditionally slow periods',
    'No long-term contracts - perfect for seasonal campaigns',
    'Real-time GPS tracking shows exactly where your ads are displayed',
    'Change creative instantly for different procedures or promotions'
  ],
  stats: {
    roi: '5.2x',
    reach: '30,000+',
    engagement: '12%'
  },
  caseStudy: {
    title: 'Miami Beach Plastic Surgery Center Success Story',
    result: 'A premier plastic surgery practice used our mobile billboards to promote their summer specials, targeting beaches and luxury shopping districts.',
    metric: '47% increase in consultations'
  },
  faqs: [
    {
      question: 'How can mobile billboards help my plastic surgery practice?',
      answer: 'Mobile billboards allow you to target affluent neighborhoods where your ideal patients live, work, and shop. Our GPS-tracked trucks can focus on areas like Aventura Mall, Bal Harbour Shops, Worth Avenue, and luxury residential communities, ensuring your message reaches people who can afford elective procedures.'
    },
    {
      question: 'What types of content work best for plastic surgery advertising?',
      answer: 'High-quality before/after images, special promotions, financing options, and board certifications perform exceptionally well. Our 4K LED displays showcase your work in stunning detail, while rotating messages can highlight different procedures throughout the day.'
    },
    {
      question: 'Can I target specific events or locations?',
      answer: 'Absolutely! We can target charity galas, country clubs, luxury gyms, medical spas, and high-end shopping districts. Many practices see great results advertising near competitor locations and medical buildings.'
    },
    {
      question: 'What\'s the typical ROI for plastic surgery practices?',
      answer: 'Our plastic surgery clients typically see a 5.2x return on investment, with some practices reporting up to 50% increases in consultation bookings. With procedures averaging $8,000-15,000, just 2-3 new patients can cover an entire month\'s advertising.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Mobile billboard advertising for plastic surgeons in Miami-Dade and Palm Beach. Reach affluent patients seeking cosmetic procedures with GPS-tracked LED billboard trucks.',
  keywords: [
    'plastic surgery advertising Miami',
    'cosmetic surgery marketing Florida',
    'plastic surgeon billboard advertising',
    'medical practice advertising',
    'healthcare mobile billboards',
    'LED truck advertising plastic surgery',
    'cosmetic surgery patient acquisition',
    'plastic surgery practice growth'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function PlasticSurgeonsPage() {
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