# Performance Optimization Guide

## Overview
This document outlines the performance optimizations implemented for the Maximax Advertising website to achieve Lighthouse scores >90 while maintaining GitHub Pages static export compatibility.

## Implemented Optimizations

### 1. Component Lazy Loading
- **Location**: `/app/components/lazy/`
- **Components**: LazyHeroSection, LazyServiceCards, LazyTestimonials
- **Benefits**: Reduced initial bundle size, faster Time to Interactive (TTI)

### 2. Image Optimization
- **OptimizedImage Component**: `/app/lib/performance/optimized-image.tsx`
- **Features**:
  - Responsive sizing with srcset
  - Lazy loading for below-fold images
  - Blur placeholders for better UX
  - WebP format support

### 3. Web Vitals Monitoring
- **Location**: `/app/lib/performance/web-vitals.ts`
- **Metrics Tracked**:
  - LCP (Largest Contentful Paint) < 2.5s
  - FID (First Input Delay) < 100ms
  - CLS (Cumulative Layout Shift) < 0.1
  - FCP (First Contentful Paint) < 1.8s
  - TTFB (Time to First Byte) < 800ms

### 4. Service Worker Caching
- **Location**: `/public/sw.js`
- **Strategies**:
  - Cache First: Images and static assets
  - Network First: HTML pages and API calls
  - Stale While Revalidate: CSS/JS files

### 5. Bundle Optimization
- **Next.js Configuration**:
  - SWC minification enabled
  - Production source maps disabled
  - CSS optimization enabled
  - Compression enabled

### 6. Resource Hints
- **Preconnect**: Google Fonts domains
- **DNS Prefetch**: External resources
- **Preload**: Critical fonts and images

## Performance Metrics

### Before Optimization
- Lighthouse Performance Score: ~60-70
- First Contentful Paint: ~2.5s
- Largest Contentful Paint: ~4.0s
- Total Bundle Size: ~450KB

### After Optimization (Target)
- Lighthouse Performance Score: >90
- First Contentful Paint: <1.8s
- Largest Contentful Paint: <2.5s
- Total Bundle Size: <300KB

## Usage Guide

### Using Lazy Components

```tsx
import { LazyHeroSection } from '@/app/components/lazy/LazyHeroSection'
import { LazyServiceCards } from '@/app/components/lazy/LazyServiceCards'

export default function Page() {
  return (
    <>
      <LazyHeroSection />
      <LazyServiceCards />
    </>
  )
}
```

### Using Optimized Images

```tsx
import { OptimizedImage } from '@/app/lib/performance/optimized-image'

<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero Image"
  width={1200}
  height={600}
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
  priority={true} // For above-fold images
/>
```

### Using Lazy Load Wrapper

```tsx
import { LazyLoad } from '@/app/lib/performance/lazy-load'

<LazyLoad threshold={0.1} rootMargin="100px">
  <ExpensiveComponent />
</LazyLoad>
```

## Development Commands

```bash
# Build with optimization
npm run build

# Analyze bundle size
npm run analyze:bundle

# Run Lighthouse audit
npm run lighthouse

# Development with performance monitoring
npm run dev
```

## Best Practices

### Images
1. Always use responsive sizes
2. Provide width and height to prevent CLS
3. Use priority={true} for above-fold images
4. Prefer WebP format when possible

### Components
1. Lazy load below-fold components
2. Use dynamic imports for route-based splitting
3. Implement loading skeletons for better UX

### Fonts
1. Use font-display: swap
2. Preload critical fonts
3. Subset fonts to reduce size

### Scripts
1. Defer non-critical JavaScript
2. Use async for independent scripts
3. Remove unused dependencies

## Monitoring

### Client-Side Monitoring
Web Vitals are automatically tracked and logged to console in development.

### Production Monitoring
Configure `NEXT_PUBLIC_MONITORING_ENDPOINT` to send metrics to your monitoring service.

## Troubleshooting

### Issue: Images not loading
- Check if service worker is registered
- Verify image paths are correct
- Ensure images are in public directory

### Issue: Slow initial load
- Check bundle size with analyze:bundle
- Verify lazy loading is working
- Review network waterfall in DevTools

### Issue: Layout shifts
- Add explicit dimensions to images
- Reserve space for dynamic content
- Use CSS aspect-ratio for responsive containers

## Future Improvements

1. **Image CDN Integration**
   - Implement Cloudinary or similar for automatic optimization

2. **Edge Caching**
   - Configure Cloudflare for global edge caching

3. **Advanced Code Splitting**
   - Implement route-based prefetching
   - Use React.lazy for component-level splitting

4. **Progressive Enhancement**
   - Add offline support with enhanced service worker
   - Implement background sync for forms

5. **Performance Budget**
   - Set up automated performance testing
   - Implement bundle size limits in CI/CD

## Resources

- [Web Vitals](https://web.dev/vitals/)
- [Next.js Performance](https://nextjs.org/docs/app/building-your-application/optimizing)
- [Lighthouse Documentation](https://developer.chrome.com/docs/lighthouse/)
- [Service Worker API](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)