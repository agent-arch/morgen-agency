import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/studio/', '/intern/', '/api/'],
    },
    sitemap: 'https://heymorgen.agency/sitemap.xml',
  }
}
