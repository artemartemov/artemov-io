export default {
  name: 'page',
  type: 'document',
  title: 'Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'navMenu',
      type: 'reference',
      title: 'Navigation menu',
      // weak: true, // Uncomment if you want to be able to delete navigation even though pages refer to it
      to: [{ type: 'navigationMenu' }],
      description: 'Which nav menu should be shown, if any',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'portableText',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: '/',
    },
    prepare({ title = 'No title', subtitle = `/${title}` }) {
      return {
        title,
        subtitle,
      };
    },
  },
};
