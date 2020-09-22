import BlockContent from '@sanity/block-content-to-react';
import React from 'react';
import clientConfig from '../../client-config';
import serializers from './serializers';

const PortableText = ({ blocks }) => (
  <BlockContent blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
);

export default PortableText;
