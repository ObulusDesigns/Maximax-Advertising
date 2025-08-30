import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Truck,
  Car,
  DollarSign,
  Eye,
  MapPin,
  Clock,
  Shield,
  CheckCircle,
  XCircle,
  TrendingUp,
  Target,
  Zap,
  Sun,
  CloudRain,
  Users,
  BarChart3,
  Calendar,
  Phone,
  ArrowRight,
  Award,
  Navigation
} from 'lucide-react'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'Mobile Billboard vs Car Wrap Miami',
  description: 'Compare mobile billboard advertising to car wraps in Miami. Discover why mobile billboards offer superior ROI, flexibility, and visibility for Miami businesses. Get data-driven insights for South Beach, Downtown, and Brickell advertising.',
  keywords: [
    'mobile billboard vs car wrap Miami',
    'Miami advertising comparison',
    'car wrap vs billboard truck',
    'Miami Beach mobile advertising',
    'South Beach billboard advertising',
    'Downtown Miami advertising options',
    'Brickell advertising comparison',
    'vehicle wrap alternatives Miami',
    'mobile advertising Miami cost',
    'billboard truck vs wrapped vehicle',
    'Miami outdoor advertising comparison',
    'best advertising method Miami',
    'car wrap advertising Miami',
    'mobile billboard advantages',
    'Florida vehicle advertising'
  ]
})

export default function MobileBillboardVsCarWrapMiamiPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Mobile Billboards vs Car Wraps in Miami
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              The Data-Driven Comparison for Miami's Unique Market
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <TrendingUp className="w-12 h-12 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2">97% Recall Rate</h3>
                <p className="text-blue-100">Mobile billboards vs 27% for car wraps</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Eye className="w-12 h-12 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2">70,000 Daily Views</h3>
                <p className="text-blue-100">10x more than typical car wraps</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <DollarSign className="w-12 h-12 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2">$0.30 CPM</h3>
                <p className="text-blue-100">75% lower cost per impression</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Direct Comparison Table */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Side-by-Side Comparison for Miami Market
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <th className="p-4 text-left">Feature</th>
                  <th className="p-4 text-center">Mobile Billboards</th>
                  <th className="p-4 text-center">Car Wraps</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Daily Impressions (Miami Traffic)</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-bold">30,000 - 70,000</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-gray-600">3,000 - 7,000</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold">Display Size</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-bold">10ft x 6ft (60 sq ft)</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-gray-600">Variable (15-25 sq ft avg)</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Visibility in Miami Sun</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-bold">4K LED - Perfect in bright sun</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-gray-600">Vinyl fades, glare issues</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold">Hurricane Season Durability</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-bold">Weatherproof LED displays</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-orange-600">Vinyl peeling risk</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Ocean Drive/Beach Access</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-bold">Full access, optimal visibility</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-gray-600">Parking restrictions apply</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold">Event Targeting (Art Basel, Ultra)</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-bold">Dynamic route adjustment</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-gray-600">Fixed to vehicle owner route</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Monthly Cost (Miami Market)</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-bold">$3,500 - $5,000</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-gray-600">$500 - $1,500 + installation</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold">Cost Per Impression</td>
                  <td className="p-4 text-center">
                    <span className="text-green-600 font-bold">$0.30 - $0.50 CPM</span>
                  </td>
                  <td className="p-4 text-center">
                    <span className="text-gray-600">$2.00 - $4.00 CPM</span>
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">GPS Tracking & Analytics</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <XCircle className="w-6 h-6 text-red-600 mx-auto" />
                  </td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold">Professional Drivers</td>
                  <td className="p-4 text-center">
                    <CheckCircle className="w-6 h-6 text-green-600 mx-auto" />
                  </td>
                  <td className="p-4 text-center">
                    <XCircle className="w-6 h-6 text-red-600 mx-auto" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Miami-Specific Advantages */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Mobile Billboards Dominate in Miami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <Sun className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Miami Sun & Heat Resilience</h3>
              <p className="text-gray-600 mb-4">
                LED displays maintain perfect visibility in Miami's intense sun. Car wraps fade, crack, and lose impact within months under Florida UV exposure.
              </p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm font-semibold text-green-800">Mobile Billboard Advantage</p>
                <p className="text-sm text-green-700">Zero sun damage, automatic brightness adjustment</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <CloudRain className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Hurricane Season Ready</h3>
              <p className="text-gray-600 mb-4">
                Weatherproof LED screens operate perfectly through Miami's rainy season. Car wraps suffer from water damage, peeling, and visibility issues.
              </p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm font-semibold text-green-800">Mobile Billboard Advantage</p>
                <p className="text-sm text-green-700">IP67 rated displays, all-weather operation</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <MapPin className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Tourist Corridor Access</h3>
              <p className="text-gray-600 mb-4">
                Full access to Ocean Drive, Lincoln Road, Wynwood, and Miami Beach. Car wraps stuck in regular commuter traffic miss prime tourist areas.
              </p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm font-semibold text-green-800">Mobile Billboard Advantage</p>
                <p className="text-sm text-green-700">Strategic route planning for maximum tourist exposure</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <Calendar className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Event Marketing Power</h3>
              <p className="text-gray-600 mb-4">
                Target Art Basel, Ultra Music Festival, Miami Swim Week directly. Car wraps can't adapt routes for event-specific marketing campaigns.
              </p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm font-semibold text-green-800">Mobile Billboard Advantage</p>
                <p className="text-sm text-green-700">Dynamic event targeting with real-time adjustments</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <Users className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Demographic Precision</h3>
              <p className="text-gray-600 mb-4">
                Target Brickell professionals, South Beach tourists, or Coral Gables families. Car wraps follow random personal schedules.
              </p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm font-semibold text-green-800">Mobile Billboard Advantage</p>
                <p className="text-sm text-green-700">Data-driven demographic targeting by neighborhood</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <Clock className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Peak Hour Optimization</h3>
              <p className="text-gray-600 mb-4">
                Strategic deployment during Miami rush hours on I-95, US-1, and Dolphin Expressway. Car wraps waste time parked in garages.
              </p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm font-semibold text-green-800">Mobile Billboard Advantage</p>
                <p className="text-sm text-green-700">8-10 hours daily operation in peak traffic</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            ROI Analysis: Miami Market Reality
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center mb-6">
                <Truck className="w-10 h-10 text-blue-600 mr-3" />
                <h3 className="text-2xl font-bold">Mobile Billboard ROI</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Monthly Investment</span>
                  <span className="font-bold text-xl">$4,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Monthly Impressions</span>
                  <span className="font-bold text-xl">1,500,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Cost Per 1000 Impressions</span>
                  <span className="font-bold text-xl text-green-600">$2.67</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Average Lead Generation</span>
                  <span className="font-bold text-xl">450 leads/month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Cost Per Lead</span>
                  <span className="font-bold text-xl text-green-600">$8.89</span>
                </div>
                <div className="bg-green-50 p-4 rounded-lg mt-6">
                  <p className="text-lg font-bold text-green-800">Average ROI: 850%</p>
                  <p className="text-sm text-green-700 mt-1">Based on Miami client data 2023-2024</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center mb-6">
                <Car className="w-10 h-10 text-gray-600 mr-3" />
                <h3 className="text-2xl font-bold">Car Wrap ROI</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Monthly Cost (5 vehicles)</span>
                  <span className="font-bold text-xl">$2,500</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Monthly Impressions</span>
                  <span className="font-bold text-xl">150,000</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Cost Per 1000 Impressions</span>
                  <span className="font-bold text-xl text-orange-600">$16.67</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Average Lead Generation</span>
                  <span className="font-bold text-xl">35 leads/month</span>
                </div>
                <div className="flex justify-between items-center pb-3 border-b">
                  <span className="text-gray-600">Cost Per Lead</span>
                  <span className="font-bold text-xl text-orange-600">$71.43</span>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-6">
                  <p className="text-lg font-bold text-gray-700">Average ROI: 180%</p>
                  <p className="text-sm text-gray-600 mt-1">Industry average for vehicle wraps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miami Success Stories */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Miami Business Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start mb-4">
                <Award className="w-8 h-8 text-yellow-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Miami Law Firm Case Study</h3>
                  <p className="text-gray-600 mb-3">
                    "We tried car wraps for 6 months with minimal results. Switched to mobile billboards targeting Downtown and Brickell - saw 400% increase in consultations within 30 days."
                  </p>
                  <p className="font-semibold">- Rodriguez & Associates</p>
                  <div className="mt-3 bg-green-50 p-3 rounded">
                    <p className="text-sm font-bold text-green-800">Result: 12x ROI in 3 months</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start mb-4">
                <Award className="w-8 h-8 text-yellow-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">South Beach Restaurant Launch</h3>
                  <p className="text-gray-600 mb-3">
                    "Mobile billboards on Ocean Drive and Lincoln Road generated lines around the block for our grand opening. Car wraps would never have reached the tourist traffic we needed."
                  </p>
                  <p className="font-semibold">- Sunset Grill Miami Beach</p>
                  <div className="mt-3 bg-green-50 p-3 rounded">
                    <p className="text-sm font-bold text-green-800">Result: Sold out opening week</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start mb-4">
                <Award className="w-8 h-8 text-yellow-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Coral Gables Med Spa Growth</h3>
                  <p className="text-gray-600 mb-3">
                    "Targeted mobile billboard routes through Coral Gables and Coconut Grove brought in 85 new high-value clients. The GPS tracking proved every dollar was well spent."
                  </p>
                  <p className="font-semibold">- Elite Wellness Center</p>
                  <div className="mt-3 bg-green-50 p-3 rounded">
                    <p className="text-sm font-bold text-green-800">Result: $180K revenue increase</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-start mb-4">
                <Award className="w-8 h-8 text-yellow-500 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Art Basel Gallery Success</h3>
                  <p className="text-gray-600 mb-3">
                    "During Art Basel, our mobile billboards reached every key venue and hotel. Generated 500+ gallery visits compared to 50 from previous year's static advertising."
                  </p>
                  <p className="font-semibold">- Modern Art Miami</p>
                  <div className="mt-3 bg-green-50 p-3 rounded">
                    <p className="text-sm font-bold text-green-800">Result: $2M in art sales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clear Winner Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl shadow-2xl p-12 text-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              The Clear Winner for Miami Advertising
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Mobile Billboards Win On:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span>10x more impressions daily</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span>75% lower cost per impression</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span>Perfect for Miami weather conditions</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span>Access to tourist corridors & beaches</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span>Event-specific targeting capability</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <span>Real-time GPS tracking & analytics</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Car Wraps Fall Short On:</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <XCircle className="w-6 h-6 text-red-400 mr-3" />
                    <span>Limited daily impressions</span>
                  </li>
                  <li className="flex items-center">
                    <XCircle className="w-6 h-6 text-red-400 mr-3" />
                    <span>High cost per impression</span>
                  </li>
                  <li className="flex items-center">
                    <XCircle className="w-6 h-6 text-red-400 mr-3" />
                    <span>Sun damage & weather deterioration</span>
                  </li>
                  <li className="flex items-center">
                    <XCircle className="w-6 h-6 text-red-400 mr-3" />
                    <span>No route control or optimization</span>
                  </li>
                  <li className="flex items-center">
                    <XCircle className="w-6 h-6 text-red-400 mr-3" />
                    <span>No performance tracking</span>
                  </li>
                  <li className="flex items-center">
                    <XCircle className="w-6 h-6 text-red-400 mr-3" />
                    <span>Dependent on vehicle owner habits</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-xl mb-8">
                Mobile billboards deliver <span className="font-bold text-yellow-400">4.7x better ROI</span> than car wraps in the Miami market
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors"
                >
                  Get Your Free Miami ROI Analysis
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  href="tel:+13055308575"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call (305) 530-8575
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Common Questions: Mobile Billboards vs Car Wraps
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-3">Why are mobile billboards more visible than car wraps in Miami?</h3>
              <p className="text-gray-600">
                Mobile billboards feature 60 square feet of display space at eye level with 4K LED technology that auto-adjusts for Miami's bright sunshine. Car wraps average only 15-25 square feet, often obscured by traffic, and vinyl graphics fade quickly under Florida UV exposure. The size difference alone makes mobile billboards 300% more noticeable.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-3">How do costs really compare for Miami businesses?</h3>
              <p className="text-gray-600">
                While car wraps seem cheaper upfront ($500-1500/month per vehicle), mobile billboards deliver 10x more impressions, making the cost per impression 75% lower. For a Miami business, one mobile billboard truck equals the impact of 8-10 wrapped vehicles but costs less than wrapping 3 cars with professional installation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-3">Can car wraps target specific Miami neighborhoods like mobile billboards?</h3>
              <p className="text-gray-600">
                No. Car wraps follow the vehicle owner's personal schedule and routes. Mobile billboards strategically target specific areas like Brickell during business hours, South Beach for nightlife, or Coral Gables for families. This precision targeting is impossible with car wraps that park in garages 16+ hours daily.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-3">How do mobile billboards handle Miami's weather better?</h3>
              <p className="text-gray-600">
                Mobile billboard LED displays are IP67 weatherproof rated, operating perfectly through Miami's intense sun, daily rain showers, and hurricane season. Car wraps deteriorate rapidly - sun causes fading and cracking, rain leads to peeling edges, and salt air accelerates vinyl degradation. Most car wraps need replacement within 18 months in Miami conditions.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-3">What about advertising during Miami's major events?</h3>
              <p className="text-gray-600">
                Mobile billboards excel during Art Basel, Ultra Music Festival, Miami Swim Week, and other events by adjusting routes to target venues, hotels, and attendee hotspots. Car wraps can't adapt - they're stuck in regular traffic while missing prime event exposure opportunities. Mobile billboards can even update creative specifically for each event.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="font-bold text-lg mb-3">Do mobile billboards really generate better ROI in Miami?</h3>
              <p className="text-gray-600">
                Yes. Miami businesses using mobile billboards report average ROI of 850% versus 180% for car wraps. The combination of higher impressions, better targeting, tourist corridor access, and weather durability makes mobile billboards the superior choice. Our GPS tracking proves every impression, while car wraps provide no measurable data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-blue-800">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Upgrade from Car Wraps to Mobile Billboards?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join hundreds of Miami businesses achieving superior results with mobile billboard advertising
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors text-lg"
            >
              Get Free Comparison Report
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/services/mobile-billboard-trucks"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              View Mobile Billboard Options
              <Truck className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <p className="mt-8 text-blue-100">
            Free consultation includes ROI projections, route planning, and cost comparison for your specific business
          </p>
        </div>
      </section>
    </div>
  )
}