import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      disallow: '/',
    },
    // Sitemap disabled until launch
    // sitemap: 'https://heymorgen.agency/sitemap.xml',
  }
}
