import React from 'react';
import { graphql } from 'gatsby';

import { GraphQLErrorList, SEO } from 'components';

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
  if (errors) {
    return <GraphQLErrorList errors={errors} />;
  }

  const { site, homepage } = data || {};

  if (!site) {
    throw new Error(
      'Missing "Site settings". Open the studio at http://localhost:3333 and add some content to "Site settings" and restart the development server.'
    );
  }

  return (
    <>
      <SEO title={site.title} description={site.description} keywords={site.keywords} />
      <h1>Artem Artemov is working on design systems at <a href="https://siriusxm.com" target='_blank'>SiriusXM</a></h1>
      <h2>Currently residing in in Denver, Colorado.</h2>
            <p>
            📄<a rel="noreferrer" target="_blank" href="/artem-artemov-resume.pdf"> Resume</a>
            </p>
    </>
  );
};

export default IndexPage;
