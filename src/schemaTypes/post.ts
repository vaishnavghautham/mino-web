// src/schemaTypes/post.ts
import { defineField, defineType } from 'sanity'

export const post = defineType({
  name: 'post',
  title: 'Journal Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      title: 'Publish Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Featured Cover Image',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text (SEO)',
          validation: (Rule) => Rule.required(),
        }
      ]
    }),
    defineField({
      name: 'excerpt',
      title: 'Editorial Summary (Excerpt)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: 'body',
      title: 'Article Body',
      type: 'array',
      of: [
        { 
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2 (Section Header)', value: 'h2' },
            { title: 'H3 (Subhead)', value: 'h3' },
            { title: 'Quote', value: 'blockquote' },
          ]
        },
        {
          type: 'image',
          title: 'Inline Image Insert',
          options: { hotspot: true },
          fields: [
            { name: 'caption', type: 'string', title: 'Editorial Caption / Attribution' },
            { name: 'alt', type: 'string', title: 'Alt Text' }
          ]
        }
      ],
    }),
  ],
})