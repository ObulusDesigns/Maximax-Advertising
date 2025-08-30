import { Metadata } from 'next'
import { 
  Truck,
  MapPin,
  Zap,
  Target,
  BarChart3,
  Eye,
  Clock,
  Shield,
  Star,
  TrendingUp,
  Calendar,
  Phone,
  Gauge,
  Navigation,
  Users,
  DollarSign,
  CheckCircle,
  Award,
  MessageCircle,
  Building2,
  Globe,
  Megaphone,
  LineChart,
  Map,
  Activity,
  Smartphone
} from 'lucide-react'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'Miami-Dade Mobile Billboards',
  description: 'Miami-Dade mobile billboard advertising with GPS tracking and 4K displays. Target 2.7 million residents across 34 cities from Miami Beach to Homestead. Professional mobile billboard trucks delivering 70,000+ daily impressions with proven ROI.',
  keywords: [
    'Miami-Dade mobile billboards',
    'Miami mobile billboard trucks',
    'mobile billboards Miami-Dade',
    'Miami-Dade advertising trucks',
    'mobile advertising Miami-Dade',
    'Miami-Dade billboard trucks',
    'mobile billboards Miami',
    'Miami-Dade outdoor advertising',
    'billboard trucks Miami-Dade',
    'Miami-Dade mobile advertising',
    'Dade County mobile billboards',
    'Miami mobile advertising trucks',
    'Miami-Dade digital billboards',
    'mobile billboard rental Miami',
    'Miami-Dade truck advertising',
    'Miami Beach mobile billboards',
    'Coral Gables mobile advertising',
    'Aventura billboard trucks',
    'Kendall mobile billboards',
    'Hialeah mobile advertising'
  ]
})

export default function MiamiDadeMobileBillboardsPage() {
  const serviceData = {
    serviceName: "Miami-Dade Mobile Billboards",
    tagline: "Conquer Miami-Dade's Streets with High-Impact Mobile Billboard Advertising",
    description: "Professional mobile billboard trucks covering all 34 cities in Miami-Dade County. From South Beach to Homestead, reach 2.7 million residents and 24 million annual tourists with GPS-tracked, 4K LED mobile billboards that deliver 70,000+ daily impressions.",
    heroImage: "/images/Graphics/trucka.png",
    serviceType: 'mobile' as const,
    
    // Service Features
    features: [
      {
        icon: Map,
        title: "Complete County Coverage",
        description: "Mobile billboards reach all 34 Miami-Dade municipalities - from Miami Beach to Homestead, Aventura to Coral Gables, ensuring no market is missed."
      },
      {
        icon: Navigation,
        title: "GPS-Tracked Routes",
        description: "Real-time GPS tracking provides exact location data, route verification, and impression analytics for complete campaign transparency."
      },
      {
        icon: Users,
        title: "Demographic Targeting",
        description: "Precision targeting across Miami-Dade's diverse neighborhoods - Hispanic markets in Hialeah, affluent areas in Pinecrest, beaches in Key Biscayne."
      },
      {
        icon: Activity,
        title: "Traffic Pattern Optimization",
        description: "Strategic routing through Miami-Dade's busiest corridors - I-95, US-1, Palmetto Expressway, and high-traffic surface streets."
      },
      {
        icon: Smartphone,
        title: "Digital Integration",
        description: "QR codes, SMS campaigns, and geo-fencing complement mobile billboards for integrated Miami-Dade marketing campaigns."
      },
      {
        icon: Gauge,
        title: "Rapid Deployment",
        description: "Launch mobile billboard campaigns within 48 hours anywhere in Miami-Dade County with our strategically positioned fleet."
      }
    ],

    // Service Benefits
    benefits: [
      {
        title: "Unmatched Miami-Dade Reach",
        description: "Each mobile billboard generates 30,000-70,000 daily impressions across Miami-Dade's diverse communities and traffic patterns.",
        metric: "70,000+ Daily Views"
      },
      {
        title: "Multicultural Market Access",
        description: "Reach Miami-Dade's 70% Hispanic population, Caribbean communities, and international visitors with culturally relevant mobile advertising.",
        metric: "2.7M Diverse Residents"
      },
      {
        title: "Tourist & Resident Coverage",
        description: "Mobile billboards capture both Miami-Dade's 24 million annual tourists and permanent residents for comprehensive market penetration.",
        metric: "26.7M Total Audience"
      },
      {
        title: "Neighborhood Precision",
        description: "Target specific Miami-Dade neighborhoods - from luxury Coral Gables to bustling Downtown Miami, family-friendly Kendall to trendy Wynwood.",
        metric: "34 Cities Covered"
      },
      {
        title: "Event Amplification",
        description: "Leverage Miami-Dade's 100+ annual events including Art Basel, Ultra Music Festival, Miami Open, and Food & Wine Festival.",
        metric: "100+ Event Opportunities"
      },
      {
        title: "Superior ROI Performance",
        description: "Miami-Dade mobile billboard campaigns deliver average 550% ROI with lowest cost-per-impression in outdoor advertising.",
        metric: "550% Average ROI"
      }
    ],

    // Miami-Dade Market Deep Dive
    process: [
      {
        step: 1,
        title: "North Miami-Dade Markets",
        description: "Aventura Mall area, Sunny Isles Beach, North Miami Beach, and Bal Harbour offer affluent demographics and high tourist traffic. Mobile billboards here reach luxury shoppers, beachgoers, and international visitors with 40,000+ daily impressions.",
        icon: Building2
      },
      {
        step: 2,
        title: "Central Miami-Dade Coverage",
        description: "Downtown Miami, Brickell, Coral Gables, Coconut Grove, and Miami Beach form the urban core. Mobile billboards navigate business districts, entertainment zones, and residential areas reaching professionals, tourists, and residents.",
        icon: Globe
      },
      {
        step: 3,
        title: "West Miami-Dade Expansion",
        description: "Hialeah, Doral, Westchester, and West Kendall represent Miami-Dade's Hispanic heartland. Mobile billboards effectively reach Spanish-speaking markets, families, and blue-collar workers with culturally relevant messaging.",
        icon: Users
      },
      {
        step: 4,
        title: "South Miami-Dade Growth",
        description: "Kendall, Pinecrest, Palmetto Bay, Cutler Bay, and Homestead offer suburban markets and growing populations. Mobile billboards target families, homeowners, and commuters along US-1 and Florida Turnpike corridors.",
        icon: TrendingUp
      }
    ],

    // Statistics
    stats: {
      clientsSatisfied: "500+",
      averageROI: "550%",
      campaignsCompleted: "2,500+",
      yearEstablished: "2018"
    },

    // Miami-Dade Success Stories
    testimonials: [
      {
        name: "Miguel Rodriguez",
        company: "Rodriguez & Associates Law",
        role: "Managing Partner",
        content: "Our Miami-Dade mobile billboard campaign transformed our practice. Targeting Hialeah, Kendall, and Downtown Miami generated 150+ case inquiries monthly. The ability to reach Spanish-speaking communities with bilingual ads was invaluable. ROI exceeded 700%.",
        rating: 5
      },
      {
        name: "Sarah Mitchell",
        company: "Bayfront Medical Center",
        role: "VP Marketing",
        content: "Mobile billboards allowed us to reach every corner of Miami-Dade County efficiently. From Aventura to Homestead, our campaign generated 2,000+ appointment bookings. GPS tracking proved we reached our target demographics precisely.",
        rating: 5
      },
      {
        name: "David Park",
        company: "Miami Luxury Motors",
        role: "Sales Director",
        content: "Targeting affluent areas like Coral Gables, Key Biscayne, and Aventura with mobile billboards drove exceptional results. Showroom traffic increased 60% and we sold 25 additional vehicles monthly. The visual impact of our ads on LED trucks was stunning.",
        rating: 5
      }
    ],

    // Miami-Dade Specific FAQs
    faqs: [
      {
        question: "Which Miami-Dade neighborhoods work best for mobile billboard advertising?",
        answer: "Mobile billboard effectiveness varies by business type: Law firms excel in Hialeah, Kendall, and Downtown Miami. Medical practices thrive targeting Coral Gables, Aventura, and Doral. Restaurants succeed in South Beach, Wynwood, and Brickell. Home services perform in suburban areas like Palmetto Bay, Cutler Bay, and West Kendall. Luxury brands target Coral Gables, Key Biscayne, and Bal Harbour. Our route planning ensures you reach the right Miami-Dade neighborhoods for your specific audience."
      },
      {
        question: "How do mobile billboards navigate Miami-Dade's traffic effectively?",
        answer: "Our experienced drivers know Miami-Dade's traffic patterns intimately. Mobile billboards operate during optimal visibility hours (10am-7pm), avoiding rush hour gridlock while maximizing exposure. Routes adapt real-time using traffic data - when I-95 is congested, we shift to US-1 or Biscayne Boulevard. During events, we position near venues before traffic builds. GPS tracking confirms your ads display in moving traffic, not stuck in jams."
      },
      {
        question: "Can mobile billboards reach Miami-Dade's Spanish-speaking population?",
        answer: "Absolutely! Miami-Dade's 70% Hispanic population responds exceptionally to mobile billboard advertising. We offer bilingual creative services, cultural consultation, and strategic routing through Hispanic neighborhoods like Hialeah (96% Hispanic), Westchester (84% Hispanic), and West Kendall (73% Hispanic). Visual messaging transcends language barriers, while Spanish text ensures cultural relevance. Many clients run dual-language campaigns or Spanish-only ads in specific areas."
      },
      {
        question: "What's the cost for mobile billboard advertising throughout Miami-Dade?",
        answer: "Miami-Dade mobile billboard pricing ranges from $600-1,000 per truck per day, depending on routes, duration, and season. This delivers 30,000-70,000 impressions daily at $10-20 CPM - significantly lower than digital ads ($50+ CPM) or static billboards ($30+ CPM). Weekly campaigns (5-7 days) receive 10% discounts. Monthly campaigns save 20%. Multi-truck fleets covering different Miami-Dade zones simultaneously receive volume pricing. Most clients invest $3,000-10,000 monthly for comprehensive coverage."
      },
      {
        question: "How do mobile billboards perform during Miami-Dade events?",
        answer: "Event-targeted mobile billboard campaigns see 200-300% higher engagement. During Art Basel, Ultra Music Festival, or Miami Open, impressions can exceed 100,000 daily. We position trucks at venue entrances, official hotels, and transportation hubs. For conventions at Miami Beach Convention Center or downtown, mobile billboards circle continuously. Food & Wine Festival, boat shows, and cultural events offer similar opportunities. Advanced booking is essential as demand peaks during major events."
      },
      {
        question: "What areas of Miami-Dade are covered by mobile billboard routes?",
        answer: "Our mobile billboards cover all 34 Miami-Dade municipalities including: Miami, Miami Beach, Coral Gables, Hialeah, Miami Gardens, Kendall, Doral, Homestead, Aventura, North Miami, Cutler Bay, Miami Lakes, Palmetto Bay, Pinecrest, Sunny Isles Beach, Key Biscayne, Bal Harbour, Bay Harbor Islands, Biscayne Park, Coral Terrace, Country Walk, Goulds, Kendale Lakes, Richmond Heights, South Miami, Westchester, and more. No area is too small or remote."
      },
      {
        question: "How effective are mobile billboards for Miami-Dade small businesses?",
        answer: "Mobile billboards level the playing field for Miami-Dade small businesses. Local restaurants see 40% traffic increases, service businesses generate 300+ calls weekly, and retail stores report 25% sales growth during campaigns. The ability to target specific neighborhoods where customers live creates hyperlocal impact. Small businesses particularly benefit from route flexibility - advertise lunch specials in business districts midday, then residential areas evening. Starting at $600/day, mobile billboards offer enterprise-level advertising at small business prices."
      },
      {
        question: "What weather considerations affect Miami-Dade mobile billboard campaigns?",
        answer: "Miami-Dade's weather is ideal for year-round mobile billboard advertising. Our LED displays shine bright even in summer sun and remain visible during afternoon rain showers. Hurricane season (June-November) rarely impacts operations - we monitor weather closely and can relocate trucks if needed. Unlike northern markets, there's no snow, ice, or extreme cold affecting visibility. The only consideration is ensuring creative designs account for bright sunshine - high contrast and bold colors work best."
      }
    ],

    // Related Services
    relatedServices: [
      {
        title: "South Florida Coverage",
        description: "Expand beyond Miami-Dade to Broward and Palm Beach counties",
        href: "/services/outdoor-advertising-south-florida",
        icon: Map
      },
      {
        title: "Digital Billboard Trucks",
        description: "Advanced LED technology for dynamic content and maximum impact",
        href: "/services/digital-billboard-trucks-miami",
        icon: Zap
      },
      {
        title: "OOH Advertising Strategy",
        description: "Comprehensive out-of-home advertising planning and execution",
        href: "/services/ooh-advertising-miami",
        icon: Target
      }
    ],

    // Schema Markup
    schema: {
      name: "Miami-Dade Mobile Billboards - County-Wide Mobile Advertising",
      description: "Professional mobile billboard advertising throughout Miami-Dade County. GPS-tracked trucks with 4K LED displays reaching 2.7 million residents across all 34 municipalities from Miami Beach to Homestead.",
      provider: {
        name: "Maximax Advertising",
        url: "https://maximaxmobileadvertising.com"
      },
      areaServed: [
        "Miami-Dade County",
        "Miami",
        "Miami Beach",
        "Coral Gables",
        "Hialeah",
        "Miami Gardens",
        "Kendall",
        "Doral",
        "Homestead",
        "Aventura",
        "North Miami",
        "North Miami Beach",
        "Cutler Bay",
        "Miami Lakes",
        "Palmetto Bay",
        "Pinecrest",
        "Sunny Isles Beach",
        "Key Biscayne",
        "Westchester",
        "Coral Terrace",
        "South Miami",
        "Brickell",
        "Downtown Miami",
        "Wynwood",
        "Coconut Grove"
      ],
      serviceType: "Mobile Billboard Advertising",
    },

    // Service-specific props
    industries: [
      "Legal Services",
      "Healthcare",
      "Automotive",
      "Real Estate",
      "Home Services",
      "Restaurants",
      "Retail",
      "Professional Services"
    ],
    locations: [
      "Miami-Dade County",
      "Miami",
      "Miami Beach",
      "Coral Gables",
      "Hialeah"
    ]
  }

  return <ServicePageTemplate {...serviceData} />
}