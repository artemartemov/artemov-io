import { graphql } from 'gatsby';

export const PostInfo = graphql`
  fragment PageInfo on SanityPage {
    id
    navMenu {
      ...NavMenu
    }
    _rawBody(resolveReferences: { maxDepth: 10 })
    title
  }
`;
