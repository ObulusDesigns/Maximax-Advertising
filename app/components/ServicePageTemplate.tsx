import Image from 'next/image'
import Link from 'next/link'
import { 
  Phone, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Clock, 
  DollarSign, 
  Target, 
  TrendingUp,
  Star,
  Shield,
  Zap,
  BarChart3,
  MapPin,
  Calendar,
  Play,
  ChevronDown,
  Award,
  MessageCircle
} from 'lucide-react'

// Service Feature Interface
interface ServiceFeature {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
}

// Service Benefit Interface
interface ServiceBenefit {
  title: string
  description: string
  metric?: string
}

// Process Step Interface
interface ProcessStep {
  step: number
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
}

// Pricing Option Interface
interface PricingOption {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  customQuote?: boolean
}

// FAQ Interface
interface ServiceFAQ {
  question: string
  answer: string
}

// Related Service Interface
interface RelatedService {
  title: string
  description: string
  href: string
  icon: React.ComponentType<{ className?: string }>
}

// Testimonial Interface
interface ServiceTestimonial {
  name: string
  company: string
  role?: string
  content: string
  rating: number
}

// Schema Markup Interface
interface ServiceSchema {
  name: string
  description: string
  provider: {
    name: string
    url: string
  }
  areaServed: string[]
  serviceType: string
  priceRange?: string
}

// Main Props Interface
interface ServicePageTemplateProps {
  // Hero Section
  serviceName: string
  tagline: string
  description: string
  heroImage?: string
  heroVideo?: string
  
  // Service Details
  features: ServiceFeature[]
  benefits: ServiceBenefit[]
  
  // Process/How it Works
  process: ProcessStep[]
  
  // Pricing
  pricing?: PricingOption[]
  startingPrice?: string
  customPricing?: boolean
  
  // Social Proof
  testimonials?: ServiceTestimonial[]
  stats?: {
    clientsSatisfied: string
    averageROI: string
    campaignsCompleted: string
    yearEstablished: string
  }
  
  // FAQ
  faqs: ServiceFAQ[]
  
  // Related Services
  relatedServices?: RelatedService[]
  
  // Schema/SEO
  schema?: ServiceSchema
  
  // CTA Customization
  primaryCTA?: string
  secondaryCTA?: string
  phone?: string
  
  // Service Specific
  serviceType?: 'advertising' | 'marketing' | 'digital' | 'mobile' | 'event'
  industries?: string[]
  locations?: string[]
}

export function ServicePageTemplate({
  serviceName,
  tagline,
  description,
  heroImage,
  heroVideo,
  features,
  benefits,
  process,
  pricing,
  startingPrice,
  customPricing = false,
  testimonials,
  stats,
  faqs,
  relatedServices,
  schema,
  primaryCTA = "Get Free Quote",
  secondaryCTA = "Schedule Consultation",
  phone = "5617200521",
  serviceType = 'advertising',
  industries,
  locations
}: ServicePageTemplateProps) {
  // Schema markup for SEO
  const schemaMarkup = schema ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": schema.name,
    "description": schema.description,
    "provider": {
      "@type": "Organization",
      "name": schema.provider.name,
      "url": schema.provider.url
    },
    "areaServed": schema.areaServed.map(area => ({
      "@type": "Place",
      "name": area
    })),
    "serviceType": schema.serviceType,
    "priceRange": schema.priceRange
  } : null

  return (
    <>
      {/* Schema Markup */}
      {schemaMarkup && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />
      )}

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-maximax-black via-gray-900 to-maximax-black py-20 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-maximax-pink/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-maximax-cyan/10 rounded-full blur-3xl animate-float animation-delay-400" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-maximax-pink/5 to-maximax-cyan/5 rounded-full blur-2xl" />
        </div>

        <div className="container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-maximax-cyan" />
                <span className="text-maximax-cyan font-semibold uppercase text-sm tracking-wide">
                  {serviceType} Solutions
                </span>
              </div>
              
              <h1 className="text-white mb-6 animate-slide-up">
                {serviceName}
              </h1>
              
              <p className="text-xl text-gray-300 mb-4 animate-slide-up animation-delay-200">
                {tagline}
              </p>
              
              <p className="text-lg text-gray-400 mb-8 animate-slide-up animation-delay-400">
                {description}
              </p>

              {/* Hero Stats */}
              {stats && (
                <div className="grid grid-cols-2 gap-4 mb-8 animate-slide-up animation-delay-600">
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-maximax-pink mb-1">{stats.clientsSatisfied}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Clients Satisfied</div>
                  </div>
                  <div className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10">
                    <div className="text-2xl font-bold text-maximax-cyan mb-1">{stats.averageROI}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wide">Average ROI</div>
                  </div>
                </div>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-slide-up animation-delay-800">
                <a href={`tel:${phone}`} className="btn-primary btn-lg">
                  <Phone className="w-5 h-5" />
                  {primaryCTA}
                </a>
                <Link href="/contact" className="btn-accent btn-lg">
                  <Calendar className="w-5 h-5" />
                  {secondaryCTA}
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex items-center gap-6 mt-8 pt-6 border-t border-white/10 animate-slide-up animation-delay-1000">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4 text-maximax-cyan" />
                  Fully Insured
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Award className="w-4 h-4 text-maximax-pink" />
                  Licensed & Bonded
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Star className="w-4 h-4 text-yellow-400" />
                  5-Star Rated
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              {heroVideo ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-maximax-pink/20 to-maximax-cyan/20 z-10" />
                  <button className="absolute inset-0 z-20 flex items-center justify-center group">
                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </button>
                  <div className="absolute inset-0 bg-gray-800" />
                </div>
              ) : heroImage ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={heroImage}
                    alt={serviceName}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-maximax-pink/10 to-maximax-cyan/10" />
                </div>
              ) : (
                <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-maximax-pink/20 to-maximax-cyan/20 flex items-center justify-center">
                  <div className="text-6xl text-white/20">
                    <Target className="w-24 h-24" />
                  </div>
                </div>
              )}

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-maximax-pink/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float">
                <Zap className="w-8 h-8 text-maximax-pink" />
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-maximax-cyan/20 backdrop-blur-sm rounded-full flex items-center justify-center animate-float animation-delay-600">
                <Star className="w-6 h-6 text-maximax-cyan" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Stats Bar */}
      {stats && (
        <section className="section py-12 bg-white border-b">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">{stats.campaignsCompleted}</div>
                <div className="text-sm text-gray-600">Campaigns Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-cyan mb-2">{stats.clientsSatisfied}</div>
                <div className="text-sm text-gray-600">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-pink mb-2">{stats.averageROI}</div>
                <div className="text-sm text-gray-600">Average ROI</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-maximax-cyan mb-2">{stats.yearEstablished}</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Features Section */}
      <section className="section section-padding bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6">
              What Makes Our <span className="gradient-text">{serviceName}</span> Different
            </h2>
            <p className="text-lg text-gray-600">
              Discover the unique features and capabilities that set our {serviceName.toLowerCase()} apart from the competition.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon
              return (
                <div 
                  key={index} 
                  className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-maximax-pink/10 to-maximax-cyan/10 rounded-xl flex items-center justify-center mb-4">
                    <IconComponent className="w-7 h-7 text-maximax-pink" />
                  </div>
                  <h3 className="font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Benefits Content */}
            <div>
              <h2 className="mb-6">
                Key Benefits of Our <span className="gradient-text-cyan">{serviceName}</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Experience measurable results and competitive advantages that drive your business forward.
              </p>

              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <CheckCircle className="w-6 h-6 text-maximax-cyan" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                      {benefit.metric && (
                        <div className="text-sm text-maximax-pink font-semibold mt-2">
                          {benefit.metric}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits Visual */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {benefits.slice(0, 4).map((benefit, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl border border-gray-100">
                    <div className="text-2xl font-bold text-maximax-pink mb-2">
                      {benefit.metric || `${index + 1}x`}
                    </div>
                    <div className="text-sm font-medium text-gray-900">{benefit.title}</div>
                  </div>
                ))}
              </div>

              {/* Background decoration */}
              <div className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-br from-maximax-cyan/10 to-maximax-pink/10 rounded-full blur-xl" />
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-br from-maximax-pink/10 to-maximax-cyan/10 rounded-full blur-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / Process Section */}
      <section className="section section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="mb-6">
              How Our <span className="gradient-text">{serviceName}</span> Process Works
            </h2>
            <p className="text-lg text-gray-600">
              Our proven step-by-step process ensures your success from consultation to campaign completion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div key={index} className="text-center relative">
                  {/* Connection Line */}
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-maximax-pink/30 to-maximax-cyan/30 z-0" />
                  )}
                  
                  {/* Step Content */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-maximax-pink to-maximax-cyan rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg shadow-lg">
                      <IconComponent className="w-8 h-8" />
                    </div>
                    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                      <h3 className="font-bold mb-2 text-gray-900">
                        Step {step.step}: {step.title}
                      </h3>
                      <p className="text-sm text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      {(pricing || startingPrice || customPricing) && (
        <section className="section section-padding bg-white">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-6">
                Transparent <span className="gradient-text-cyan">Pricing</span> for Every Business
              </h2>
              <p className="text-lg text-gray-600">
                Choose the plan that fits your budget and campaign goals. No hidden fees, no long-term contracts.
              </p>
            </div>

            {pricing ? (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {pricing.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-white rounded-2xl border-2 p-8 ${
                      plan.popular 
                        ? 'border-maximax-pink shadow-lg scale-105 bg-gradient-to-br from-white to-maximax-pink/5' 
                        : 'border-gray-200 hover:border-maximax-cyan/30'
                    } transition-all duration-300 hover:shadow-lg`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-maximax-pink to-maximax-cyan text-white px-4 py-1 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="text-center mb-6">
                      <h3 className="font-bold text-xl text-gray-900 mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-maximax-pink mb-2">
                        {plan.customQuote ? 'Custom' : plan.price}
                        {!plan.customQuote && <span className="text-lg text-gray-500">/day</span>}
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-maximax-cyan flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="text-center">
                      <a 
                        href={plan.customQuote ? "/contact" : `tel:${phone}`} 
                        className={`btn btn-lg w-full ${
                          plan.popular ? 'btn-primary' : 'btn-accent'
                        }`}
                      >
                        {plan.customQuote ? 'Get Custom Quote' : 'Get Started'}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="max-w-2xl mx-auto">
                <div className="bg-gradient-to-r from-maximax-pink to-maximax-cyan rounded-2xl p-8 text-center text-white">
                  <h3 className="text-2xl font-bold mb-4">
                    {customPricing ? 'Custom Pricing Available' : `Starting at ${startingPrice}`}
                  </h3>
                  <p className="text-lg mb-6 text-white/90">
                    {customPricing 
                      ? 'Every business is unique. Get a personalized quote tailored to your specific needs and goals.'
                      : 'Flexible pricing options with no long-term contracts. Campaign costs vary based on duration, routes, and targeting requirements.'
                    }
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href={`tel:${phone}`} className="btn bg-white text-maximax-pink btn-lg hover:bg-gray-100">
                      <Phone className="w-5 h-5" />
                      Call for Quote
                    </a>
                    <Link href="/contact" className="btn bg-white/20 text-white border-white/30 btn-lg hover:bg-white/30">
                      Get Free Consultation
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-6">
                What Our <span className="gradient-text">Clients Say</span>
              </h2>
              <p className="text-lg text-gray-600">
                Don't just take our word for it. Hear from satisfied clients who've experienced real results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-maximax-pink/20 to-maximax-cyan/20 rounded-full flex items-center justify-center">
                      <Users className="w-6 h-6 text-maximax-pink" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role && `${testimonial.role}, `}{testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="section section-padding bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="mb-6">
                Frequently Asked <span className="gradient-text-cyan">Questions</span>
              </h2>
              <p className="text-lg text-gray-600">
                Get answers to common questions about our {serviceName.toLowerCase()}.
              </p>
            </div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl p-6 bg-white hover:shadow-sm transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-maximax-cyan/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-4 h-4 text-maximax-cyan" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold mb-3 text-gray-900 pr-8">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact for More Questions */}
            <div className="text-center mt-12">
              <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={`tel:${phone}`} className="btn-accent btn-lg">
                  <Phone className="w-5 h-5" />
                  Call ({phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')})
                </a>
                <Link href="/contact" className="btn-secondary btn-lg">
                  Send Message
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices && relatedServices.length > 0 && (
        <section className="section section-padding bg-gray-50">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="mb-6">
                Related <span className="gradient-text">Services</span>
              </h2>
              <p className="text-lg text-gray-600">
                Explore our other services that can complement your {serviceName.toLowerCase()} campaign.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {relatedServices.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <Link key={index} href={service.href} className="group">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group-hover:border-maximax-cyan/30">
                      <div className="w-12 h-12 bg-gradient-to-br from-maximax-pink/10 to-maximax-cyan/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-6 h-6 text-maximax-pink" />
                      </div>
                      <h3 className="font-bold mb-3 text-gray-900 group-hover:text-maximax-cyan transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      <div className="flex items-center gap-2 text-maximax-cyan text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA Section */}
      <section className="section section-padding bg-gradient-to-r from-maximax-pink to-maximax-cyan">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-white mb-6">
              Ready to Get Started with {serviceName}?
            </h2>
            <p className="text-xl mb-8 text-white/90">
              Join hundreds of successful businesses who trust Maximax Advertising for their marketing needs. 
              Get your campaign started today with a free consultation.
            </p>

            {/* Final Stats */}
            {stats && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{stats.campaignsCompleted}</div>
                  <div className="text-sm text-white/80">Successful Campaigns</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">{stats.averageROI}</div>
                  <div className="text-sm text-white/80">Average ROI</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">48hrs</div>
                  <div className="text-sm text-white/80">Campaign Start Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-sm text-white/80">Satisfaction Rate</div>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href={`tel:${phone}`} 
                className="inline-flex items-center justify-center gap-2 bg-white text-maximax-pink px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all shadow-xl"
              >
                <Phone className="w-5 h-5" />
                Call ({phone.replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')})
              </a>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white border-2 border-white/30 px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/30 transform hover:scale-105 transition-all"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            {/* Trust Elements */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4" />
                No Long-Term Contracts
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                Fully Licensed & Insured
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Campaign Starts in 48 Hours
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}