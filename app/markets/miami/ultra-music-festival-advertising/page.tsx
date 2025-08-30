import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Truck,
  Music,
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
  Zap,
  Volume2,
  Headphones,
  Radio,
  Globe,
  PartyPopper,
  Target,
  BarChart3
} from 'lucide-react'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'Ultra Music Festival Advertising Miami',
  description: 'Dominate Ultra Music Festival with mobile billboard advertising. Reach 165,000+ EDM fans at Bayfront Park. Target festival-goers, hotels, and Miami Music Week events with proven ROI.',
  keywords: [
    'Ultra Music Festival advertising',
    'Ultra Miami advertising',
    'Miami Music Week advertising',
    'EDM festival advertising',
    'Bayfront Park advertising',
    'Ultra mobile billboards',
    'music festival marketing Miami',
    'electronic music advertising',
    'festival advertising Miami',
    'Miami Music Week marketing',
    'Ultra weekend advertising',
    'rave advertising Miami',
    'festival mobile billboards',
    'Ultra Miami promotion',
    'EDM marketing Miami'
  ]
})

export default function UltraMusicFestivalAdvertisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section with Festival Theme */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-800 to-cyan-600">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center text-white">
            <div className="flex justify-center mb-6">
              <Music className="w-16 h-16 text-cyan-300 animate-pulse" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Ultra Music Festival Miami Advertising
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Reach 165,000+ EDM Fans During Miami's Biggest Music Event
            </p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Users className="w-12 h-12 mb-4 text-cyan-300" />
                <h3 className="text-2xl font-bold mb-2">165,000+</h3>
                <p className="text-cyan-100">Festival Attendees</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Globe className="w-12 h-12 mb-4 text-cyan-300" />
                <h3 className="text-2xl font-bold mb-2">105</h3>
                <p className="text-cyan-100">Countries Represented</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <DollarSign className="w-12 h-12 mb-4 text-cyan-300" />
                <h3 className="text-2xl font-bold mb-2">$150M</h3>
                <p className="text-cyan-100">Economic Impact</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Calendar className="w-12 h-12 mb-4 text-cyan-300" />
                <h3 className="text-2xl font-bold mb-2">10 Days</h3>
                <p className="text-cyan-100">Music Week Events</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra & Miami Music Week Overview */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            The Ultimate EDM Marketing Opportunity
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-purple-600">Ultra Festival Demographics</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Age 18-34 (85%)</p>
                    <p className="text-gray-600">Millennials & Gen Z with high disposable income</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">International Visitors (60%)</p>
                    <p className="text-gray-600">From Europe, Asia, Latin America spending $2,500+ per trip</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Tech-Savvy Audience</p>
                    <p className="text-gray-600">95% active on social media, 80% stream content daily</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Brand Conscious</p>
                    <p className="text-gray-600">Fashion, tech, lifestyle brands resonate strongly</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Party & Nightlife Focus</p>
                    <p className="text-gray-600">Active 24/7 during Music Week, high spending on experiences</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-cyan-600">Miami Music Week Impact</h3>
              <div className="space-y-4">
                <div className="border-l-4 border-purple-500 pl-4">
                  <p className="text-3xl font-bold text-purple-600">300+</p>
                  <p className="text-gray-600">Events across Miami</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <p className="text-3xl font-bold text-blue-600">100%</p>
                  <p className="text-gray-600">Hotel occupancy rate</p>
                </div>
                <div className="border-l-4 border-cyan-500 pl-4">
                  <p className="text-3xl font-bold text-cyan-600">500K+</p>
                  <p className="text-gray-600">Total Music Week attendees</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <p className="text-3xl font-bold text-green-600">50+</p>
                  <p className="text-gray-600">Venue activations</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <p className="text-3xl font-bold text-orange-600">24/7</p>
                  <p className="text-gray-600">Non-stop activity</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Locations for Ultra */}
      <section className="py-16 px-4 bg-gradient-to-b from-purple-50 to-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ultra & Music Week Strategic Advertising Zones
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
              <MapPin className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Bayfront Park Main Stage</h3>
              <p className="text-gray-600 mb-4">
                Ultra's epicenter with 55,000 daily attendees. Mobile billboards capture arrivals, departures, and queue lines.
              </p>
              <div className="bg-purple-50 p-3 rounded">
                <p className="text-sm font-bold text-purple-800">Peak: 2pm-2am</p>
                <p className="text-sm text-purple-700">60,000 impressions/day</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
              <MapPin className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Downtown Miami Hotels</h3>
              <p className="text-gray-600 mb-4">
                Festival-goers staying at InterContinental, Hyatt, JW Marriott. Morning departures, late-night returns.
              </p>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm font-bold text-blue-800">Peak: 11am-3pm, 2am-4am</p>
                <p className="text-sm text-blue-700">40,000 impressions/day</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-cyan-500">
              <MapPin className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">South Beach Clubs</h3>
              <p className="text-gray-600 mb-4">
                Music Week parties at LIV, Story, Space. Target club-goers and DJ performances throughout the week.
              </p>
              <div className="bg-cyan-50 p-3 rounded">
                <p className="text-sm font-bold text-cyan-800">Peak: 10pm-6am</p>
                <p className="text-sm text-cyan-700">35,000 impressions/night</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
              <MapPin className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Wynwood Event Venues</h3>
              <p className="text-gray-600 mb-4">
                Pool parties, warehouse raves, and daytime events. Young crowd, influencer heavy zone.
              </p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm font-bold text-green-800">Peak: 2pm-4am</p>
                <p className="text-sm text-green-700">30,000 impressions/day</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-500">
              <MapPin className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Airport Routes</h3>
              <p className="text-gray-600 mb-4">
                MIA arrivals Thursday-Friday, departures Monday-Tuesday. International festival traffic.
              </p>
              <div className="bg-orange-50 p-3 rounded">
                <p className="text-sm font-bold text-orange-800">24/7 Coverage</p>
                <p className="text-sm text-orange-700">45,000 impressions/day</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-pink-500">
              <MapPin className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Biscayne Boulevard</h3>
              <p className="text-gray-600 mb-4">
                Main artery connecting festival, hotels, and venues. Uber/Lyft pickup zones, pedestrian traffic.
              </p>
              <div className="bg-pink-50 p-3 rounded">
                <p className="text-sm font-bold text-pink-800">Peak: All day</p>
                <p className="text-sm text-pink-700">50,000 impressions/day</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ultra Week Timeline */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ultra & Music Week Advertising Timeline
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Pre-Ultra Week (Mon-Wed)</h3>
                  <p className="text-gray-600">Early arrivals, conference events, industry parties. Target hotels, airports, conference venues.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-purple-600">30,000</p>
                  <p className="text-sm text-gray-600">Daily Impressions</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Thursday - Pool Parties Begin</h3>
                  <p className="text-gray-600">Day parties start, night events ramp up. Target Wynwood, South Beach, hotel zones.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-600">50,000</p>
                  <p className="text-sm text-gray-600">Daily Impressions</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-cyan-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Ultra Weekend (Fri-Sun)</h3>
                  <p className="text-gray-600">Festival at peak capacity. Saturate Bayfront Park, Downtown, transit routes 24/7.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-cyan-600">150,000</p>
                  <p className="text-sm text-gray-600">Daily Impressions</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Recovery Monday</h3>
                  <p className="text-gray-600">Pool parties, beach recovery, departures begin. Target beaches, hotels, airport routes.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-green-600">40,000</p>
                  <p className="text-sm text-gray-600">Daily Impressions</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-orange-500">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold mb-2">Extended Week Events</h3>
                  <p className="text-gray-600">Continued parties through following weekend. Target remaining venues, late departures.</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-orange-600">25,000</p>
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
            Ultra Music Festival Advertising Wins
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-xl p-8">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Energy Drink Launch Success</h3>
              <p className="text-gray-600 mb-4">
                "Mobile billboards at Ultra generated 10,000 product samples distributed and 50,000+ social media tags. Best festival activation ROI we've ever seen - 1,200% return."
              </p>
              <p className="font-semibold mb-4">- Major Energy Drink Brand</p>
              <div className="bg-green-50 p-4 rounded">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold text-green-800">Investment</p>
                    <p className="text-2xl font-bold">$15,000</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800">Sales Impact</p>
                    <p className="text-2xl font-bold">$180,000</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Nightclub Sold Out Events</h3>
              <p className="text-gray-600 mb-4">
                "Our mobile billboards targeting Ultra crowds sold out all 5 Music Week events. Lines around the block every night. Generated $500K in table sales alone."
              </p>
              <p className="font-semibold mb-4">- Premier Miami Nightclub</p>
              <div className="bg-green-50 p-4 rounded">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold text-green-800">Ad Spend</p>
                    <p className="text-2xl font-bold">$8,000</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800">Revenue</p>
                    <p className="text-2xl font-bold">$500K+</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Fashion Brand Viral Campaign</h3>
              <p className="text-gray-600 mb-4">
                "LED trucks at Ultra created perfect Instagram moments. 25M impressions on social, 5,000 new customers, and became the unofficial fashion brand of Ultra 2023."
              </p>
              <p className="font-semibold mb-4">- Streetwear Fashion Label</p>
              <div className="bg-green-50 p-4 rounded">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold text-green-800">Campaign Cost</p>
                    <p className="text-2xl font-bold">$12,000</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800">Brand Value</p>
                    <p className="text-2xl font-bold">$2M+</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <Award className="w-12 h-12 text-yellow-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Hotel Bookings Surge</h3>
              <p className="text-gray-600 mb-4">
                "Targeting Ultra attendees with last-minute room availability via mobile billboards filled 200 rooms at premium rates. $300K additional revenue in 3 days."
              </p>
              <p className="font-semibold mb-4">- Downtown Miami Hotel</p>
              <div className="bg-green-50 p-4 rounded">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm font-bold text-green-800">Ad Investment</p>
                    <p className="text-2xl font-bold">$5,000</p>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-green-800">Room Revenue</p>
                    <p className="text-2xl font-bold">$300K</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Mobile Billboards Dominate Ultra */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Mobile Billboards Own Ultra Advertising
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Volume2 className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Cut Through the Noise</h3>
              <p className="text-gray-600">
                While festival-goers ignore flyers and miss digital ads, 10ft LED mobile billboards are impossible to miss in Ultra crowds and traffic.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Zap className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">24/7 Energy Match</h3>
              <p className="text-gray-600">
                Mobile billboards operate round the clock matching Ultra's non-stop schedule from morning pool parties to 6am afters.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <PartyPopper className="w-12 h-12 text-pink-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Event Flexibility</h3>
              <p className="text-gray-600">
                Instantly redirect to trending parties, surprise DJ sets, or pop-up events. No other medium can adapt to Music Week's dynamic schedule.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Headphones className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Festival Culture Fit</h3>
              <p className="text-gray-600">
                LED technology and mobile innovation resonate with Ultra's tech-savvy, experience-driven audience better than traditional advertising.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Globe className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">International Impact</h3>
              <p className="text-gray-600">
                Reach visitors from 105 countries who rely on visual advertising due to language barriers. Pictures speak louder than words.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform">
              <Radio className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Social Media Amplification</h3>
              <p className="text-gray-600">
                Ultra generates 100M+ social posts. Mobile billboards in photos and videos create organic reach worth millions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison with Other Festival Advertising */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ultra Advertising Options Compared
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white">
                  <th className="p-4 text-left">Advertising Method</th>
                  <th className="p-4 text-center">Cost</th>
                  <th className="p-4 text-center">Reach</th>
                  <th className="p-4 text-center">Engagement</th>
                  <th className="p-4 text-center">ROI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-4 font-semibold">
                    <div className="flex items-center">
                      <Truck className="w-6 h-6 text-green-600 mr-2" />
                      Mobile LED Billboards
                    </div>
                  </td>
                  <td className="p-4 text-center font-bold text-green-600">$8-15K</td>
                  <td className="p-4 text-center font-bold text-green-600">500K+</td>
                  <td className="p-4 text-center font-bold text-green-600">97%</td>
                  <td className="p-4 text-center font-bold text-green-600">1,200%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Festival Sponsorship</td>
                  <td className="p-4 text-center">$50-500K</td>
                  <td className="p-4 text-center">165K</td>
                  <td className="p-4 text-center">40%</td>
                  <td className="p-4 text-center">200%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold">Street Teams</td>
                  <td className="p-4 text-center">$10-20K</td>
                  <td className="p-4 text-center">10K</td>
                  <td className="p-4 text-center">60%</td>
                  <td className="p-4 text-center">150%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Social Media Ads</td>
                  <td className="p-4 text-center">$5-15K</td>
                  <td className="p-4 text-center">100K</td>
                  <td className="p-4 text-center">3%</td>
                  <td className="p-4 text-center">250%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold">Venue Posters</td>
                  <td className="p-4 text-center">$3-8K</td>
                  <td className="p-4 text-center">20K</td>
                  <td className="p-4 text-center">15%</td>
                  <td className="p-4 text-center">100%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">Radio Spots</td>
                  <td className="p-4 text-center">$10-30K</td>
                  <td className="p-4 text-center">50K</td>
                  <td className="p-4 text-center">20%</td>
                  <td className="p-4 text-center">180%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Investment Packages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Ultra Music Festival Advertising Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-gray-400">
              <h3 className="text-2xl font-bold mb-4">Festival Starter</h3>
              <p className="text-4xl font-bold text-gray-700 mb-4">$8,000<span className="text-lg font-normal">/weekend</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>2 mobile billboard trucks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Bayfront Park focus</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Friday-Sunday coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>150,000 impressions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>GPS tracking included</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-gray-600 text-white py-3 rounded-lg hover:bg-gray-700 transition-colors">
                Reserve Festival Package
              </Link>
            </div>

            <div className="bg-gradient-to-b from-purple-50 to-white rounded-lg shadow-xl p-8 border-t-4 border-purple-600 transform scale-105">
              <div className="bg-purple-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                MOST POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4">Music Week Domination</h3>
              <p className="text-4xl font-bold text-purple-600 mb-4">$20,000<span className="text-lg font-normal">/week</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>4 mobile billboard trucks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Full Music Week coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>All zones included</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>500,000+ impressions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>24/7 operation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Event schedule optimization</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
                Dominate Music Week
              </Link>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8 border-t-4 border-cyan-600">
              <h3 className="text-2xl font-bold mb-4">VIP Experience</h3>
              <p className="text-4xl font-bold text-cyan-600 mb-4">$40,000<span className="text-lg font-normal">/10 days</span></p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>8 mobile billboard trucks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Complete market saturation</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Airport to afterparty coverage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>1M+ impressions</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Dedicated account team</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Live event response</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Social media integration</span>
                </li>
              </ul>
              <Link href="/contact" className="block w-full text-center bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-700 transition-colors">
                Go VIP at Ultra
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Ultra 2025 Early Bird Special</h3>
              <p className="text-lg mb-6">
                Reserve by January 1st and save 25% on all Ultra packages
              </p>
              <p className="text-yellow-300 font-bold text-xl">
                Limited availability - Only 10 fleet slots remaining for Ultra 2025
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900 via-blue-800 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Music className="w-16 h-16 mx-auto mb-6 text-cyan-300 animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Own Ultra Music Festival Advertising 2025
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Join the brands that dominate Miami's biggest EDM event with mobile billboard advertising
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Ultra Advertising Includes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left max-w-2xl mx-auto">
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-300 mr-3 flex-shrink-0" />
                  <span>Festival venue route maps</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-300 mr-3 flex-shrink-0" />
                  <span>Music Week event calendar</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-300 mr-3 flex-shrink-0" />
                  <span>Real-time crowd tracking</span>
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-300 mr-3 flex-shrink-0" />
                  <span>DJ set schedule optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-300 mr-3 flex-shrink-0" />
                  <span>24/7 operation capability</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-cyan-300 mr-3 flex-shrink-0" />
                  <span>Social media amplification</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-cyan-400 text-purple-900 font-bold rounded-lg hover:bg-cyan-300 transition-colors text-lg"
            >
              Reserve Ultra Advertising Now
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
          
          <p className="mt-8 text-cyan-100">
            Serving Ultra Music Festival, Miami Music Week, and all EDM events in South Florida
          </p>
        </div>
      </section>
    </div>
  )
}