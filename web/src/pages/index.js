import React from 'react';
import { graphql } from 'gatsby';

import { GraphQLErrorList, SEO, PortableText, HomeLinks } from 'components';

import Layout from 'containers/layout';

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    homepage: sanityIndexPage {
      title
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const IndexPage = ({ data, errors }) => {
  console.log(data);
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const { site, homepage } = data || {};

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      {homepage._rawBody && <PortableText blocks={homepage._rawBody || []} />}
      <HomeLinks />

      {/* {projectNodes && <ProjectPreviewGrid title="Latest projects" nodes={projectNodes} browseMoreHref="/archive/" />} */}
    </Layout>
  );
};

export default IndexPage;
