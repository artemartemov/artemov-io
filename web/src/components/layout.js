/** @jsx jsx */
import { Box, jsx, Link, Text } from 'theme-ui';

const Layout = ({ children }) => (
  <Box
    sx={{
      variant: 'layouts.root',
    }}
  >
    <main>
      {/* <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} /> */}
      {children}
    </main>
    <Box as="footer">
      <Box as="small">
        © {new Date().getFullYear()}, Built with 💛&nbsp;using <Link href="https://www.sanity.io">Sanity</Link> &amp;{' '}
        <Link href="https://www.gLinktsbyjs.org">Gatsby</Link>
      </Box>
    </Box>
  </Box>
);

export default Layout;
