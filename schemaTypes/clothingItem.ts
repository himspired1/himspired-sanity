import {defineType, defineField} from 'sanity'

export const clothingItemType = defineType({
  name: 'clothingItem',
  title: 'Clothing Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title'},
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'size',
      title: 'Size(s)',
      type: 'array',
      of: [{type: 'string'}],
      description: 'Available sizes (e.g., S, M, L, XL)',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'availability',
      title: 'In Stock?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'stock',
      title: 'Items in Stock',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    // --- NEW RESERVATIONS ARRAY FIELD ---
    defineField({
      name: 'reservations',
      title: 'Reservations',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'sessionId', type: 'string', title: 'Session ID' },
            { name: 'quantity', type: 'number', title: 'Quantity' },
            { name: 'reservedUntil', type: 'datetime', title: 'Reserved Until' }
          ]
        }
      ],
      description: 'Tracks all active reservations for this product.',
    }),
    // --- END NEW FIELD ---
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Thrift', value: 'thrift'},
          {title: 'Suits', value: 'suits'},
          {title: 'Senetors', value: 'senetors'},
          {title: 'Trousers', value: 'trousers'},
          {title: 'Girlies', value: 'girlies'},
        ],
        layout: 'dropdown',
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Additional Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    }),
  ],
})