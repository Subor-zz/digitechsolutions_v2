# Digitech Solutions Website

Official website for Digitech Solutions - IT consultancy and full-stack development services for startups and SMBs.

## 🌐 Live Site

- **Production**: [https://digitechsolutions.nl](https://digitechsolutions.nl)
- **Vercel**: [digitech-solutions.vercel.app](https://digitech-solutions.vercel.app)

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel

## 📁 Project Structure

```
website/
├── app/
│   ├── components/      # Reusable components (ScrollReveal)
│   ├── diensten/         # Service pages (fractional CTO, consulting, etc.)
│   ├── over-mij/         # About page
│   ├── tarieven/         # Pricing page
│   ├── contact/          # Contact page
│   ├── globals.css       # Global styles & animations
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Homepage
├── public/               # Static assets (images, favicon)
├── tailwind.config.ts    # Tailwind configuration
└── next.config.mjs      # Next.js configuration
```

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run production build locally
npm start
```

## 📄 Pages

- **/**** - Homepage with services overview, expertise, pricing, and CTA
- **/**diensten** - Services overview
- **/**diensten/fractional-cto** - Fractional CTO services
- **/**diensten/applicatieconsultatie** - IT consulting services
- **/**diensten/full-stack-development** - Development services
- **/**diensten/projectmanagement** - Project management services
- **/**diensten/product-business-consultatie** - Product consulting services
- **/**diensten/support-itsm** - ITSM services
- **/**over-mij** - About page
- **/**tarieven** - Pricing page
- **/**contact** - Contact page

## 🎨 Features

- Responsive design (mobile-first)
- Scroll reveal animations with progressive enhancement
- SEO-optimized with proper meta tags
- Accessible components (ARIA labels, semantic HTML)
- Optimized performance (static generation where possible)

## 📝 License

© {new Date().getFullYear()} Digitech Solutions. All rights reserved.
