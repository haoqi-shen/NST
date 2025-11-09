# ArtFusion Landing Page - Deployment Guide

## Overview
This is a complete React-based product landing page for ArtFusion, an AI-powered neural style transfer application.

## Quick Start

### Development
```bash
npm install
npm run dev
```
Access the app at: http://localhost:3000

### Production Build
```bash
npm run build
```
Build output will be in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## Features Implemented

### 1. Navigation Bar
- Fixed header with smooth scroll navigation
- Mobile responsive with hamburger menu
- Links to all main sections: Home, About, Features, Demo, Pricing

### 2. Hero Section
- Large animated gradient title
- Call-to-action buttons
- Animated background effects
- Product tagline and description

### 3. About Section
- Detailed product description
- Four feature cards explaining key capabilities:
  - Deep Neural Networks
  - Precision Control
  - Privacy First
  - Production Ready

### 4. Features Section
- Four main features with icons:
  - 🧠 Neural Style Transfer Core
  - ✨ Artistic Control
  - ⚡ Fast & Local
  - 🖼️ From Photos to Paintings
- Animated hover effects

### 5. Interactive Demo Section
- File upload for content image
- File upload for style image
- Style intensity slider (0-100%)
- Generate Art button
- Reset functionality
- Processing animation
- Note: Currently shows simulation; connect to actual NST model for production

### 6. Pricing Section
- Three pricing tiers: Free, Pro, Enterprise
- Feature lists for each tier
- Call-to-action buttons
- "Most Popular" badge on Pro tier

### 7. Footer
- Company information
- Quick links organized by category:
  - Product
  - Technology
  - Resources
  - Company
- Copyright information

## Technical Details

### Dependencies
- React 19.2.0
- React DOM 19.2.0
- React Router DOM 7.9.5
- Vite 7.2.2
- @vitejs/plugin-react 5.1.0

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile responsive
- Supports screen sizes from 320px to 4K

### Performance
- Production build size: ~205KB (gzipped: ~64KB)
- CSS size: ~11KB (gzipped: ~2.8KB)
- Optimized with Vite for fast loading

## Deployment Options

### Static Hosting (Recommended)
Deploy the `dist/` folder to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Cloudflare Pages

### Example: Vercel Deployment
```bash
npm install -g vercel
npm run build
vercel --prod
```

### Example: Netlify Deployment
```bash
npm run build
netlify deploy --prod --dir=dist
```

## Customization

### Colors
Edit CSS variables in `src/styles/index.css`:
```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #ec4899;
  /* ... more colors */
}
```

### Content
- Hero: Edit `src/components/Hero.jsx`
- About: Edit `src/components/About.jsx`
- Features: Edit `src/components/Features.jsx`
- Demo: Edit `src/components/Demo.jsx`
- Pricing: Edit `src/components/Pricing.jsx`
- Footer: Edit `src/components/Footer.jsx`

### Demo Integration
To connect the demo to your actual NST model:
1. Open `src/components/Demo.jsx`
2. Replace the `simulateProcessing` function with your API call
3. Update the result display logic

## Security

### Vulnerability Scan Results
✅ No vulnerabilities found in dependencies
✅ CodeQL security scan passed with 0 alerts

### Best Practices Implemented
- Input validation for file uploads
- CSP-ready (no inline scripts)
- HTTPS recommended for production
- Local file processing (privacy-first)

## Maintenance

### Updating Dependencies
```bash
npm update
npm audit
```

### Testing
```bash
npm run build
npm run preview
```
Test all sections and interactive elements.

## Support

For issues or questions:
- Check the README.md for basic usage
- Review component files in `src/components/`
- Refer to [React documentation](https://react.dev)
- Refer to [Vite documentation](https://vitejs.dev)

## License
MIT
