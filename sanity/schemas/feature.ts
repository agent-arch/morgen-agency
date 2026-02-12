import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'feature',
  title: 'Features',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Feature Naam',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'launch',
      title: 'Launch Tier',
      type: 'string',
      description: 'true, false, of specifieke waarde (bijv. "4")',
    }),
    defineField({
      name: 'growth',
      title: 'Growth Tier',
      type: 'string',
      description: 'true, false, of specifieke waarde (bijv. "8")',
    }),
    defineField({
      name: 'scale',
      title: 'Scale Tier',
      type: 'string',
      description: 'true, false, of specifieke waarde (bijv. "Onbeperkt")',
    }),
    defineField({
      name: 'order',
      title: 'Volgorde',
      type: 'number',
      initialValue: 0,
    }),
  ],
  orderings: [
    {
      title: 'Volgorde',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
    },
  },
})
