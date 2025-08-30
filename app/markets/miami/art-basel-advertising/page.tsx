import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Truck,
  Palette,
  Calendar,
  MapPin,
  DollarSign,
  Users,
  Eye,
  TrendingUp,
  Clock,
  Star,
  CheckCircle,
  ArrowRight,
  Phone,
  Award,
  Globe,
  Camera,
  Sparkles,
  Building,
  Wine,
  Target,
  BarChart3
} from 'lucide-react'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'Art Basel Miami Advertising',
  description: 'Dominate Art Basel Miami with mobile billboard advertising. Reach 80,000+ collectors, galleries, and VIP attendees. Strategic routes covering Convention Center, Design District, and Wynwood.',
  keywords: [
    'Art Basel Miami advertising',
    'Art Basel marketing',
    'Miami art fair advertising',
    'Art Basel mobile billboards',
    'gallery advertising Miami',
    'art collector marketing',
    'Miami Beach Convention Center advertising',
    'Design District advertising',
    'Wynwood advertising',
    'Art Basel promotion',
    'art event marketing Miami',
    'luxury advertising Art Basel',
    'VIP event advertising Miami',
    'art show advertising',
    'Basel week advertising'
  ]
})

export default function ArtBaselAdvertisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Artistic Theme */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Palette className="w-16 h-16 text-yellow-300" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Art Basel Miami Advertising Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pink-100">
              Reach 80,000+ Collectors, Galleries, and VIP Attendees
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="w-12 h-12 mb-4 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-2">80,000+</h3>
                <p className="text-pink-100">Event Attendees</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <DollarSign className="w-12 h-12 mb-4 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-2">$3.4B</h3>
                <p className="text-pink-100">Art Sales Volume</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Globe className="w-12 h-12 mb-4 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-2">35</h3>
                <p className="text-pink-100">Countries Represented</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Building className="w-12 h-12 mb-4 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-2">250+</h3>
                <p className="text-pink-100">Galleries Participating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Basel Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Art Basel Miami is Your Golden Advertising Opportunity
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">The Art Basel Audience</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Ultra High Net Worth Individuals</p>
                    <p className="text-gray-600">Average net worth $50M+, spending $500K+ on art annually</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">International Collectors</p>
                    <p className="text-gray-600">70% international visitors from Europe, Asia, Latin America</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Gallery Owners & Curators</p>
                    <p className="text-gray-600">Decision makers from 250+ premier galleries worldwide</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Luxury Brand Executives</p>
                    <p className="text-gray-600">C-suite from fashion, jewelry, automotive, hospitality</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Cultural Influencers</p>
                    <p className="text-gray-600">Artists, celebrities, media personalities with 100M+ reach</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-orange-600">The Basel Week Impact</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-3xl font-bold text-purple-600">$500M</p>
                  <p className="text-gray-600">Economic impact on Miami</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <p className="text-3xl font-bold text-pink-600">95%</p>
                  <p className="text-gray-600">Hotel occupancy rate</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="text-3xl font-bold text-orange-600">20+</p>
                  <p className="text-gray-600">Satellite art fairs</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-3xl font-bold text-green-600">1,000+</p>
                  <p className="text-gray-600">Private events & parties</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-3xl font-bold text-blue-600">7 Days</p>
                  <p className="text-gray-600">Of non-stop activity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Locations */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Art Basel Strategic Advertising Zones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
              <MapPin className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Convention Center Hub</h3>
              <p className="text-gray-600 mb-4">
                Main Art Basel venue with 80,000 daily visitors. Mobile billboards capture arrivals, departures, and VIP entrances.
              </p>
              <div className="bg-purple-50 p-3 rounded">
                <p className="text-sm font-bold text-purple-800">Peak Hours: 10am-8pm</p>
                <p className="text-sm text-purple-700">40,000 impressions/day</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-500">
              <MapPin className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Design District Circuit</h3>
              <p className="text-gray-600 mb-4">
                Luxury galleries, showrooms, and high-end retail. Elite collectors spend afternoons here between fair visits.
              </p>
              <div className="bg-pink-50 p-3 rounded">
                <p className="text-sm font-bold text-pink-800">Peak Hours: 12pm-10pm</p>
                <p className="text-sm text-pink-700">25,000 impressions/day</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-500">
              <MapPin className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Wynwood Walls Area</h3>
              <p className="text-gray-600 mb-4">
                Street art capital with 30+ galleries, studios, and alternative art spaces. Young collectors and influencers.
              </p>
              <div className="bg-orange-50 p-3 rounded">
                <p className="text-sm font-bold text-orange-800">Peak Hours: 2pm-2am</p>
                <p className="text-sm text-orange-700">35,000 impressions/day</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
              <MapPin className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Collins Avenue Hotels</h3>
              <p className="text-gray-600 mb-4">
                Luxury hotels hosting VIP collectors, gallery owners, and art advisors. Prime morning and evening traffic.
              </p>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm font-bold text-blue-800">Peak Hours: 8am-10am, 6pm-midnight</p>
                <p className="text-sm text-blue-700">30,000 impressions/day</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
              <MapPin className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Private Event Venues</h3>
              <p className="text-gray-600 mb-4">
                Museums, mansions, and exclusive venues hosting invitation-only events. Target ultra-wealthy attendees.
              </p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm font-bold text-green-800">Peak Hours: 7pm-3am</p>
                <p className="text-sm text-green-700">20,000 impressions/day</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-indigo-500">
              <MapPin className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Airport & Highways</h3>
              <p className="text-gray-600 mb-4">
                Capture arrivals from MIA and FLL airports, plus I-95/195 routes between venues and hotels.
              </p>
              <div className="bg-indigo-50 p-3 rounded">
                <p className="text-sm font-bold text-indigo-800">24/7 Coverage</p>
                <p className="text-sm text-indigo-700">50,000 impressions/day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Art Basel Advertising Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Art Basel Week Advertising Timeline
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Pre-Basel (2 Weeks Before)</h3>
                  <p className="text-gray-600">Build awareness as collectors arrive early. Target airports, hotels, galleries preparing installations.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600">25,000</p>
                  <p className="text-sm text-gray-600">Daily Impressions</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-pink-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">VIP Preview Days (Wed-Thu)</h3>
                  <p className="text-gray-600">Maximum impact during exclusive preview. Target Convention Center, Design District, private events.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-pink-600">85,000</p>
                  <p className="text-sm text-gray-600">Daily Impressions</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Public Days (Fri-Sun)</h3>
                  <p className="text-gray-600">Peak attendance with general public access. Saturate all zones with continuous presence.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">120,000</p>
                  <p className="text-sm text-gray-600">Daily Impressions</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Satellite Fairs Week</h3>
                  <p className="text-gray-600">Continue momentum through NADA, UNTITLED, Design Miami. Target specific fair venues.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">60,000</p>
                  <p className="text-sm text-gray-600">Daily Impressions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Art Basel Advertising Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Gallery Sells Out Opening Night</h3>
              <p className="text-gray-600 mb-4">
                "Our mobile billboards at the Convention Center and Design District brought 500+ qualified collectors to our pop-up gallery. We sold $2.3M in art on opening night - our best Basel ever."
              </p>
              <p className="font-semibold mb-4">- International Contemporary Gallery</p>
              <div className="bg-green-50 p-4 rounded">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold text-green-800">Investment</p>
                    <p className="text-2xl font-bold">$12,000</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800">Sales Generated</p>
                    <p className="text-2xl font-bold">$2.3M</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Luxury Brand VIP Event Success</h3>
              <p className="text-gray-600 mb-4">
                "Mobile billboards targeting Basel attendees filled our exclusive event with 300 ultra-high-net-worth guests. Generated 50+ sales of $100K+ watches during Basel week."
              </p>
              <p className="font-semibold mb-4">- Swiss Luxury Watch Brand</p>
              <div className="bg-green-50 p-4 rounded">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold text-green-800">Campaign Cost</p>
                    <p className="text-2xl font-bold">$8,000</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800">Revenue</p>
                    <p className="text-2xl font-bold">$5M+</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Artist Launch Breaking Records</h3>
              <p className="text-gray-600 mb-4">
                "As an emerging artist, mobile billboards in Wynwood made my exhibition the must-see event. 2,000+ attendees, 30 pieces sold, and gallery representation secured."
              </p>
              <p className="font-semibold mb-4">- Miami-based Contemporary Artist</p>
              <div className="bg-green-50 p-4 rounded">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold text-green-800">Ad Spend</p>
                    <p className="text-2xl font-bold">$4,500</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800">Career Impact</p>
                    <p className="text-2xl font-bold">Priceless</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Real Estate Record Sales</h3>
              <p className="text-gray-600 mb-4">
                "Targeting Art Basel collectors with mobile billboards showcasing our penthouses resulted in 8 sales totaling $45M. Best marketing ROI we've ever achieved."
              </p>
              <p className="font-semibold mb-4">- Luxury Miami Developer</p>
              <div className="bg-green-50 p-4 rounded">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold text-green-800">Marketing Cost</p>
                    <p className="text-2xl font-bold">$15,000</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800">Property Sales</p>
                    <p className="text-2xl font-bold">$45M</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mobile Billboards Win at Art Basel */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Mobile Billboards Dominate Art Basel Advertising
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Eye className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Impossible to Miss</h3>
              <p className="text-gray-600">
                While print ads get lost in Basel catalogs and digital ads compete online, mobile billboards command attention at eye level exactly where collectors congregate.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Target className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Precision Targeting</h3>
              <p className="text-gray-600">
                Follow VIP shuttle routes, target specific gallery openings, appear at exclusive events. No other medium offers this level of strategic placement.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Sparkles className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Premium Brand Image</h3>
              <p className="text-gray-600">
                4K LED mobile billboards convey innovation and sophistication that resonates with the art world's appreciation for cutting-edge presentation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Clock className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">24/7 Visibility</h3>
              <p className="text-gray-600">
                From morning fair arrivals to 3am after-parties, mobile billboards work around the clock capturing Basel's non-stop activity.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Camera className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Social Media Amplification</h3>
              <p className="text-gray-600">
                Art Basel generates 50M+ social media posts. Mobile billboards appear in backgrounds, creating organic viral exposure.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Wine className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Event Flexibility</h3>
              <p className="text-gray-600">
                Instantly redirect to trending events, pop-ups, or exclusive parties. Adapt in real-time to Basel's dynamic schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Art Basel Advertising Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-gray-400">
              <h3 className="text-2xl font-bold mb-4">Gallery Package</h3>
              <p className="text-4xl font-bold text-gray-700 mb-4">$8,000<span className="text-lg font-normal">/week</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>2 mobile billboard trucks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Convention Center focus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>6 hours daily coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>250,000 total impressions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>GPS tracking reports</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Reserve Gallery Package
              </Link>
            </div>

            <div className="bg-gradient-to-b from-purple-50 to-white rounded-lg shadow-xl p-8 border-t-4 border-purple-600 transform scale-105">
              <div className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Collector Package</h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">$15,000<span className="text-lg font-normal">/week</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>4 mobile billboard trucks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>All key zones covered</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>10 hours daily operation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>500,000 total impressions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>VIP event targeting</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Real-time route optimization</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Reserve Collector Package
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-orange-600">
              <h3 className="text-2xl font-bold mb-4">VIP Domination</h3>
              <p className="text-4xl font-bold text-orange-600 mb-4">$30,000<span className="text-lg font-normal">/week</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>8 mobile billboard trucks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Complete Basel saturation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>16+ hours daily coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>1M+ total impressions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Airport to venue coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated account team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Custom creative updates</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition-colors">
                Dominate Art Basel
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Early Bird Special</h3>
              <p className="text-lg mb-6">
                Book by October 1st and save 20% on all Art Basel packages
              </p>
              <p className="text-yellow-300 font-bold text-xl">
                Limited availability - Only 12 fleet slots remaining for Basel 2024
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Palette className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Make Your Mark at Art Basel Miami 2024
          </h2>
          <p className="text-xl mb-8 text-pink-100">
            Join the world's leading galleries, luxury brands, and artists using mobile billboards to dominate Basel week
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Limited Basel Availability</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>Strategic route planning included</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>VIP event calendar access</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>Real-time traffic optimization</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>Multi-language creative options</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>Daily performance reports</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                  <span>Competitor monitoring included</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-purple-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors text-lg"
            >
              Reserve Art Basel Advertising
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="tel:+13055308575"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (305) 530-8575
            </Link>
          </div>
          
          <p className="mt-8 text-pink-100">
            Serving Art Basel Miami Beach, Design District, Wynwood, and all Basel week venues
          </p>
        </div>
      </section>
    </div>
  )
}