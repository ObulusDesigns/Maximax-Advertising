# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## CRITICAL CONTEXT

**Production Site**: https://maximaxmobileadvertising.com (LIVE - handle with care)  
**Business**: Mobile billboard trucks with 4K LED displays serving South Florida  
**Tech Stack**: Next.js 14.2.3 (App Router), TypeScript (strict), Tailwind CSS, GitHub Pages static export  

## ESSENTIAL COMMANDS

```bash
# Development
npm run dev          # Start dev server on localhost:3000 (hot reload enabled)
npm run lint         # Check for code issues (must pass before push)
npm run build        # Build static export + analyze bundle (ALWAYS run before push)

# Testing production build locally
npm run build && npx serve out -p 3001  # Test static export before deployment

# Performance analysis
npm run lighthouse   # Generate Lighthouse report for production site
npm run analyze:bundle  # Check bundle sizes (runs during build)

# Deployment (automatic on push to main)
git push origin main  # Triggers GitHub Actions deployment pipeline
```

## DEPLOYMENT CONSTRAINTS (GITHUB PAGES)

**CRITICAL**: Site uses `output: 'export'` for static generation. This means:
- NO server-side features (getServerSideProps, API routes, middleware)
- NO dynamic routes without generateStaticParams
- NO image optimization (unoptimized: true)
- Trailing slashes REQUIRED for proper routing
- .nojekyll file prevents Jekyll processing
- CNAME file in public/ for custom domain (DO NOT DELETE)

**Deployment Flow**:
1. Push to main branch
2. GitHub Actions builds static export to /out
3. Deploys to GitHub Pages automatically
4. Live at maximaxmobileadvertising.com (~5 min)

## PROJECT ARCHITECTURE

```
app/                          # Next.js 14 App Router
├── components/              # Shared components (6 key components)
│   ├── LocationPageTemplate        # For city/location pages (SEO-optimized)
│   ├── ServicePageTemplate         # For service offerings
│   ├── MarketPageTemplate          # For industry-specific pages
│   ├── RelatedLocationsWidget      # Phase 5: Sidebar with nearby locations
│   ├── ServicesAvailableSection    # Phase 5: Shows 6 services in location pages
│   └── LocationsWeServeSection     # Phase 5: Shows 25+ locations in service pages
├── locations/              # 50+ location pages
│   ├── florida/[slug]/    # Dynamic route for cities
│   └── [city-name]/       # Static location pages
├── markets/               # Industry-specific landing pages
├── services/              # Service offerings
├── blog/                  # SEO blog posts
├── layout.tsx            # Root layout with metadata
├── page.tsx              # Homepage
└── sitemap.ts            # Dynamic sitemap generation

public/
├── CNAME                 # GitHub Pages domain (REQUIRED)
├── images/               # Static assets
└── robots.txt           # SEO configuration

.github/workflows/
└── deploy.yml           # GitHub Pages deployment (Node 20)
```

## DEVELOPMENT WORKFLOW

### Before Making Changes
1. Check current deployment status: https://maximaxmobileadvertising.com
2. Run `npm run dev` to start local development
3. Review existing patterns in similar files (use templates)

### When Adding New Pages
1. Use appropriate template component (Location/Service/Market)
2. Follow existing SEO structure (check any location page for pattern)
3. Update `app/sitemap.ts` to include new route
4. Add schema markup following existing patterns
5. Test with `npm run build` before pushing

### Before Pushing Code
```bash
npm run lint        # Fix any linting errors
npm run build       # Ensure static export works
# Check /out directory has your changes
git push origin main  # Deploy to production
```

## KEY PATTERNS & CONVENTIONS

### Component Templates
- **LocationPageTemplate**: Local SEO, service areas, testimonials
- **ServicePageTemplate**: Service details, pricing, FAQs
- **MarketPageTemplate**: Industry benefits, ROI, case studies
- **RelatedLocationsWidget**: Sidebar component showing 4 nearby locations with distance
- **ServicesAvailableSection**: Grid showing all 6 services available in a city
- **LocationsWeServeSection**: Shows 25+ locations organized by county for service pages

### SEO Implementation
- Every page needs: title, description, OG tags, schema markup
- Location pages: LocalBusiness + Service schema
- Service pages: Service + FAQ schema
- Use dynamic sitemap.ts (auto-generates from routes)

### TypeScript Conventions
- Strict mode enabled (no any types)
- Use type inference where possible
- Export types from component files
- Path alias: `@/*` maps to root

### Styling Guidelines
- Tailwind CSS utility-first approach
- Use `clsx` for conditional classes
- Framer Motion for animations
- Mobile-first responsive design

## COMMON TASKS

### Add a New Location Page
```typescript
// 1. Create app/locations/florida/[city-name]/page.tsx
// 2. Use LocationPageTemplate (see existing locations)
// 3. Include local schema markup
// 4. Update sitemap.ts
```

### Add a New Service
```typescript
// 1. Create app/services/[service-slug]/page.tsx
// 2. Use ServicePageTemplate
// 3. Add to services data file
// 4. Update navigation if needed
```

### Update SEO Metadata
```typescript
// In page.tsx:
export const metadata: Metadata = {
  title: 'Page Title | Maximax Advertising',
  description: '155-160 character description',
  openGraph: { /* OG tags */ },
}
```

## CURRENT PROJECT STATUS

### Live Features (163 pages)
- Core pages (Home, About, Services, Contact)
- 50+ location pages (Miami-Dade, Broward, Palm Beach counties)
- 13+ market/industry pages
- 24+ service variation pages (city-specific services)
- Blog with 6+ SEO articles
- Schema markup implementation (Organization, LocalBusiness, Service, FAQ, Article)
- Mobile-responsive design
- Phase 5 cross-linking components (internal SEO)

### Content Policy
- **NEVER add fake testimonials, reviews, or client logos**
- All social proof must be real and verifiable
- No placeholder content like "Client 1, Client 2..." or fake Google reviews
- When adding testimonials/reviews, they must be from actual clients with permission

### Known Issues
- Redirects in next.config.js don't work on static export
- Some images need WebP conversion for performance

### Completed Phases
- **Phase 1-4**: Core pages, location pages, market pages, schema markup
- **Phase 5**: Cross-linking & Internal SEO (RelatedLocationsWidget, ServicesAvailableSection, LocationsWeServeSection)

## PERFORMANCE TARGETS

- Lighthouse Score: 90+ (mobile and desktop)
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Total Bundle Size: <200KB (check with npm run build)

## DEBUGGING TIPS

### Build Failures
- Check for server-side features (not supported)
- Ensure all dynamic routes have generateStaticParams
- Verify trailing slashes in links
- Check for missing await keywords in async functions

### Deployment Issues
- Verify CNAME file exists in public/
- Check GitHub Actions logs for errors
- Ensure Node version compatibility (>=18.0.0)
- Test locally with `npm run build && npx serve out`

### SEO Problems
- Validate schema markup at schema.org/validator
- Check meta tags with browser dev tools
- Verify sitemap.xml generation
- Test with Google's Rich Results Test

## BUSINESS CONTEXT

**Company**: Maximax Advertising  
**Services**: Mobile LED billboard trucks, GPS tracking, campaign management  
**Coverage**: Miami-Dade, Broward, Palm Beach counties  
**Differentiators**: 4K displays, real-time GPS, data analytics  
**Phone**: (561) 720-0521  

## IMPORTANT WARNINGS

1. **NEVER** remove CNAME from public/ (breaks custom domain)
2. **NEVER** change `output: 'export'` (breaks GitHub Pages)
3. **NEVER** use server-side Next.js features
4. **ALWAYS** test with `npm run build` before pushing
5. **ALWAYS** use trailing slashes in internal links
6. **REMEMBER** this is a production site with real traffic

## INTERNAL LINKING STRATEGY (PHASE 5)

### Cross-Linking Components
Phase 5 introduced three components to increase internal link equity from ~500 to 2,500+ links:

1. **RelatedLocationsWidget** (sidebar, location pages)
   - Shows 4 nearby locations with distance
   - Links to county hub page
   - Improves local SEO clustering

2. **ServicesAvailableSection** (location pages)
   - Shows all 6 services available in that city
   - Creates 6 service page links per location
   - Placed before pricing CTA

3. **LocationsWeServeSection** (service pages)
   - Shows 25+ locations organized by county
   - Creates 25+ location page links per service
   - Improves service page authority

**Example Implementation**: See `/app/locations/wynwood-mobile-billboards/page.tsx`

---

*Last updated: October 12, 2025*
*For detailed SEO tracking, see: `/docs/SEO-IMPLEMENTATION.md`*