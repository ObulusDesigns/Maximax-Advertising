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
  Monitor,
  Sparkles,
  Video,
  Wifi,
  Play,
  Palette,
  Sun,
  Moon
} from 'lucide-react'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'Digital Billboard Trucks Miami',
  description: 'Premium digital billboard trucks in Miami with 4K LED displays, real-time content updates, and GPS tracking. Dynamic mobile advertising with video capabilities, day/night optimization, and 70,000+ daily impressions throughout South Florida.',
  keywords: [
    'digital billboard trucks Miami',
    'Miami digital billboard trucks',
    'LED billboard trucks Miami',
    'digital mobile billboards Miami',
    'Miami LED truck advertising',
    'digital advertising trucks Miami',
    '4K billboard trucks Miami',
    'video billboard trucks Miami',
    'Miami digital mobile advertising',
    'LED mobile billboards Miami',
    'digital truck advertising Miami',
    'Miami mobile LED displays',
    'electronic billboard trucks',
    'Miami digital outdoor advertising',
    'mobile digital displays Miami',
    'Miami LED advertising trucks',
    'digital billboard rental Miami',
    'Miami mobile video advertising',
    'LED screen trucks Miami',
    'digital mobile marketing Miami'
  ]
})

export default function DigitalBillboardTrucksMiamiPage() {
  const serviceData = {
    serviceName: "Digital Billboard Trucks Miami",
    tagline: "Revolutionary Digital Billboard Trucks with 4K LED Technology",
    description: "Experience the future of mobile advertising with Miami's premier digital billboard trucks. Featuring ultra-bright 4K LED displays, real-time content updates, video capabilities, and GPS tracking. Deliver dynamic messages that adapt to time, location, and audience throughout South Florida.",
    heroImage: "/images/Graphics/trucka.png",
    serviceType: 'mobile' as const,
    
    // Service Features
    features: [
      {
        icon: Monitor,
        title: "4K Ultra-HD LED Displays",
        description: "Crystal-clear 4K resolution on massive 10ft x 6ft LED screens visible from 500+ feet in direct Miami sunlight."
      },
      {
        icon: Video,
        title: "Full Video Capabilities",
        description: "Display full-motion video, animations, and dynamic content that captures attention unlike any static billboard."
      },
      {
        icon: Wifi,
        title: "Real-Time Content Updates",
        description: "Change messaging instantly via cloud platform - update promotions, switch languages, or adapt to events remotely."
      },
      {
        icon: Sun,
        title: "Day/Night Auto-Brightness",
        description: "Smart sensors automatically adjust LED brightness for perfect visibility from sunrise Ocean Drive to midnight South Beach."
      },
      {
        icon: Sparkles,
        title: "Animation & Effects",
        description: "Eye-catching transitions, animated graphics, and special effects that make your brand impossible to ignore."
      },
      {
        icon: Palette,
        title: "16.7 Million Colors",
        description: "True color reproduction ensures brand consistency with vivid, accurate colors that pop on Miami streets."
      }
    ],

    // Service Benefits
    benefits: [
      {
        title: "Dynamic Content Flexibility",
        description: "Digital billboard trucks allow unlimited creative changes - run different ads for lunch/dinner, English/Spanish, or weekday/weekend audiences.",
        metric: "Unlimited Ad Variations"
      },
      {
        title: "Video Impact Advantage",
        description: "Moving images on digital billboard trucks generate 400% more attention than static displays, with 94% viewer recall rate.",
        metric: "400% More Attention"
      },
      {
        title: "Superior Miami Visibility",
        description: "4K LED technology cuts through Miami's bright sunshine and neon nights, maintaining perfect visibility 24/7/365.",
        metric: "24/7 Crystal Clarity"
      },
      {
        title: "Instant Campaign Updates",
        description: "React to weather, traffic, events, or sales data in real-time. Update your digital billboard message in under 60 seconds.",
        metric: "60-Second Updates"
      },
      {
        title: "Multi-Campaign Rotation",
        description: "Display up to 10 different advertisements in rotation, maximizing message variety and preventing viewer fatigue.",
        metric: "10 Ads Per Truck"
      },
      {
        title: "Premium ROI Performance",
        description: "Digital billboard trucks deliver 600% average ROI with engagement rates 10x higher than traditional outdoor advertising.",
        metric: "600% Average ROI"
      }
    ],

    // Digital Technology Deep Dive
    process: [
      {
        step: 1,
        title: "Advanced LED Technology",
        description: "Our digital billboard trucks feature P6 high-resolution LED panels with 6mm pixel pitch, delivering sharp images visible from 500+ feet. Each display contains 110,000+ LED bulbs rated for 100,000 hours, ensuring consistent performance throughout Miami's demanding climate conditions.",
        icon: Zap
      },
      {
        step: 2,
        title: "Content Management System",
        description: "Cloud-based platform enables instant content updates from anywhere. Schedule campaigns by time-of-day, create geo-triggered messages, rotate multiple ads, and monitor performance in real-time. Push emergency updates or promotional changes with one click.",
        icon: Monitor
      },
      {
        step: 3,
        title: "Creative Optimization",
        description: "Professional design team creates compelling digital content optimized for mobile viewing. High-contrast designs, readable fonts, strategic animation, and 7-second message cycles ensure maximum impact as trucks navigate Miami streets.",
        icon: Palette
      },
      {
        step: 4,
        title: "Performance Analytics",
        description: "Digital billboard trucks provide comprehensive metrics: GPS heat maps, impression counts, demographic analysis, and engagement tracking. QR codes and short URLs measure direct response, while geo-fencing tracks store visits post-exposure.",
        icon: BarChart3
      }
    ],

    // Statistics
    stats: {
      clientsSatisfied: "500+",
      averageROI: "600%",
      campaignsCompleted: "2,500+",
      yearEstablished: "2018"
    },

    // Digital Billboard Success Stories
    testimonials: [
      {
        name: "Jennifer Thompson",
        company: "Miami Tech Startup",
        role: "CMO",
        content: "Digital billboard trucks revolutionized our product launch. The ability to A/B test messages in real-time and display video demos on Miami streets generated 5,000+ app downloads in one week. The 4K quality made our brand look premium.",
        rating: 5
      },
      {
        name: "Roberto Gonzalez",
        company: "Gonzalez Restaurant Group",
        role: "Owner",
        content: "Running different messages for breakfast, lunch, and dinner on digital billboard trucks increased traffic 45%. The video capabilities let us showcase our food in mouth-watering detail. Being able to update specials instantly was game-changing.",
        rating: 5
      },
      {
        name: "Amanda Williams",
        company: "Luxe Fitness Miami",
        role: "Marketing Director",
        content: "The digital billboard trucks' animation capabilities made our fitness videos come alive on Miami streets. We geo-targeted competitors' locations and saw 300+ new memberships. The LED brightness ensured visibility even on sunny South Beach.",
        rating: 5
      }
    ],

    // Digital Billboard FAQs
    faqs: [
      {
        question: "What makes digital billboard trucks superior to traditional mobile billboards?",
        answer: "Digital billboard trucks offer revolutionary advantages: unlimited content changes without printing costs, full-motion video that increases attention 400%, real-time message updates via cloud platform, multiple ad rotation preventing viewer fatigue, day/night brightness optimization for 24/7 visibility, animation and special effects for maximum impact, A/B testing capabilities for optimization, and instant weather/event response. While traditional vinyl billboards work well, digital LED technology delivers 10x higher engagement and allows dynamic campaigns impossible with static displays."
      },
      {
        question: "How bright are digital billboard trucks in Miami's intense sunlight?",
        answer: "Our digital billboard trucks feature 6,000+ nits brightness - specifically engineered for Miami's intense sunlight. For comparison, standard TVs are 300-500 nits, smartphones 600-1000 nits. Our LED displays remain crystal-clear even at noon on Ocean Drive. Automatic sensors adjust brightness throughout the day: maximum power during bright daylight, reduced levels at night to prevent glare while maintaining visibility. The P6 LED technology with anti-glare coating ensures perfect visibility from any angle, in any Miami weather condition."
      },
      {
        question: "Can I update content on digital billboard trucks in real-time?",
        answer: "Yes! Our cloud-based content management system allows instant updates from any device. Change messages in under 60 seconds - perfect for flash sales, weather responses, or event reactions. Schedule different content by time: breakfast specials morning, happy hour afternoon, dinner promotions evening. Create location-triggered messages: Spanish in Hialeah, English in Aventura. Rotate up to 10 different ads per truck. Push emergency updates immediately. Monitor what's displaying via live dashboard. This flexibility makes digital billboard trucks incredibly powerful for dynamic Miami campaigns."
      },
      {
        question: "What video formats work on digital billboard trucks?",
        answer: "Digital billboard trucks support all major video formats: MP4, AVI, MOV, and more. Optimal specs include: 1920x1080 resolution (scaled to fit), 30fps for smooth playback, 7-10 second loops for maximum retention, high contrast for daylight visibility, and bold text overlays for messaging. We provide free creative consultation and can convert existing TV/online commercials. Animation, motion graphics, and cinemagraphs work excellently. Live video streaming is possible for special events. Our design team ensures your video content maximizes the unique capabilities of mobile LED displays."
      },
      {
        question: "How much do digital billboard trucks cost compared to traditional?",
        answer: "Digital billboard trucks in Miami range from $800-1,500 per day, compared to $500-800 for traditional vinyl trucks. However, digital delivers superior value: no printing costs ($500-1,000 per design), unlimited creative changes included, 400% higher engagement rates, ability to run multiple campaigns simultaneously, and real-time optimization capabilities. Most clients see 50-100% better ROI despite higher daily rates. Weekly rentals receive 10% discount, monthly 20% off. The ability to test and optimize messages often pays for the premium within days."
      },
      {
        question: "What areas of Miami work best for digital billboard trucks?",
        answer: "Digital billboard trucks excel in Miami's high-visibility areas: South Beach (Ocean Drive, Lincoln Road) for tourist impact, Brickell/Downtown for business professionals, Wynwood/Design District for trendy demographics, Miami Beach Convention Center during events, Coconut Grove/Coral Gables for affluent residents, and Dadeland/Aventura Mall for shoppers. The video capabilities particularly shine in slow-traffic areas where viewers have time to watch. Evening routes through entertainment districts leverage the LED brightness. Digital trucks also dominate at events where dynamic content updates match the atmosphere."
      },
      {
        question: "How do digital billboard trucks perform at Miami events?",
        answer: "Digital billboard trucks are unmatched for Miami events. During Art Basel, display rotating artist features. For Ultra Music Festival, sync animations to music themes. At Miami Open, update scores and promotions real-time. Food & Wine Festival - showcase menu videos. The ability to adapt content to event atmosphere creates incredible engagement. Position trucks at entrance gates running event schedules, near venues displaying sponsor messages, or around hotels targeting attendees. Event-focused digital campaigns see 300-500% higher engagement than static displays."
      },
      {
        question: "What's the environmental impact of LED digital billboard trucks?",
        answer: "Modern LED digital billboard trucks are surprisingly eco-friendly. LED technology uses 40% less power than traditional billboard lighting. No vinyl printing means no chemical waste or disposal issues. One digital truck replaces dozens of printed banners over its lifetime. Solar panel options further reduce carbon footprint. LED bulbs last 100,000+ hours (11+ years), minimizing replacement waste. Digital campaigns eliminate transportation emissions from distributing printed materials. Many Miami businesses choose digital billboard trucks specifically for their sustainability advantages alongside superior performance."
      }
    ],

    // Related Services
    relatedServices: [
      {
        title: "Mobile Billboard Trucks",
        description: "Traditional mobile advertising with proven results across Miami-Dade",
        href: "/services/mobile-billboard-trucks",
        icon: Truck
      },
      {
        title: "Miami-Dade Coverage",
        description: "Complete mobile billboard coverage throughout Miami-Dade County",
        href: "/services/miami-dade-mobile-billboards",
        icon: MapPin
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
      name: "Digital Billboard Trucks Miami - 4K LED Mobile Advertising",
      description: "Premium digital billboard trucks featuring 4K LED displays, real-time content updates, and video capabilities. Advanced mobile advertising technology delivering dynamic campaigns throughout Miami and South Florida.",
      provider: {
        name: "Maximax Advertising",
        url: "https://maximaxmobileadvertising.com"
      },
      areaServed: [
        "Miami",
        "Miami Beach",
        "South Beach",
        "Downtown Miami",
        "Brickell",
        "Wynwood",
        "Design District",
        "Coral Gables",
        "Coconut Grove",
        "Key Biscayne",
        "Aventura",
        "Sunny Isles Beach",
        "Doral",
        "Miami-Dade County",
        "Broward County",
        "Fort Lauderdale",
        "Palm Beach County"
      ],
      serviceType: "Digital Billboard Truck Advertising",
    },

    // Service-specific props
    industries: [
      "Technology",
      "Entertainment",
      "Hospitality",
      "Retail",
      "Real Estate",
      "Healthcare",
      "Automotive",
      "Food & Beverage"
    ],
    locations: [
      "Miami",
      "Miami Beach",
      "Downtown Miami",
      "Brickell",
      "South Beach"
    ]
  }

  return <ServicePageTemplate {...serviceData} />
}