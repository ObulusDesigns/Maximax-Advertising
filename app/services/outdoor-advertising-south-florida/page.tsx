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
  Sun,
  Palmtree,
  Map
} from 'lucide-react'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'Outdoor Advertising South Florida',
  description: 'Premier outdoor advertising solutions across South Florida. Mobile billboards, digital displays, and strategic OOH campaigns throughout Miami-Dade, Broward, and Palm Beach counties. Reach 6.2 million residents and 50+ million annual tourists with targeted outdoor advertising.',
  keywords: [
    'outdoor advertising South Florida',
    'South Florida outdoor advertising',
    'outdoor advertising Miami Dade',
    'outdoor advertising Broward County',
    'outdoor advertising Palm Beach',
    'South Florida billboards',
    'Florida outdoor media',
    'South Florida mobile billboards',
    'Fort Lauderdale outdoor advertising',
    'Boca Raton outdoor advertising',
    'West Palm Beach advertising',
    'tri-county advertising Florida',
    'South Florida marketing',
    'Florida billboard advertising',
    'South Florida OOH advertising',
    'Miami Fort Lauderdale advertising',
    'South Florida transit advertising',
    'Florida outdoor campaigns',
    'South Florida brand visibility',
    'tri-county billboard advertising'
  ]
})

export default function OutdoorAdvertisingSouthFloridaPage() {
  const serviceData = {
    serviceName: "Outdoor Advertising South Florida",
    tagline: "Dominate South Florida's Outdoor Advertising Landscape",
    description: "Comprehensive outdoor advertising solutions across South Florida's tri-county area. From Miami's vibrant streets to Palm Beach's affluent communities, reach 6.2 million residents and 50+ million annual visitors with strategic outdoor advertising campaigns that deliver measurable results.",
    heroImage: "/images/Graphics/trucka.png",
    serviceType: 'mobile' as const,
    
    // Service Features
    features: [
      {
        icon: Map,
        title: "Tri-County Coverage",
        description: "Complete outdoor advertising coverage across Miami-Dade, Broward, and Palm Beach counties, reaching South Florida's entire 6.2 million population."
      },
      {
        icon: Sun,
        title: "365-Day Visibility",
        description: "South Florida's year-round sunshine and outdoor lifestyle ensure consistent campaign performance with 250+ days of perfect advertising weather."
      },
      {
        icon: Users,
        title: "Diverse Demographics",
        description: "Target South Florida's multicultural population with precision - from Miami's Hispanic markets to Palm Beach's affluent retirees."
      },
      {
        icon: Palmtree,
        title: "Tourism Amplification",
        description: "Leverage 50+ million annual tourists visiting South Florida beaches, attractions, and events for expanded campaign reach."
      },
      {
        icon: Building2,
        title: "Business Hub Targeting",
        description: "Strategic placement in South Florida's major business districts - Downtown Miami, Fort Lauderdale, Boca Raton, and West Palm Beach."
      },
      {
        icon: TrendingUp,
        title: "Growth Market Advantage",
        description: "South Florida's 15% population growth rate means your outdoor advertising reaches an expanding, dynamic audience daily."
      }
    ],

    // Service Benefits
    benefits: [
      {
        title: "Massive Regional Reach",
        description: "South Florida outdoor advertising reaches 6.2 million residents across 3 counties, plus 50+ million annual tourists for unmatched exposure.",
        metric: "56M+ Total Reach"
      },
      {
        title: "Premium Demographics",
        description: "Target affluent communities from Aventura to Boca Raton, with average household incomes 20% above national average.",
        metric: "$75K+ Avg Income"
      },
      {
        title: "Event Marketing Power",
        description: "Leverage 200+ major events annually including Art Basel, Miami Open, Fort Lauderdale Boat Show, and Palm Beach Food & Wine Festival.",
        metric: "200+ Major Events"
      },
      {
        title: "Interstate Visibility",
        description: "Dominate I-95, I-75, and Florida Turnpike corridors where 2 million daily commuters create prime advertising opportunities.",
        metric: "2M Daily Commuters"
      },
      {
        title: "Beach to Business Coverage",
        description: "From South Beach to Boca Raton beaches, from Brickell to downtown West Palm, reach audiences wherever they live, work, and play.",
        metric: "120-Mile Coverage"
      },
      {
        title: "Multilingual Impact",
        description: "South Florida's diverse population responds to visual outdoor advertising that transcends language barriers effectively.",
        metric: "3 Language Markets"
      }
    ],

    // Regional Market Analysis
    process: [
      {
        step: 1,
        title: "Miami-Dade County Opportunities",
        description: "2.7 million residents, 24 million annual tourists. Key markets include Downtown Miami, Brickell, South Beach, Coral Gables, Aventura, and Kendall. Outdoor advertising here reaches Hispanic markets (70% population), international visitors, and diverse income levels.",
        icon: Building2
      },
      {
        step: 2,
        title: "Broward County Expansion",
        description: "1.9 million residents, major cities include Fort Lauderdale, Hollywood, Pembroke Pines, and Coral Springs. Strategic outdoor advertising targets beach communities, suburban families, and business professionals commuting on I-95 and I-595.",
        icon: MapPin
      },
      {
        step: 3,
        title: "Palm Beach County Premium",
        description: "1.5 million residents with highest average incomes in South Florida. West Palm Beach, Boca Raton, Delray Beach, and Jupiter offer premium outdoor advertising to affluent retirees, professionals, and seasonal residents.",
        icon: Award
      },
      {
        step: 4,
        title: "Strategic Route Planning",
        description: "Optimize campaigns across major corridors: I-95 (Miami to Palm Beach), US-1 (coastal route), Florida Turnpike, A1A (beachfront), and Palmetto Expressway. Each route offers unique demographic targeting opportunities.",
        icon: Navigation
      }
    ],

    // Statistics
    stats: {
      clientsSatisfied: "500+",
      averageROI: "520%",
      campaignsCompleted: "2,500+",
      yearEstablished: "2018"
    },

    // Regional Success Stories
    testimonials: [
      {
        name: "Robert Williams",
        company: "Tri-County Home Services",
        role: "President",
        content: "Our South Florida outdoor advertising campaign covered all three counties simultaneously. Mobile billboards generated 300+ service calls weekly across Miami-Dade, Broward, and Palm Beach. The ROI exceeded 600% in just three months.",
        rating: 5
      },
      {
        name: "Lisa Chen",
        company: "Coastal Medical Group",
        role: "Marketing VP",
        content: "Outdoor advertising allowed us to launch new clinics across South Florida efficiently. From Aventura to Boca Raton, our mobile billboard campaign generated 1,000+ new patient appointments. The tri-county coverage was exactly what we needed.",
        rating: 5
      },
      {
        name: "Antonio Silva",
        company: "South Florida Auto Group",
        role: "Regional Manager",
        content: "The ability to target specific markets - Hispanic communities in Miami, beach areas in Fort Lauderdale, and affluent buyers in Palm Beach - made outdoor advertising incredibly effective. Sales increased 45% during our campaign.",
        rating: 5
      }
    ],

    // Comprehensive Regional FAQs
    faqs: [
      {
        question: "What makes South Florida ideal for outdoor advertising campaigns?",
        answer: "South Florida offers unmatched outdoor advertising advantages: year-round sunshine (250+ days), outdoor-oriented lifestyle (residents spend 3+ hours outside daily), massive tourism (50+ million annual visitors), diverse demographics (multicultural markets), strong economy (15% growth rate), and major events year-round. The tri-county region's 6.2 million residents plus tourists create exceptional advertising density and ROI opportunities unavailable elsewhere."
      },
      {
        question: "How do I choose between Miami-Dade, Broward, or Palm Beach for outdoor advertising?",
        answer: "Each county offers unique advantages: Miami-Dade excels for Hispanic markets (70% population), international reach, and urban density. Broward County balances suburban families, beach communities, and business professionals. Palm Beach County targets affluent retirees, luxury markets, and seasonal residents. Most successful campaigns use multi-county strategies - mobile billboards can cover all three counties, maximizing reach and ROI across South Florida's diverse markets."
      },
      {
        question: "What are the best outdoor advertising formats for South Florida?",
        answer: "Mobile billboard trucks dominate South Florida with flexibility to cover beaches, business districts, and events across all three counties. Digital LED displays excel in high-traffic areas like Downtown Miami, Fort Lauderdale beach, and CityPlace. Transit advertising reaches commuters on Tri-Rail, Metrorail, and buses. Static billboards on I-95 and Florida Turnpike capture highway traffic. The best mix depends on your target audience and coverage needs."
      },
      {
        question: "How does weather affect outdoor advertising in South Florida?",
        answer: "South Florida's climate is ideal for outdoor advertising with 250+ sunny days annually. Modern LED displays and vinyl wraps withstand rain, wind, and sun. Hurricane season (June-November) rarely impacts campaigns - mobile billboards can relocate if needed, and digital displays are engineered for 150mph winds. Unlike northern markets with snow and ice, South Florida enables consistent year-round outdoor advertising performance."
      },
      {
        question: "What's the cost difference between counties for outdoor advertising?",
        answer: "Outdoor advertising costs vary by county and format: Miami-Dade ranges from $600-1,000/day for mobile billboards, $2,000-20,000/month for digital displays. Broward County costs 10-15% less with $500-800/day mobile billboards. Palm Beach County premiums run 20-30% higher for affluent market access. Multi-county packages offer best value - covering all three counties costs less than individual county campaigns while tripling your reach."
      },
      {
        question: "How do I reach South Florida's diverse language markets through outdoor advertising?",
        answer: "South Florida's multilingual market (Spanish 45%, English 40%, Creole 5%, Portuguese 3%) responds excellently to visual outdoor advertising. Mobile billboards and digital displays can rotate languages by neighborhood. Visual imagery transcends language barriers - a strong image with minimal text reaches everyone. Consider bilingual messaging in mixed areas, Spanish-focused content in Hialeah/Homestead, and English in Palm Beach. Professional translation ensures cultural relevance."
      },
      {
        question: "What South Florida events should I target with outdoor advertising?",
        answer: "Major events create prime outdoor advertising opportunities: Art Basel Miami (December), Ultra Music Festival (March), Miami Open (March), Fort Lauderdale International Boat Show (October), Palm Beach International Boat Show (March), South Beach Wine & Food Festival (February), and seasonal tourism (December-April). Event-targeted campaigns see 200-300% higher engagement. Mobile billboards can adjust routes real-time to maximize event exposure."
      },
      {
        question: "How long should my South Florida outdoor advertising campaign run?",
        answer: "Optimal campaign length depends on objectives: Brand awareness campaigns need 4-8 weeks for message retention across South Florida's large market. Event promotion requires 2-3 weeks pre-event. Grand openings benefit from 2-week intensive campaigns. Seasonal businesses should run 3-month campaigns during peak seasons. Mobile billboards offer flexibility with daily contracts, while static billboards typically require monthly commitments. Most clients see measurable results within 2 weeks."
      }
    ],

    // Related Services
    relatedServices: [
      {
        title: "Miami-Dade Mobile Billboards",
        description: "Targeted mobile advertising throughout Miami-Dade County's diverse neighborhoods",
        href: "/services/miami-dade-mobile-billboards",
        icon: Truck
      },
      {
        title: "Digital Billboard Trucks",
        description: "High-tech LED displays on wheels covering South Florida's major markets",
        href: "/services/digital-billboard-trucks-miami",
        icon: Zap
      },
      {
        title: "OOH Advertising Miami",
        description: "Comprehensive out-of-home advertising strategies for Miami markets",
        href: "/services/ooh-advertising-miami",
        icon: Globe
      }
    ],

    // Schema Markup
    schema: {
      name: "Outdoor Advertising South Florida - Tri-County Coverage",
      description: "Premier outdoor advertising services across South Florida including Miami-Dade, Broward, and Palm Beach counties. Mobile billboards, digital displays, and strategic OOH campaigns reaching 6.2 million residents.",
      provider: {
        name: "Maximax Advertising",
        url: "https://maximaxmobileadvertising.com"
      },
      areaServed: [
        "South Florida",
        "Miami-Dade County",
        "Broward County",
        "Palm Beach County",
        "Miami",
        "Fort Lauderdale",
        "West Palm Beach",
        "Hollywood",
        "Boca Raton",
        "Pompano Beach",
        "Pembroke Pines",
        "Coral Springs",
        "Delray Beach",
        "Jupiter",
        "Aventura",
        "Doral",
        "Hialeah"
      ],
      serviceType: "Outdoor Advertising",
    },

    // Service-specific props
    industries: [
      "Healthcare",
      "Real Estate",
      "Automotive",
      "Legal Services",
      "Home Services",
      "Retail",
      "Hospitality",
      "Financial Services"
    ],
    locations: [
      "Miami-Dade County",
      "Broward County",
      "Palm Beach County",
      "Fort Lauderdale",
      "West Palm Beach"
    ]
  }

  return <ServicePageTemplate {...serviceData} />
}