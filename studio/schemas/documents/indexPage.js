export default {
  name: 'indexPage',
  type: 'document',
  title: 'Homepage',
  __experimental_actions: [/* 'create', */ 'update' /* 'delete', */, 'publish'],
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      //   readOnly: 'true',
    },
    {
      name: 'heroImage',
      type: 'figure',
      title: 'Index Hero Image',
      description: 'Please provide image that will be used on the homepage',
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
      media: 'heroImage',
      subtitle: '/',
    },
    prepare({ title = 'No title', media, subtitle = '/' }) {
      return {
        title,
        media,
        subtitle,
      };
    },
  },
};
