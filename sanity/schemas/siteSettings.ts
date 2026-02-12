import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Instellingen',
  type: 'document',
  fields: [
    defineField({
      name: 'siteName',
      title: 'Site Naam',
      type: 'string',
      initialValue: 'Morgen',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      initialValue: 'AI-native marketing voor webshops',
    }),
    defineField({
      name: 'email',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'hoi@heymorgen.agency',
    }),
    defineField({
      name: 'phone',
      title: 'Telefoon',
      type: 'string',
    }),
    defineField({
      name: 'linkedIn',
      title: 'LinkedIn URL',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'spotsAvailable',
      title: 'Plekken Beschikbaar',
      type: 'number',
      initialValue: 3,
      description: 'Aantal plekken voor FOMO banner',
    }),
    defineField({
      name: 'spotsMonth',
      title: 'Maand voor Plekken',
      type: 'string',
      initialValue: 'februari',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Site Instellingen' }
    },
  },
})
