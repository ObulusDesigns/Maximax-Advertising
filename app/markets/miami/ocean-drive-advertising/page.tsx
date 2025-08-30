import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Truck,
  Palmtree,
  Sun,
  Users,
  Camera,
  MapPin,
  DollarSign,
  TrendingUp,
  Target,
  Eye,
  Clock,
  Calendar,
  Star,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Phone,
  Award,
  Waves,
  Music,
  Coffee,
  ShoppingBag
} from 'lucide-react'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'Ocean Drive Advertising Options',
  description: 'Dominate Ocean Drive advertising in Miami Beach. Mobile billboards deliver 97% visibility to 12M annual visitors. Target Art Deco hotels, beach crowds, and nightlife with proven ROI.',
  keywords: [
    'Ocean Drive advertising',
    'Ocean Drive Miami advertising',
    'South Beach advertising',
    'Miami Beach advertising options',
    'Ocean Drive billboard',
    'Art Deco District advertising',
    'Miami Beach mobile billboards',
    'Ocean Drive marketing',
    'South Beach mobile advertising',
    'beachfront advertising Miami',
    'Ocean Drive tourists advertising',
    'Miami Beach outdoor advertising',
    'Collins Avenue advertising',
    'Lincoln Road advertising',
    'Miami Beach business advertising'
  ]
})

export default function OceanDriveAdvertisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Ocean Theme */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-teal-500">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Palmtree className="w-16 h-16 text-yellow-300 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ocean Drive Advertising That Dominates Miami Beach
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Reach 12 Million Annual Visitors on Miami's Most Iconic Street
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="w-12 h-12 mb-4 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-2">12M+</h3>
                <p className="text-cyan-100">Annual Visitors</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Eye className="w-12 h-12 mb-4 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-2">97%</h3>
                <p className="text-cyan-100">Notice Rate</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <DollarSign className="w-12 h-12 mb-4 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-2">$125K</h3>
                <p className="text-cyan-100">Avg Tourist Income</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <TrendingUp className="w-12 h-12 mb-4 text-yellow-300" />
                <h3 className="text-2xl font-bold mb-2">1,200%</h3>
                <p className="text-cyan-100">Peak ROI</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ocean Drive Advertising Options Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ocean Drive Advertising Options Ranked by Effectiveness
          </h2>
          
          <div className="space-y-6">
            {/* Option 1: Mobile Billboards */}
            <div className="bg-gradient-to-r from-green-50 to-cyan-50 rounded-lg p-8 border-2 border-green-500 shadow-xl">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center mb-4">
                    <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold flex items-center">
                        <Truck className="w-8 h-8 mr-2 text-green-600" />
                        Mobile LED Billboard Trucks
                      </h3>
                      <p className="text-gray-600 mt-1">Superior visibility and flexibility on Ocean Drive</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div>
                      <h4 className="font-bold mb-2">Advantages</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Moves with tourist flow patterns</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>4K LED visible in bright sun</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Targets hotels, restaurants, beaches</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Night & day operation</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Coverage</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• Ocean Drive (5th-15th St)</li>
                        <li>• Collins Avenue corridor</li>
                        <li>• Lincoln Road pedestrian area</li>
                        <li>• Art Deco Historic District</li>
                        <li>• Lummus Park beachfront</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold mb-2">Performance</h4>
                      <div className="space-y-2">
                        <div className="bg-white p-3 rounded">
                          <p className="text-sm font-semibold">Daily Impressions</p>
                          <p className="text-2xl font-bold text-green-600">85,000+</p>
                        </div>
                        <div className="bg-white p-3 rounded">
                          <p className="text-sm font-semibold">Cost Range</p>
                          <p className="text-xl font-bold">$4,000-6,000/mo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Option 2: Pedicabs */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-bold">Pedicab Advertising</h3>
                  <p className="text-gray-600">Good for targeted areas, limited reach</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold">Coverage:</p>
                  <p>Ocean Drive pedestrian zones only</p>
                </div>
                <div>
                  <p className="font-semibold">Daily Impressions:</p>
                  <p>5,000-8,000</p>
                </div>
                <div>
                  <p className="font-semibold">Cost:</p>
                  <p>$3,000-5,000/month</p>
                </div>
              </div>
            </div>

            {/* Option 3: Street Teams */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-bold">Street Team Marketing</h3>
                  <p className="text-gray-600">Personal interaction, limited scale</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold">Coverage:</p>
                  <p>Sidewalks and beach access points</p>
                </div>
                <div>
                  <p className="font-semibold">Daily Interactions:</p>
                  <p>500-1,000</p>
                </div>
                <div>
                  <p className="font-semibold">Cost:</p>
                  <p>$8,000-12,000/month</p>
                </div>
              </div>
            </div>

            {/* Option 4: Beachfront Banners */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300 shadow-lg">
              <div className="flex items-center mb-4">
                <div className="bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-bold">Beach Banners/Flags</h3>
                  <p className="text-gray-600">Static visibility, weather dependent</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold">Coverage:</p>
                  <p>Fixed beach locations</p>
                </div>
                <div>
                  <p className="font-semibold">Daily Impressions:</p>
                  <p>10,000-20,000</p>
                </div>
                <div>
                  <p className="font-semibold">Cost:</p>
                  <p>$2,000-4,000/month</p>
                </div>
              </div>
            </div>

            {/* Option 5: Digital Kiosks */}
            <div className="bg-gray-100 rounded-lg p-6 border-2 border-gray-300">
              <div className="flex items-center mb-4">
                <div className="bg-gray-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg mr-4">
                  5
                </div>
                <div>
                  <h3 className="text-xl font-bold">Digital Kiosks (Limited Availability)</h3>
                  <p className="text-gray-600">Few locations, high competition</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <p className="font-semibold">Coverage:</p>
                  <p>2-3 fixed locations only</p>
                </div>
                <div>
                  <p className="font-semibold">Daily Impressions:</p>
                  <p>15,000-25,000</p>
                </div>
                <div>
                  <p className="font-semibold">Cost:</p>
                  <p>$10,000-20,000/month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ocean Drive Market Demographics */}
      <section className="py-16 px-4 bg-gradient-to-b from-cyan-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ocean Drive Audience: Who You're Reaching
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cyan-500">
              <Camera className="w-10 h-10 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">International Tourists</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• 65% international visitors</li>
                <li>• Average stay: 7 nights</li>
                <li>• Spending: $2,500/person</li>
                <li>• Peak: December-April</li>
              </ul>
              <div className="mt-4 p-3 bg-cyan-50 rounded">
                <p className="text-sm font-bold text-cyan-800">8M annual visitors</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-500">
              <Sun className="w-10 h-10 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Beach & Leisure Seekers</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Ages 25-54 primary</li>
                <li>• HHI: $75K-$150K</li>
                <li>• Active 10am-2am</li>
                <li>• Restaurant/bar focused</li>
              </ul>
              <div className="mt-4 p-3 bg-orange-50 rounded">
                <p className="text-sm font-bold text-orange-800">35K daily beach visitors</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
              <Music className="w-10 h-10 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Nightlife Enthusiasts</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• Peak hours: 8pm-3am</li>
                <li>• Ages 21-35</li>
                <li>• High disposable income</li>
                <li>• Social media active</li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded">
                <p className="text-sm font-bold text-purple-800">20K nightly visitors</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
              <ShoppingBag className="w-10 h-10 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Luxury Shoppers</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li>• HHI: $150K+</li>
                <li>• Lincoln Road shoppers</li>
                <li>• Brand conscious</li>
                <li>• Repeat visitors</li>
              </ul>
              <div className="mt-4 p-3 bg-green-50 rounded">
                <p className="text-sm font-bold text-green-800">$850M annual spending</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Peak Times and Seasons */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ocean Drive Peak Advertising Opportunities
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Seasonal Peaks */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Calendar className="w-8 h-8 mr-3 text-blue-600" />
                Seasonal Peak Periods
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold">Winter Peak (Dec-Mar)</h4>
                  <p className="text-gray-600">150% increase in foot traffic</p>
                  <p className="text-sm text-gray-500">Art Basel, New Year's, Spring Break</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-bold">Summer Tourism (Jun-Aug)</h4>
                  <p className="text-gray-600">International visitors surge</p>
                  <p className="text-sm text-gray-500">European & South American tourists</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-bold">Event Periods</h4>
                  <p className="text-gray-600">300% traffic increase</p>
                  <p className="text-sm text-gray-500">Ultra, Miami Swim Week, Food & Wine</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-bold">Holiday Weekends</h4>
                  <p className="text-gray-600">200% visitor increase</p>
                  <p className="text-sm text-gray-500">Memorial Day, July 4th, Labor Day</p>
                </div>
              </div>
            </div>

            {/* Daily Peak Times */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="w-8 h-8 mr-3 text-green-600" />
                Daily Peak Traffic Times
              </h3>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg">
                  <h4 className="font-bold">Morning Beach Rush (9am-12pm)</h4>
                  <p className="text-gray-600">25,000 beachgoers arriving</p>
                  <p className="text-sm text-gray-500">Families, tourists, fitness enthusiasts</p>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-4 rounded-lg">
                  <h4 className="font-bold">Lunch & Shopping (12pm-5pm)</h4>
                  <p className="text-gray-600">40,000 visitors active</p>
                  <p className="text-sm text-gray-500">Restaurant traffic, retail shopping peak</p>
                </div>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                  <h4 className="font-bold">Golden Hour (5pm-8pm)</h4>
                  <p className="text-gray-600">35,000 sunset viewers</p>
                  <p className="text-sm text-gray-500">Photo ops, happy hour crowds</p>
                </div>
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-4 rounded-lg">
                  <h4 className="font-bold">Nightlife Peak (8pm-2am)</h4>
                  <p className="text-gray-600">50,000 bar/club visitors</p>
                  <p className="text-sm text-gray-500">Restaurant diners, party crowds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ocean Drive Advertising Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-4">
                <Award className="w-10 h-10 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Beachfront Restaurant Launch</h3>
                  <p className="text-gray-600 mb-4">
                    "Our mobile billboards on Ocean Drive generated lines around the block for our grand opening. We tracked 2,500 customers who mentioned seeing our trucks - that's a 1,500% ROI in the first month alone."
                  </p>
                  <p className="font-semibold">- Sunset Terrace, Ocean Drive</p>
                  <div className="mt-4 bg-green-50 p-4 rounded">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-bold text-green-800">Investment</p>
                        <p className="text-xl font-bold">$5,000</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-green-800">Revenue Generated</p>
                        <p className="text-xl font-bold">$75,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-4">
                <Award className="w-10 h-10 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Art Basel Gallery Success</h3>
                  <p className="text-gray-600 mb-4">
                    "Mobile billboards targeting Ocean Drive hotels during Art Basel brought 800+ qualified collectors to our pop-up gallery. Best advertising investment we've ever made."
                  </p>
                  <p className="font-semibold">- Contemporary Miami Gallery</p>
                  <div className="mt-4 bg-green-50 p-4 rounded">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-bold text-green-800">3-Day Campaign</p>
                        <p className="text-xl font-bold">$3,500</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-green-800">Art Sales</p>
                        <p className="text-xl font-bold">$450,000</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-4">
                <Award className="w-10 h-10 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Nightclub Domination</h3>
                  <p className="text-gray-600 mb-4">
                    "Our mobile billboards cruise Ocean Drive from 8pm-2am Thursday through Sunday. We're at capacity every weekend now - something static advertising never achieved."
                  </p>
                  <p className="font-semibold">- Eclipse Nightclub, South Beach</p>
                  <div className="mt-4 bg-green-50 p-4 rounded">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-bold text-green-800">Monthly Spend</p>
                        <p className="text-xl font-bold">$6,000</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-green-800">Revenue Increase</p>
                        <p className="text-xl font-bold">+$180,000/mo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-4">
                <Award className="w-10 h-10 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Hotel Occupancy Boost</h3>
                  <p className="text-gray-600 mb-4">
                    "Mobile billboards targeting Miami Airport to Ocean Drive route increased our direct bookings by 40%. GPS tracking proved the exact ROI - unprecedented transparency."
                  </p>
                  <p className="font-semibold">- Boutique Beach Hotel</p>
                  <div className="mt-4 bg-green-50 p-4 rounded">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-bold text-green-800">Campaign Cost</p>
                        <p className="text-xl font-bold">$4,500/mo</p>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-green-800">Booking Increase</p>
                        <p className="text-xl font-bold">+$65,000/mo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Routes */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Strategic Ocean Drive Mobile Billboard Routes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-red-500" />
                Prime Tourist Circuit
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-red-500 mr-2">1.</span>
                  <div>
                    <p className="font-semibold">Ocean Drive (5th - 15th Street)</p>
                    <p className="text-sm text-gray-600">Art Deco hotels, outdoor cafes, beach access</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-red-500 mr-2">2.</span>
                  <div>
                    <p className="font-semibold">Collins Avenue Corridor</p>
                    <p className="text-sm text-gray-600">Luxury hotels, shopping, restaurants</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-red-500 mr-2">3.</span>
                  <div>
                    <p className="font-semibold">Lincoln Road Loop</p>
                    <p className="text-sm text-gray-600">Pedestrian mall, outdoor dining, retail</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-red-500 mr-2">4.</span>
                  <div>
                    <p className="font-semibold">Washington Avenue</p>
                    <p className="text-sm text-gray-600">Nightlife district, parking areas</p>
                  </div>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 rounded">
                <p className="text-sm font-bold text-blue-800">85,000 daily impressions</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <MapPin className="w-6 h-6 mr-2 text-purple-500" />
                Event & Nightlife Route
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="font-bold text-purple-500 mr-2">1.</span>
                  <div>
                    <p className="font-semibold">Convention Center Area</p>
                    <p className="text-sm text-gray-600">Event attendees, business travelers</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-purple-500 mr-2">2.</span>
                  <div>
                    <p className="font-semibold">Ocean Drive Night Circuit</p>
                    <p className="text-sm text-gray-600">8pm-2am bar and club traffic</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-purple-500 mr-2">3.</span>
                  <div>
                    <p className="font-semibold">Española Way</p>
                    <p className="text-sm text-gray-600">Restaurant row, boutique hotels</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="font-bold text-purple-500 mr-2">4.</span>
                  <div>
                    <p className="font-semibold">South Pointe Park</p>
                    <p className="text-sm text-gray-600">Sunset crowds, cruise ship views</p>
                  </div>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-purple-50 rounded">
                <p className="text-sm font-bold text-purple-800">50,000 nighttime impressions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mobile Billboards Dominate Ocean Drive */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Mobile Billboards Own Ocean Drive
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Waves className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Beachfront Visibility</h3>
              <p className="text-gray-600">
                While static ads are blocked by buildings, mobile billboards cruise the beachfront where 35,000 daily visitors congregate. Perfect visibility from sand to sidewalk.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Sun className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Bright Sun Performance</h3>
              <p className="text-gray-600">
                4K LED displays auto-adjust brightness for perfect visibility in Miami Beach's intense sunlight. No glare, no washing out - just crystal clear messaging.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Users className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Tourist Pattern Matching</h3>
              <p className="text-gray-600">
                Follow tourist flow from hotels to beach in morning, restaurants at lunch, shopping afternoon, and nightlife evening. Static ads miss 75% of this movement.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Camera className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Social Media Amplification</h3>
              <p className="text-gray-600">
                Ocean Drive visitors take 50M+ photos annually. Mobile billboards appear in backgrounds, creating organic social media exposure worth $100K+ monthly.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Coffee className="w-12 h-12 text-brown-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Cafe & Restaurant Focus</h3>
              <p className="text-gray-600">
                Target 200+ sidewalk cafes and restaurants when diners are seated outside. Impossible reach with any other advertising method on Ocean Drive.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Star className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Premium Brand Association</h3>
              <p className="text-gray-600">
                Mobile billboards on Ocean Drive associate your brand with Miami Beach's premium image. 87% of viewers consider advertised businesses "successful and established."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Tiers */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ocean Drive Advertising Investment Options
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-gray-400">
              <h3 className="text-2xl font-bold mb-4">Starter Package</h3>
              <p className="text-4xl font-bold text-gray-700 mb-4">$3,500<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>1 mobile billboard truck</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>4 hours daily on Ocean Drive</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>30,000 daily impressions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>GPS tracking included</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Get Started
              </Link>
            </div>

            <div className="bg-gradient-to-b from-blue-50 to-white rounded-lg shadow-xl p-8 border-t-4 border-blue-600 transform scale-105">
              <div className="bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Premium Package</h3>
              <p className="text-4xl font-bold text-blue-600 mb-4">$6,000<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>2 mobile billboard trucks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>8 hours daily coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>85,000 daily impressions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Peak hour optimization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Weekly performance reports</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Get Premium Access
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-purple-600">
              <h3 className="text-2xl font-bold mb-4">Domination Package</h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">$12,000<span className="text-lg font-normal">/month</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>4 mobile billboard trucks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>12+ hours daily saturation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>150,000+ daily impressions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Day & night coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated account manager</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Event priority placement</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Dominate Ocean Drive
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Palmtree className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Own Ocean Drive Advertising Today
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Join the elite businesses dominating Miami Beach's most iconic street
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Limited Availability Alert</h3>
            <p className="text-lg mb-6 text-cyan-100">
              Only 8 mobile billboard slots available for Ocean Drive routes. Premium times book 30 days in advance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                <span>Free route consultation</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                <span>ROI projections included</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-300 mr-3 flex-shrink-0" />
                <span>48-hour campaign launch</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors text-lg"
            >
              Reserve Ocean Drive Routes
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="tel:+13055308575"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call (305) 530-8575
            </Link>
          </div>
          
          <p className="mt-8 text-cyan-100">
            Serving Ocean Drive, South Beach, Miami Beach, and all of South Florida
          </p>
        </div>
      </section>
    </div>
  )
}