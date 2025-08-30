import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'Miami Restaurant Advertising',
  slug: 'miami-restaurant-advertising',
  tagline: 'Fill Tables and Build Your Brand in Miami\'s Competitive Dining Scene',
  description: 'Mobile billboard advertising helps Miami restaurants reach hungry customers in key dining districts like Wynwood, Brickell, South Beach, and Little Havana. Target lunch crowds, dinner rush, and late-night diners with precision timing and location-based campaigns.',
  painPoints: [
    'Intense competition with over 6,000 restaurants in Miami-Dade',
    'High customer acquisition costs in tourist-heavy areas',
    'Seasonal fluctuations between tourist and local seasons',
    'Difficulty reaching both English and Spanish-speaking audiences',
    'Rising rent costs requiring consistent high occupancy',
    'Competition from food delivery apps cutting into profits'
  ],
  solutions: [
    {
      title: 'Neighborhood Saturation Strategy',
      description: 'Target specific Miami neighborhoods during peak dining times - Brickell for business lunches, Wynwood for happy hour, South Beach for late-night dining.'
    },
    {
      title: 'Event-Based Campaigns',
      description: 'Capitalize on Miami Heat games, Art Basel, Ultra Music Festival, and other major events to capture hungry crowds before and after.'
    },
    {
      title: 'Bilingual Messaging',
      description: 'Reach Miami\'s 70% Hispanic population with culturally relevant Spanish and English creative that resonates with local communities.'
    },
    {
      title: 'Time-Based Promotions',
      description: 'Promote lunch specials to office workers, happy hour deals to young professionals, and late-night menus to nightlife crowds.'
    }
  ],
  benefits: [
    'Reach 40,000+ potential diners daily in high-traffic areas',
    'Target specific neighborhoods like Coral Gables, Coconut Grove, and Aventura',
    'Display mouth-watering food imagery on HD LED screens',
    'Promote daily specials and limited-time offers in real-time',
    'Build brand awareness in competitive dining districts',
    'Drive traffic during slow periods with targeted campaigns',
    'Showcase authentic cuisine to cultural communities',
    'Generate buzz for new restaurant openings and menu launches'
  ],
  stats: {
    roi: '7.2x',
    reach: '40,000+',
    engagement: '23%'
  },
  caseStudy: {
    title: 'Wynwood Latin Fusion Restaurant',
    result: 'A new Latin fusion restaurant used mobile billboards to target Wynwood Art Walk attendees and Brickell lunch crowds with bilingual messaging showcasing signature dishes.',
    metric: '185% increase in weekday lunch traffic within 6 weeks'
  },
  faqs: [
    {
      question: 'Which Miami neighborhoods work best for restaurant advertising?',
      answer: 'High-traffic areas include Brickell (business lunches), Wynwood (young professionals), South Beach (tourists), Coral Gables (upscale dining), Little Havana (authentic Latin cuisine), and Aventura Mall area. Target based on your cuisine type and price point. For quick service, focus on office districts during weekdays.'
    },
    {
      question: 'How can mobile billboards help compete with delivery apps?',
      answer: 'Mobile billboards drive customers to dine in-person by showcasing the restaurant experience, ambiance, and fresh presentations that delivery can\'t match. Promote exclusive dine-in specials, happy hours, live entertainment, and the social aspect of dining out to encourage visits over ordering in.'
    },
    {
      question: 'Should we advertise in Spanish, English, or both?',
      answer: 'In Miami, bilingual campaigns often perform best. With 70% of the population being Hispanic, Spanish messaging resonates strongly in areas like Hialeah, Westchester, and Little Havana. Use English in tourist areas and business districts. Our LED screens can alternate between languages to maximize reach.'
    },
    {
      question: 'What\'s the best timing for restaurant mobile billboard campaigns?',
      answer: 'Target 11:30 AM - 1:30 PM for lunch crowds in business districts, 4:00 PM - 7:00 PM for happy hour and early dinner, and 8:00 PM - midnight for late-night dining in entertainment areas. Weekend brunch (10 AM - 2 PM) is crucial in areas like Coconut Grove and South Beach.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'Miami restaurant advertising with mobile LED billboard trucks. Reach hungry customers in Wynwood, Brickell, South Beach, and Little Havana. Bilingual campaigns for maximum impact.',
  keywords: [
    'Miami restaurant advertising',
    'restaurant marketing Miami',
    'Miami restaurant billboards',
    'Wynwood restaurant advertising',
    'Brickell restaurant marketing',
    'South Beach restaurant promotion',
    'Little Havana restaurant ads',
    'bilingual restaurant advertising Miami',
    'Miami dining marketing',
    'restaurant billboard advertising Florida'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function MiamiRestaurantAdvertisingPage() {
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