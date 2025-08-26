import { Metadata } from 'next'
import { 
  MapPin,
  Navigation,
  Globe,
  Users,
  Building2,
  TrendingUp,
  Target,
  BarChart3,
  Car,
  Briefcase,
  Home,
  ShoppingBag,
  Plane,
  Heart,
  GraduationCap,
  Palmtree,
  Sun,
  Waves,
  Building,
  Map,
  Route,
  Clock,
  Shield,
  CheckCircle
} from 'lucide-react'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'Coverage Areas',
  description: 'Mobile billboard advertising coverage throughout South Florida including Miami-Dade, Broward, and Palm Beach counties. Targeted billboard campaigns in Miami, Fort Lauderdale, Boca Raton, West Palm Beach, and surrounding areas.',
  keywords: [
    'South Florida billboard advertising',
    'Miami billboard coverage',
    'Fort Lauderdale mobile billboards',
    'Boca Raton advertising',
    'West Palm Beach billboards',
    'Miami-Dade County advertising',
    'Broward County billboards',
    'Palm Beach County advertising',
    'Florida billboard coverage',
    'mobile billboard service areas',
    'billboard coverage map',
    'advertising coverage areas',
    'South Florida advertising zones',
    'Miami metro advertising',
    'tri-county billboard service',
    'Florida mobile advertising coverage',
    'billboard service locations',
    'advertising territory coverage',
    'regional billboard services',
    'local billboard advertising areas'
  ]
})

export default function CoverageAreasPage() {
  const serviceData = {
    serviceName: "Coverage Areas",
    tagline: "Comprehensive Billboard Coverage Across South Florida's Prime Markets",
    description: "Strategic mobile billboard advertising coverage throughout Miami-Dade, Broward, and Palm Beach counties. Reach millions of potential customers in South Florida's most affluent and high-traffic areas with targeted campaigns.",
    heroImage: "/images/Graphics  /image5.png",
    serviceType: 'mobile' as const,
    
    // Service Features
    features: [
      {
        icon: Building2,
        title: "Miami-Dade County",
        description: "Complete coverage of Miami, Miami Beach, Coral Gables, Aventura, Key Biscayne, Pinecrest, and all major business districts with strategic billboard placement."
      },
      {
        icon: Palmtree,
        title: "Broward County",
        description: "Comprehensive advertising in Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, Davie, and Plantation reaching diverse demographics."
      },
      {
        icon: Sun,
        title: "Palm Beach County",
        description: "Premium coverage in Boca Raton, West Palm Beach, Delray Beach, Wellington, Jupiter, and Palm Beach Gardens targeting affluent communities."
      },
      {
        icon: Car,
        title: "Major Highways & Routes",
        description: "Strategic positioning along I-95, I-75, US-1, A1A, Turnpike, and major arterial roads for maximum visibility and impressions."
      },
      {
        icon: Users,
        title: "Event & Venue Coverage",
        description: "Targeted advertising at stadiums, conventions, festivals, beaches, shopping centers, and entertainment districts throughout South Florida."
      },
      {
        icon: Target,
        title: "Demographic Targeting",
        description: "Precision coverage in specific neighborhoods based on income levels, age groups, interests, and consumer behavior patterns."
      }
    ],

    // Service Benefits
    benefits: [
      {
        title: "10 Million+ Population Reach",
        description: "Access South Florida's massive population across three counties with strategic mobile billboard placement in high-traffic areas.",
        metric: "10M+ People"
      },
      {
        title: "365 Days of Perfect Weather",
        description: "Year-round outdoor advertising opportunities with South Florida's ideal climate ensuring consistent campaign visibility.",
        metric: "365 Days/Year"
      },
      {
        title: "Diverse Market Segments",
        description: "Reach affluent residents, tourists, business professionals, and diverse cultural communities across multiple market segments.",
        metric: "50+ Demographics"
      },
      {
        title: "Premium Tourism Markets",
        description: "Target 30+ million annual visitors in world-renowned destinations like South Beach, Las Olas, and Worth Avenue.",
        metric: "30M+ Tourists"
      },
      {
        title: "Business Hub Coverage",
        description: "Access major business districts including Downtown Miami, Brickell, Fort Lauderdale CBD, and Boca Raton corporate centers.",
        metric: "500K+ Businesses"
      },
      {
        title: "Multi-Language Markets",
        description: "Effectively reach English, Spanish, Portuguese, and Creole-speaking communities with culturally relevant messaging.",
        metric: "4+ Languages"
      }
    ],

    // Process Steps
    process: [
      {
        step: 1,
        title: "Market Analysis",
        description: "Analyze your target demographics and business goals to identify optimal coverage areas and routes within South Florida.",
        icon: Map
      },
      {
        step: 2,
        title: "Route Design",
        description: "Create custom routes through your selected coverage areas, maximizing exposure in high-value zones and target neighborhoods.",
        icon: Route
      },
      {
        step: 3,
        title: "Coverage Deployment",
        description: "Deploy mobile billboards across chosen areas with GPS tracking and real-time monitoring for verified coverage.",
        icon: Navigation
      },
      {
        step: 4,
        title: "Performance Tracking",
        description: "Monitor campaign performance by area with detailed analytics showing impressions, engagement, and ROI by location.",
        icon: BarChart3
      }
    ],


    // Statistics
    stats: {
      clientsSatisfied: "1,200+",
      averageROI: "750%",
      campaignsCompleted: "5,000+",
      yearEstablished: "2018"
    },

    // Testimonials
    testimonials: [
      {
        name: "Carlos Mendez",
        company: "Mendez Construction Group",
        role: "President",
        content: "The tri-county coverage was perfect for our regional expansion. We saw leads from Miami to Palm Beach, with particularly strong response in Broward County. The ROI exceeded 800% in just one month.",
        rating: 5
      },
      {
        name: "Dr. Rachel Green",
        company: "Coastal Medical Network",
        role: "CMO",
        content: "Being able to target specific neighborhoods in all three counties transformed our patient acquisition strategy. The coverage maps and analytics showed exactly where our ads performed best.",
        rating: 5
      },
      {
        name: "Tom Anderson",
        company: "Anderson Auto Group",
        role: "Marketing Director",
        content: "The coverage across South Florida's major highways and business districts drove incredible traffic to all our dealership locations. Best advertising investment we've made in 20 years.",
        rating: 5
      }
    ],

    // Coverage Area FAQs
    faqs: [
      {
        question: "What specific areas do you cover in Miami-Dade County?",
        answer: "We provide complete coverage of Miami-Dade County including Miami, Miami Beach, Coral Gables, Aventura, Key Biscayne, Pinecrest, Kendall, Homestead, Hialeah, North Miami, Bal Harbour, Surfside, and all incorporated cities. Our routes include major highways (I-95, US-1, 836, 826), business districts (Downtown, Brickell, Dadeland), and entertainment areas (South Beach, Wynwood, Design District)."
      },
      {
        question: "Which Broward County cities are included in your coverage?",
        answer: "Our Broward County coverage includes Fort Lauderdale, Hollywood, Pembroke Pines, Coral Springs, Davie, Plantation, Sunrise, Pompano Beach, Deerfield Beach, Coconut Creek, Margate, Tamarac, Lauderhill, Weston, and all other cities. We cover major routes like I-95, I-595, Turnpike, US-1, A1A, and commercial districts including Las Olas, Sawgrass Mills, and Fort Lauderdale Beach."
      },
      {
        question: "What areas do you service in Palm Beach County?",
        answer: "Palm Beach County coverage includes Boca Raton, West Palm Beach, Delray Beach, Boynton Beach, Wellington, Jupiter, Palm Beach Gardens, Lake Worth, Greenacres, Royal Palm Beach, and surrounding areas. Routes include I-95, Turnpike, US-1, A1A, and premium areas like Mizner Park, CityPlace, Worth Avenue, and PGA Boulevard."
      },
      {
        question: "Can you target specific demographics within coverage areas?",
        answer: "Yes! We use demographic data to target specific neighborhoods based on income levels, age groups, cultural backgrounds, and consumer behaviors. Whether you need to reach luxury communities in Aventura, young professionals in Brickell, families in Weston, or tourists on South Beach, we customize routes for precise targeting."
      },
      {
        question: "Do you cover special events and seasonal areas?",
        answer: "Absolutely! We provide coverage for major events like Art Basel, Miami Music Week, Fort Lauderdale Boat Show, Palm Beach Food & Wine Festival, and sporting events. We also adjust routes seasonally to capture tourist traffic, snowbird populations, and holiday shopping areas."
      },
      {
        question: "How do you determine the best coverage areas for my business?",
        answer: "We analyze your business type, target audience, competition, and goals to recommend optimal coverage areas. Using demographic data, traffic patterns, and market research, we identify high-opportunity zones within our coverage area that align with your customer profile and maximize ROI."
      },
      {
        question: "Can I split my campaign between different coverage areas?",
        answer: "Yes! We offer flexible coverage options allowing you to split campaign time between counties or focus on specific cities. For example, you could run Monday-Wednesday in Miami-Dade, Thursday-Friday in Broward, and weekends in Palm Beach County."
      },
      {
        question: "What's the minimum coverage area for a campaign?",
        answer: "Our minimum coverage is typically one city or defined area within a county for a single day campaign. However, we recommend broader coverage for better results. Most successful campaigns cover multiple high-traffic areas within at least one full county."
      }
    ],

    // Related Services
    relatedServices: [
      {
        title: "GPS Tracking",
        description: "Real-time verification of coverage areas with detailed tracking reports",
        href: "/services/gps-tracking",
        icon: Navigation
      },
      {
        title: "Mobile Billboard Trucks",
        description: "Professional fleet serving all South Florida coverage areas",
        href: "/services/mobile-billboard-trucks",
        icon: MapPin
      }
    ],

    // Schema Markup
    schema: {
      name: "Mobile Billboard Coverage Areas - South Florida",
      description: "Comprehensive mobile billboard advertising coverage throughout Miami-Dade, Broward, and Palm Beach counties with targeted campaigns in major cities and high-traffic areas.",
      provider: {
        name: "Maximax Advertising",
        url: "https://maximaxmobileadvertising.com"
      },
      areaServed: [
        "Miami-Dade County",
        "Broward County",
        "Palm Beach County",
        "Miami",
        "Miami Beach",
        "Fort Lauderdale",
        "Boca Raton",
        "West Palm Beach",
        "Hollywood",
        "Pembroke Pines",
        "Coral Springs",
        "Coral Gables",
        "Aventura",
        "Delray Beach",
        "Jupiter",
        "Wellington"
      ],
      serviceType: "Mobile Billboard Coverage Areas",
    },

    // Coverage-specific data
    counties: [
      {
        name: "Miami-Dade County",
        population: "2.7M+",
        cities: 34,
        majorHighways: ["I-95", "I-75", "US-1", "836", "826"],
        keyAreas: ["Downtown Miami", "Brickell", "South Beach", "Wynwood", "Coral Gables", "Aventura"]
      },
      {
        name: "Broward County",
        population: "1.9M+",
        cities: 31,
        majorHighways: ["I-95", "I-595", "I-75", "Turnpike", "US-1"],
        keyAreas: ["Downtown Fort Lauderdale", "Las Olas", "Hollywood Beach", "Sawgrass Mills", "Plantation", "Coral Springs"]
      },
      {
        name: "Palm Beach County",
        population: "1.5M+",
        cities: 39,
        majorHighways: ["I-95", "Turnpike", "US-1", "441", "A1A"],
        keyAreas: ["Downtown West Palm Beach", "Boca Raton", "Delray Beach", "Worth Avenue", "Jupiter", "Wellington"]
      }
    ],

    // Special coverage zones
    specialZones: [
      "Airport Districts (MIA, FLL, PBI)",
      "Port Areas (PortMiami, Port Everglades)",
      "Beach Communities (South Beach to Jupiter)",
      "Entertainment Districts",
      "Shopping Centers & Malls",
      "University Campuses",
      "Medical Districts",
      "Financial Centers",
      "Tourist Attractions",
      "Sports Venues"
    ]
  }

  return <ServicePageTemplate {...serviceData} />
}