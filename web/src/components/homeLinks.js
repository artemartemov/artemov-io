import { graphql, StaticQuery } from 'gatsby';
/** @jsx jsx */
import { jsx } from 'theme-ui';

const homeLinksQuery = graphql`
  query HomeLinksQuery {
    homepage: sanityIndexPage {
      homepageLinks {
        linkText
        linkUrl
      }
    }
  }
`;

const HomeLinks = () => (
  <StaticQuery
    query={homeLinksQuery}
    render={(data) => {
      const homeLinks = (data && data.homepage.homepageLinks) || '';
      return (
        <ul sx={{ variant: 'lists.homepage' }}>
          {homeLinks.map((link) => (
            <li key={link.linkUrl.length}>
              <a rel="noreferrer" target="_blank" href={link.linkUrl}>
                {link.linkText}
              </a>
            </li>
          ))}
        </ul>
      );
    }}
  />
);

export default HomeLinks;
