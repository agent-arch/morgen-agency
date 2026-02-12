import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'pricing',
  title: 'Prijzen',
  type: 'document',
  fields: [
    defineField({
      name: 'sectionTitle',
      title: 'Sectie Titel',
      type: 'string',
      initialValue: 'Eerlijk & transparant',
    }),
    defineField({
      name: 'sectionSubtitle',
      title: 'Sectie Subtitel',
      type: 'text',
      rows: 3,
      initialValue: 'Vast bedrag per maand. Geen percentage van je ad spend — dat zou ons incentiveren om meer te spenderen, niet beter. 2 maanden minimum, daarna maandelijks opzegbaar.',
    }),
    defineField({
      name: 'tiers',
      title: 'Pricing Tiers',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'tier',
          fields: [
            defineField({
              name: 'name',
              title: 'Naam',
              type: 'string',
            }),
            defineField({
              name: 'price',
              title: 'Prijs (€)',
              type: 'number',
            }),
            defineField({
              name: 'description',
              title: 'Beschrijving',
              type: 'string',
            }),
            defineField({
              name: 'features',
              title: 'Features',
              type: 'array',
              of: [{ type: 'string' }],
            }),
            defineField({
              name: 'adSpend',
              title: 'Ad Spend Range',
              type: 'string',
            }),
            defineField({
              name: 'isPopular',
              title: 'Populair (highlight)',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              name: 'ctaText',
              title: 'CTA Tekst',
              type: 'string',
              initialValue: 'Start vandaag →',
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'price',
            },
            prepare({ title, subtitle }) {
              return {
                title,
                subtitle: `€${subtitle}/mnd`,
              }
            },
          },
        }),
      ],
    }),
    defineField({
      name: 'addons',
      title: 'Add-ons',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'addon',
          fields: [
            defineField({
              name: 'name',
              title: 'Naam',
              type: 'string',
            }),
            defineField({
              name: 'price',
              title: 'Prijs',
              type: 'string',
            }),
            defineField({
              name: 'type',
              title: 'Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Per maand', value: 'monthly' },
                  { title: 'Per sessie', value: 'session' },
                  { title: 'Eenmalig', value: 'onetime' },
                ],
              },
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'enterpriseTitle',
      title: 'Enterprise Titel',
      type: 'string',
      initialValue: 'Meer dan €10K ad spend per maand?',
    }),
    defineField({
      name: 'enterpriseDescription',
      title: 'Enterprise Beschrijving',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return { title: 'Pricing Configuratie' }
    },
  },
})
