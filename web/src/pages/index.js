import React from 'react';
import { graphql } from 'gatsby';

import { Container, GraphQLErrorList, SEO, Layout, BlockContent, HomeLinks } from 'components';

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
      description
      keywords
    }
    homepage: sanityIndexPage {
      title
      _rawBody
    }
  }
`;

const IndexPage = ({ data, errors }) => {
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
      <Container>
        {homepage._rawBody && <BlockContent blocks={homepage._rawBody || []} />}
        <HomeLinks />

        {/* {projectNodes && <ProjectPreviewGrid title="Latest projects" nodes={projectNodes} browseMoreHref="/archive/" />} */}
      </Container>
    </Layout>
  );
};

export default IndexPage;
