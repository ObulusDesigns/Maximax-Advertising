import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Event Marketing with Mobile Billboards | South Florida Events Guide | Maximax',
  description: 'Maximize ROI at South Florida events with mobile billboard advertising. Target Art Basel, Ultra Music Festival, boat shows, and festivals with strategic LED display campaigns. Event marketing guide for Miami-Dade, Broward, and Palm Beach County.',
  openGraph: {
    title: 'Event Marketing with Mobile Billboards | South Florida Guide',
    description: 'Dominate South Florida events with mobile billboards. Target Art Basel, Ultra, Spring Break, and major festivals with GPS-tracked LED displays.',
    url: 'https://maximaxmobileadvertising.com/resources/event-marketing-guide/',
    type: 'article',
  },
}

export default function EventMarketingGuidePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Event Marketing with Mobile Billboards
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Dominate South Florida's biggest events with mobile billboard advertising.
            Target attendees before, during, and after major festivals and conventions.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Major South Florida Events</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Art Basel Miami', month: 'December', attendance: '80,000+' },
              { name: 'Ultra Music Festival', month: 'March', attendance: '165,000+' },
              { name: 'Miami Open Tennis', month: 'March-April', attendance: '300,000+' },
              { name: 'Miami International Boat Show', month: 'February', attendance: '100,000+' },
              { name: 'Fort Lauderdale Boat Show', month: 'October', attendance: '100,000+' },
              { name: 'South Beach Wine & Food Festival', month: 'February', attendance: '60,000+' },
            ].map((event) => (
              <div key={event.name} className="bg-gray-900 p-6 rounded-lg border border-[#00BFFF]">
                <h3 className="font-bold text-lg mb-2 text-[#00BFFF]">{event.name}</h3>
                <p className="text-gray-400 mb-1">Month: {event.month}</p>
                <p className="text-gray-400">Attendance: {event.attendance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Event Marketing Strategies</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">Pre-Event Buzz</h3>
              <p className="text-gray-300">
                Build anticipation 1-2 weeks before the event. Target hotels, airports, and
                high-traffic areas where attendees will be arriving.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">During Event</h3>
              <p className="text-gray-300">
                Position trucks near venue entrances, parking areas, and attendee hotspots.
                Maximize visibility during peak traffic times.
              </p>
            </div>

            <div className="bg-gray-900 p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-[#00BFFF]">Post-Event Follow-Up</h3>
              <p className="text-gray-300">
                Extend your campaign 2-3 days after the event to reach attendees as they
                depart and share their experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Book Your Event Campaign</h2>
          <p className="text-xl text-gray-300 mb-8">
            Event slots fill up fast. Reserve your mobile billboard campaign 4-6 weeks in advance
            to secure premium positioning.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-[#00BFFF] to-blue-600 rounded-lg font-bold text-lg hover:shadow-lg hover:shadow-[#00BFFF]/50 transition-all"
          >
            Reserve Event Campaign
          </Link>
        </div>
      </section>
    </main>
  )
}
