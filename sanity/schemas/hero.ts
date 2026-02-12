import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'hero',
  title: 'Hero Sectie',
  type: 'document',
  fields: [
    defineField({
      name: 'badge',
      title: 'Badge Tekst',
      type: 'string',
      initialValue: 'AI-NATIVE AGENCY',
    }),
    defineField({
      name: 'title',
      title: 'Titel',
      type: 'string',
      initialValue: 'Slimmer adverteren.',
    }),
    defineField({
      name: 'titleAccent',
      title: 'Titel Accent (gekleurd)',
      type: 'string',
      initialValue: 'Sneller groeien.',
    }),
    defineField({
      name: 'subtitle',
      title: 'Subtitel',
      type: 'text',
      rows: 3,
      initialValue: 'Morgen combineert AI met hands-on expertise. Je krijgt de strategie van een senior marketeer én de snelheid van machines die 24/7 optimaliseren.',
    }),
    defineField({
      name: 'ctaPrimary',
      title: 'Primaire CTA Tekst',
      type: 'string',
      initialValue: 'Start vandaag →',
    }),
    defineField({
      name: 'ctaSecondary',
      title: 'Secundaire CTA Tekst',
      type: 'string',
      initialValue: 'Bekijk prijzen',
    }),
    defineField({
      name: 'trustText',
      title: 'Trust Tekst',
      type: 'string',
      initialValue: 'Geen setup fees · Maandelijks opzegbaar · Resultaat binnen 14 dagen',
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Hero Sectie' }
    },
  },
})
