import React from 'react';
import styled from 'styled-components';
import { scale, mq } from 'utils';

const LinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: inline-block;
  max-width: 75vw;

  & li {
    ${scale(0.25)}
    margin-right: 3rem;
	float: left;

    /* ${mq.mobileWide`
		display: inline-flex;
	`} */

    &:last-child {
      margin-right: 0;
    }
  }
`;

const HomeLinks = props => (
  <LinkList>
    <li>
      <a href="mailto:artem@artemov.io?subject=Services Requested&body= --- Sent from artemov.io">Email</a>
    </li>
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/artem-artemov-6895a527">
        LinkedIn
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/artemartemov/">
        Instagram
      </a>
    </li>
    <li>
      <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/artemartemov">
        Twitter
      </a>
    </li>
  </LinkList>
);

export default HomeLinks;
