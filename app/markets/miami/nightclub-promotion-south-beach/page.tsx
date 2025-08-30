import { Metadata } from 'next'
import { Header } from '@/app/components/Header'
import { Footer } from '@/app/components/Footer'
import { FloatingContact } from '@/app/components/FloatingContact'
import { MarketPageTemplate } from '@/app/components/MarketPageTemplate'
import { generateMarketMetadata, marketStructuredData } from '@/app/lib/seo/metadata'
import Script from 'next/script'

const marketData = {
  industry: 'South Beach Nightclub Promotion',
  slug: 'south-beach-nightclub-promotion',
  tagline: 'Pack Your Venue and Own the Miami Nightlife Scene',
  description: 'Mobile LED billboards dominate South Beach nightlife promotion, reaching party-goers along Ocean Drive, Collins Avenue, and Washington Avenue. Target tourists, locals, and VIP crowds with dynamic campaigns that build buzz for events, DJs, and exclusive parties.',
  painPoints: [
    'Extreme competition among 50+ nightclubs in South Beach alone',
    'High marketing costs with uncertain ROI from traditional channels',
    'Difficulty reaching tourists who don\'t follow local social media',
    'Last-minute promotion needs for guest DJs and special events',
    'Building buzz for weeknight events and off-season periods',
    'Competing with established mega-clubs like LIV and Story'
  ],
  solutions: [
    {
      title: 'Strategic Route Domination',
      description: 'Saturate Ocean Drive, Collins Avenue from 5th to 23rd, and Lincoln Road during pre-party hours (9 PM - midnight) when clubbers are deciding where to go.'
    },
    {
      title: 'Hotel & Beach targeting',
      description: 'Reach tourists at luxury hotels like Fontainebleau, W South Beach, and beachfront areas where party-goers gather before heading out.'
    },
    {
      title: 'Event-Day Blitz Campaigns',
      description: 'Launch intensive same-day campaigns for guest DJs, celebrity appearances, and special events to create immediate buzz and FOMO.'
    },
    {
      title: 'VIP & Bottle Service Promotion',
      description: 'Target high-end shoppers at Bal Harbour and Aventura Mall to promote exclusive VIP experiences and table reservations.'
    }
  ],
  benefits: [
    'Reach 50,000+ potential party-goers nightly on South Beach',
    'Dynamic LED content showcasing DJ lineups and live event footage',
    'Target Miami Beach hotels where tourists stay',
    'Build buzz hours before doors open',
    'Promote last-minute celebrity appearances and surprise guests',
    'Display QR codes for instant ticket purchases and table bookings',
    'Create FOMO with "Tonight Only" and "Limited Capacity" messaging',
    'Showcase VIP experiences and bottle service specials'
  ],
  stats: {
    roi: '8.5x',
    reach: '50,000+',
    engagement: '28%'
  },
  caseStudy: {
    title: 'Collins Avenue Nightclub Launch',
    result: 'A new nightclub on Collins Avenue used mobile billboards to target Ocean Drive foot traffic and nearby hotels, promoting their grand opening weekend with international DJs.',
    metric: '100% capacity reached all 3 opening nights, 2,000+ advance tickets sold'
  },
  faqs: [
    {
      question: 'What are the best times and routes for nightclub promotion?',
      answer: 'Focus on 8 PM - midnight along Ocean Drive, Collins Avenue (5th to 23rd), and Washington Avenue when people are making nightlife decisions. Target Lincoln Road during dinner hours (7-10 PM) and hotel zones throughout the evening. Friday and Saturday are crucial, but Thursday can be highly effective for industry nights.'
    },
    {
      question: 'How far in advance should we promote events?',
      answer: 'For major DJ events and celebrity appearances, start 5-7 days in advance to build anticipation. For regular nights, focus on same-day promotion starting at 6 PM. Last-minute campaigns (starting at 9 PM) can fill remaining capacity by creating urgency with "Tonight Only" messaging.'
    },
    {
      question: 'Can mobile billboards reach tourists effectively?',
      answer: 'Absolutely. Mobile billboards are perfect for reaching tourists who aren\'t plugged into local social media or promotional channels. Target hotel zones, beach areas, and tourist hotspots like Lincoln Road and Ocean Drive where visitors congregate. Visual impact transcends language barriers.'
    },
    {
      question: 'How do we compete with established mega-clubs?',
      answer: 'Focus on what makes your venue unique - intimate atmosphere, specific music genres, better ratios, or exclusive experiences. Use mobile billboards to highlight competitive advantages like no cover before midnight, complimentary drinks, or shorter lines. Target areas where your ideal crowd gathers rather than competing everywhere.'
    }
  ]
}

const metadataInfo = {
  industry: marketData.industry,
  description: 'South Beach nightclub promotion with mobile LED billboards. Reach party-goers on Ocean Drive, Collins Avenue, and Miami Beach hotels. Build buzz for DJs, events, and VIP experiences.',
  keywords: [
    'South Beach nightclub promotion',
    'Miami nightclub advertising',
    'Ocean Drive club marketing',
    'Collins Avenue nightlife promotion',
    'Miami Beach nightclub billboards',
    'South Beach DJ promotion',
    'Miami nightlife advertising',
    'nightclub billboard advertising',
    'VIP table service promotion Miami',
    'Miami Beach club marketing'
  ]
}

export const metadata: Metadata = generateMarketMetadata(metadataInfo)

export default function SouthBeachNightclubPromotionPage() {
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