import S from '@sanity/desk-tool/structure-builder';
import MdSettings from 'react-icons/lib/md/settings';

const hiddenDocTypes = listItem =>
  !['category', 'person', 'project', 'siteSettings', 'indexPage'].includes(listItem.getId());

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home Page')
        .child(
          S.editor()
            .id('indexPage')
            .schemaType('indexPage')
            .documentId('indexPage')
        ),
      S.listItem()
        .title('Settings')
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        )
        .icon(MdSettings),
      // S.listItem()
      //   .title('Projects')
      //   .schemaType('project')
      //   .child(S.documentTypeList('project').title('Projects')),
      // S.listItem()
      //   .title('People')
      //   .schemaType('person')
      //   .child(S.documentTypeList('person').title('People')),
      // S.listItem()
      //   .title('Categories')
      //   .schemaType('category')
      //   .child(S.documentTypeList('category').title('Categories')),
      // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
