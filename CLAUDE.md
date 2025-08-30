# claudeMd
# MAXIMAX ADVERTISING - PROJECT DOCUMENTATION

## PROJECT OVERVIEW
Maximax Advertising is a fully-deployed mobile billboard advertising website built with Next.js 14, TypeScript, and Tailwind CSS. The site is successfully running on GitHub Pages at maximaxmobileadvertising.com.

**Business Focus:** Mobile billboard trucks with 4K LED displays serving South Florida (Miami-Dade, Broward, Palm Beach counties)

**Project Status:** PRODUCTION - Site is live with 39+ SEO-optimized pages

## CRITICAL DEPLOYMENT PROCESS

### GitHub Pages Deployment (WORKING)
The site deploys automatically via GitHub Actions on push to main branch:

```bash
# Local development
npm run dev

# Build for production (creates static export)
npm run build

# The build command automatically:
# 1. Builds Next.js static export
# 2. Outputs to /out directory
# 3. GitHub Actions handles deployment

# Manual deployment trigger
git push origin main
```

**Deployment URL:** https://maximaxmobileadvertising.com
**GitHub Actions:** `.github/workflows/deploy.yml` handles automatic deployment
**Domain:** Custom domain via CNAME file in public/

### Important Deployment Notes
- Site uses `output: 'export'` in next.config.js for static generation
- Images are unoptimized for static export compatibility
- Trailing slashes enabled for proper GitHub Pages routing
- .nojekyll file prevents Jekyll processing
- CNAME file must remain in public/ for custom domain

## PROJECT ARCHITECTURE

### Directory Structure
```
Maximax-Advertising/
├── app/                    # Next.js 14 app directory
│   ├── components/        # Reusable React components
│   │   ├── CTASection.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── HeroSection.tsx
│   │   ├── LocationPageTemplate.tsx
│   │   ├── MarketPageTemplate.tsx
│   │   ├── ServicePageTemplate.tsx
│   │   └── ...
│   ├── locations/         # Location-specific pages (11+ cities)
│   ├── markets/           # Industry-specific pages (12+ markets)
│   │   └── miami/        # Miami-specific market pages
│   ├── services/          # Service pages (6+ services)
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Homepage
│   └── sitemap.ts        # Dynamic sitemap generation
├── public/
│   ├── CNAME             # GitHub Pages custom domain
│   ├── images/           # Static images
│   ├── robots.txt        # SEO robots file
│   └── sitemap.xml       # Static sitemap backup
├── docs/
│   └── SEO-IMPLEMENTATION.md  # SEO tracking document
└── .github/
    └── workflows/
        └── deploy.yml    # GitHub Pages deployment
```

### Tech Stack
- **Framework:** Next.js 14.2.3 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11.18
- **Icons:** Heroicons, Lucide React
- **Deployment:** GitHub Pages (static export)

## DEVELOPMENT COMMANDS

```bash
# Install dependencies
npm install

# Development server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Lint check
npm run lint

# Start production server (local testing)
npm start

# Export static site (used in build)
npm run export
```

## SEO IMPLEMENTATION STATUS

### Completed (39+ Pages)
- **Core Pages:** Home, About, Services, Markets, Blog, Contact
- **Location Pages:** 11 cities across South Florida
  - Miami-Dade: Miami, Miami Beach, Aventura, Coral Gables, Homestead, Kendall
  - Broward: Fort Lauderdale, Hollywood, Pembroke Pines
  - Palm Beach: Boca Raton, Delray Beach, West Palm Beach
- **Service Pages:** 6 specialized services
  - Digital Billboard Trucks, Miami-Dade Mobile Billboards, OOH Advertising
  - Outdoor Advertising South Florida, Miami Advertising Alternatives
  - Mobile Billboard vs Car Wrap comparison
- **Market Pages:** 12 industry-specific pages
  - Events: Art Basel, Ultra Music Festival
  - Industries: Real Estate, Restaurants, Nightclubs
  - Areas: Wynwood, Brickell, Ocean Drive, South Beach
  - Demographics: Hispanic Market, Local Business

### SEO Features Implemented
- **Technical SEO:**
  - XML sitemap (dynamic generation via sitemap.ts)
  - Robots.txt configured
  - Schema markup (LocalBusiness, Service, FAQ, BreadcrumbList)
  - Meta tags optimization (title, description, OG, Twitter)
  - Canonical URLs
  - Mobile-responsive design
  
- **Performance:**
  - Static site generation for fast loading
  - Image optimization with Next.js Image component
  - Lazy loading implemented
  - Minimal JavaScript bundle

### Keywords Targeted
- Primary: mobile billboard advertising Florida, LED truck advertising
- Local: mobile billboards Miami, billboard trucks Palm Beach
- Service: GPS tracking, 4K displays, campaign management

## KEY CONFIGURATION FILES

### next.config.js
- Static export mode (`output: 'export'`)
- Trailing slashes enabled
- Image optimization disabled for static export
- Security headers configured

### tsconfig.json
- Strict TypeScript mode enabled
- Path alias: `@/*` maps to root
- Next.js plugin configured

### package.json
- Node.js requirement: >=18.0.0
- Build command includes .nojekyll creation

## COMPONENT TEMPLATES

The project uses template components for consistency:

### LocationPageTemplate
Used for all city/location pages with:
- Local SEO optimization
- Service area information
- Local testimonials
- Contact CTAs

### ServicePageTemplate
Used for service-specific pages with:
- Service descriptions
- Pricing information
- Feature lists
- FAQ sections

### MarketPageTemplate
Used for industry/market pages with:
- Industry-specific benefits
- Case studies
- ROI information
- Targeted CTAs

## CURRENT GIT STATUS
- Branch: main
- Untracked directories indicate ongoing expansion:
  - New location pages being added
  - New service variations
  - Miami market segments

## IMPORTANT NOTES

### Do's
- Always run `npm run build` before pushing to verify static export works
- Keep CNAME file in public/ directory
- Use trailing slashes in internal links
- Follow existing component templates for new pages
- Update sitemap.ts when adding new pages

### Don'ts
- Don't remove .nojekyll file from public/
- Don't change `output: 'export'` in next.config.js
- Don't use server-side features (they won't work on GitHub Pages)
- Don't forget to test locally with production build

## PROJECT COMPLETION STATUS

### Completed
- Full website architecture and design
- 39+ SEO-optimized pages
- GitHub Pages deployment pipeline
- Custom domain configuration
- Mobile-responsive design
- Contact forms and CTAs
- Schema markup implementation
- Google Search Console integration

### In Progress (Based on Git Status)
- Additional location pages for smaller cities
- More service variation pages
- Miami-specific market segments
- Content expansion for existing pages

### Future Enhancements (From SEO-IMPLEMENTATION.md)
- Blog content calendar implementation
- Link building campaign
- Local citations and directory submissions
- Google Business Profile setup
- Review collection system
- A/B testing and conversion optimization

## QUICK START FOR NEW DEVELOPERS

1. Clone repository
2. Run `npm install`
3. Run `npm run dev` for development
4. Make changes following existing patterns
5. Test with `npm run build` before pushing
6. Push to main branch for automatic deployment

## CONTACT & BUSINESS INFO
- **Phone:** (561) 720-0521
- **Website:** maximaxmobileadvertising.com
- **Service Areas:** Miami-Dade, Broward, Palm Beach Counties
- **Services:** Mobile Billboard Trucks, LED Digital Displays, GPS Tracking

---
*This CLAUDE.md provides essential context for AI assistants working on the Maximax Advertising codebase.*