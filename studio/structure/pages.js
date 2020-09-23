import S from '@sanity/desk-tool/structure-builder';
import PreviewIFrame from './previewIFrame';

export default S.listItem()
  .title('Page Builder')
  .child(
    S.list()
      .title('Page Builder')
      .items([
        S.listItem()
          .title('Navigation Menus')
          .schemaType('navigationMenu')
          .child(S.documentTypeList('navigationMenu').title('Navigation Menus')),
        S.listItem()
          .title('Pages')
          .schemaType('page')
          .child(
            S.documentTypeList('page')
              .title('Pages')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('page')
                  .views([S.view.form(), PreviewIFrame()])
              )
            // S.documentList('page')
            //   .title('Pages')
            //   .menuItems(S.documentTypeList('page').getMenuItems())
            //   .filter('_type == "page"')
          ),
        S.listItem()
          .title('Routes')
          .schemaType('route')
          .child(
            S.documentTypeList('route')
              .title('Routes')
              .child(documentId =>
                S.document()
                  .documentId(documentId)
                  .schemaType('route')
                  .views([S.view.form(), PreviewIFrame()])
              )
          ),
      ])
  );
