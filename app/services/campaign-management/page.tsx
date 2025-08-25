import { Metadata } from 'next'
import { 
  Settings,
  BarChart3,
  Target,
  Calendar,
  Users,
  TrendingUp,
  Clock,
  Shield,
  MessageSquare,
  FileText,
  Zap,
  Eye,
  Award,
  DollarSign,
  CheckCircle,
  MapPin,
  Phone,
  Mail,
  Palette,
  Database,
  RefreshCw,
  PieChart,
  Activity,
  Briefcase
} from 'lucide-react'
import { ServicePageTemplate } from '@/app/components/ServicePageTemplate'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'Campaign Management',
  description: 'Professional mobile billboard campaign management with strategy development, content creation, route optimization, real-time monitoring, and performance analytics. Full-service billboard advertising management in South Florida.',
  keywords: [
    'campaign management',
    'billboard campaign management',
    'advertising campaign management',
    'mobile billboard management',
    'campaign strategy',
    'advertising management services',
    'billboard campaign planning',
    'campaign optimization',
    'advertising project management',
    'campaign analytics',
    'billboard marketing management',
    'campaign performance tracking',
    'advertising campaign strategy',
    'mobile campaign management',
    'billboard campaign optimization',
    'campaign management services',
    'advertising campaign planning',
    'billboard campaign analytics',
    'campaign ROI tracking',
    'professional campaign management'
  ]
})

export default function CampaignManagementPage() {
  const serviceData = {
    serviceName: "Campaign Management",
    tagline: "End-to-End Billboard Campaign Management for Maximum Impact",
    description: "Let our expert team handle every aspect of your mobile billboard campaign. From strategy development and content creation to route optimization and performance analytics, we ensure your advertising delivers exceptional results.",
    heroImage: "/images/Graphics  /image4.png",
    serviceType: 'marketing' as const,
    
    // Service Features
    features: [
      {
        icon: Target,
        title: "Strategic Campaign Planning",
        description: "Data-driven campaign strategy development based on market research, competitor analysis, and target audience insights for optimal performance."
      },
      {
        icon: Palette,
        title: "Professional Content Creation",
        description: "Full creative services including design, copywriting, video production, and content optimization specifically for mobile billboard advertising."
      },
      {
        icon: MapPin,
        title: "Route Optimization & Planning",
        description: "AI-powered route planning based on traffic patterns, demographics, and behavioral data to maximize impressions and engagement."
      },
      {
        icon: Activity,
        title: "Real-Time Campaign Monitoring",
        description: "24/7 campaign monitoring with live GPS tracking, performance metrics, and instant alerts for immediate optimization opportunities."
      },
      {
        icon: BarChart3,
        title: "Advanced Analytics & Reporting",
        description: "Comprehensive analytics dashboards with impression tracking, ROI calculation, demographic insights, and competitive benchmarking."
      },
      {
        icon: RefreshCw,
        title: "Continuous Optimization",
        description: "Ongoing campaign refinement based on performance data, A/B testing results, and market feedback for maximum effectiveness."
      }
    ],

    // Service Benefits
    benefits: [
      {
        title: "Hands-Free Management",
        description: "Focus on your business while our expert team manages every aspect of your billboard campaign from concept to completion.",
        metric: "100% Managed"
      },
      {
        title: "Proven ROI Improvement",
        description: "Our data-driven approach and continuous optimization deliver 40% better ROI compared to self-managed campaigns.",
        metric: "40% Better ROI"
      },
      {
        title: "Expert Strategy Team",
        description: "Leverage 10+ years of campaign management experience with dedicated strategists who understand South Florida markets.",
        metric: "10+ Years Experience"
      },
      {
        title: "Real-Time Adaptability",
        description: "Instantly adjust campaigns based on performance data, weather, events, or market conditions for optimal results.",
        metric: "24/7 Optimization"
      },
      {
        title: "Comprehensive Reporting",
        description: "Detailed weekly reports with actionable insights, performance metrics, and strategic recommendations for continuous improvement.",
        metric: "Weekly Reports"
      },
      {
        title: "Multi-Channel Integration",
        description: "Seamlessly integrate mobile billboard campaigns with your digital marketing, social media, and traditional advertising efforts.",
        metric: "Unified Strategy"
      }
    ],

    // Process Steps
    process: [
      {
        step: 1,
        title: "Discovery & Strategy",
        description: "Deep dive into your business goals, target audience, competitive landscape, and budget to develop a comprehensive campaign strategy.",
        icon: Briefcase
      },
      {
        step: 2,
        title: "Creative Development",
        description: "Design compelling billboard content optimized for mobile display with clear messaging, strong visuals, and effective calls-to-action.",
        icon: Palette
      },
      {
        step: 3,
        title: "Campaign Launch",
        description: "Deploy your campaign with precision timing, optimal routing, and full monitoring systems activated for immediate performance tracking.",
        icon: Zap
      },
      {
        step: 4,
        title: "Optimize & Report",
        description: "Continuous monitoring, optimization, and detailed reporting ensure your campaign delivers maximum ROI throughout its duration.",
        icon: TrendingUp
      }
    ],


    // Statistics
    stats: {
      clientsSatisfied: "850+",
      averageROI: "680%",
      campaignsCompleted: "3,500+",
      yearEstablished: "2018"
    },

    // Testimonials
    testimonials: [
      {
        name: "Robert Thompson",
        company: "Thompson Development Group",
        role: "CEO",
        content: "The campaign management team at Maximax transformed our advertising strategy. They handled everything from creative design to route optimization, delivering a 450% ROI. Their real-time adjustments based on performance data were invaluable.",
        rating: 5
      },
      {
        name: "Dr. Emily Rodriguez",
        company: "Advanced Dermatology Center",
        role: "Marketing Director",
        content: "Having professionals manage our mobile billboard campaign made all the difference. The strategic planning, creative excellence, and continuous optimization resulted in our best advertising ROI ever - over 600%.",
        rating: 5
      },
      {
        name: "James Wilson",
        company: "Wilson & Associates Law Firm",
        role: "Managing Partner",
        content: "Maximax's campaign management exceeded expectations. Their data-driven approach, professional execution, and detailed reporting helped us dominate our market. Case inquiries increased 380% during the campaign.",
        rating: 5
      }
    ],

    // FAQs
    faqs: [
      {
        question: "What's included in professional campaign management?",
        answer: "Our campaign management includes strategy development, creative design, route planning, GPS tracking, real-time monitoring, performance optimization, and detailed reporting. We handle every aspect from initial planning through campaign completion, ensuring maximum ROI."
      },
      {
        question: "How do you optimize campaigns for better performance?",
        answer: "We use real-time data analytics, A/B testing, route optimization algorithms, and market insights to continuously improve campaign performance. This includes adjusting routes based on traffic patterns, updating creative based on engagement metrics, and timing adjustments for maximum visibility."
      },
      {
        question: "Can you manage multi-city or regional campaigns?",
        answer: "Yes! We specialize in managing complex multi-city campaigns across South Florida. Our team coordinates multiple trucks, synchronizes messaging across markets, and provides unified reporting while optimizing each market individually for best results."
      },
      {
        question: "How quickly can you launch a managed campaign?",
        answer: "Standard managed campaigns launch within 72-96 hours after strategy approval. Rush deployment is available within 24-48 hours for urgent campaigns. This includes strategy development, creative production, and full campaign setup."
      },
      {
        question: "What kind of reporting do you provide?",
        answer: "We provide comprehensive reports including GPS tracking data, impression estimates, route coverage maps, demographic insights, ROI calculations, and strategic recommendations. Reports are available daily, weekly, or monthly based on your preference."
      },
      {
        question: "Do you handle creative design and content production?",
        answer: "Yes! Our creative team handles all design and content production optimized for mobile billboards. This includes graphic design, copywriting, video production, and format optimization for maximum visibility and impact."
      },
      {
        question: "How do you measure campaign success and ROI?",
        answer: "We track multiple KPIs including impressions, reach, frequency, engagement metrics, lead generation, and sales attribution. We combine GPS data, traffic analytics, and client-provided conversion data to calculate accurate ROI metrics."
      },
      {
        question: "Can you integrate billboard campaigns with our other marketing?",
        answer: "Absolutely! We specialize in integrated campaigns that combine mobile billboards with digital marketing, social media, events, and traditional advertising. Our team ensures consistent messaging and coordinated timing for maximum impact."
      }
    ],

    // Related Services
    relatedServices: [
      {
        title: "Mobile Billboard Trucks",
        description: "High-impact mobile advertising with our professional fleet of billboard trucks",
        href: "/services/mobile-billboard-trucks",
        icon: MapPin
      },
      {
        title: "GPS Tracking & Analytics",
        description: "Real-time campaign monitoring with comprehensive performance analytics",
        href: "/services/gps-tracking",
        icon: Activity
      }
    ],

    // Schema Markup
    schema: {
      name: "Billboard Campaign Management Services",
      description: "Professional mobile billboard campaign management with strategy development, content creation, route optimization, real-time monitoring, and performance analytics in South Florida.",
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
        "Coral Gables",
        "Aventura",
        "Hollywood",
        "Pembroke Pines",
        "Coral Springs",
        "Delray Beach"
      ],
      serviceType: "Advertising Campaign Management",
    },

    // Service-specific props
    industries: [
      "Real Estate Development",
      "Legal Services",
      "Medical & Healthcare",
      "Automotive",
      "Retail & E-commerce",
      "Hospitality & Tourism",
      "Financial Services",
      "Technology",
      "Education",
      "Non-Profit Organizations"
    ],
    locations: [
      "Miami-Dade County",
      "Broward County", 
      "Palm Beach County",
      "All South Florida Markets"
    ],

    // Campaign management specific features
    managementServices: [
      "Strategic Planning",
      "Creative Development",
      "Route Optimization",
      "Budget Management",
      "Performance Tracking",
      "Competitor Analysis",
      "Market Research",
      "A/B Testing",
      "ROI Analysis",
      "Report Generation"
    ],

    deliverables: [
      "Campaign Strategy Document",
      "Creative Assets & Designs",
      "Route Planning Maps",
      "Performance Dashboards",
      "Weekly Reports",
      "ROI Analysis",
      "Competitive Intelligence",
      "Optimization Recommendations",
      "Post-Campaign Analysis",
      "Best Practices Guide"
    ]
  }

  return <ServicePageTemplate {...serviceData} />
}