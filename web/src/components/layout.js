/** @jsx jsx */
import { jsx } from 'theme-ui';

const Layout = ({ children }) => (
  <div
    sx={{
      variant: 'layout.root',
    }}
  >
    <main>
      {/* <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} /> */}
      {children}
    </main>
    <footer>
      <small>
        © {new Date().getFullYear()}, Built with 💛&nbsp;using <a href="https://www.sanity.io">Sanity</a> &amp;{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </small>
    </footer>
  </div>
);

export default Layout;
