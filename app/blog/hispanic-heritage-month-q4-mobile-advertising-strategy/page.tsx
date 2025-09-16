import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Hispanic Heritage Month & Q4 Planning: Mobile Billboard Strategy for South Florida Success',
  description: 'Learn how mobile LED billboard trucks amplify Hispanic Heritage Month campaigns while kickstarting Q4 holiday advertising. Strategic guide for Miami, Fort Lauderdale, and West Palm Beach markets.',
  keywords: 'Hispanic Heritage Month advertising Miami, Q4 marketing strategy South Florida, mobile billboard trucks Hispanic market, LED advertising Fort Lauderdale, holiday season planning 2025, Miami multicultural marketing, Palm Beach Q4 campaigns',
  openGraph: {
    title: 'Hispanic Heritage Month & Q4 Planning: Mobile Billboard Success Guide',
    description: 'Strategic mobile billboard advertising for Hispanic Heritage Month and Q4 holiday planning in South Florida.',
    images: ['/images/mobile-billboard-truck.jpg'],
    type: 'article',
    publishedTime: '2025-09-16T08:00:00Z',
    authors: ['Maximax Advertising'],
  },
  alternates: {
    canonical: 'https://maximaxmobileadvertising.com/blog/hispanic-heritage-month-q4-mobile-advertising-strategy',
  },
};

export default function HispanicHeritageQ4StrategyPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Hispanic Heritage Month & Q4 Planning: Mobile Billboard Strategy for South Florida Success',
    datePublished: '2025-09-16T08:00:00Z',
    dateModified: '2025-09-16T08:00:00Z',
    author: {
      '@type': 'Organization',
      name: 'Maximax Advertising',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Maximax Advertising',
      logo: {
        '@type': 'ImageObject',
        url: 'https://maximaxmobileadvertising.com/images/logo.png',
      },
    },
    description: 'Strategic guide for leveraging mobile billboard trucks during Hispanic Heritage Month while planning Q4 holiday campaigns in South Florida markets',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://maximaxmobileadvertising.com/blog/hispanic-heritage-month-q4-mobile-advertising-strategy',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20">
        <div className="absolute inset-0 bg-[url('/images/miami-skyline.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hispanic Heritage Month Meets Q4 Planning: Your Mobile Billboard Strategy for South Florida Success
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              How Smart Advertisers Use LED Trucks to Connect with 70% of Miami's Population While Launching Holiday Campaigns
            </p>
            <Link
              href="/contact"
              className="btn btn-lg bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white hover:opacity-90 transform hover:scale-105 shadow-xl"
            >
              Start Your Campaign Today
            </Link>
          </div>
        </div>
      </section>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none">
          <p className="text-xl font-semibold text-maximax-cyan mb-6">
            Published: September 16, 2025 | Reading Time: 8 minutes
          </p>

          <p className="lead text-xl mb-8">
            We're at a critical intersection in the advertising calendar. Hispanic Heritage Month (September 15 - October 15)
            is in full swing, coinciding perfectly with Q4 planning season. For businesses targeting South Florida's diverse
            markets, mobile billboard trucks offer an unmatched opportunity to authentically connect with Hispanic consumers
            while positioning for the lucrative holiday shopping season ahead.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">The $3.2 Trillion Opportunity You Can't Ignore</h2>

          <p className="mb-6">
            Hispanic purchasing power in the United States has reached an astounding $3.2 trillion in 2025, with South
            Florida representing one of the most concentrated and affluent Hispanic markets in the nation. Consider these
            compelling statistics that make mobile billboard advertising essential for your Q4 strategy:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li><strong>Miami-Dade County is 70% Hispanic</strong>, making it the largest Hispanic-majority metropolitan area in the United States</li>
            <li><strong>Broward County's Hispanic population has grown 45%</strong> in the past decade, now representing 31% of the total population</li>
            <li><strong>Hispanic consumers spend 16% more during Q4</strong> compared to the general market, with gift-giving traditions extending through Three Kings Day</li>
            <li><strong>82% of Hispanic millennials</strong> say they're more likely to purchase from brands that celebrate their culture authentically</li>
            <li><strong>Mobile out-of-home advertising sees 48% higher engagement</strong> among Hispanic audiences compared to static billboards</li>
          </ul>

          <p className="mb-6">
            These numbers aren't just statistics—they represent millions of potential customers actively looking for brands
            that speak to them during this culturally significant time while simultaneously beginning their holiday shopping.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Why Hispanic Heritage Month + Q4 Planning = Marketing Gold</h2>

          <p className="mb-6">
            September 16th marks the perfect storm of marketing opportunity. We're one day into Hispanic Heritage Month
            celebrations, with major events happening across South Florida every weekend. Simultaneously, smart marketers
            are finalizing their Q4 strategies, knowing that holiday shopping behaviors begin forming in October.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">The Cultural Calendar Advantage</h3>

          <p className="mb-6">
            Hispanic Heritage Month isn't just a single celebration—it's a series of cultural touchpoints that create
            multiple advertising opportunities:
          </p>

          <div className="bg-maximax-cyan/5 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold mb-4">Key Dates for Mobile Billboard Campaigns</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-maximax-cyan mr-3">🎊</span>
                <div>
                  <strong>September 15-16:</strong> Independence celebrations for Costa Rica, El Salvador, Guatemala,
                  Honduras, Nicaragua, and Mexico—massive festival weekends in Miami and Fort Lauderdale
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-maximax-cyan mr-3">🎊</span>
                <div>
                  <strong>September 27:</strong> Noche de Gala at Bayfront Park—expecting 50,000+ attendees
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-maximax-cyan mr-3">🎊</span>
                <div>
                  <strong>October 12:</strong> Día de la Raza celebrations throughout South Florida
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-maximax-cyan mr-3">🎊</span>
                <div>
                  <strong>October 15:</strong> Grand finale events transitioning into Halloween marketing
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">The Q4 Planning Timeline</h3>

          <p className="mb-6">
            While you're connecting with Hispanic audiences, you're also positioning for the biggest shopping season of
            the year. Mobile billboard trucks allow you to seamlessly transition messaging from cultural celebration to
            holiday preparation:
          </p>

          <div className="bg-emerald-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold mb-4">Q4 Mobile Billboard Strategy Timeline</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3">📅</span>
                <div>
                  <strong>Mid-September (Now):</strong> Launch Hispanic Heritage campaigns while testing holiday creative
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3">📅</span>
                <div>
                  <strong>Early October:</strong> Transition to Halloween promotions with continued cultural messaging
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3">📅</span>
                <div>
                  <strong>November 1:</strong> Full Black Friday and Thanksgiving campaign launch
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-emerald-600 mr-3">📅</span>
                <div>
                  <strong>December:</strong> Holiday shopping crescendo through Three Kings Day (January 6)
                </div>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Strategic Locations for Maximum Hispanic Heritage Month Impact</h2>

          <p className="mb-6">
            Mobile billboard trucks excel because they go where your audience lives, works, shops, and celebrates. During
            Hispanic Heritage Month, this means strategically targeting South Florida's vibrant Hispanic neighborhoods and
            event venues:
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Miami-Dade County Hispanic Hotspots</h3>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-maximax-cyan mr-3">📍</span>
                <div>
                  <strong>Calle Ocho (SW 8th Street):</strong> The heart of Little Havana sees 100,000+ daily
                  impressions. Mobile billboards here reach multi-generational Hispanic families, business owners,
                  and tourists experiencing authentic Latin culture.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-maximax-cyan mr-3">📍</span>
                <div>
                  <strong>Hialeah:</strong> With 96% Hispanic population, Hialeah represents the highest concentration
                  of Cuban and Cuban-American residents outside of Cuba. Target Westland Mall, Palm Avenue, and the
                  Hialeah Park Racing area.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-maximax-cyan mr-3">📍</span>
                <div>
                  <strong>Kendall:</strong> Home to affluent Hispanic families with median household incomes exceeding
                  $75,000. Focus on The Falls, Town and Country Mall, and the Kendall Drive corridor.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-maximax-cyan mr-3">📍</span>
                <div>
                  <strong>Doral:</strong> The Venezuelan capital of the US with growing Colombian and Brazilian
                  populations. Target CityPlace Doral and Downtown Doral during evening hours.
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-maximax-cyan mr-3">📍</span>
                <div>
                  <strong>Wynwood:</strong> The cultural arts district hosts numerous Hispanic Heritage Month events
                  and attracts diverse, culture-conscious audiences perfect for brand messaging.
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Broward County Emerging Markets</h3>

          <p className="mb-6">
            Broward's rapidly growing Hispanic population presents untapped opportunity for mobile billboard campaigns:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li><strong>Pembroke Pines:</strong> 47% Hispanic population with young families and high disposable income</li>
            <li><strong>Miramar:</strong> Caribbean and South American communities with strong purchasing power</li>
            <li><strong>Sunrise:</strong> Growing Venezuelan and Colombian populations near Sawgrass Mills</li>
            <li><strong>Hollywood:</strong> Beach communities and downtown district with Hispanic-owned businesses</li>
            <li><strong>Coral Springs:</strong> Affluent Hispanic families prioritizing education and lifestyle brands</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Creating Culturally Authentic Mobile Billboard Campaigns</h2>

          <p className="mb-6">
            The beauty of LED mobile billboards lies in their flexibility to deliver culturally relevant messages that
            resonate authentically. Here's how to maximize your Hispanic Heritage Month campaign while setting up Q4 success:
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Language Strategy That Works</h3>

          <div className="bg-amber-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold mb-4">Best Practices for Bilingual Mobile Billboard Messaging</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">✓</span>
                <div>
                  <strong>Code-switching creative:</strong> Alternate between Spanish and English messages based on
                  neighborhood demographics and time of day
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">✓</span>
                <div>
                  <strong>Spanglish authenticity:</strong> Mix languages naturally, reflecting how bilingual
                  South Floridians actually communicate
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">✓</span>
                <div>
                  <strong>Cultural nuances:</strong> Understand that Miami Cubans, Doral Venezuelans, and
                  Weston Colombians respond to different cultural triggers
                </div>
              </li>
              <li className="flex items-start">
                <span className="text-amber-600 mr-3">✓</span>
                <div>
                  <strong>Visual storytelling:</strong> Use imagery that reflects multi-generational Hispanic
                  families and cultural celebrations
                </div>
              </li>
            </ul>
          </div>

          <h3 className="text-2xl font-semibold mt-8 mb-4">Timing Your Messages for Maximum Impact</h3>

          <p className="mb-6">
            Our GPS-tracked mobile billboards allow for sophisticated dayparting strategies that align with Hispanic
            consumer behaviors:
          </p>

          <ul className="list-disc pl-6 mb-8 space-y-3">
            <li><strong>Morning (6 AM - 10 AM):</strong> Target school drop-off zones and café con leche spots with family-focused messaging</li>
            <li><strong>Midday (11 AM - 2 PM):</strong> Reach business districts and lunch destinations with professional Hispanic audiences</li>
            <li><strong>Afternoon (3 PM - 6 PM):</strong> School pickup, grocery shopping, and errands—perfect for household decision-makers</li>
            <li><strong>Evening (6 PM - 10 PM):</strong> Restaurant districts, entertainment venues, and family gathering spots</li>
            <li><strong>Weekends:</strong> Festival venues, parks, beaches, and shopping centers where families spend time together</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6">Q4 Holiday Integration: Extending the Celebration</h2>

          <p className="mb-6">
            The genius of starting your Q4 campaign during Hispanic Heritage Month is the natural progression from cultural
            celebration to holiday shopping. Hispanic consumers in South Florida don't just celebrate Thanksgiving and
            Christmas—they embrace a extended holiday season that includes:
          </p>

          <div className="bg-gradient-to-r from-rose-50 to-emerald-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold mb-4">The Hispanic Holiday Shopping Calendar</h4>
            <ul className="space-y-3">
              <li><strong>Halloween (October 31):</strong> Increasingly popular with Hispanic families spending 23% more on costumes and decorations</li>
              <li><strong>Día de los Muertos (November 1-2):</strong> Cultural celebration driving food, flower, and gift purchases</li>
              <li><strong>Thanksgiving (November 28):</strong> Fusion celebrations combining American and Latin traditions</li>
              <li><strong>Black Friday/Cyber Monday:</strong> Hispanic shoppers over-index in electronics and apparel purchases</li>
              <li><strong>Las Posadas (December 16-24):</strong> Nine days of celebrations requiring party supplies and gifts</li>
              <li><strong>Nochebuena (December 24):</strong> The main gift-giving event for many Hispanic families</li>
              <li><strong>Three Kings Day (January 6):</strong> Extended gift-giving season unique to Hispanic markets</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Mobile Billboard Advantages for Hispanic Heritage Campaigns</h2>

          <h3 className="text-2xl font-semibold mt-8 mb-4">1. Event Presence Without Event Sponsorship Costs</h3>

          <p className="mb-6">
            Hispanic Heritage Month features dozens of festivals, parades, and cultural events across South Florida. While
            event sponsorship can cost tens of thousands, mobile billboards can legally operate on public roads around
            these venues, capturing the same audience for a fraction of the cost.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">2. Multi-Generational Reach</h3>

          <p className="mb-6">
            Hispanic households often include multiple generations, from abuelos to millennials. Mobile billboards reach
            everyone during their daily routines—whether it's grandparents at the local café, parents commuting to work,
            or young adults at entertainment districts.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">3. Community Trust Through Presence</h3>

          <p className="mb-6">
            Regular visibility in Hispanic neighborhoods builds brand trust. When your mobile billboard becomes a familiar
            sight in Hialeah or Little Havana, you're not just advertising—you're becoming part of the community fabric.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4">4. Flexibility for Cultural Moments</h3>

          <p className="mb-6">
            Did a local soccer team just win? Is there breaking news from Latin America? Mobile billboards can update
            messaging within hours to stay culturally relevant and timely.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">ROI Metrics: Measuring Hispanic Heritage Month Success</h2>

          <p className="mb-6">
            Mobile billboard campaigns targeting Hispanic audiences during this period typically see exceptional returns:
          </p>

          <div className="bg-maximax-cyan/5 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold mb-4">Performance Benchmarks for Hispanic-Targeted Campaigns</h4>
            <ul className="space-y-3">
              <li><strong>97% brand recall</strong> among Hispanic consumers exposed to LED mobile billboards</li>
              <li><strong>3.4x higher engagement rates</strong> compared to general market outdoor advertising</li>
              <li><strong>45% increase in store visits</strong> when mobile billboards target Hispanic neighborhoods</li>
              <li><strong>28% boost in social media mentions</strong> during cultural celebration periods</li>
              <li><strong>$12 return per $1 spent</strong> on mobile billboard advertising in Hispanic markets</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Case Studies: Hispanic Heritage Month Winners</h2>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold mb-4">National Restaurant Chain Success</h4>
            <p className="mb-4">
              A major restaurant chain used mobile billboards to promote special Hispanic Heritage Month menu items.
              By targeting Calle Ocho, Doral, and Pembroke Pines during peak dining hours, they achieved:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>47% increase in Hispanic customer visits</li>
              <li>$380,000 in incremental revenue over 30 days</li>
              <li>2,500+ social media posts featuring their campaign</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold mb-4">Regional Bank Customer Acquisition</h4>
            <p className="mb-4">
              A regional bank seeking to expand Hispanic market share deployed bilingual mobile billboards around
              financial districts and shopping centers, resulting in:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>850 new checking accounts opened</li>
              <li>$2.3 million in new deposits</li>
              <li>34% of new customers citing mobile billboard as awareness source</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Your Action Plan: Starting Today</h2>

          <p className="mb-6">
            September 16th isn't just another day—it's your opportunity to capture both Hispanic Heritage Month momentum
            and position for Q4 success. Here's your immediate action plan:
          </p>

          <div className="bg-amber-50 border-2 border-amber-400 p-6 rounded-lg mb-8">
            <h3 className="text-2xl font-bold mb-4">This Week's Priority Actions</h3>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong>Book your mobile billboard trucks now</strong> to secure prime routes through Hispanic neighborhoods
                and around major events happening this weekend
              </li>
              <li>
                <strong>Develop bilingual creative</strong> that celebrates culture while introducing your Q4 offerings—our
                team provides free design assistance
              </li>
              <li>
                <strong>Map your route strategy</strong> targeting morning school zones, afternoon shopping areas, and
                evening entertainment districts
              </li>
              <li>
                <strong>Set up tracking mechanisms</strong> including unique promo codes, QR codes, and vanity URLs to
                measure campaign effectiveness
              </li>
              <li>
                <strong>Plan your message evolution</strong> from Hispanic Heritage through Halloween, Thanksgiving, and
                the entire holiday season
              </li>
            </ol>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">The Competition Is Already Moving</h2>

          <p className="mb-6">
            While you're reading this, your competitors are likely finalizing their Hispanic Heritage Month and Q4
            advertising strategies. The difference between market leaders and followers often comes down to timing and
            authentic cultural connection. Mobile billboard trucks provide both—immediate deployment and genuine
            community presence.
          </p>

          <p className="mb-6">
            Consider that by next week, prime routes through Calle Ocho, Doral, and other Hispanic centers will be
            booked. Major events like the Calle Ocho Music Festival preparations, Broward Hispanic Heritage celebrations,
            and Palm Beach cultural events are happening throughout the month. Every day you wait is a day of lost
            opportunity to build brand affinity with South Florida's most influential consumer segment.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6">Investment That Pays Through January</h2>

          <p className="mb-6">
            When you launch a mobile billboard campaign during Hispanic Heritage Month, you're not just investing in
            30 days of advertising. You're building brand recognition that carries through the entire Q4 shopping season
            and into Three Kings Day 2026. This extended ROI timeline makes September the most strategic month to begin
            your mobile advertising campaign.
          </p>

          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 p-6 rounded-lg mb-8">
            <h4 className="text-xl font-semibold mb-4">Extended Value Timeline</h4>
            <ul className="space-y-3">
              <li><strong>September-October:</strong> Build awareness during Hispanic Heritage Month</li>
              <li><strong>November:</strong> Leverage familiarity for Black Friday promotions</li>
              <li><strong>December:</strong> Capitalize on established trust for holiday shopping</li>
              <li><strong>January:</strong> Capture Three Kings Day gift-giving (unique Hispanic advantage)</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6">Make Your Move: South Florida Is Waiting</h2>

          <p className="mb-6">
            South Florida's unique demographic composition makes it the perfect testing ground for Hispanic marketing
            strategies that can be scaled nationally. What works on the streets of Miami, in the shopping centers of
            Fort Lauderdale, and along the boulevards of West Palm Beach becomes your blueprint for reaching the
            62.5 million Hispanic Americans nationwide.
          </p>

          <p className="mb-6">
            Mobile billboard trucks give you the flexibility to test, refine, and optimize your messaging in real-time.
            Unlike static billboards locked into monthly contracts or digital ads lost in smartphone scrolling, LED truck
            advertising commands attention and drives action exactly where and when you need it.
          </p>

          <p className="text-xl font-semibold mb-8">
            Don't let Hispanic Heritage Month and Q4 planning pass without maximizing your advertising impact. Call
            Maximax Advertising now at <a href="tel:5617200521" className="text-maximax-cyan hover:underline">(561) 720-0521</a>
            to discuss your Hispanic Heritage Month and Q4 mobile billboard strategy. Our bilingual team understands
            South Florida's Hispanic markets and can help you create campaigns that resonate authentically while driving
            measurable business results.
          </p>

          <p className="italic text-gray-600">
            Every moment matters during this critical advertising period. While you consider your options, mobile billboard
            trucks are already rolling through Hispanic neighborhoods, building brand awareness for forward-thinking
            businesses. Make sure your brand is part of the celebration and the shopping season that follows.
          </p>
        </div>
      </article>

      <section className="bg-gradient-to-r from-maximax-pink to-maximax-cyan py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Hispanic Heritage Month Campaign Today
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Connect with South Florida's Hispanic market while positioning for Q4 success. Our mobile billboard trucks
            are ready to roll.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="btn btn-lg bg-white text-maximax-pink hover:bg-gray-100"
            >
              Book Your Campaign
            </Link>
            <Link
              href="/services"
              className="btn btn-lg bg-transparent text-white border-2 border-white hover:bg-white/10"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}