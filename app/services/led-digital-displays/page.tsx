import { Metadata } from 'next'
import { 
  Monitor,
  Zap,
  Sun,
  Moon,
  Gauge,
  Eye,
  Settings,
  Shield,
  Battery,
  Wifi,
  Play,
  RotateCcw,
  TrendingUp,
  Users,
  MapPin,
  DollarSign,
  CheckCircle,
  Award,
  BarChart3,
  Clock,
  Target,
  Smartphone,
  Cloud,
  Cpu,
  Thermometer
} from 'lucide-react'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'LED Digital Displays',
  description: 'Premium LED truck advertising with 4K digital displays, day/night visibility, energy-efficient mobile LED billboards. Professional LED advertising trucks with rotating messages, video content, and real-time content management in South Florida.',
  keywords: [
    'LED truck',
    'led advertising truck',
    'digital billboard truck',
    'LED billboard truck',
    'mobile LED billboard',
    'digital mobile billboard',
    'LED displays',
    '4K LED truck',
    'LED advertising displays',
    'mobile LED advertising',
    'digital LED billboards',
    'LED truck rental',
    'LED display truck',
    'mobile digital advertising',
    'LED billboard advertising',
    'digital truck advertising',
    'LED mobile billboards',
    'advertising LED trucks',
    'LED display advertising',
    'mobile LED signs'
  ]
})

export default function LEDDigitalDisplaysPage() {
  const serviceData = {
    serviceName: "LED Digital Displays",
    tagline: "Revolutionary 4K LED Technology for Maximum Advertising Impact",
    description: "Experience the future of mobile advertising with our cutting-edge LED digital display trucks. Featuring 4K resolution, day/night visibility, energy-efficient operation, and dynamic content management for unparalleled brand exposure.",
    heroImage: "/images/Graphics  /imag1.png",
    serviceType: 'mobile' as const,
    
    // Service Features
    features: [
      {
        icon: Monitor,
        title: "4K Ultra HD Resolution",
        description: "Crystal-clear 4K LED displays with 3840x2160 resolution deliver stunning visual quality that captures attention from hundreds of feet away."
      },
      {
        icon: Sun,
        title: "Day/Night Visibility",
        description: "Advanced brightness sensors automatically adjust display intensity from 1,000 to 8,000 nits for perfect visibility in any lighting condition."
      },
      {
        icon: Battery,
        title: "Energy Efficient",
        description: "Latest LED technology consumes 60% less power than traditional displays while providing superior brightness and color accuracy."
      },
      {
        icon: Play,
        title: "Dynamic Content",
        description: "Display videos, animations, rotating messages, and interactive content with smooth transitions and professional presentation quality."
      },
      {
        icon: Wifi,
        title: "Real-Time Updates",
        description: "Cloud-based content management system allows instant updates to your advertising content from anywhere with internet access."
      },
      {
        icon: Eye,
        title: "Wide Viewing Angles",
        description: "160-degree viewing angles ensure your message remains clear and vibrant from any perspective, maximizing audience engagement."
      }
    ],

    // Service Benefits
    benefits: [
      {
        title: "Superior LED Technology",
        description: "Our P4 LED panels deliver 4x the resolution of standard displays with true color reproduction and anti-glare coating for maximum impact.",
        metric: "4K Resolution"
      },
      {
        title: "24/7 Operation",
        description: "Weatherproof IP65-rated displays operate flawlessly in rain, sun, and extreme temperatures with automatic brightness adjustment.",
        metric: "All-Weather Performance"
      },
      {
        title: "Content Flexibility",
        description: "Display multiple messages, videos, animations, and interactive content with programmable scheduling and real-time updates.",
        metric: "Unlimited Content Types"
      },
      {
        title: "Energy Efficiency",
        description: "Advanced LED technology reduces power consumption by 60% while providing brighter, more vibrant displays than traditional methods.",
        metric: "60% Less Power"
      },
      {
        title: "Instant Visibility",
        description: "LED displays are visible from over 1,500 feet away with 98% attention capture rate, significantly outperforming static advertising.",
        metric: "1,500ft Visibility"
      },
      {
        title: "Professional Management",
        description: "Complete content creation, scheduling, and management services with dedicated support and real-time performance monitoring.",
        metric: "24/7 Support"
      }
    ],

    // Process Steps
    process: [
      {
        step: 1,
        title: "Content Strategy",
        description: "We develop your LED display content strategy, including video production, animation design, and message scheduling optimization.",
        icon: Target
      },
      {
        step: 2,
        title: "Technical Setup",
        description: "Professional installation and calibration of LED displays with brightness sensors, weatherproofing, and connectivity systems.",
        icon: Settings
      },
      {
        step: 3,
        title: "Content Management",
        description: "Upload and schedule your content through our cloud platform with real-time preview and instant update capabilities.",
        icon: Cloud
      },
      {
        step: 4,
        title: "Campaign Launch",
        description: "Deploy your LED advertising truck with GPS tracking, performance analytics, and 24/7 technical support monitoring.",
        icon: Monitor
      }
    ],


    // Statistics
    stats: {
      clientsSatisfied: "750+",
      averageROI: "920%",
      campaignsCompleted: "3,200+",
      yearEstablished: "2018"
    },

    // Testimonials
    testimonials: [
      {
        name: "Sarah Johnson",
        company: "Premier Auto Dealership",
        role: "Marketing Director",
        content: "The 4K LED displays are absolutely stunning! Our car sales increased 180% during the campaign. The ability to update content in real-time allowed us to promote flash sales and special events instantly.",
        rating: 5
      },
      {
        name: "Michael Torres",
        company: "Coastal Medical Center",
        role: "Administrator",
        content: "The LED digital displays helped us reach patients throughout South Florida with rotating health messages. The day/night visibility was incredible - our appointment bookings increased 300%.",
        rating: 5
      },
      {
        name: "Lisa Chen",
        company: "Luxury Properties Miami",
        role: "Sales Manager",
        content: "We showcased property videos and virtual tours on the LED displays. The 4K resolution made our listings look spectacular. Generated over 500 qualified leads in just two weeks.",
        rating: 5
      }
    ],

    // Technical FAQs
    faqs: [
      {
        question: "What resolution and brightness do your LED displays offer?",
        answer: "Our LED displays feature true 4K resolution (3840x2160) with P4 pixel pitch for exceptional clarity. Brightness ranges from 1,000 to 8,000 nits with automatic adjustment sensors, ensuring perfect visibility in direct sunlight or nighttime conditions."
      },
      {
        question: "How do LED displays perform in different weather conditions?",
        answer: "Our LED displays are IP65 weatherproof rated, operating flawlessly in rain, snow, heat, and humidity. Temperature sensors automatically adjust performance, and anti-glare coating ensures visibility in bright sunlight. Operating temperature range: -20°F to 140°F."
      },
      {
        question: "Can I update content on LED displays in real-time?",
        answer: "Yes! Our cloud-based content management system allows instant updates from any device with internet access. You can schedule different content for different times, update messages for flash sales, or respond to market conditions in real-time."
      },
      {
        question: "What types of content can LED displays show?",
        answer: "LED displays support all content types: high-definition videos, animations, static images, rotating text messages, live data feeds, and interactive elements. Content can be scheduled by time, location, or triggered by external events."
      },
      {
        question: "How energy efficient are your LED display systems?",
        answer: "Our advanced LED technology consumes 60% less power than traditional displays while providing superior brightness. Smart power management systems optimize energy usage based on ambient light conditions, extending battery life and reducing operational costs."
      },
      {
        question: "What are the viewing angles and visibility distance for LED displays?",
        answer: "LED displays offer 160-degree horizontal and vertical viewing angles with crystal-clear visibility up to 1,500 feet away. Advanced optics ensure consistent color and brightness across all viewing angles, maximizing audience engagement."
      },
      {
        question: "Do you provide technical support and content creation services?",
        answer: "Yes! We offer complete technical support including 24/7 monitoring, remote diagnostics, and on-site service. Our creative team provides video production, animation design, and content optimization specifically for LED display advertising."
      },
      {
        question: "How do LED displays compare to traditional static billboards?",
        answer: "LED displays offer dynamic content, instant updates, multiple messages per location, day/night visibility, weather resistance, and measurable engagement metrics. Studies show 98% attention capture rates vs. 65% for static billboards, with 400% higher recall rates."
      }
    ],

    // Related Services
    relatedServices: [
      {
        title: "Mobile Billboard Trucks",
        description: "Traditional mobile billboard advertising with professional fleet and GPS tracking",
        href: "/services/mobile-billboard-trucks",
        icon: MapPin
      },
      {
        title: "Digital Billboard Advertising",
        description: "Static digital billboards in high-traffic locations with rotating message capabilities",
        href: "/services/digital-billboards", 
        icon: BarChart3
      },
      {
        title: "Event Marketing",
        description: "Comprehensive event advertising campaigns with LED display integration",
        href: "/services/event-marketing",
        icon: Users
      }
    ],

    // Schema Markup
    schema: {
      name: "LED Digital Display Advertising",
      description: "Professional LED digital display trucks with 4K resolution, day/night visibility, real-time content management, and energy-efficient operation for mobile advertising in South Florida.",
      provider: {
        name: "Maximax Advertising",
        url: "https://maximaxmobileadvertising.com"
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
        "Delray Beach",
        "Hollywood",
        "Davie"
      ],
      serviceType: "LED Digital Display Advertising",
    },

    // Service-specific props
    industries: [
      "Automotive Dealerships",
      "Medical & Healthcare",
      "Real Estate",
      "Technology Companies",
      "Entertainment & Events",
      "Retail & Consumer Goods", 
      "Restaurants & Hospitality",
      "Professional Services",
      "Education",
      "Non-Profit Organizations"
    ],
    locations: [
      "Miami-Dade County",
      "Broward County", 
      "Palm Beach County"
    ],

    // Additional LED-specific data
    technicalSpecs: {
      resolution: "4K (3840x2160)",
      pixelPitch: "P4 (4mm)",
      brightness: "1,000-8,000 nits",
      viewingAngle: "160° H/V",
      refreshRate: "3840Hz",
      colorDepth: "16-bit",
      weatherRating: "IP65",
      operatingTemp: "-20°F to 140°F",
      powerConsumption: "60% less than standard",
      visibilityDistance: "1,500+ feet"
    },

    contentCapabilities: [
      "4K Video Playback",
      "Animation & Motion Graphics",
      "Rotating Text Messages", 
      "Interactive Content",
      "Live Data Feeds",
      "Scheduled Programming",
      "Real-time Updates",
      "Multi-zone Displays",
      "Social Media Integration",
      "Emergency Messaging"
    ]
  }

  return <ServicePageTemplate {...serviceData} />
}