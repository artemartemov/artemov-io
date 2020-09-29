/** @jsx jsx */
import { jsx } from 'theme-ui';

const HomeLinks = () => (
  <ul
    sx={{
      variant: 'lists.homepage',
    }}
  >
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
  </ul>
);

export default HomeLinks;
