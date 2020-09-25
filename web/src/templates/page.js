import React from 'react';
import { graphql } from 'gatsby';

import { GraphQLErrorList, SEO, PortableText } from 'components';

export const query = graphql`
  query PageTemplateQuery($id: String!) {
    route: sanityRoute(id: { eq: $id }) {
      slug {
        current
      }
      page {
        ...PageInfo
      }
    }
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
  }
`;

const Page = (props) => {
  const { data, errors } = props;

  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  const { site } = data || {};

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  const page = data.page || data.route.page;

  const menuItems = page.navMenu && (page.navMenu.items || []);
  const pageTitle = data.route && page.title;

  return (
    <>
      <SEO title={pageTitle} description={site.description} keywords={site.keywords} />
      {page._rawBody && <PortableText blocks={page._rawBody || []} />}
    </>
  );
};

export default Page;
