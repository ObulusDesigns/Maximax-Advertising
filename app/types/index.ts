// Core Type Definitions for Maximax Advertising

// ============================================================
// Location Types
// ============================================================

export interface LocationData {
  city: string
  slug: string
  county: string
  state: string
  population: string
  description: string
  landmarks: string[]
  popularRoutes: string[]
  events: LocationEvent[]
  stats: LocationStats
  coordinates: Coordinates
}

export interface LocationEvent {
  name: string
  date: string
  location: string
}

export interface LocationStats {
  dailyImpressions: string
  coverage: string
  businessesServed: string
}

export interface Coordinates {
  lat: number
  lng: number
}

// ============================================================
// Market/Industry Types
// ============================================================

export interface MarketData {
  industry: string
  slug: string
  tagline: string
  description: string
  painPoints: string[]
  solutions: MarketSolution[]
  benefits: string[]
  stats: MarketStats
  caseStudy?: MarketCaseStudy
  faqs: FAQ[]
  relatedMarkets?: string[]
  keywords?: string[]
  icon?: string
}

export interface MarketSolution {
  title: string
  description: string
}

export interface MarketStats {
  roi: string
  reach: string
  engagement: string
}

export interface MarketCaseStudy {
  title: string
  result: string
  metric: string
}

// ============================================================
// Service Types
// ============================================================

export interface ServiceData {
  serviceName: string
  slug: string
  tagline: string
  description: string
  heroImage?: string
  heroVideo?: string
  features: ServiceFeature[]
  benefits: ServiceBenefit[]
  process: ProcessStep[]
  pricing: PricingOption[]
  faqs: FAQ[]
  relatedServices: RelatedService[]
  testimonials: ServiceTestimonial[]
  schema?: ServiceSchema
  cta?: ServiceCTA
  stats?: ServiceStats
  keywords?: string[]
}

export interface ServiceFeature {
  icon: string // Icon name or component reference
  title: string
  description: string
}

export interface ServiceBenefit {
  title: string
  description: string
  metric?: string
}

export interface ProcessStep {
  step: number
  title: string
  description: string
  icon: string
}

export interface PricingOption {
  name: string
  price: string
  description: string
  features: string[]
  popular?: boolean
  customQuote?: boolean
}

export interface RelatedService {
  title: string
  description: string
  href: string
  icon: string
}

export interface ServiceTestimonial {
  name: string
  company: string
  role?: string
  content: string
  rating: number
  image?: string
}

export interface ServiceSchema {
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

export interface ServiceCTA {
  primary: {
    text: string
    href: string
    isExternal?: boolean
  }
  secondary?: {
    text: string
    href: string
    isExternal?: boolean
  }
}

export interface ServiceStats {
  coverage?: string
  impressions?: string
  screenSize?: string
  trackingAccuracy?: string
  availability?: string
}

// ============================================================
// Common Types
// ============================================================

export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  id?: string
  name: string
  company: string
  role?: string
  content: string
  rating?: number
  image?: string
  location?: string
  service?: string
  date?: string
}

export interface CTASection {
  title: string
  subtitle?: string
  description?: string
  primaryButton: {
    text: string
    href: string
    isExternal?: boolean
  }
  secondaryButton?: {
    text: string
    href: string
    isExternal?: boolean
  }
}

// ============================================================
// Component Props Types
// ============================================================

export interface MarketPageProps {
  market: MarketData
}

export interface ServicePageProps {
  service: ServiceData
}

export interface LocationPageProps {
  location: LocationData
  nearbyLocations?: LocationData[]
}

// ============================================================
// SEO & Metadata Types
// ============================================================

export interface SEOMetadata {
  title: string
  description: string
  keywords?: string[]
  ogImage?: string
  canonicalUrl?: string
  noIndex?: boolean
  schemaMarkup?: any
}

export interface BreadcrumbItem {
  name: string
  href: string
}

// ============================================================
// Navigation Types
// ============================================================

export interface NavigationItem {
  name: string
  href: string
  children?: NavigationItem[]
  isExternal?: boolean
  icon?: string
}

// ============================================================
// Contact & Forms Types
// ============================================================

export interface ContactInfo {
  phone: string
  email?: string
  address?: {
    street?: string
    city: string
    state: string
    zip: string
  }
  hours?: {
    weekdays?: string
    saturday?: string
    sunday?: string
  }
}

export interface FormSubmission {
  name: string
  email: string
  phone?: string
  company?: string
  message: string
  service?: string
  market?: string
  location?: string
  budget?: string
  timeline?: string
}

// ============================================================
// Blog & Content Types
// ============================================================

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  content: string
  author: string
  publishedAt: string
  updatedAt?: string
  category: string
  tags: string[]
  featuredImage?: string
  readTime?: string
}

// ============================================================
// Analytics & Tracking Types
// ============================================================

export interface CampaignMetrics {
  impressions: number
  reach: number
  frequency: number
  engagement: number
  conversions?: number
  roi?: number
}

export interface RouteData {
  date: string
  startTime: string
  endTime: string
  route: string[]
  impressions: number
  distance: number
}

// ============================================================
// Utility Types
// ============================================================

export type ChangeFrequency = 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'

export interface SitemapEntry {
  url: string
  lastModified?: string | Date
  changeFrequency?: ChangeFrequency
  priority?: number
}

export interface ImageAsset {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
}

// ============================================================
// Constants & Enums
// ============================================================

export enum County {
  MIAMI_DADE = 'Miami-Dade County',
  BROWARD = 'Broward County',
  PALM_BEACH = 'Palm Beach County',
  ORANGE = 'Orange County',
  OSCEOLA = 'Osceola County'
}

export enum ServiceType {
  MOBILE_BILLBOARD = 'mobile-billboard-trucks',
  LED_DISPLAYS = 'led-digital-displays',
  GPS_TRACKING = 'gps-tracking',
  FOUR_K_SCREENS = '4k-screens',
  CAMPAIGN_MANAGEMENT = 'campaign-management',
  COVERAGE_AREAS = 'coverage-areas'
}

export enum MarketCategory {
  HEALTHCARE = 'healthcare',
  LEGAL = 'legal',
  CONSTRUCTION = 'construction',
  REAL_ESTATE = 'real-estate',
  RETAIL = 'retail',
  EVENTS = 'events',
  RESTAURANTS = 'restaurants',
  ENTERTAINMENT = 'entertainment'
}

// ============================================================
// Type Guards
// ============================================================

export function isLocationData(data: any): data is LocationData {
  return (
    typeof data === 'object' &&
    typeof data.city === 'string' &&
    typeof data.slug === 'string' &&
    typeof data.county === 'string' &&
    Array.isArray(data.landmarks) &&
    Array.isArray(data.popularRoutes)
  )
}

export function isMarketData(data: any): data is MarketData {
  return (
    typeof data === 'object' &&
    typeof data.industry === 'string' &&
    typeof data.slug === 'string' &&
    Array.isArray(data.painPoints) &&
    Array.isArray(data.solutions)
  )
}

export function isServiceData(data: any): data is ServiceData {
  return (
    typeof data === 'object' &&
    typeof data.serviceName === 'string' &&
    typeof data.slug === 'string' &&
    Array.isArray(data.features) &&
    Array.isArray(data.benefits)
  )
}