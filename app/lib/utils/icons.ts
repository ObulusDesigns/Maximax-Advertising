import React from 'react'
import {
  Truck,
  MapPin,
  Clock,
  Shield,
  BarChart3,
  Eye,
  Zap,
  Target,
  Star,
  TrendingUp,
  Calendar,
  Phone,
  Gauge,
  Navigation,
  Users,
  DollarSign,
  CheckCircle,
  Award,
  MessageCircle,
  Map,
  Palette,
  Rocket,
  LucideIcon
} from 'lucide-react'

// Map of icon names to their components
const iconMap: Record<string, LucideIcon> = {
  Truck,
  MapPin,
  Clock,
  Shield,
  BarChart3,
  Eye,
  Zap,
  Target,
  Star,
  TrendingUp,
  Calendar,
  Phone,
  Gauge,
  Navigation,
  Users,
  DollarSign,
  CheckCircle,
  Award,
  MessageCircle,
  Map,
  Palette,
  Rocket,
}

// Get icon component by name
export function getIconComponent(iconName: string): LucideIcon {
  return iconMap[iconName] || Star // Default to Star if icon not found
}

// Transform service data to match template props
export function transformServiceData(service: any) {
  return {
    ...service,
    features: service.features?.map((feature: any) => ({
      ...feature,
      icon: getIconComponent(feature.icon)
    })) || [],
    process: service.process?.map((step: any) => ({
      ...step,
      icon: getIconComponent(step.icon)
    })) || [],
  }
}

// Transform market data to match template props (if needed)
export function transformMarketData(market: any) {
  return {
    ...market,
    // Add any necessary transformations for market data
  }
}