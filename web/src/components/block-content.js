import BasePortableText from '@sanity/block-content-to-react';
import React from 'react';
import clientConfig from '../../client-config';
import serializers from './serializers';

const BlockContent = ({ blocks }) => (
  <BasePortableText blocks={blocks} serializers={serializers} {...clientConfig.sanity} />
);

export default BlockContent;
