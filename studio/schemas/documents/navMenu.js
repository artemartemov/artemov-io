export default {
  type: 'document',
  name: 'navigationMenu',
  title: 'Menus',
  fields: [
    {
      type: 'string',
      name: 'title',
    },
    {
      type: 'array',
      name: 'items',
      of: [{ type: 'cta' }],
    },
  ],
};
