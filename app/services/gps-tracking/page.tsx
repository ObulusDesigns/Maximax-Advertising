import { Metadata } from 'next'
import { ServicePageTemplate } from '../../components/ServicePageTemplate'
import { 
  MapPin, 
  Activity, 
  BarChart3, 
  Shield, 
  Eye, 
  Route, 
  Clock, 
  Target, 
  TrendingUp, 
  AlertTriangle,
  Users,
  DollarSign,
  CheckCircle,
  Smartphone,
  Calendar,
  Download,
  Settings,
  Lock,
  RefreshCw,
  Camera,
  MessageSquare,
  Globe
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'GPS Tracked Billboards - Real-Time Mobile Billboard Tracking | Maximax Advertising',
  description: 'Monitor your mobile billboard campaigns in real-time with GPS tracking. Get live location data, route optimization, campaign analytics, and complete transparency. ROI tracking included.',
  keywords: [
    'GPS tracked billboards',
    'real-time tracking',
    'billboard tracking',
    'campaign analytics',
    'route optimization',
    'mobile billboard GPS',
    'advertising transparency',
    'campaign monitoring',
    'ROI tracking',
    'billboard performance metrics'
  ],
  openGraph: {
    title: 'GPS Tracked Billboards - Real-Time Campaign Monitoring',
    description: 'Complete transparency with real-time GPS tracking of your mobile billboard campaigns. Live location data, route optimization, and detailed analytics.',
    type: 'website',
  }
}

export default function GPSTrackingPage() {
  const serviceData = {
    serviceName: "GPS Tracking & Analytics",
    tagline: "Complete Transparency with Real-Time Billboard Tracking",
    description: "Monitor your mobile billboard campaigns in real-time with our advanced GPS tracking system. Get live location data, route optimization, performance analytics, and complete campaign transparency that maximizes your advertising ROI.",
    heroImage: "/images/Graphics  /image2.png",
    serviceType: 'digital' as const,
    
    features: [
      {
        icon: MapPin,
        title: "Live Real-Time Tracking",
        description: "Monitor your GPS tracked billboards in real-time with precise location data updated every 30 seconds. See exactly where your ads are displayed at any moment."
      },
      {
        icon: Activity,
        title: "Advanced Geofencing Alerts",
        description: "Set custom geofences around target areas and receive instant alerts when your mobile billboards enter or exit specific zones, ensuring optimal campaign performance."
      },
      {
        icon: BarChart3,
        title: "Comprehensive Campaign Analytics",
        description: "Access detailed reports on impressions, dwell time, route efficiency, and audience demographics with our advanced billboard tracking analytics platform."
      },
      {
        icon: Route,
        title: "Smart Route Optimization",
        description: "Our AI-powered system optimizes routes in real-time based on traffic patterns, target demographics, and campaign objectives to maximize exposure and ROI."
      },
      {
        icon: Eye,
        title: "Impression Verification",
        description: "Verify actual impressions with GPS data correlation, speed analysis, and location verification to ensure you get the exposure you're paying for."
      },
      {
        icon: TrendingUp,
        title: "Performance Metrics Dashboard",
        description: "Track key performance indicators including reach, frequency, cost per impression, and ROI through our intuitive real-time dashboard interface."
      }
    ],

    benefits: [
      {
        title: "Complete Campaign Transparency",
        description: "Know exactly where your mobile billboards are at all times with GPS tracked billboards technology. No guesswork, just verified location data and performance metrics.",
        metric: "100% Visibility"
      },
      {
        title: "Maximized ROI with Real-Time Tracking",
        description: "Optimize campaigns in real-time based on performance data. Route optimization and analytics help increase impressions and reduce wasted spend.",
        metric: "Up to 35% ROI Increase"
      },
      {
        title: "Verified Impression Delivery",
        description: "Confirm your ads are reaching target areas with GPS verification, speed monitoring, and dwell time analysis for complete accountability.",
        metric: "Verified Data"
      },
      {
        title: "Enhanced Campaign Control",
        description: "Make informed decisions with live data. Adjust routes, extend campaigns in high-performing areas, or pivot strategies based on real-time insights.",
        metric: "Instant Insights"
      },
      {
        title: "Detailed Performance Reporting",
        description: "Access comprehensive reports on campaign performance, audience reach, geographic coverage, and cost effectiveness with billboard tracking analytics.",
        metric: "24/7 Reporting"
      },
      {
        title: "Competitive Advantage",
        description: "Stay ahead with advanced tracking technology that provides deeper insights than traditional advertising methods and superior campaign optimization.",
        metric: "Industry Leading"
      }
    ],

    process: [
      {
        step: 1,
        title: "GPS System Installation",
        description: "Professional installation of advanced GPS tracking devices on all mobile billboard vehicles with real-time connectivity and backup systems.",
        icon: Settings
      },
      {
        step: 2,
        title: "Campaign Setup & Configuration",
        description: "Configure tracking parameters, geofences, target areas, and reporting preferences in our comprehensive billboard tracking platform.",
        icon: Target
      },
      {
        step: 3,
        title: "Portal Access & Training",
        description: "Receive secure access to your tracking portal with personalized training on using all features, reports, and real-time monitoring tools.",
        icon: Users
      },
      {
        step: 4,
        title: "Live Monitoring & Optimization",
        description: "Monitor campaigns in real-time, receive automated alerts, access performance data, and optimize routes for maximum impact and ROI.",
        icon: Activity
      }
    ],


    testimonials: [
      {
        name: "Sarah Johnson",
        company: "Metro Fitness Chain",
        role: "Marketing Director",
        content: "The GPS tracking gave us complete confidence in our mobile billboard investment. We could see exactly where our ads were displayed and the real-time data helped us optimize our campaigns for 40% better results.",
        rating: 5
      },
      {
        name: "Mike Rodriguez",
        company: "Rodriguez Auto Group",
        role: "Owner",
        content: "Having real-time tracking of our mobile billboards was a game-changer. The transparency and detailed reporting helped us justify our advertising spend and plan future campaigns more effectively.",
        rating: 5
      },
      {
        name: "Jennifer Chen",
        company: "Downtown Events LLC",
        role: "Event Coordinator",
        content: "The geofencing alerts were perfect for our event promotion. We knew exactly when our mobile billboards reached target areas and could coordinate our other marketing efforts accordingly.",
        rating: 5
      }
    ],

    faqs: [
      {
        question: "How accurate is the GPS tracking on your mobile billboards?",
        answer: "Our GPS tracking systems provide location accuracy within 3-5 meters and update every 30 seconds. We use enterprise-grade GPS devices with cellular backup to ensure continuous monitoring and data reliability throughout your campaign."
      },
      {
        question: "Can I access real-time tracking data during my campaign?",
        answer: "Yes! You receive 24/7 access to our secure tracking portal where you can monitor your GPS tracked billboards in real-time, view route history, check performance metrics, and download detailed reports at any time during your campaign."
      },
      {
        question: "What kind of reports do you provide with billboard tracking analytics?",
        answer: "We provide comprehensive reports including route maps, impression estimates, dwell time analysis, geofence entry/exit logs, speed monitoring, and performance summaries. Reports are available daily, weekly, or monthly based on your preferences."
      },
      {
        question: "Is my campaign data secure and private?",
        answer: "Absolutely. All tracking data is encrypted and stored on secure servers with restricted access. We follow strict privacy protocols and only you and authorized team members can access your specific campaign data through the secure portal."
      },
      {
        question: "How does route optimization work with GPS tracking?",
        answer: "Our system analyzes traffic patterns, demographic data, and target audience locations to suggest optimal routes. Real-time tracking allows for dynamic adjustments based on traffic conditions, events, and performance data to maximize impressions and campaign effectiveness."
      },
      {
        question: "Can I set up custom alerts for specific locations or events?",
        answer: "Yes! Our geofencing feature allows you to set custom zones around important locations like competitor stores, events, or high-traffic areas. You'll receive instant alerts via email or SMS when your mobile billboards enter or exit these zones."
      },
      {
        question: "What happens if there's a GPS tracking system malfunction?",
        answer: "All our tracking devices have backup systems and redundant connectivity. In the rare event of a system issue, we have protocols for immediate replacement and data recovery. You'll be notified immediately of any tracking interruptions and resolution timeline."
      },
      {
        question: "How do you verify impression accuracy with GPS data?",
        answer: "We cross-reference GPS location data with speed monitoring, dwell time analysis, and traffic pattern data to calculate accurate impression estimates. This verification process ensures you're getting legitimate exposure metrics based on actual vehicle positioning and movement."
      }
    ],

    relatedServices: [
      {
        title: "Mobile Billboard Trucks",
        description: "High-impact mobile advertising with GPS tracked billboards for maximum visibility and reach",
        href: "/services/mobile-billboard-trucks",
        icon: Target
      },
      {
        title: "LED Digital Displays",
        description: "Dynamic LED mobile billboards with real-time content updates and tracking capabilities",
        href: "/services/led-digital-displays",
        icon: Activity
      },
    ],

    stats: {
      clientsSatisfied: "500+",
      averageROI: "285%",
      campaignsCompleted: "2,000+",
      yearEstablished: "2015"
    },

    schema: {
      name: "GPS Tracking & Analytics for Mobile Billboards",
      description: "Professional GPS tracking services for mobile billboard campaigns with real-time monitoring, route optimization, and comprehensive analytics reporting.",
      provider: {
        name: "Maximax Advertising",
        url: "https://maximaxadvertising.com"
      },
      areaServed: [
        "South Florida",
        "Miami-Dade County", 
        "Broward County",
        "Palm Beach County",
        "Fort Lauderdale",
        "Miami"
      ],
      serviceType: "Mobile Billboard GPS Tracking and Analytics",
    }
  }

  return <ServicePageTemplate {...serviceData} />
}