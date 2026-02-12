import { client } from './client'
import * as queries from './queries'

// Default content (used when Sanity is not configured)
const defaultContent = {
  settings: {
    siteName: 'Morgen',
    tagline: 'AI-native marketing voor webshops',
    email: 'hoi@heymorgen.agency',
    spotsAvailable: 3,
    spotsMonth: 'februari',
  },
  hero: {
    badge: 'AI-NATIVE AGENCY',
    title: 'Slimmer adverteren.',
    titleAccent: 'Sneller groeien.',
    subtitle: 'Morgen combineert AI met hands-on expertise. Je krijgt de strategie van een senior marketeer én de snelheid van machines die 24/7 optimaliseren.',
    ctaPrimary: 'Start vandaag →',
    ctaSecondary: 'Bekijk prijzen',
    trustText: 'Geen setup fees · Maandelijks opzegbaar · Resultaat binnen 14 dagen',
  },
  pricing: {
    sectionTitle: 'Eerlijk & transparant',
    sectionSubtitle: 'Vast bedrag per maand. Geen percentage van je ad spend — dat zou ons incentiveren om meer te spenderen, niet beter.',
    tiers: [
      {
        name: 'Launch',
        price: 750,
        description: 'Meta + Google Ads beheer. Perfect om professioneel te starten.',
        features: ['Meta + Google Ads', '4 actieve campagnes', 'Wekelijkse rapportage', 'Dedicated AI-agent'],
        adSpend: 'Tot €2.000',
        isPopular: false,
        ctaText: 'Start vandaag →',
      },
      {
        name: 'Growth',
        price: 1250,
        description: 'Volledige funnel. TikTok erbij. Voor serieuze groei.',
        features: ['Meta + Google + TikTok', '8 actieve campagnes', '2× strategiegesprek/mnd', 'Creative productie support'],
        adSpend: '€2K–€5K',
        isPopular: true,
        ctaText: 'Start vandaag →',
      },
      {
        name: 'Scale',
        price: 1750,
        description: 'Alle platformen. Wekelijks contact. Maximale schaal.',
        features: ['Alle platformen', 'Onbeperkte campagnes', 'Wekelijks strategiegesprek', 'Priority support (< 4 uur)'],
        adSpend: '€5K–€10K',
        isPopular: false,
        ctaText: 'Start vandaag →',
      },
    ],
    addons: [
      { name: 'LinkedIn Ads', price: '+€300/mnd', type: 'monthly' },
      { name: 'Extra strategy call', price: '€95/sessie', type: 'session' },
      { name: 'Tracking audit + setup', price: '€250', type: 'onetime' },
    ],
    enterpriseTitle: 'Meer dan €10K ad spend per maand?',
    enterpriseDescription: 'Voor grotere budgetten en complexere setups werken we samen met Nodefy — ons zusterbedrijf met 10+ specialisten.',
  },
  testimonials: [],
  faq: [],
  features: [],
}

export async function getHomepageContent() {
  // Check if Sanity is configured
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  
  if (!projectId) {
    console.log('Sanity not configured, using default content')
    return defaultContent
  }
  
  try {
    const data = await client.fetch(queries.homepageQuery)
    
    // Merge with defaults for any missing data
    return {
      settings: data.settings || defaultContent.settings,
      hero: data.hero || defaultContent.hero,
      pricing: data.pricing || defaultContent.pricing,
      testimonials: data.testimonials || defaultContent.testimonials,
      faq: data.faq || defaultContent.faq,
      features: data.features || defaultContent.features,
    }
  } catch (error) {
    console.error('Error fetching from Sanity:', error)
    return defaultContent
  }
}

export async function getSiteSettings() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  if (!projectId) return defaultContent.settings
  
  try {
    const data = await client.fetch(queries.siteSettingsQuery)
    return data || defaultContent.settings
  } catch {
    return defaultContent.settings
  }
}

export async function getHero() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  if (!projectId) return defaultContent.hero
  
  try {
    const data = await client.fetch(queries.heroQuery)
    return data || defaultContent.hero
  } catch {
    return defaultContent.hero
  }
}

export async function getPricing() {
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  if (!projectId) return defaultContent.pricing
  
  try {
    const data = await client.fetch(queries.pricingQuery)
    return data || defaultContent.pricing
  } catch {
    return defaultContent.pricing
  }
}
