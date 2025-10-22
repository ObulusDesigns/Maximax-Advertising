import Link from 'next/link'
import Image from 'next/image'
import { Calendar, Clock, ArrowRight, Tag, TrendingUp, Lightbulb, Target } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: 'GPS-Tracked Mobile Billboards: Proven ROI Analytics Guide 2025',
    excerpt: 'Discover how GPS tracking technology transforms mobile billboard advertising with real-time analytics, heat maps, and verified ROI. Complete guide to data-driven outdoor advertising for South Florida businesses.',
    image: '/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg',
    category: 'Analytics & ROI',
    date: 'October 21, 2025',
    readTime: '8 min read',
    tags: ['GPS Tracking', 'ROI Analytics', 'Data-Driven Marketing'],
    featured: true,
    slug: 'gps-tracked-mobile-billboards-roi-analytics-2025',
  },
  {
    id: 2,
    title: 'Hyperlocal Advertising in 2025: Why Mobile Billboards Beat Digital Ads for South Florida Businesses',
    excerpt: 'Discover how hyperlocal mobile billboard advertising delivers 97% brand recall and 3x higher engagement than digital ads. Essential strategies for Miami, Fort Lauderdale, and Palm Beach businesses.',
    image: '/images/1-1.png',
    category: 'Marketing Strategy',
    date: 'October 18, 2025',
    readTime: '7 min read',
    tags: ['Hyperlocal Marketing', 'ROI', 'Digital vs Traditional'],
    featured: false,
    slug: 'hyperlocal-advertising-mobile-billboards-2025',
  },
  {
    id: 3,
    title: 'Hispanic Heritage Month & Q4 Planning: Mobile Billboard Strategy for South Florida Success',
    excerpt: 'Learn how mobile LED billboard trucks amplify Hispanic Heritage Month campaigns while kickstarting Q4 holiday advertising in Miami, Fort Lauderdale, and West Palm Beach.',
    image: '/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg',
    category: 'Multicultural Marketing',
    date: 'September 16, 2025',
    readTime: '8 min read',
    tags: ['Hispanic Heritage', 'Q4 Strategy', 'Mobile Advertising'],
    featured: false,
    slug: 'hispanic-heritage-month-q4-mobile-advertising-strategy',
  },
  {
    id: 3,
    title: 'Labor Day 2025: Your Last Chance to Capture South Florida\'s $2.1 Billion Shopping Weekend',
    excerpt: 'Discover how mobile billboard trucks can help your business capture a share of the $2.1 billion Labor Day shopping weekend in Miami-Dade, Broward, and Palm Beach counties.',
    image: '/images/1-1.png',
    category: 'Holiday Marketing',
    date: 'September 1, 2025',
    readTime: '5 min read',
    tags: ['Labor Day', 'Holiday Marketing', 'Mobile Advertising'],
    featured: false,
    slug: 'labor-day-2025-mobile-billboard-opportunity',
  },
  {
    id: 4,
    title: 'Top 15 Labor Day Events in Miami-Dade & Broward',
    excerpt: 'Strategic guide to Labor Day 2025 events where mobile billboards deliver maximum impact. From Fort Lauderdale Festival to Lady Gaga at Kaseya Center.',
    image: '/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg',
    category: 'Event Marketing',
    date: 'September 1, 2025',
    readTime: '7 min read',
    tags: ['Labor Day', 'Events', 'South Florida'],
    featured: false,
    slug: 'top-15-labor-day-events-miami-broward-2025',
  },
  {
    id: 5,
    title: 'Mobile LED Trucks vs Static Billboards: Labor Day Marketing Emergency',
    excerpt: 'Why mobile LED billboard trucks deliver 3x better ROI than static billboards for Labor Day 2025 campaigns. Real-time flexibility and guaranteed impressions.',
    image: '/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg',
    category: 'Industry Comparison',
    date: 'September 1, 2025',
    readTime: '6 min read',
    tags: ['Mobile vs Static', 'ROI', 'Labor Day'],
    featured: false,
    slug: 'labor-day-mobile-led-trucks-vs-static-billboards',
  },
  {
    id: 6,
    title: 'The Power of Mobile Billboard Advertising in 2024',
    excerpt: 'Discover why mobile billboard advertising is becoming the preferred choice for businesses looking to maximize their advertising ROI in Palm Beach County.',
    image: '/images/1-1.png',
    category: 'Industry Insights',
    date: 'January 15, 2024',
    readTime: '5 min read',
    tags: ['Mobile Advertising', 'ROI', 'Marketing Strategy'],
    featured: false,
    slug: 'power-of-mobile-billboard-advertising',
  },
  {
    id: 7,
    title: '5 Ways GPS Tracking Revolutionizes Outdoor Advertising',
    excerpt: 'Learn how real-time GPS tracking technology is transforming the way businesses measure and optimize their outdoor advertising campaigns.',
    image: '/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg',
    category: 'Technology',
    date: 'January 10, 2024',
    readTime: '4 min read',
    tags: ['GPS Tracking', 'Technology', 'Analytics'],
    featured: false,
    slug: 'gps-tracking-revolutionizes-outdoor-advertising',
  },
  {
    id: 8,
    title: 'Case Study: Restaurant Grand Opening Success Story',
    excerpt: 'How Bella Vista Restaurant achieved an 85% increase in foot traffic during their grand opening week using mobile billboard advertising.',
    image: '/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg',
    category: 'Case Studies',
    date: 'January 5, 2024',
    readTime: '6 min read',
    tags: ['Case Study', 'Restaurant', 'Success Story'],
    featured: false,
    slug: 'restaurant-grand-opening-success-story',
  },
  {
    id: 9,
    title: 'Maximizing Your Advertising Budget in Palm Beach County',
    excerpt: 'Smart strategies for local businesses to get the most out of their advertising dollars with targeted mobile billboard campaigns.',
    image: '/images/1-1.png',
    category: 'Tips & Strategy',
    date: 'December 28, 2023',
    readTime: '7 min read',
    tags: ['Budget', 'Local Marketing', 'Strategy'],
    featured: false,
    slug: 'maximizing-advertising-budget-palm-beach',
  },
  {
    id: 10,
    title: 'LED vs Traditional Billboards: What Works Better?',
    excerpt: 'A comprehensive comparison of LED mobile billboards versus traditional static billboards for modern advertising needs.',
    image: '/images/c92cdb19-f55b-4212-b177-31c8340cfe8c-2.jpeg',
    category: 'Technology',
    date: 'December 20, 2023',
    readTime: '5 min read',
    tags: ['LED Display', 'Comparison', 'Technology'],
    featured: false,
    slug: 'led-vs-traditional-billboards',
  },
  {
    id: 11,
    title: 'Seasonal Advertising: Best Times to Launch Your Campaign',
    excerpt: 'Discover the optimal times throughout the year to launch your mobile billboard campaign for maximum impact and engagement.',
    image: '/images/1-1.png',
    category: 'Tips & Strategy',
    date: 'December 15, 2023',
    readTime: '4 min read',
    tags: ['Seasonal', 'Planning', 'Strategy'],
    featured: false,
    slug: 'seasonal-advertising-best-times',
  },
]

const categories = [
  { name: 'All Posts', count: blogPosts.length, icon: TrendingUp },
  { name: 'Analytics & ROI', count: 1, icon: TrendingUp },
  { name: 'Marketing Strategy', count: 1, icon: Target },
  { name: 'Multicultural Marketing', count: 1, icon: Lightbulb },
  { name: 'Holiday Marketing', count: 1, icon: Lightbulb },
  { name: 'Event Marketing', count: 1, icon: Target },
  { name: 'Industry Comparison', count: 1, icon: TrendingUp },
  { name: 'Industry Insights', count: 1, icon: Lightbulb },
  { name: 'Technology', count: 2, icon: Target },
  { name: 'Case Studies', count: 1, icon: TrendingUp },
  { name: 'Tips & Strategy', count: 2, icon: Target },
]

export default function BlogPage() {
  return (
    <>
            <main>
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20">
          <div className="absolute inset-0 bg-[url('/images/1-1.png')] bg-cover bg-center opacity-10"></div>
          <div className="container relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-white mb-6">
                Maximax <span className="gradient-text-premium">Blog</span>
              </h1>
              <p className="text-xl text-gray-300">
                Insights, tips, and success stories from the world of mobile billboard 
                advertising. Stay updated with the latest trends in outdoor marketing.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="section section-padding-sm bg-white">
          <div className="container">
            {blogPosts.filter(post => post.featured).map(post => (
              <div key={post.id} className="bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-2xl p-1">
                <div className="bg-white rounded-2xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center gap-4 mb-4">
                        <span className="badge-primary">Featured Post</span>
                        <span className="text-sm text-gray-500">{post.category}</span>
                      </div>
                      <Link href={`/blog/${post.slug || ''}`}>
                        <h2 className="mb-4 text-2xl font-bold hover:text-maximax-pink transition-colors cursor-pointer">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-lg text-gray-600 mb-6">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                      <Link href={`/blog/${post.slug || ''}`} className="inline-flex items-center gap-2 text-maximax-pink font-semibold hover:text-maximax-cyan transition-colors">
                        Read Full Article
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                    <div className="relative h-64 lg:h-80 rounded-xl overflow-hidden">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Blog Grid with Sidebar */}
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  {/* Categories */}
                  <div className="bg-white rounded-xl p-6 mb-6">
                    <h3 className="font-bold mb-4">Categories</h3>
                    <div className="space-y-3">
                      {categories.map((category) => {
                        const Icon = category.icon
                        return (
                          <button
                            key={category.name}
                            className="flex items-center justify-between w-full p-2 rounded-lg hover:bg-gray-50 transition-colors"
                          >
                            <div className="flex items-center gap-2">
                              <Icon className="w-4 h-4 text-maximax-pink" />
                              <span className="text-sm font-medium">{category.name}</span>
                            </div>
                            <span className="text-xs bg-maximax-pink/10 text-maximax-pink px-2 py-1 rounded-full">
                              {category.count}
                            </span>
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-xl p-6 text-white">
                    <h3 className="font-bold mb-2 text-white">Stay Updated</h3>
                    <p className="text-sm mb-4 text-white/90">
                      Get the latest mobile advertising tips and insights delivered to your inbox.
                    </p>
                    <input
                      type="email"
                      placeholder="Your email"
                      className="w-full px-3 py-2 rounded-lg text-gray-900 text-sm mb-3"
                    />
                    <button className="w-full bg-white text-maximax-pink px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>

              {/* Blog Posts Grid */}
              <div className="lg:col-span-3">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts.filter(post => !post.featured).map((post, index) => (
                    <Link href={`/blog/${post.slug || ''}`} key={post.id}>
                      <article
                        className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all animate-slide-up cursor-pointer"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                      <div className="relative h-48">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold">
                            {post.category}
                          </span>
                        </div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="font-bold mb-2 hover:text-maximax-pink transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm line-clamp-2">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-xs text-gray-500">
                            <div className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {post.readTime}
                            </div>
                          </div>
                          <span className="text-maximax-pink">
                            <ArrowRight className="w-5 h-5" />
                          </span>
                        </div>
                      </div>
                      </article>
                    </Link>
                  ))}
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-2xl p-8 lg:p-12 text-center text-white">
              <h2 className="text-white mb-4">
                Ready to Start Your Campaign?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Join hundreds of successful businesses using mobile billboard advertising 
                to reach their target audience in Palm Beach County.
              </p>
              <a
                href="tel:5617200521"
                className="inline-flex items-center justify-center gap-2 bg-white text-maximax-pink px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
              >
                Get Started Today
              </a>
            </div>
          </div>
        </section>
      </main>
                </>
  )
}