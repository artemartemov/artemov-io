import React from 'react';
import styled from 'styled-components';
import { mq } from 'utils';

const PageContainerWrapper = styled.div`
  margin: 0 1rem;

  ${mq.tablet`
	max-width: 600px;
	margin: 0 auto;
  `}
`;

const Container = ({ children }) => <PageContainerWrapper>{children}</PageContainerWrapper>;

export default Container;
