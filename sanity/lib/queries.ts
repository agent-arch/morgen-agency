import { groq } from 'next-sanity'

// Site Settings
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    siteName,
    tagline,
    email,
    phone,
    linkedIn,
    instagram,
    spotsAvailable,
    spotsMonth
  }
`

// Hero Section
export const heroQuery = groq`
  *[_type == "hero"][0] {
    badge,
    title,
    titleAccent,
    subtitle,
    ctaPrimary,
    ctaSecondary,
    trustText
  }
`

// Pricing
export const pricingQuery = groq`
  *[_type == "pricing"][0] {
    sectionTitle,
    sectionSubtitle,
    tiers[] {
      name,
      price,
      description,
      features,
      adSpend,
      isPopular,
      ctaText
    },
    addons[] {
      name,
      price,
      type
    },
    enterpriseTitle,
    enterpriseDescription
  }
`

// Testimonials
export const testimonialsQuery = groq`
  *[_type == "testimonial"] | order(order asc) {
    _id,
    quote,
    author,
    role,
    company,
    image,
    rating,
    featured
  }
`

// FAQ
export const faqQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    question,
    answer,
    category
  }
`

// Features (for comparison table)
export const featuresQuery = groq`
  *[_type == "feature"] | order(order asc) {
    _id,
    name,
    launch,
    growth,
    scale
  }
`

// Get all content for homepage
export const homepageQuery = groq`{
  "settings": ${siteSettingsQuery},
  "hero": ${heroQuery},
  "pricing": ${pricingQuery},
  "testimonials": ${testimonialsQuery},
  "faq": ${faqQuery},
  "features": ${featuresQuery}
}`
