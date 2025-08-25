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
  MessageCircle
} from 'lucide-react'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'Mobile Billboard Trucks',
  description: 'Professional mobile billboard trucks with GPS tracking, 4K LED displays, and real-time reporting in South Florida. Reach thousands of customers with targeted mobile billboard advertising campaigns in Miami-Dade, Broward, and Palm Beach counties.',
  keywords: [
    'mobile billboard trucks',
    'billboard truck rental',
    'mobile billboard advertising',
    'advertising trucks',
    'billboard advertising',
    'mobile advertising trucks',
    'LED billboard trucks',
    'digital billboard trucks',
    'mobile billboard cost',
    'billboard truck Miami',
    'mobile billboards South Florida',
    'advertising truck rental',
    'mobile billboard campaigns',
    'billboard truck services',
    'mobile advertising Florida',
    'truck billboard advertising',
    'mobile outdoor advertising',
    'digital mobile billboards',
    'billboard trucks for hire',
    'mobile marketing trucks'
  ]
})

export default function MobileBillboardTrucksPage() {
  const serviceData = {
    serviceName: "Mobile Billboard Trucks",
    tagline: "Drive Your Brand Forward with High-Impact Mobile Billboard Advertising",
    description: "Transform your advertising strategy with our fleet of professional mobile billboard trucks. Featuring GPS tracking, 4K LED displays, and proven results across South Florida's most trafficked routes.",
    heroImage: "/images/Graphics/trucka.png",
    serviceType: 'mobile' as const,
    
    // Service Features
    features: [
      {
        icon: Truck,
        title: "Professional Fleet",
        description: "Modern fleet of well-maintained trucks with eye-catching LED displays designed to maximize visibility and brand impact."
      },
      {
        icon: Zap,
        title: "4K LED Displays",
        description: "Ultra-bright 4K LED screens visible day and night, ensuring your message stands out in any lighting condition."
      },
      {
        icon: Navigation,
        title: "GPS Tracking",
        description: "Real-time GPS monitoring with detailed route reports showing exactly where and when your ads were displayed."
      },
      {
        icon: Target,
        title: "Targeted Routes",
        description: "Strategic route planning to reach your ideal customers in high-traffic areas, events, and demographic zones."
      },
      {
        icon: Eye,
        title: "High Visibility",
        description: "Massive 10ft x 6ft displays positioned at eye level for maximum impact and audience engagement."
      },
      {
        icon: BarChart3,
        title: "Performance Analytics",
        description: "Comprehensive reporting including impressions, reach, frequency, and detailed campaign performance metrics."
      }
    ],

    // Service Benefits
    benefits: [
      {
        title: "Massive Daily Reach",
        description: "Each mobile billboard truck generates 30,000-70,000 daily impressions, delivering unmatched exposure for your brand.",
        metric: "70,000+ Impressions/Day"
      },
      {
        title: "Cost-Effective Reach",
        description: "Mobile billboard trucks offer one of the best impression rates in outdoor advertising.",
        metric: "Best Value CPM"
      },
      {
        title: "Impossible to Ignore",
        description: "Mobile billboards have a 97% recall rate and 96% notice rate, far exceeding traditional static billboards.",
        metric: "97% Recall Rate"
      },
      {
        title: "Flexible Coverage",
        description: "Target specific neighborhoods, events, or demographics with route customization and real-time adjustments.",
        metric: "100% Route Control"
      },
      {
        title: "Quick Campaign Launch",
        description: "Get your campaign running within 48 hours with our streamlined approval and deployment process.",
        metric: "48-Hour Start"
      },
      {
        title: "Weather Independent",
        description: "Unlike digital displays, our LED screens perform perfectly in all weather conditions including rain and sun.",
        metric: "24/7 Operation"
      }
    ],

    // Process Steps
    process: [
      {
        step: 1,
        title: "Strategy Consultation",
        description: "We analyze your target audience, budget, and goals to create the perfect mobile billboard campaign strategy.",
        icon: Users
      },
      {
        step: 2,
        title: "Route Planning",
        description: "Our team designs optimal routes based on traffic patterns, demographics, and your specific targeting requirements.",
        icon: MapPin
      },
      {
        step: 3,
        title: "Creative Development",
        description: "Professional design and production of your mobile billboard advertisement optimized for maximum impact and readability.",
        icon: Target
      },
      {
        step: 4,
        title: "Campaign Launch",
        description: "Deploy your mobile billboard trucks with GPS tracking and real-time monitoring for immediate campaign visibility.",
        icon: Truck
      }
    ],


    // Statistics
    stats: {
      clientsSatisfied: "500+",
      averageROI: "850%",
      campaignsCompleted: "2,500+",
      yearEstablished: "2018"
    },

    // Testimonials
    testimonials: [
      {
        name: "Maria Rodriguez",
        company: "Rodriguez Law Firm",
        role: "Managing Partner",
        content: "The mobile billboard trucks generated more leads in one week than our static billboard campaign did in three months. The GPS tracking proved our ads reached exactly the areas we wanted to target.",
        rating: 5
      },
      {
        name: "David Chen",
        company: "Sunshine HVAC",
        role: "Marketing Director",
        content: "We saw a 400% increase in service calls during our mobile billboard campaign. The professional truck fleet and 4K displays really made our brand stand out in the competitive HVAC market.",
        rating: 5
      },
      {
        name: "Jennifer Martinez",
        company: "Elite Plastic Surgery",
        role: "Practice Administrator",
        content: "The mobile billboard trucks helped us reach affluent neighborhoods throughout Miami-Dade. Our consultation bookings increased by 250% and the ROI was incredible - over 600% return on our investment.",
        rating: 5
      }
    ],

    // FAQs
    faqs: [
      {
        question: "What areas do your mobile billboard trucks cover in South Florida?",
        answer: "Our mobile billboard trucks operate throughout Miami-Dade, Broward, and Palm Beach counties. We cover major cities including Miami, Fort Lauderdale, Boca Raton, West Palm Beach, Hialeah, Coral Gables, Pembroke Pines, and Coral Springs. Custom route planning ensures we reach your target demographics effectively."
      },
      {
        question: "How do I get started with mobile billboard truck advertising?",
        answer: "Getting started is easy! Contact us for a free consultation where we'll discuss your goals, target audience, and coverage areas. We'll create a custom campaign strategy and provide transparent pricing based on your specific needs. Most campaigns can launch within 48 hours of approval."
      },
      {
        question: "How quickly can you start a mobile billboard truck campaign?",
        answer: "We can launch most mobile billboard campaigns within 48 hours of creative approval. Same-day deployment is available for urgent campaigns with additional expedited fees. Our streamlined process ensures rapid campaign activation without compromising quality."
      },
      {
        question: "What size are your mobile billboard displays?",
        answer: "Our mobile billboard trucks feature large 10ft x 6ft LED displays on both sides of the vehicle. The screens use 4K resolution technology for crystal-clear visibility during day and night operations. Display brightness automatically adjusts for optimal viewing in all lighting conditions."
      },
      {
        question: "Do you provide GPS tracking and campaign reporting?",
        answer: "Yes, all mobile billboard trucks include real-time GPS tracking with detailed reporting. You'll receive daily reports showing routes traveled, time spent in each area, estimated impressions, and demographic breakdowns. Our analytics dashboard provides 24/7 campaign visibility."
      },
      {
        question: "What types of businesses benefit most from mobile billboard trucks?",
        answer: "Mobile billboard trucks work excellently for law firms, medical practices, HVAC companies, home builders, restaurants, retail stores, and service businesses. Any company looking to increase local brand awareness, drive traffic, or target specific geographic areas will see strong results."
      },
      {
        question: "Can I customize the routes for my mobile billboard campaign?",
        answer: "Absolutely! Route customization is a key advantage of mobile billboard trucks. We can target specific neighborhoods, business districts, events, or demographic areas. Routes can be adjusted in real-time based on traffic patterns, special events, or campaign performance data."
      },
      {
        question: "Are your mobile billboard trucks legal to operate on all roads?",
        answer: "Yes, all our mobile billboard trucks are fully licensed, insured, and compliant with local regulations. Our professional drivers are trained in safe operation and follow all traffic laws. We handle all permitting requirements and ensure full legal compliance for every campaign."
      }
    ],

    // Related Services
    relatedServices: [
      {
        title: "Static Billboard Advertising",
        description: "Traditional billboard placements in high-traffic locations throughout South Florida",
        href: "/services/static-billboards",
        icon: BarChart3
      },
      {
        title: "Digital Billboard Advertising", 
        description: "High-tech digital displays with rotating messages and dynamic content capabilities",
        href: "/services/digital-billboards",
        icon: Zap
      },
      {
        title: "Event Marketing",
        description: "Comprehensive event advertising and promotional campaigns for maximum attendance",
        href: "/services/event-marketing",
        icon: Calendar
      }
    ],

    // Schema Markup
    schema: {
      name: "Mobile Billboard Truck Advertising",
      description: "Professional mobile billboard trucks with GPS tracking, 4K LED displays, and comprehensive reporting for businesses in South Florida. Targeted mobile advertising campaigns in Miami-Dade, Broward, and Palm Beach counties.",
      provider: {
        name: "Maximax Advertising",
        url: "https://maximaxadvertising.com"
      },
      areaServed: [
        "Miami-Dade County",
        "Broward County", 
        "Palm Beach County",
        "Miami",
        "Fort Lauderdale",
        "Boca Raton",
        "West Palm Beach",
        "Hialeah",
        "Coral Gables",
        "Pembroke Pines",
        "Coral Springs",
        "Delray Beach"
      ],
      serviceType: "Mobile Billboard Advertising",
    },

    // Service-specific props
    industries: [
      "Legal Services",
      "Medical & Healthcare",
      "HVAC & Home Services", 
      "Real Estate",
      "Automotive",
      "Restaurants & Food",
      "Retail & Shopping",
      "Professional Services"
    ],
    locations: [
      "Miami-Dade County",
      "Broward County",
      "Palm Beach County"
    ]
  }

  return <ServicePageTemplate {...serviceData} />
}