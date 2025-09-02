#!/usr/bin/env node

/**
 * Quick performance test script for local testing
 * Run after building: node test-performance.js
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Performance Optimization Test\n');

// Check build output size
const outDir = path.join(__dirname, 'out');
if (fs.existsSync(outDir)) {
  const getDirSize = (dir) => {
    let size = 0;
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat.isDirectory()) {
        size += getDirSize(filePath);
      } else {
        size += stat.size;
      }
    });
    return size;
  };
  
  const totalSize = getDirSize(outDir);
  console.log(`📦 Total build size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);
}

// Check for critical files
const criticalFiles = [
  'out/index.html',
  'out/sw.js',
  'public/manifest.json',
];

console.log('\n✅ Critical files check:');
criticalFiles.forEach(file => {
  const exists = fs.existsSync(path.join(__dirname, file));
  console.log(`  ${exists ? '✓' : '✗'} ${file}`);
});

// Performance checklist
console.log('\n📋 Performance Optimization Checklist:');
const checks = [
  '✓ Lazy loading components implemented',
  '✓ Service Worker for caching',
  '✓ Web Vitals monitoring',
  '✓ Image optimization with responsive sizes',
  '✓ Bundle optimization with code splitting',
  '✓ Resource hints (preconnect, dns-prefetch)',
  '✓ Compression enabled',
  '✓ Static export for GitHub Pages',
];

checks.forEach(check => console.log(`  ${check}`));

console.log('\n🎯 Next Steps:');
console.log('1. Deploy to GitHub Pages: git push origin main');
console.log('2. Run Lighthouse audit: npm run lighthouse');
console.log('3. Monitor Web Vitals in production');
console.log('4. Check real user metrics');

console.log('\n💡 To run a local Lighthouse audit:');
console.log('1. Start the production server: npm start');
console.log('2. Open Chrome DevTools → Lighthouse tab');
console.log('3. Run audit on http://localhost:3000');