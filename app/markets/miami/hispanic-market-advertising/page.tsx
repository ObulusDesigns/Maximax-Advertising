import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'Hispanic Market Advertising Miami',
  slug: 'hispanic-market-advertising-miami',
  tagline: 'Connect Authentically with Miami\'s 70% Hispanic Population',
  description: 'Mobile billboard advertising delivers culturally relevant messages to Miami\'s diverse Hispanic communities - from Cuban-Americans in Hialeah to Colombian communities in Kendall and Venezuelan professionals in Doral. Reach Spanish-speaking consumers with authentic, localized campaigns that resonate.',
  painPoints: [
    'Generic marketing that doesn\'t resonate with Hispanic values and culture',
    'Language barriers limiting reach to Spanish-dominant households',
    'Difficulty reaching diverse Hispanic nationalities with unique preferences',
    'Missing opportunities during cultural celebrations and events',
    'Low engagement from one-size-fits-all English-only campaigns',
    'Competition from brands with established Hispanic market presence'
  ],
  solutions: [
    {
      title: 'Neighborhood-Specific Cultural Targeting',
      description: 'Tailor messages for Cuban communities in Hialeah and Westchester, Colombians in Kendall, Venezuelans in Doral, and diverse populations in Sweetwater - respecting cultural nuances.'
    },
    {
      title: 'Bilingual Dynamic Messaging',
      description: 'LED screens alternate between Spanish and English content, with culturally adapted translations that go beyond literal word conversion to capture cultural context.'
    },
    {
      title: 'Cultural Event Activation',
      description: 'Maximize impact during Calle Ocho Festival, Hispanic Heritage Month, Three Kings Day, and national independence celebrations with timely, relevant campaigns.'
    },
    {
      title: 'Family-Focused Messaging',
      description: 'Emphasize family values, multi-generational benefits, and community connections that resonate strongly with Hispanic consumers.'
    }
  ],
  benefits: [
    'Reach 2.1 million Hispanic consumers across Miami-Dade County',
    'Display culturally authentic Spanish-language creative',
    'Target specific Hispanic neighborhoods and communities',
    'Build trust through consistent local presence',
    'Leverage cultural celebrations for maximum engagement',
    'Connect with Spanish-dominant and bilingual households',
    'Showcase commitment to Hispanic community values',
    'Generate word-of-mouth in tight-knit communities'
  ],
  stats: {
    roi: '8.7x',
    reach: '55,000+',
    engagement: '34%'
  },
  caseStudy: {
    title: 'Miami Hispanic Financial Services Campaign',
    result: 'A credit union targeted Hispanic families in Hialeah, Kendall, and Westchester with Spanish-first messaging about home loans and family financial planning, featuring relatable imagery and cultural references.',
    metric: '312% increase in Hispanic account openings, 45% growth in Spanish-language loan applications'
  },
  faqs: [
    {
      question: 'Why is Hispanic marketing crucial in Miami?',
      answer: 'With 70% of Miami-Dade\'s population being Hispanic and $90 billion in buying power, this market is not a niche - it\'s the majority. Hispanic consumers in Miami are younger, have larger households, and show strong brand loyalty when engaged authentically. Businesses that don\'t effectively reach Hispanic consumers are missing the majority of the Miami market.'
    },
    {
      question: 'Should campaigns be in Spanish, English, or both?',
      answer: 'It depends on your target demographic and neighborhoods. In Hialeah (96% Hispanic), Spanish-first campaigns perform best. In Coral Gables or Aventura, bilingual approaches work well for second and third-generation Hispanics. Our LED billboards can alternate languages, allowing you to reach both Spanish-dominant and English-preferred Hispanic consumers effectively.'
    },
    {
      question: 'Which Hispanic neighborhoods should we prioritize?',
      answer: 'Key Hispanic neighborhoods include Hialeah (Cuban), Westchester (Cuban), Kendall (Colombian/Venezuelan), Doral (Venezuelan/Colombian), Sweetwater (Nicaraguan/Cuban), and West Miami-Dade (diverse Hispanic). Each has distinct characteristics - Hialeah is more Spanish-dominant and traditional, while Doral attracts younger Hispanic professionals. Target based on your customer profile.'
    },
    {
      question: 'How do we create culturally authentic Hispanic campaigns?',
      answer: 'Go beyond translation to transcreation - adapting messages for cultural context. Use familiar cultural references, showcase Hispanic families and lifestyles, highlight community values, and time campaigns with cultural events. Consider regional differences - Miami Cubans respond differently than recent Colombian immigrants. Work with Hispanic creative teams who understand these nuances.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Hispanic market advertising in Miami with mobile LED billboards. Reach 70% of Miami\'s population with culturally relevant Spanish and bilingual campaigns. Target Hialeah, Kendall, Doral, and Hispanic communities.',
  keywords: [
    'Hispanic market advertising Miami',
    'Spanish advertising Miami',
    'Latino marketing Miami',
    'Hialeah advertising',
    'Hispanic billboard advertising',
    'Miami Spanish language marketing',
    'Cuban American advertising Miami',
    'Colombian market Miami',
    'Venezuelan advertising Miami',
    'bilingual advertising Miami',
    'Hispanic consumer marketing Florida',
    'Miami multicultural advertising'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function HispanicMarketAdvertisingPage() {
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