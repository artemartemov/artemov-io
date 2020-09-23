import S from '@sanity/desk-tool/structure-builder';
import PreviewIFrame from './structure/previewIFrame';
import pages from './structure/pages';

const hiddenDocTypes = listItem =>
  !['category', 'person', 'project', 'siteSettings', 'indexPage', 'aboutPage', 'page', 'route'].includes(
    listItem.getId()
  );

export default () =>
  S.list()
    .title('Content')
    .items([
      S.documentListItem()
        .schemaType('siteSettings')
        .title('Site settings')
        .child(
          S.document()
            .schemaType('siteSettings')
            .documentId('siteSettings')
            .views([S.view.form(), PreviewIFrame()])
        ),
      S.documentListItem()
        .title('Frontpage')
        .schemaType('page')
        .child(
          S.document()
            .schemaType('page')
            .documentId('frontpage')
            .views([S.view.form(), PreviewIFrame()])
        ),
      S.listItem()
        .title('Home Page')
        .child(
          S.editor()
            .id('indexPage')
            .schemaType('indexPage')
            .documentId('indexPage')
        ),
      pages,
      ...S.documentTypeListItems().filter(hiddenDocTypes),
    ]);
