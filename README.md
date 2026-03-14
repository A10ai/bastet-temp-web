# Bastet Hurghada — Website

The public-facing website for **Bastet Hurghada**, the Red Sea's first AI-powered smart apartment hotel.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS with custom brand design tokens
- **i18n:** next-intl (7 languages: EN, DE, RU, IT, PL, CS, AR)
- **Icons:** Lucide React
- **Deployment:** Vercel (recommended)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) — you'll be redirected to `/en/`.

## Project Structure

```
src/
├── app/
│   ├── [locale]/           # i18n route segment
│   │   ├── page.tsx        # Homepage
│   │   ├── apartments/     # Apartments overview + individual types
│   │   ├── facilities/     # Facilities overview + individual pages
│   │   ├── smart-hotel/    # Smart technology story
│   │   ├── sustainability/ # Green credentials
│   │   ├── digital-nomads/ # Long-stay / nomad landing page
│   │   ├── location/       # Map & area guide
│   │   ├── about/          # The Bastet story
│   │   ├── contact/        # Contact form & info
│   │   ├── blog/           # Blog listing + posts
│   │   ├── book/           # Booking placeholder
│   │   ├── privacy/        # Privacy policy
│   │   └── terms/          # Terms of service
│   ├── robots.ts           # robots.txt
│   ├── sitemap.ts          # Auto-generated sitemap
│   └── globals.css         # Tailwind + brand styles
├── components/
│   ├── layout/             # Navbar, Footer, LanguageSwitcher
│   ├── home/               # Hero section
│   ├── shared/             # SectionHeader, FeatureCard
│   └── seo/                # JsonLd structured data
├── lib/
│   ├── navigation.ts       # next-intl navigation utilities
│   ├── seo.ts              # Schema.org generators
│   └── utils.ts            # cn() utility
├── messages/               # Translation JSON files (7 languages)
├── i18n.ts                 # i18n configuration
└── middleware.ts            # Locale detection & routing
```

## Languages

| Code | Language | Status |
|------|----------|--------|
| en   | English  | ✅ Complete |
| de   | Deutsch  | ✅ Complete |
| ru   | Русский  | ✅ Complete |
| it   | Italiano | ✅ Complete |
| pl   | Polski   | ✅ Complete |
| cs   | Čeština  | ✅ Complete |
| ar   | العربية  | ✅ Complete (RTL) |

## Next Steps

- [ ] Add real photography / renders
- [ ] Connect booking engine (replace placeholder)
- [ ] Set up Supabase CMS tables for blog
- [ ] Add PMS admin panel for content management
- [ ] Domain setup (bastethotels.com)
- [ ] Deploy to Vercel
