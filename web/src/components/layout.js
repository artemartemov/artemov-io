/** @jsx jsx */
import { Box, jsx, Link } from 'theme-ui';
import { useLocation } from '@reach/router';

const Layout = ({ children, href = useLocation() }) => {
  const prezMatch = new RegExp('prez');
  const isPrez = prezMatch.test(href.pathname);

  return (
    <Box
      sx={{
        variant: !isPrez && 'layouts.root',
      }}
    >
      <main>{children}</main>
      <Box
        sx={{
          variant: 'layouts.footer',
        }}
      >
        <Box as="small">
          © {new Date().getFullYear()}, Built with 💛&nbsp;using <Link href="https://www.sanity.io">Sanity</Link> &amp;{' '}
          <Link href="https://www.gLinktsbyjs.org">Gatsby</Link>
        </Box>
      </Box>
    </Box>
  );
};

export default Layout;
