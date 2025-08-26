import { Metadata } from 'next'
import { 
  Monitor,
  Zap,
  Sun,
  Palette,
  Gauge,
  Eye,
  Settings,
  Shield,
  Battery,
  Wifi,
  Play,
  TrendingUp,
  Users,
  MapPin,
  DollarSign,
  Target,
  Cloud,
  Cpu,
  Thermometer,
  Award,
  BarChart3,
  Clock,
  Layers,
  Camera,
  Maximize,
  Film,
  Sparkles
} from 'lucide-react'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: '4K Ultra HD Screens',
  description: 'Premium 4K LED displays with ultra HD billboard technology, high resolution 4K billboard screens, superior pixel density, 10-bit color accuracy, maximum brightness levels, and wide viewing angles for mobile advertising in South Florida.',
  keywords: [
    '4K LED displays',
    'ultra HD billboard',
    '4K billboard screens',
    'high resolution billboard',
    '4K ultra HD screens',
    '4K mobile billboard',
    'ultra high definition billboard',
    '4K digital displays',
    'premium LED screens',
    'ultra HD mobile advertising',
    '4K resolution billboard',
    'high definition LED displays',
    '4K advertising screens',
    'ultra HD digital billboard',
    '4K billboard advertising',
    'premium 4K displays',
    'ultra HD LED billboard',
    '4K mobile advertising',
    'high resolution LED screens',
    'ultra HD display technology'
  ]
})

export default function FourKScreensPage() {
  const serviceData = {
    serviceName: "4K Ultra HD Screens",
    tagline: "Unmatched Visual Superiority with Premium 4K Ultra HD Display Technology",
    description: "Experience the pinnacle of mobile advertising with our state-of-the-art 4K Ultra HD screens. Featuring true 3840x2160 resolution, 10-bit color depth, billion color reproduction, superior brightness levels, and exceptional viewing angles that deliver breathtaking visual impact and unprecedented audience engagement.",
    heroImage: "/images/Graphics  /image3.png",
    serviceType: 'digital' as const,
    
    // Service Features
    features: [
      {
        icon: Monitor,
        title: "True 4K Resolution (3840x2160)",
        description: "Genuine Ultra HD resolution with over 8.3 million pixels delivers four times the detail of standard HD displays, ensuring crystal-clear imagery that captivates audiences from significant distances."
      },
      {
        icon: Layers,
        title: "Superior Pixel Density",
        description: "P2.5 pixel pitch technology provides exceptional pixel density of 160,000 pixels per square meter, creating seamless images with no visible pixelation even at close viewing distances."
      },
      {
        icon: Palette,
        title: "10-Bit Color Accuracy",
        description: "Advanced 10-bit color processing displays over 1 billion colors with precise color reproduction, HDR support, and professional-grade color calibration for stunning visual fidelity."
      },
      {
        icon: Sun,
        title: "Maximum Brightness Performance",
        description: "Industry-leading brightness levels up to 10,000 nits with dynamic brightness adjustment ensure perfect visibility in direct sunlight while maintaining energy efficiency."
      },
      {
        icon: Eye,
        title: "Ultra-Wide Viewing Angles",
        description: "170-degree horizontal and vertical viewing angles with consistent color and brightness maintain visual impact from virtually any perspective, maximizing audience reach."
      },
      {
        icon: Gauge,
        title: "Exceptional Contrast Ratios",
        description: "10,000:1 contrast ratios with deep blacks and brilliant whites create dramatic visual depth, making your content stand out with cinema-quality presentation."
      }
    ],

    // Service Benefits
    benefits: [
      {
        title: "Premium Visual Quality",
        description: "4K Ultra HD technology delivers unmatched clarity with 4x the resolution of standard displays, ensuring your brand message commands attention with professional-grade visual quality.",
        metric: "8.3M Pixels"
      },
      {
        title: "Superior Color Reproduction",
        description: "10-bit color processing with billion color gamut provides accurate, vibrant colors that make your brand stand out with true-to-life visual representation.",
        metric: "1B+ Colors"
      },
      {
        title: "Maximum Visibility Range",
        description: "Ultra-bright 10,000-nit displays remain clearly visible from over 2,000 feet away, significantly extending your advertising reach and impact zone.",
        metric: "2,000ft Range"
      },
      {
        title: "All-Condition Performance",
        description: "Advanced brightness sensors and anti-reflective coatings ensure optimal visibility in bright sunlight, overcast conditions, and nighttime environments.",
        metric: "24/7 Visibility"
      },
      {
        title: "Future-Proof Technology",
        description: "Latest 4K technology ensures your investment remains cutting-edge, supporting emerging content formats and maintaining competitive advantage.",
        metric: "Next-Gen Ready"
      },
      {
        title: "Professional Image Enhancement",
        description: "4K Ultra HD screens elevate your brand perception, conveying innovation, quality, and attention to detail that resonates with premium audiences.",
        metric: "Premium Positioning"
      }
    ],

    // Process Steps
    process: [
      {
        step: 1,
        title: "4K Content Optimization",
        description: "Our specialists optimize your content for 4K Ultra HD display, ensuring maximum visual impact with proper resolution, color grading, and format optimization for premium presentation.",
        icon: Camera
      },
      {
        step: 2,
        title: "Display Calibration",
        description: "Professional calibration of 4K screens including color temperature adjustment, brightness optimization, contrast enhancement, and viewing angle verification for perfect visual performance.",
        icon: Settings
      },
      {
        step: 3,
        title: "Content Management",
        description: "Advanced content management system specifically designed for 4K displays with real-time preview, color accuracy monitoring, and seamless content transitions.",
        icon: Cloud
      },
      {
        step: 4,
        title: "Premium Deployment",
        description: "Launch your 4K Ultra HD campaign with performance monitoring, display optimization, and real-time quality assurance to maintain superior visual standards.",
        icon: Sparkles
      }
    ],


    // Statistics
    stats: {
      clientsSatisfied: "450+",
      averageROI: "1,250%",
      campaignsCompleted: "1,800+",
      yearEstablished: "2019"
    },

    // Testimonials
    testimonials: [
      {
        name: "Alexandra Rodriguez",
        company: "Luxury Car Collection",
        role: "Brand Director",
        content: "The 4K Ultra HD screens are absolutely breathtaking! The level of detail in our luxury vehicle showcases is incredible. Our showroom visits increased 320% and the premium image perfectly matches our brand positioning.",
        rating: 5
      },
      {
        name: "James Patterson",
        company: "High-End Real Estate Group",
        role: "Marketing VP",
        content: "Nothing compares to the visual impact of 4K Ultra HD displays. Property videos look cinematic, and the color accuracy is outstanding. Generated incredible qualified leads in one month.",
        rating: 5
      },
      {
        name: "Dr. Maria Santos",
        company: "Elite Medical Spa",
        role: "Owner",
        content: "The 4K screens showcase our treatments with incredible clarity and professionalism. The premium image quality reflects our high standards and helped increase bookings by 450%.",
        rating: 5
      }
    ],

    // Technical FAQs
    faqs: [
      {
        question: "What makes 4K Ultra HD screens superior to standard displays?",
        answer: "4K Ultra HD screens offer 3840x2160 resolution (8.3 million pixels) compared to standard 1920x1080 displays (2.1 million pixels). This provides 4x the detail, superior color accuracy with 10-bit processing, higher contrast ratios (10,000:1), and exceptional viewing distances up to 2,000 feet with maintained clarity."
      },
      {
        question: "What are the exact technical specifications of your 4K screens?",
        answer: "Our 4K Ultra HD displays feature: 3840x2160 native resolution, P2.5 pixel pitch, 160,000 pixels/m², 10-bit color depth with 1+ billion colors, 10,000 nits peak brightness, 170° viewing angles, 10,000:1 contrast ratio, HDR10+ support, and 3840Hz refresh rate for smooth motion."
      },
      {
        question: "How do 4K screens perform in different lighting conditions?",
        answer: "4K Ultra HD screens excel in all conditions with 10,000-nit peak brightness for direct sunlight visibility, automatic brightness adjustment from 100-10,000 nits, anti-reflective nano-coating, and color temperature compensation. Night mode maintains perfect visibility while preventing light pollution."
      },
      {
        question: "What content works best on 4K Ultra HD displays?",
        answer: "4K screens showcase: native 4K video content, high-resolution photography, detailed product demonstrations, architectural visualizations, luxury brand content, medical/technical imagery, and professional presentations. We provide 4K content creation and optimization services."
      },
      {
        question: "How do 4K Ultra HD screens compare to standard LED displays?",
        answer: "4K Ultra HD offers: 4x resolution increase, 10-bit vs 8-bit color processing (1000x more colors), superior contrast ratios, wider viewing angles, longer visibility distances (2000ft vs 1200ft), and premium brand positioning that commands 3x higher engagement rates."
      },
      {
        question: "What industries benefit most from 4K Ultra HD screen advertising?",
        answer: "Premium industries including: luxury automotive, high-end real estate, medical/aesthetic services, premium hospitality, luxury retail, professional services, technology companies, entertainment venues, and any brand requiring superior visual presentation and premium positioning."
      },
      {
        question: "What are the viewing angles and color consistency of 4K screens?",
        answer: "4K Ultra HD displays maintain 170° horizontal and vertical viewing angles with consistent color reproduction and brightness levels. Advanced optics ensure no color shift or brightness degradation across the entire viewing range, maximizing audience engagement from all positions."
      },
      {
        question: "How do I get started with 4K Ultra HD screen advertising?",
        answer: "Contact us for a consultation to discuss your premium advertising needs. We'll assess your brand requirements, target audience, and campaign goals to create a custom 4K Ultra HD strategy. Our team will guide you through content optimization and deployment for maximum visual impact."
      }
    ],

    // Related Services
    relatedServices: [
      {
        title: "LED Digital Displays",
        description: "Standard LED display advertising with professional quality and flexible content management",
        href: "/services/led-digital-displays",
        icon: Monitor
      },
      {
        title: "Mobile Billboard Trucks",
        description: "Traditional mobile billboard advertising with professional fleet and GPS tracking",
        href: "/services/mobile-billboard-trucks",
        icon: MapPin
      },
      {
        title: "Premium Event Marketing",
        description: "High-impact event advertising with 4K Ultra HD display integration",
        href: "/services/event-marketing",
        icon: Users
      }
    ],

    // Schema Markup
    schema: {
      name: "4K Ultra HD Screen Advertising",
      description: "Premium 4K Ultra HD screen mobile advertising with 3840x2160 resolution, 10-bit color processing, superior brightness levels, wide viewing angles, and professional content optimization for luxury brand positioning in South Florida.",
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
        "Aventura",
        "Coral Gables",
        "Key Biscayne",
        "Pinecrest",
        "Bal Harbour",
        "Fisher Island",
        "Star Island"
      ],
      serviceType: "4K Ultra HD Screen Advertising",
    },

    // Service-specific props
    industries: [
      "Luxury Automotive",
      "High-End Real Estate",
      "Medical & Aesthetic Services",
      "Premium Hospitality",
      "Luxury Retail & Fashion",
      "Professional Services",
      "Technology & Innovation",
      "Entertainment & Media",
      "Premium Education",
      "Luxury Lifestyle Brands"
    ],
    locations: [
      "Miami-Dade County",
      "Broward County", 
      "Palm Beach County",
      "Premium Market Areas"
    ],

    // 4K-specific technical specifications
    technicalSpecs: {
      resolution: "4K Ultra HD (3840x2160)",
      pixelPitch: "P2.5 (2.5mm)",
      pixelDensity: "160,000 pixels/m²",
      brightness: "100-10,000 nits",
      viewingAngle: "170° H/V",
      refreshRate: "3840Hz",
      colorDepth: "10-bit",
      colorGamut: "1+ billion colors",
      contrastRatio: "10,000:1",
      weatherRating: "IP66",
      operatingTemp: "-30°F to 160°F",
      hdrSupport: "HDR10+",
      visibilityDistance: "2,000+ feet"
    },

    // Premium content capabilities
    contentCapabilities: [
      "Native 4K Video Playback",
      "HDR Content Support",
      "Professional Color Grading",
      "Cinema-Quality Motion Graphics",
      "High-Resolution Photography",
      "Interactive 4K Presentations",
      "Real-time 4K Streaming",
      "Multi-layer Compositing",
      "Advanced Visual Effects",
      "Professional Broadcasting Quality"
    ],

    // Industries that benefit most
    premiumIndustries: [
      {
        name: "Luxury Automotive",
        benefit: "Showcase vehicle details with cinema-quality precision"
      },
      {
        name: "High-End Real Estate", 
        benefit: "Display property tours with architectural clarity"
      },
      {
        name: "Medical & Aesthetic",
        benefit: "Present treatments with professional visual quality"
      },
      {
        name: "Premium Hospitality",
        benefit: "Convey luxury experience through superior visuals"
      },
      {
        name: "Technology Companies",
        benefit: "Demonstrate innovation with cutting-edge display technology"
      }
    ]
  }

  return <ServicePageTemplate {...serviceData} />
}