import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'dummy'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'morgen-studio',
  title: 'Morgen CMS',
  
  projectId,
  dataset,
  
  basePath: '/studio',
  
  plugins: [
    deskTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            // Singletons
            S.listItem()
              .title('Site Instellingen')
              .child(
                S.document()
                  .schemaType('siteSettings')
                  .documentId('siteSettings')
              ),
            S.listItem()
              .title('Hero Sectie')
              .child(
                S.document()
                  .schemaType('hero')
                  .documentId('hero')
              ),
            S.listItem()
              .title('Prijzen')
              .child(
                S.document()
                  .schemaType('pricing')
                  .documentId('pricing')
              ),
            S.divider(),
            // Document lists
            S.documentTypeListItem('testimonial').title('Testimonials'),
            S.documentTypeListItem('faq').title('FAQ'),
            S.documentTypeListItem('feature').title('Feature Vergelijking'),
          ]),
    }),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
