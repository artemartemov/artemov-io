import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { scale } from 'utils';
import Header from './header';

const GlobalStyle = createGlobalStyle`
  & a {
    color: #0e0fed;
    text-decoration: underline;
    text-decoration-skip: ink;

    &:hover {
      color: #000000;
    }
  }
`;

const LayoutWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 100%;
`;

const Footer = styled.footer`
  ${scale(-0.25)};
  width: 100%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center;

  & p {
    margin-bottom: 1rem;
  }
`;

const Layout = ({ children }) => (
  <LayoutWrapper>
    <GlobalStyle />
    {/* <Header siteTitle={siteTitle} onHideNav={onHideNav} onShowNav={onShowNav} showNav={showNav} /> */}
    {children}
    <Footer>
      <p>
        © {new Date().getFullYear()}, Built with 💛 using <a href="https://www.sanity.io">Sanity</a> &amp;{' '}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </p>
    </Footer>
  </LayoutWrapper>
);

export default Layout;
