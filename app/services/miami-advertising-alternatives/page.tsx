import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { 
  Truck,
  Building,
  Radio,
  Tv,
  Newspaper,
  Smartphone,
  DollarSign,
  TrendingUp,
  Target,
  Eye,
  Clock,
  MapPin,
  Users,
  BarChart3,
  CheckCircle,
  XCircle,
  ArrowRight,
  Phone,
  Zap,
  Globe,
  Shield,
  Award,
  ChevronRight,
  Calendar
} from 'lucide-react'
import { generateServiceMetadata } from '@/app/lib/seo/metadata'

// SEO Metadata
export const metadata: Metadata = generateServiceMetadata({
  name: 'Miami Advertising Agency Alternatives',
  description: 'Discover superior alternatives to traditional Miami advertising agencies. Mobile billboards deliver 10x better ROI than agency campaigns with transparent pricing, no contracts, and proven results in South Florida.',
  keywords: [
    'Miami advertising alternatives',
    'advertising agency alternatives Miami',
    'Miami marketing alternatives',
    'mobile billboard vs agency',
    'Miami advertising options',
    'South Florida advertising comparison',
    'billboard advertising Miami',
    'alternative marketing Miami',
    'Miami advertising cost comparison',
    'best advertising Miami',
    'Miami Beach advertising options',
    'Brickell advertising alternatives',
    'Downtown Miami marketing',
    'affordable advertising Miami',
    'Miami advertising ROI'
  ]
})

export default function MiamiAdvertisingAlternativesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Miami Advertising Agency Alternatives That Actually Work
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Skip the Agency Fees, Contracts, and Complexity - Get Better Results
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <DollarSign className="w-12 h-12 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2">75% Lower Cost</h3>
                <p className="text-blue-100">Than traditional agency campaigns</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <Clock className="w-12 h-12 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2">48 Hour Launch</h3>
                <p className="text-blue-100">No 3-month agency timelines</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                <TrendingUp className="w-12 h-12 mb-4 text-yellow-400" />
                <h3 className="text-2xl font-bold mb-2">850% Avg ROI</h3>
                <p className="text-blue-100">Proven Miami market results</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agency vs Alternative Comparison */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Traditional Agency vs Smart Alternatives
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Why Miami businesses are abandoning expensive agencies for proven, performance-based advertising
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white shadow-xl rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <th className="p-4 text-left">Advertising Method</th>
                  <th className="p-4 text-center">Monthly Cost</th>
                  <th className="p-4 text-center">Setup Time</th>
                  <th className="p-4 text-center">Impressions/Month</th>
                  <th className="p-4 text-center">CPM</th>
                  <th className="p-4 text-center">ROI</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-green-50">
                  <td className="p-4 font-semibold">
                    <div className="flex items-center">
                      <Truck className="w-6 h-6 text-green-600 mr-2" />
                      Mobile Billboards (Recommended)
                    </div>
                  </td>
                  <td className="p-4 text-center font-bold text-green-600">$3,500-5,000</td>
                  <td className="p-4 text-center font-bold text-green-600">48 hours</td>
                  <td className="p-4 text-center font-bold text-green-600">1.5M-2M</td>
                  <td className="p-4 text-center font-bold text-green-600">$2.50</td>
                  <td className="p-4 text-center font-bold text-green-600">850%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">
                    <div className="flex items-center">
                      <Building className="w-6 h-6 text-gray-600 mr-2" />
                      Traditional Agency Campaign
                    </div>
                  </td>
                  <td className="p-4 text-center">$15,000-50,000</td>
                  <td className="p-4 text-center">6-12 weeks</td>
                  <td className="p-4 text-center">500K-1M</td>
                  <td className="p-4 text-center">$30-50</td>
                  <td className="p-4 text-center">150%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold">
                    <div className="flex items-center">
                      <Radio className="w-6 h-6 text-gray-600 mr-2" />
                      Radio Advertising
                    </div>
                  </td>
                  <td className="p-4 text-center">$8,000-20,000</td>
                  <td className="p-4 text-center">2-3 weeks</td>
                  <td className="p-4 text-center">300K-500K</td>
                  <td className="p-4 text-center">$25-40</td>
                  <td className="p-4 text-center">200%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">
                    <div className="flex items-center">
                      <Tv className="w-6 h-6 text-gray-600 mr-2" />
                      TV Advertising
                    </div>
                  </td>
                  <td className="p-4 text-center">$25,000-100,000</td>
                  <td className="p-4 text-center">4-8 weeks</td>
                  <td className="p-4 text-center">200K-400K</td>
                  <td className="p-4 text-center">$125-250</td>
                  <td className="p-4 text-center">120%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold">
                    <div className="flex items-center">
                      <Newspaper className="w-6 h-6 text-gray-600 mr-2" />
                      Print Advertising
                    </div>
                  </td>
                  <td className="p-4 text-center">$5,000-15,000</td>
                  <td className="p-4 text-center">2-4 weeks</td>
                  <td className="p-4 text-center">50K-150K</td>
                  <td className="p-4 text-center">$100-150</td>
                  <td className="p-4 text-center">80%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50">
                  <td className="p-4 font-semibold">
                    <div className="flex items-center">
                      <Smartphone className="w-6 h-6 text-gray-600 mr-2" />
                      Digital/Social Media Ads
                    </div>
                  </td>
                  <td className="p-4 text-center">$3,000-10,000</td>
                  <td className="p-4 text-center">1-2 weeks</td>
                  <td className="p-4 text-center">100K-300K</td>
                  <td className="p-4 text-center">$30-50</td>
                  <td className="p-4 text-center">250%</td>
                </tr>
                <tr className="border-b hover:bg-gray-50 bg-gray-50">
                  <td className="p-4 font-semibold">
                    <div className="flex items-center">
                      <Globe className="w-6 h-6 text-gray-600 mr-2" />
                      Billboard (Static)
                    </div>
                  </td>
                  <td className="p-4 text-center">$2,000-8,000</td>
                  <td className="p-4 text-center">2-4 weeks</td>
                  <td className="p-4 text-center">400K-800K</td>
                  <td className="p-4 text-center">$5-10</td>
                  <td className="p-4 text-center">300%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Agency Pain Points vs Mobile Billboard Solutions */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Why Miami Businesses Are Leaving Traditional Agencies
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Agency Problems */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-600">Common Agency Problems</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start">
                    <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Hidden Fees & Markups</h4>
                      <p className="text-gray-600">
                        Agencies charge 15-30% markups on media buys, plus monthly retainers of $5,000-20,000. Total costs often exceed budgets by 50%.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start">
                    <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Long-Term Contracts</h4>
                      <p className="text-gray-600">
                        Locked into 6-12 month contracts with cancellation penalties. Can't adjust strategy or budget without fees.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start">
                    <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Slow Campaign Launch</h4>
                      <p className="text-gray-600">
                        Strategy meetings, creative approvals, and production take 6-12 weeks. Miss market opportunities while waiting.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start">
                    <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Unclear ROI Reporting</h4>
                      <p className="text-gray-600">
                        Vague metrics like "brand lift" and "impressions" without clear lead generation or sales data.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start">
                    <XCircle className="w-6 h-6 text-red-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Junior Team Execution</h4>
                      <p className="text-gray-600">
                        Senior staff sells, juniors execute. Your campaign managed by recent graduates, not experienced professionals.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Billboard Solutions */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-green-600">Mobile Billboard Solutions</h3>
              <div className="space-y-4">
                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Transparent, All-Inclusive Pricing</h4>
                      <p className="text-gray-600">
                        One flat rate covers everything - truck, driver, fuel, GPS tracking, reporting. No hidden fees or surprise costs.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Flexible, No-Contract Options</h4>
                      <p className="text-gray-600">
                        Start with one week, scale up or down anytime. No long-term commitments or cancellation penalties.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">48-Hour Campaign Launch</h4>
                      <p className="text-gray-600">
                        Approve artwork today, trucks roll tomorrow. Capture time-sensitive opportunities immediately.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Real-Time GPS & Lead Tracking</h4>
                      <p className="text-gray-600">
                        Daily reports show exact routes, impressions, and correlate with your lead generation data.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow p-6">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold mb-2">Dedicated Professional Team</h4>
                      <p className="text-gray-600">
                        Experienced drivers, route strategists, and account managers focused solely on your campaign success.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Miami Market Specific Advantages */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Mobile Billboards: Built for Miami's Unique Market
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-500">
              <MapPin className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Tourist Corridor Coverage</h3>
              <p className="text-gray-600 mb-4">
                Unlike agencies buying random media, mobile billboards target Ocean Drive, Lincoln Road, Bayside, and Wynwood exactly when tourists are there.
              </p>
              <div className="bg-blue-50 p-3 rounded">
                <p className="text-sm font-semibold text-blue-800">35M annual tourists reached</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-500">
              <Users className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Multicultural Targeting</h3>
              <p className="text-gray-600 mb-4">
                Target specific cultural communities in Little Havana, Little Haiti, or Aventura with precision agencies can't match through mass media.
              </p>
              <div className="bg-green-50 p-3 rounded">
                <p className="text-sm font-semibold text-green-800">70% Hispanic market penetration</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-500">
              <Calendar className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Event Marketing Power</h3>
              <p className="text-gray-600 mb-4">
                Dominate Art Basel, Ultra Music Festival, Miami Swim Week without agency media buying markups or minimum spends.
              </p>
              <div className="bg-purple-50 p-3 rounded">
                <p className="text-sm font-semibold text-purple-800">500% ROI during events</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-orange-500">
              <Building className="w-12 h-12 text-orange-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Business District Focus</h3>
              <p className="text-gray-600 mb-4">
                Target Brickell financial district, Downtown courts, or Coral Gables business areas during peak professional hours.
              </p>
              <div className="bg-orange-50 p-3 rounded">
                <p className="text-sm font-semibold text-orange-800">85% B2B decision maker reach</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-red-500">
              <Clock className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Rush Hour Domination</h3>
              <p className="text-gray-600 mb-4">
                Capture I-95, US-1, and Dolphin Expressway traffic when 1.2M commuters are on the road, not possible with static agency buys.
              </p>
              <div className="bg-red-50 p-3 rounded">
                <p className="text-sm font-semibold text-red-800">70,000 daily impressions</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-indigo-500">
              <Shield className="w-12 h-12 text-indigo-500 mb-4" />
              <h3 className="text-xl font-bold mb-3">Weather-Proof Advertising</h3>
              <p className="text-gray-600 mb-4">
                Unlike agency outdoor campaigns that fail in rain, mobile billboard LEDs perform perfectly in Miami's daily showers.
              </p>
              <div className="bg-indigo-50 p-3 rounded">
                <p className="text-sm font-semibold text-indigo-800">365-day operation guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Breakdown Comparison */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Real Cost Comparison: Agency vs Mobile Billboards
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Traditional Agency Costs */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-red-600">Traditional Agency Campaign</h3>
              <div className="space-y-3">
                <div className="flex justify-between pb-2 border-b">
                  <span>Monthly Retainer</span>
                  <span className="font-bold">$10,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Media Buy (with 20% markup)</span>
                  <span className="font-bold">$18,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Creative Development</span>
                  <span className="font-bold">$5,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Campaign Management</span>
                  <span className="font-bold">$3,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Analytics & Reporting</span>
                  <span className="font-bold">$2,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Account Service Fees</span>
                  <span className="font-bold">$2,000</span>
                </div>
                <div className="bg-red-50 p-4 rounded mt-4">
                  <div className="flex justify-between text-xl font-bold text-red-700">
                    <span>Total Monthly Cost</span>
                    <span>$40,000</span>
                  </div>
                  <p className="text-sm text-red-600 mt-2">Plus 6-month minimum contract = $240,000</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600">Expected Impressions: 750,000/month</p>
                  <p className="text-sm text-gray-600">Cost Per Impression: $53.33 CPM</p>
                  <p className="text-sm text-gray-600">Average ROI: 150%</p>
                </div>
              </div>
            </div>

            {/* Mobile Billboard Costs */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-600">Mobile Billboard Campaign</h3>
              <div className="space-y-3">
                <div className="flex justify-between pb-2 border-b">
                  <span>Mobile Billboard Fleet (2 trucks)</span>
                  <span className="font-bold">$8,000</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Professional Design (one-time)</span>
                  <span className="font-bold">$500</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>GPS Tracking & Analytics</span>
                  <span className="font-bold">Included</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Route Optimization</span>
                  <span className="font-bold">Included</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Dedicated Account Manager</span>
                  <span className="font-bold">Included</span>
                </div>
                <div className="flex justify-between pb-2 border-b">
                  <span>Daily Reporting</span>
                  <span className="font-bold">Included</span>
                </div>
                <div className="bg-green-50 p-4 rounded mt-4">
                  <div className="flex justify-between text-xl font-bold text-green-700">
                    <span>Total Monthly Cost</span>
                    <span>$8,500</span>
                  </div>
                  <p className="text-sm text-green-600 mt-2">No contracts - start/stop anytime</p>
                </div>
                <div className="mt-4 space-y-2">
                  <p className="text-sm text-gray-600">Expected Impressions: 3,000,000/month</p>
                  <p className="text-sm font-bold text-green-600">Cost Per Impression: $2.83 CPM</p>
                  <p className="text-sm font-bold text-green-600">Average ROI: 850%</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Mobile Billboards Deliver:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                <div>
                  <p className="font-bold text-3xl text-yellow-400">79%</p>
                  <p>Lower Cost</p>
                </div>
                <div>
                  <p className="font-bold text-3xl text-yellow-400">4x</p>
                  <p>More Impressions</p>
                </div>
                <div>
                  <p className="font-bold text-3xl text-yellow-400">5.7x</p>
                  <p>Better ROI</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Miami Businesses That Fired Their Agency
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-4">
                <Award className="w-10 h-10 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Miami Law Firm Saves $300K</h3>
                  <p className="text-gray-600 mb-4">
                    "Our agency was charging us $45,000/month for mixed media campaigns with unclear results. Switched to mobile billboards for $5,000/month and generated 3x more qualified leads. We saved over $300,000 annually and actually grew our practice."
                  </p>
                  <p className="font-semibold">- Hernandez & Associates, Coral Gables</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm font-bold text-red-700">Before (Agency)</p>
                      <p className="text-sm">$45K/month</p>
                      <p className="text-sm">50 leads/month</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-bold text-green-700">After (Mobile Billboards)</p>
                      <p className="text-sm">$5K/month</p>
                      <p className="text-sm">150 leads/month</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-4">
                <Award className="w-10 h-10 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Restaurant Chain 10x Growth</h3>
                  <p className="text-gray-600 mb-4">
                    "Paid an agency $200K for a 6-month campaign that barely moved the needle. Mobile billboards cost us $30K total and filled all 5 locations. The trucks hit lunch and dinner traffic perfectly - something the agency never figured out."
                  </p>
                  <p className="font-semibold">- Havana Kitchen, Multiple Locations</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm font-bold text-red-700">Before (Agency)</p>
                      <p className="text-sm">$200K/6 months</p>
                      <p className="text-sm">5% traffic increase</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-bold text-green-700">After (Mobile Billboards)</p>
                      <p className="text-sm">$30K/6 months</p>
                      <p className="text-sm">50% traffic increase</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-4">
                <Award className="w-10 h-10 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Medical Practice Instant Results</h3>
                  <p className="text-gray-600 mb-4">
                    "Agency took 3 months to launch our campaign and wanted a 12-month commitment. Mobile billboards started in 48 hours, we saw new patients within a week. No contracts, total flexibility, and GPS tracking proved every dollar worked."
                  </p>
                  <p className="font-semibold">- Beach Wellness Center, Miami Beach</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm font-bold text-red-700">Agency Timeline</p>
                      <p className="text-sm">3 months to launch</p>
                      <p className="text-sm">12-month contract</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-bold text-green-700">Mobile Billboard Timeline</p>
                      <p className="text-sm">48 hours to launch</p>
                      <p className="text-sm">Week-to-week flexibility</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-8">
              <div className="flex items-start mb-4">
                <Award className="w-10 h-10 text-yellow-500 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Real Estate Boom</h3>
                  <p className="text-gray-600 mb-4">
                    "Our agency's 'comprehensive digital strategy' generated 20 leads in 6 months for $120K. One month of mobile billboards in Aventura and Bal Harbour for $6K generated 85 qualified buyers. The math was simple."
                  </p>
                  <p className="font-semibold">- Luxury Realty Group, Aventura</p>
                  <div className="mt-4 grid grid-cols-2 gap-4">
                    <div className="bg-red-50 p-3 rounded">
                      <p className="text-sm font-bold text-red-700">Agency Results</p>
                      <p className="text-sm">$6,000 per lead</p>
                      <p className="text-sm">6-month wait</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded">
                      <p className="text-sm font-bold text-green-700">Mobile Billboard Results</p>
                      <p className="text-sm">$70 per lead</p>
                      <p className="text-sm">Immediate results</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Options Comparison */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Complete Miami Advertising Options Ranked
          </h2>
          
          <div className="space-y-6">
            {/* Rank 1 */}
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-6 border-2 border-green-500">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold flex items-center">
                      <Truck className="w-8 h-8 mr-2 text-green-600" />
                      Mobile Billboard Advertising
                    </h3>
                    <p className="text-gray-600 mt-1">Best overall value and performance</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-3xl font-bold text-green-600">850% ROI</p>
                  <p className="text-sm text-gray-600">$2.50 CPM</p>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <p className="font-bold">Setup Time</p>
                  <p className="text-green-600">48 hours</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">Flexibility</p>
                  <p className="text-green-600">No contracts</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">Tracking</p>
                  <p className="text-green-600">Real-time GPS</p>
                </div>
                <div className="text-center">
                  <p className="font-bold">Miami Coverage</p>
                  <p className="text-green-600">100% targeted</p>
                </div>
              </div>
            </div>

            {/* Rank 2 */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold flex items-center">
                      <Globe className="w-6 h-6 mr-2 text-gray-600" />
                      Static Billboard Advertising
                    </h3>
                    <p className="text-gray-600 mt-1">Good visibility, fixed location</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-700">300% ROI</p>
                  <p className="text-sm text-gray-600">$5-10 CPM</p>
                </div>
              </div>
            </div>

            {/* Rank 3 */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold flex items-center">
                      <Smartphone className="w-6 h-6 mr-2 text-gray-600" />
                      Digital/Social Media Advertising
                    </h3>
                    <p className="text-gray-600 mt-1">Targeted but high competition</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-700">250% ROI</p>
                  <p className="text-sm text-gray-600">$30-50 CPM</p>
                </div>
              </div>
            </div>

            {/* Rank 4 */}
            <div className="bg-white rounded-lg p-6 border-2 border-gray-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-gray-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-bold flex items-center">
                      <Radio className="w-6 h-6 mr-2 text-gray-600" />
                      Radio Advertising
                    </h3>
                    <p className="text-gray-600 mt-1">Limited targeting, no visuals</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-gray-700">200% ROI</p>
                  <p className="text-sm text-gray-600">$25-40 CPM</p>
                </div>
              </div>
            </div>

            {/* Last Place */}
            <div className="bg-red-50 rounded-lg p-6 border-2 border-red-300">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="bg-red-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl mr-4">
                    8
                  </div>
                  <div>
                    <h3 className="text-xl font-bold flex items-center">
                      <Building className="w-6 h-6 mr-2 text-red-600" />
                      Traditional Agency Campaigns
                    </h3>
                    <p className="text-gray-600 mt-1">Highest cost, lowest efficiency</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-red-600">150% ROI</p>
                  <p className="text-sm text-gray-600">$30-50 CPM + fees</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Stop Overpaying for Underperforming Agency Campaigns
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Join 500+ Miami businesses getting better results for 75% less cost
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6">Get Your Free Miami Advertising Audit</h3>
            <ul className="text-left max-w-2xl mx-auto space-y-3 mb-8">
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                <span>Compare your current agency costs to mobile billboard pricing</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                <span>See projected impressions and ROI for your business</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                <span>Get custom route recommendations for your target market</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="w-6 h-6 text-yellow-400 mr-3 flex-shrink-0" />
                <span>Receive competitive analysis of all advertising options</span>
              </li>
            </ul>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-yellow-400 text-blue-900 font-bold rounded-lg hover:bg-yellow-300 transition-colors text-lg"
            >
              Get Free Advertising Audit
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
          
          <p className="mt-8 text-blue-100">
            No contracts • No hidden fees • Start in 48 hours
          </p>
        </div>
      </section>
    </div>
  )
}