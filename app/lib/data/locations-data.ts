// Locations Data for Cross-Linking
import { LocationData, County } from '@/app/types'

// Re-export County for convenience
export { County } from '@/app/types'

export interface LocationInfo {
  city: string
  slug: string
  county: County
  population: string
  isCountyHub?: boolean
  isPrimary?: boolean // Primary markets
  isSecondary?: boolean // Secondary markets
  coordinates: {
    lat: number
    lng: number
  }
}

export const locations: LocationInfo[] = [
  // Miami-Dade County
  {
    city: 'Miami',
    slug: 'miami',
    county: County.MIAMI_DADE,
    population: '442,241',
    isPrimary: true,
    coordinates: { lat: 25.7617, lng: -80.1918 }
  },
  {
    city: 'Miami Beach',
    slug: 'miami-beach-mobile-billboards',
    county: County.MIAMI_DADE,
    population: '82,890',
    isPrimary: true,
    coordinates: { lat: 25.7907, lng: -80.1300 }
  },
  {
    city: 'Coral Gables',
    slug: 'coral-gables-mobile-advertising',
    county: County.MIAMI_DADE,
    population: '49,700',
    isPrimary: true,
    coordinates: { lat: 25.7218, lng: -80.2683 }
  },
  {
    city: 'Aventura',
    slug: 'aventura-billboard-trucks',
    county: County.MIAMI_DADE,
    population: '40,242',
    isPrimary: true,
    coordinates: { lat: 25.9564, lng: -80.1392 }
  },
  {
    city: 'Key Biscayne',
    slug: 'key-biscayne-billboard-trucks',
    county: County.MIAMI_DADE,
    population: '14,809',
    isPrimary: true,
    coordinates: { lat: 25.6939, lng: -80.1614 }
  },
  {
    city: 'Pinecrest',
    slug: 'pinecrest-mobile-advertising',
    county: County.MIAMI_DADE,
    population: '18,388',
    isPrimary: true,
    coordinates: { lat: 25.6670, lng: -80.3081 }
  },
  {
    city: 'Bal Harbour',
    slug: 'bal-harbour-mobile-billboards',
    county: County.MIAMI_DADE,
    population: '3,093',
    isPrimary: true,
    coordinates: { lat: 25.8884, lng: -80.1270 }
  },
  {
    city: 'Fisher Island',
    slug: 'fisher-island-advertising',
    county: County.MIAMI_DADE,
    population: '484',
    isPrimary: true,
    coordinates: { lat: 25.7614, lng: -80.1436 }
  },
  {
    city: 'Golden Beach',
    slug: 'golden-beach-mobile-advertising',
    county: County.MIAMI_DADE,
    population: '961',
    isPrimary: true,
    coordinates: { lat: 25.9650, lng: -80.1225 }
  },
  {
    city: 'Kendall',
    slug: 'kendall-outdoor-advertising',
    county: County.MIAMI_DADE,
    population: '75,000',
    isSecondary: true,
    coordinates: { lat: 25.6795, lng: -80.3164 }
  },
  {
    city: 'Homestead',
    slug: 'homestead-mobile-billboards',
    county: County.MIAMI_DADE,
    population: '80,737',
    isSecondary: true,
    coordinates: { lat: 25.4687, lng: -80.4776 }
  },
  {
    city: 'Cutler Bay',
    slug: 'cutler-bay-mobile-billboards',
    county: County.MIAMI_DADE,
    population: '45,425',
    isSecondary: true,
    coordinates: { lat: 25.5808, lng: -80.3468 }
  },
  {
    city: 'Palmetto Bay',
    slug: 'palmetto-bay-mobile-billboards',
    county: County.MIAMI_DADE,
    population: '24,308',
    isSecondary: true,
    coordinates: { lat: 25.6217, lng: -80.3245 }
  },
  {
    city: 'Miami Gardens',
    slug: 'miami-gardens-mobile-billboards',
    county: County.MIAMI_DADE,
    population: '111,640',
    isSecondary: true,
    coordinates: { lat: 25.9420, lng: -80.2456 }
  },
  {
    city: 'North Miami',
    slug: 'north-miami-billboard-advertising',
    county: County.MIAMI_DADE,
    population: '60,191',
    isSecondary: true,
    coordinates: { lat: 25.8900, lng: -80.1867 }
  },
  {
    city: 'North Miami Beach',
    slug: 'north-miami-beach-mobile-advertising',
    county: County.MIAMI_DADE,
    population: '43,676',
    isSecondary: true,
    coordinates: { lat: 25.9331, lng: -80.1625 }
  },
  {
    city: 'Miami Shores',
    slug: 'miami-shores-mobile-billboards',
    county: County.MIAMI_DADE,
    population: '10,493',
    isSecondary: true,
    coordinates: { lat: 25.8631, lng: -80.1928 }
  },
  {
    city: 'Miami Springs',
    slug: 'miami-springs-billboard-advertising',
    county: County.MIAMI_DADE,
    population: '13,859',
    isSecondary: true,
    coordinates: { lat: 25.8223, lng: -80.2897 }
  },

  // Broward County
  {
    city: 'Fort Lauderdale',
    slug: 'fort-lauderdale-mobile-billboards',
    county: County.BROWARD,
    population: '182,760',
    isPrimary: true,
    coordinates: { lat: 26.1224, lng: -80.1373 }
  },
  {
    city: 'Hollywood',
    slug: 'hollywood-fl-billboard-trucks',
    county: County.BROWARD,
    population: '154,817',
    isSecondary: true,
    coordinates: { lat: 26.0112, lng: -80.1495 }
  },
  {
    city: 'Pembroke Pines',
    slug: 'pembroke-pines-advertising',
    county: County.BROWARD,
    population: '173,591',
    isSecondary: true,
    coordinates: { lat: 26.0030, lng: -80.2239 }
  },
  {
    city: 'Miramar',
    slug: 'miramar-billboard-trucks',
    county: County.BROWARD,
    population: '134,721',
    isSecondary: true,
    coordinates: { lat: 25.9860, lng: -80.3035 }
  },
  {
    city: 'Coral Springs',
    slug: 'coral-springs-mobile-billboards',
    county: County.BROWARD,
    population: '134,394',
    isSecondary: true,
    coordinates: { lat: 26.2708, lng: -80.2593 }
  },
  {
    city: 'Plantation',
    slug: 'plantation-mobile-billboards',
    county: County.BROWARD,
    population: '94,580',
    isSecondary: true,
    coordinates: { lat: 26.1276, lng: -80.2331 }
  },
  {
    city: 'Davie',
    slug: 'davie-billboard-advertising',
    county: County.BROWARD,
    population: '106,691',
    isSecondary: true,
    coordinates: { lat: 26.0628, lng: -80.2405 }
  },
  {
    city: 'Weston',
    slug: 'weston-billboard-advertising',
    county: County.BROWARD,
    population: '68,107',
    isPrimary: true,
    coordinates: { lat: 26.1003, lng: -80.3997 }
  },
  {
    city: 'Parkland',
    slug: 'parkland-mobile-billboards',
    county: County.BROWARD,
    population: '34,670',
    isPrimary: true,
    coordinates: { lat: 26.3100, lng: -80.2378 }
  },
  {
    city: 'Southwest Ranches',
    slug: 'southwest-ranches-billboards',
    county: County.BROWARD,
    population: '7,607',
    isPrimary: true,
    coordinates: { lat: 26.0589, lng: -80.3314 }
  },
  {
    city: 'Deerfield Beach',
    slug: 'deerfield-beach-mobile-advertising',
    county: County.BROWARD,
    population: '87,488',
    isSecondary: true,
    coordinates: { lat: 26.3183, lng: -80.0998 }
  },
  {
    city: 'Pompano Beach',
    slug: 'pompano-beach-mobile-billboards',
    county: County.BROWARD,
    population: '112,046',
    isSecondary: true,
    coordinates: { lat: 26.2378, lng: -80.1248 }
  },
  {
    city: 'Coconut Creek',
    slug: 'coconut-creek-mobile-advertising',
    county: County.BROWARD,
    population: '61,903',
    isSecondary: true,
    coordinates: { lat: 26.2809, lng: -80.1800 }
  },
  {
    city: 'Margate',
    slug: 'margate-billboard-trucks',
    county: County.BROWARD,
    population: '58,796',
    isSecondary: true,
    coordinates: { lat: 26.2445, lng: -80.2064 }
  },
  {
    city: 'Tamarac',
    slug: 'tamarac-mobile-billboards',
    county: County.BROWARD,
    population: '71,897',
    isSecondary: true,
    coordinates: { lat: 26.2128, lng: -80.2497 }
  },
  {
    city: 'Lauderhill',
    slug: 'lauderhill-billboard-advertising',
    county: County.BROWARD,
    population: '72,094',
    isSecondary: true,
    coordinates: { lat: 26.1403, lng: -80.2133 }
  },
  {
    city: 'Cooper City',
    slug: 'cooper-city-billboard-advertising',
    county: County.BROWARD,
    population: '36,896',
    isSecondary: true,
    coordinates: { lat: 26.0570, lng: -80.2717 }
  },

  // Palm Beach County
  {
    city: 'West Palm Beach',
    slug: 'west-palm-beach-mobile-billboards',
    county: County.PALM_BEACH,
    population: '117,415',
    isPrimary: true,
    coordinates: { lat: 26.7153, lng: -80.0534 }
  },
  {
    city: 'Palm Beach',
    slug: 'palm-beach-billboard-advertising',
    county: County.PALM_BEACH,
    population: '9,245',
    isPrimary: true,
    coordinates: { lat: 26.7056, lng: -80.0364 }
  },
  {
    city: 'Boca Raton',
    slug: 'boca-raton-billboard-advertising',
    county: County.PALM_BEACH,
    population: '99,805',
    isPrimary: true,
    coordinates: { lat: 26.3683, lng: -80.1289 }
  },
  {
    city: 'Delray Beach',
    slug: 'delray-beach-mobile-advertising',
    county: County.PALM_BEACH,
    population: '69,451',
    isPrimary: true,
    coordinates: { lat: 26.4615, lng: -80.0728 }
  },
  {
    city: 'Jupiter',
    slug: 'jupiter-billboard-advertising',
    county: County.PALM_BEACH,
    population: '65,524',
    isPrimary: true,
    coordinates: { lat: 26.9342, lng: -80.0942 }
  },
  {
    city: 'Palm Beach Gardens',
    slug: 'palm-beach-gardens-mobile-advertising',
    county: County.PALM_BEACH,
    population: '59,182',
    isPrimary: true,
    coordinates: { lat: 26.8233, lng: -80.1387 }
  },
  {
    city: 'Highland Beach',
    slug: 'highland-beach-advertising',
    county: County.PALM_BEACH,
    population: '3,988',
    isPrimary: true,
    coordinates: { lat: 26.3995, lng: -80.0656 }
  },
  {
    city: 'North Palm Beach',
    slug: 'north-palm-beach-billboard-trucks',
    county: County.PALM_BEACH,
    population: '13,090',
    isPrimary: true,
    coordinates: { lat: 26.8173, lng: -80.0820 }
  },
  {
    city: 'Wellington',
    slug: 'wellington-mobile-billboards',
    county: County.PALM_BEACH,
    population: '65,398',
    isSecondary: true,
    coordinates: { lat: 26.6588, lng: -80.2411 }
  },
  {
    city: 'Boynton Beach',
    slug: 'boynton-beach-billboard-advertising',
    county: County.PALM_BEACH,
    population: '80,380',
    isSecondary: true,
    coordinates: { lat: 26.5253, lng: -80.0664 }
  },
  {
    city: 'Lake Worth Beach',
    slug: 'lake-worth-beach-mobile-billboards',
    county: County.PALM_BEACH,
    population: '37,350',
    isSecondary: true,
    coordinates: { lat: 26.6168, lng: -80.0578 }
  },
  {
    city: 'Royal Palm Beach',
    slug: 'royal-palm-beach-advertising',
    county: County.PALM_BEACH,
    population: '39,615',
    isSecondary: true,
    coordinates: { lat: 26.7084, lng: -80.2309 }
  },
  {
    city: 'Greenacres',
    slug: 'greenacres-billboard-trucks',
    county: County.PALM_BEACH,
    population: '43,990',
    isSecondary: true,
    coordinates: { lat: 26.6276, lng: -80.1353 }
  },
  {
    city: 'Lantana',
    slug: 'lantana-billboard-advertising',
    county: County.PALM_BEACH,
    population: '11,504',
    isSecondary: true,
    coordinates: { lat: 26.5867, lng: -80.0520 }
  },
  {
    city: 'Belle Glade',
    slug: 'belle-glade-billboard-advertising',
    county: County.PALM_BEACH,
    population: '16,868',
    isSecondary: true,
    coordinates: { lat: 26.6845, lng: -80.6675 }
  }
]

// Get all location slugs for sitemap generation
export function getAllLocationSlugs(): string[] {
  return locations.map(location => location.slug)
}

// Get location by slug
export function getLocationBySlug(slug: string): LocationInfo | undefined {
  return locations.find(location => location.slug === slug)
}

// Get locations by county
export function getLocationsByCounty(county: County): LocationInfo[] {
  return locations.filter(location => location.county === county)
}

// Get nearby locations (same county, excluding current)
export function getNearbyLocations(currentSlug: string, limit: number = 5): LocationInfo[] {
  const currentLocation = getLocationBySlug(currentSlug)
  if (!currentLocation) return []

  const sameCountyLocations = locations.filter(location =>
    location.county === currentLocation.county &&
    location.slug !== currentSlug
  )

  // Sort by distance (simplified - in production, use proper geolocation)
  // For now, prioritize primary markets
  return sameCountyLocations
    .sort((a, b) => {
      if (a.isPrimary && !b.isPrimary) return -1
      if (!a.isPrimary && b.isPrimary) return 1
      return 0
    })
    .slice(0, limit)
}

// Get primary (affluent) locations
export function getPrimaryLocations(): LocationInfo[] {
  return locations.filter(location => location.isPrimary)
}

// Get secondary locations
export function getSecondaryLocations(): LocationInfo[] {
  return locations.filter(location => location.isSecondary)
}

// County hub information
export const countyHubs = [
  {
    county: County.MIAMI_DADE,
    slug: 'miami-dade-county',
    name: 'Miami-Dade County',
    description: 'South Florida\'s largest metropolitan area with 34 cities and 2.7 million residents',
    mainCities: ['Miami', 'Miami Beach', 'Coral Gables', 'Aventura', 'Key Biscayne']
  },
  {
    county: County.BROWARD,
    slug: 'broward-county',
    name: 'Broward County',
    description: 'Home to Fort Lauderdale and 31 municipalities with 1.9 million residents',
    mainCities: ['Fort Lauderdale', 'Hollywood', 'Pompano Beach', 'Pembroke Pines', 'Weston']
  },
  {
    county: County.PALM_BEACH,
    slug: 'palm-beach-county',
    name: 'Palm Beach County',
    description: 'Florida\'s third most populous county with 39 cities and 1.5 million residents',
    mainCities: ['West Palm Beach', 'Boca Raton', 'Delray Beach', 'Jupiter', 'Palm Beach']
  }
]

// Calculate distance between two locations (Haversine formula)
export function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 3959 // Radius of Earth in miles
  const dLat = toRad(lat2 - lat1)
  const dLng = toRad(lng2 - lng1)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function toRad(deg: number): number {
  return deg * (Math.PI / 180)
}