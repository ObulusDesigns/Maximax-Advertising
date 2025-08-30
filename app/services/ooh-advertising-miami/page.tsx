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
  LineChart
} from 'lucide-react'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'OOH Advertising Miami',
  description: 'Complete guide to Out-of-Home (OOH) advertising in Miami. Learn about mobile billboards, digital displays, transit advertising, and strategic outdoor advertising solutions that deliver 97% recall rates and maximum ROI in South Florida.',
  keywords: [
    'OOH advertising Miami',
    'out of home advertising Miami',
    'outdoor advertising Miami',
    'Miami outdoor advertising',
    'Miami OOH advertising',
    'out-of-home advertising Florida',
    'Miami billboard advertising',
    'Miami mobile advertising',
    'Miami transit advertising',
    'Miami digital billboards',
    'Miami street advertising',
    'Miami outdoor media',
    'Miami advertising solutions',
    'Miami marketing campaigns',
    'Miami brand visibility',
    'South Florida OOH advertising',
    'Miami-Dade outdoor advertising',
    'Miami advertising agencies',
    'Miami outdoor campaigns',
    'Miami advertising effectiveness'
  ]
})

export default function OOHAdvertisingMiamiPage() {
  const serviceData = {
    serviceName: "OOH Advertising Miami",
    tagline: "Master Out-of-Home Advertising in Miami's Dynamic Market",
    description: "Discover the power of Out-of-Home (OOH) advertising in Miami. From mobile billboards to digital displays, learn how strategic outdoor advertising delivers unmatched visibility, 97% recall rates, and exceptional ROI in South Florida's vibrant marketplace.",
    heroImage: "/images/Graphics/trucka.png",
    serviceType: 'mobile' as const,
    
    // Service Features
    features: [
      {
        icon: Globe,
        title: "Miami's OOH Landscape",
        description: "Miami's unique blend of tourism, business, and culture creates unparalleled OOH advertising opportunities with 365 days of outdoor visibility."
      },
      {
        icon: Truck,
        title: "Mobile Billboard Dominance",
        description: "Mobile billboards generate 30,000-70,000 daily impressions in Miami, offering flexible targeting and route customization for maximum impact."
      },
      {
        icon: Building2,
        title: "Strategic Placement Options",
        description: "From Ocean Drive to Brickell, strategically place your message where your audience lives, works, and plays throughout Miami-Dade County."
      },
      {
        icon: LineChart,
        title: "Proven ROI Metrics",
        description: "OOH advertising in Miami delivers an average 497% ROI, with mobile billboards achieving the highest engagement rates in outdoor media."
      },
      {
        icon: Target,
        title: "Demographic Precision",
        description: "Target specific Miami neighborhoods, from affluent Coral Gables to bustling Downtown, reaching your exact demographic with surgical precision."
      },
      {
        icon: Megaphone,
        title: "Multi-Format Integration",
        description: "Combine mobile billboards, digital displays, and transit advertising for comprehensive market coverage across Greater Miami."
      }
    ],

    // Service Benefits
    benefits: [
      {
        title: "Unbeatable Miami Visibility",
        description: "In a city where 80% of residents spend 2+ hours outdoors daily, OOH advertising captures attention when consumers are most receptive.",
        metric: "80% Daily Outdoor Exposure"
      },
      {
        title: "Tourist & Resident Reach",
        description: "Miami welcomes 24 million visitors annually. OOH advertising reaches both tourists and 2.7 million local residents simultaneously.",
        metric: "26.7M Total Audience"
      },
      {
        title: "Year-Round Campaign Weather",
        description: "Miami's 250+ sunny days enable consistent OOH advertising performance without weather-related interruptions common in other markets.",
        metric: "365-Day Visibility"
      },
      {
        title: "Event Marketing Amplification",
        description: "Leverage Miami's major events like Art Basel, Ultra Music Festival, and Miami Beach Food & Wine Festival for targeted OOH campaigns.",
        metric: "50+ Major Events/Year"
      },
      {
        title: "Multilingual Market Penetration",
        description: "Miami's diverse population responds strongly to OOH advertising, with visual messaging transcending language barriers effectively.",
        metric: "70% Hispanic Market"
      },
      {
        title: "Premium CPM Value",
        description: "OOH advertising in Miami delivers the lowest cost-per-thousand impressions compared to digital, TV, and radio advertising.",
        metric: "$2-5 CPM Average"
      }
    ],

    // Educational Content Sections
    process: [
      {
        step: 1,
        title: "Understanding OOH Advertising",
        description: "Out-of-Home advertising encompasses all advertising media found outside the home, including mobile billboards, digital displays, transit ads, and street furniture. In Miami's outdoor-centric culture, OOH creates unavoidable brand touchpoints.",
        icon: Globe
      },
      {
        step: 2,
        title: "Types of OOH in Miami",
        description: "Mobile billboard trucks offer maximum flexibility, digital displays provide dynamic content, transit advertising reaches commuters, and place-based media targets specific venues. Each format serves unique objectives in Miami's diverse market.",
        icon: Truck
      },
      {
        step: 3,
        title: "Strategic Planning & Targeting",
        description: "Successful OOH campaigns in Miami require understanding traffic patterns, demographic zones, and seasonal variations. Data-driven route planning ensures your message reaches the right audience at optimal times.",
        icon: Target
      },
      {
        step: 4,
        title: "Measuring OOH Effectiveness",
        description: "Modern OOH advertising uses GPS tracking, impression modeling, and attribution studies to measure campaign performance. Real-time analytics provide actionable insights for optimization and ROI calculation.",
        icon: BarChart3
      }
    ],

    // Statistics
    stats: {
      clientsSatisfied: "500+",
      averageROI: "497%",
      campaignsCompleted: "2,500+",
      yearEstablished: "2018"
    },

    // Testimonials with Miami Focus
    testimonials: [
      {
        name: "Carlos Mendez",
        company: "Miami Luxury Real Estate",
        role: "CEO",
        content: "OOH advertising transformed our luxury property marketing in Miami. Mobile billboards in Coral Gables and Key Biscayne generated 15 qualified leads weekly, with a 300% ROI. The ability to target affluent neighborhoods precisely was game-changing.",
        rating: 5
      },
      {
        name: "Sofia Martinez",
        company: "Biscayne Medical Center",
        role: "Marketing Director",
        content: "Our OOH campaign reached both English and Spanish-speaking communities effectively. The mobile billboards generated 500+ appointment bookings in the first month, proving OOH advertising's power in Miami's diverse market.",
        rating: 5
      },
      {
        name: "Michael Thompson",
        company: "South Beach Hospitality Group",
        role: "VP of Marketing",
        content: "During Miami Music Week, our OOH advertising campaign delivered exceptional results. The combination of mobile billboards and digital displays drove 40% increase in venue traffic. The real-time route adjustments were invaluable.",
        rating: 5
      }
    ],

    // Comprehensive FAQs about OOH Advertising
    faqs: [
      {
        question: "What exactly is OOH advertising and why is it effective in Miami?",
        answer: "Out-of-Home (OOH) advertising includes all advertising media encountered outside the home - mobile billboards, digital displays, transit ads, and street furniture. In Miami, OOH is exceptionally effective due to high outdoor activity (80% of residents spend 2+ hours outside daily), year-round favorable weather, heavy tourist traffic (24 million annual visitors), and diverse demographics that respond well to visual messaging. OOH advertising achieves 97% recall rates and delivers messages when consumers are active and making purchase decisions."
      },
      {
        question: "How does OOH advertising compare to digital marketing in Miami?",
        answer: "While digital marketing offers targeting precision, OOH advertising in Miami provides unique advantages: it's impossible to skip or block (unlike online ads), reaches 98% of adults weekly, costs 80% less per impression than digital ads, builds brand trust through physical presence, and captures attention during prime decision-making moments. The most successful Miami campaigns combine OOH with digital for maximum impact - OOH drives awareness while digital captures conversions."
      },
      {
        question: "What types of OOH advertising work best in Miami's market?",
        answer: "Mobile billboard trucks lead Miami's OOH effectiveness with 30,000-70,000 daily impressions and route flexibility. Digital LED displays excel in high-traffic areas like Brickell and South Beach. Transit advertising reaches commuters on Metrorail and buses. Place-based media targets specific venues like malls and airports. The best format depends on your audience - mobile billboards for broad reach, transit for commuters, digital for dynamic content, and place-based for targeted demographics."
      },
      {
        question: "How much does OOH advertising cost in Miami compared to other cities?",
        answer: "Miami OOH advertising offers competitive pricing with exceptional value. Mobile billboard campaigns start at $500-800/day, delivering 30,000+ impressions (CPM of $15-25). Static billboards range from $1,500-15,000/month depending on location. Digital displays cost $2,000-20,000/month. Compared to cities like New York or Los Angeles, Miami offers 30-40% lower rates with comparable or better audience engagement due to outdoor lifestyle and tourism."
      },
      {
        question: "What Miami-specific factors should I consider for OOH advertising?",
        answer: "Key Miami factors include: seasonal tourism peaks (December-April), major events (Art Basel, Ultra, Miami Open), neighborhood demographics (70% Hispanic population), traffic patterns (I-95, US-1 corridors), weather considerations (hurricane season June-November), multilingual messaging needs, beach vs. inland audience behaviors, and time-of-day variations. Successful campaigns adapt to Miami's unique rhythm, targeting tourists on Ocean Drive, professionals in Brickell, and families in suburban areas."
      },
      {
        question: "How do I measure ROI for OOH advertising campaigns in Miami?",
        answer: "Modern OOH measurement includes: GPS tracking for mobile billboards showing exact routes and dwell times, impression estimates based on traffic data (averaging 497% ROI in Miami), QR code and SMS response tracking, website traffic attribution through geo-fencing, brand lift studies measuring awareness increases, foot traffic analysis for retail locations, and call tracking with dedicated phone numbers. Most Miami OOH campaigns see measurable results within 7-14 days."
      },
      {
        question: "What industries see the best results from OOH advertising in Miami?",
        answer: "Top-performing industries include: law firms (500% average ROI from mobile billboards), healthcare/medical practices (300% increase in appointments), real estate (15-20 leads per week), hospitality/restaurants (40% traffic increase), automotive dealerships (25% more showroom visits), home services/HVAC (400% more service calls), and fitness/wellness centers (200% membership inquiries). Miami's diverse economy and outdoor culture make OOH effective across all sectors."
      },
      {
        question: "How quickly can I launch an OOH advertising campaign in Miami?",
        answer: "Mobile billboard campaigns can launch within 48 hours of approval - the fastest OOH option. Digital displays typically require 3-5 days for content creation and scheduling. Static billboards need 7-14 days for production and installation. Transit advertising requires 2-3 weeks for approval and placement. For urgent campaigns, mobile billboards offer same-day deployment with expedited fees. Most campaigns benefit from 1-2 weeks planning for optimal route strategy and creative development."
      }
    ],

    // Related Services
    relatedServices: [
      {
        title: "Mobile Billboard Trucks",
        description: "High-impact mobile advertising with GPS tracking and 4K displays throughout Miami-Dade",
        href: "/services/mobile-billboard-trucks",
        icon: Truck
      },
      {
        title: "Digital Billboard Advertising", 
        description: "Dynamic LED displays with real-time content updates in Miami's busiest locations",
        href: "/services/digital-billboard-trucks-miami",
        icon: Zap
      },
      {
        title: "South Florida Coverage",
        description: "Comprehensive OOH advertising across Miami-Dade, Broward, and Palm Beach counties",
        href: "/services/outdoor-advertising-south-florida",
        icon: MapPin
      }
    ],

    // Schema Markup
    schema: {
      name: "OOH Advertising Miami - Out-of-Home Advertising Services",
      description: "Comprehensive Out-of-Home (OOH) advertising services in Miami including mobile billboards, digital displays, and strategic outdoor campaigns. Expert OOH advertising with proven ROI across Miami-Dade County.",
      provider: {
        name: "Maximax Advertising",
        url: "https://maximaxmobileadvertising.com"
      },
      areaServed: [
        "Miami",
        "Miami Beach",
        "Downtown Miami",
        "Brickell",
        "Coral Gables",
        "Coconut Grove",
        "Key Biscayne",
        "Aventura",
        "Sunny Isles Beach",
        "Hialeah",
        "Kendall",
        "Doral",
        "Miami-Dade County"
      ],
      serviceType: "Out-of-Home Advertising",
    },

    // Service-specific props
    industries: [
      "Tourism & Hospitality",
      "Real Estate",
      "Healthcare",
      "Legal Services",
      "Automotive",
      "Retail & Shopping",
      "Financial Services",
      "Entertainment & Events"
    ],
    locations: [
      "Miami",
      "Miami Beach",
      "Downtown Miami",
      "Brickell",
      "Coral Gables"
    ]
  }

  return <ServicePageTemplate {...serviceData} />
}